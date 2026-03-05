import { loadConfig } from './config.js';
import { AuthError } from './errors.js';

export interface AuthContext {
  apiKey: string;
  baseUrl: string;
}

const DEFAULT_BASE_URL = 'https://send.topoffunnel.com';

export function resolveAuth(opts?: { apiKey?: string; baseUrl?: string }): AuthContext {
  const apiKey =
    opts?.apiKey ??
    process.env.EMAILBISON_API_KEY ??
    loadConfig().api_key;

  if (!apiKey) {
    throw new AuthError(
      'No API key found. Provide --api-key, set EMAILBISON_API_KEY, or run "bison login".',
    );
  }

  const baseUrl =
    opts?.baseUrl ??
    process.env.EMAILBISON_BASE_URL ??
    loadConfig().base_url ??
    DEFAULT_BASE_URL;

  const normalized = baseUrl.replace(/\/+$/, '');

  return { apiKey, baseUrl: normalized };
}
