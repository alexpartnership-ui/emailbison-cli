import type { BisonClient, BisonRequestOptions } from './types.js';
import type { AuthContext } from './auth.js';
import { classifyHttpError, RateLimitError } from './errors.js';

const DEFAULT_TIMEOUT_MS = 30_000;
const MAX_RETRIES = 3;
const INITIAL_BACKOFF_MS = 1_000;

export function createClient(auth: AuthContext): BisonClient {
  async function request(opts: BisonRequestOptions): Promise<unknown> {
    const url = buildUrl(auth.baseUrl, opts.path, opts.query);

    const headers: Record<string, string> = {
      Authorization: `Bearer ${auth.apiKey}`,
      Accept: 'application/json',
    };

    let bodyStr: string | undefined;
    if (opts.body && Object.keys(opts.body).length > 0) {
      headers['Content-Type'] = 'application/json';
      bodyStr = JSON.stringify(opts.body);
    }

    let lastError: Error | undefined;
    for (let attempt = 0; attempt <= MAX_RETRIES; attempt++) {
      try {
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), DEFAULT_TIMEOUT_MS);

        const res = await fetch(url, {
          method: opts.method,
          headers,
          body: bodyStr,
          signal: controller.signal,
        });

        clearTimeout(timeout);

        if (res.ok) {
          const text = await res.text();
          if (!text) return { success: true };
          try {
            return JSON.parse(text);
          } catch {
            return { data: text };
          }
        }

        const errorBody = await res.text();

        if (res.status === 429 || res.status >= 500) {
          lastError = classifyHttpError(res.status, errorBody);
          if (attempt < MAX_RETRIES) {
            const retryAfter =
              res.status === 429
                ? parseRetryAfter(res.headers.get('Retry-After'))
                : undefined;
            const backoff = retryAfter ?? INITIAL_BACKOFF_MS * Math.pow(2, attempt);
            await sleep(backoff);
            continue;
          }
        }

        throw classifyHttpError(res.status, errorBody);
      } catch (err) {
        if (err instanceof RateLimitError && attempt < MAX_RETRIES) {
          lastError = err;
          await sleep(INITIAL_BACKOFF_MS * Math.pow(2, attempt));
          continue;
        }
        if (err instanceof Error && err.name === 'AbortError') {
          lastError = new Error(`Request timed out after ${DEFAULT_TIMEOUT_MS}ms`);
          if (attempt < MAX_RETRIES) {
            await sleep(INITIAL_BACKOFF_MS * Math.pow(2, attempt));
            continue;
          }
        }
        throw err;
      }
    }

    throw lastError ?? new Error('Request failed after retries');
  }

  async function paginate(opts: BisonRequestOptions, maxPages = 50): Promise<unknown> {
    const allData: unknown[] = [];
    let currentPage = 1;
    let truncated = false;
    let total: number | undefined;

    for (;;) {
      // per_page is a request; instances may ignore or cap it. Explicit query value wins.
      const query = { per_page: 100, ...opts.query, page: currentPage };
      const result = (await request({ ...opts, query })) as Record<string, unknown>;

      if (Array.isArray(result?.data)) {
        allData.push(...result.data);
      } else if (result?.data !== undefined) {
        return result;
      }

      const meta = result?.meta as Record<string, number> | undefined;
      if (meta?.total !== undefined) total = meta.total;
      if (!meta || currentPage >= (meta.last_page ?? currentPage)) break;
      if (currentPage >= maxPages) {
        truncated = true;
        break;
      }

      currentPage++;
    }

    const out: Record<string, unknown> = { data: allData, pages_fetched: currentPage };
    if (total !== undefined) out.total = total;
    if (truncated) out.truncated = true;
    return out;
  }

  return { request, paginate };
}

function buildUrl(baseUrl: string, path: string, query?: Record<string, unknown>): string {
  const url = new URL(path, baseUrl);
  if (query) {
    for (const [key, value] of Object.entries(query)) {
      if (value !== undefined && value !== null) {
        url.searchParams.set(key, String(value));
      }
    }
  }
  return url.toString();
}

function parseRetryAfter(header: string | null): number | undefined {
  if (!header) return undefined;
  const seconds = parseInt(header, 10);
  return isNaN(seconds) ? undefined : seconds * 1000;
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
