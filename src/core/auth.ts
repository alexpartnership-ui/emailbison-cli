import { loadConfig } from './config.js';
import { AuthError } from './errors.js';

export interface AuthContext {
  apiKey: string;
  baseUrl: string;
}

export function resolveAuth(opts?: { apiKey?: string; baseUrl?: string }): AuthContext {
  const config = loadConfig();

  const apiKey =
    opts?.apiKey ??
    process.env.EMAILBISON_API_KEY ??
    config.api_key;

  if (!apiKey) {
    throw new AuthError(
      'No API key found. Run "bison login" or set EMAILBISON_API_KEY.',
    );
  }

  const baseUrl =
    opts?.baseUrl ??
    process.env.EMAILBISON_BASE_URL ??
    config.base_url;

  if (!baseUrl) {
    throw new AuthError(
      'No base URL found. Run "bison login" or set EMAILBISON_BASE_URL.',
    );
  }

  return { apiKey, baseUrl: baseUrl.replace(/\/+$/, '') };
}
