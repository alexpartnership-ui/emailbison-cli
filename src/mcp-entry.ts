import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { z } from 'zod';
import { allCommands } from './commands/index.js';
import type { BisonRequestOptions } from './core/types.js';
import { resolveAuth } from './core/auth.js';
import { createClient } from './core/client.js';
import { formatError } from './core/errors.js';

export async function startMcpFromCli(): Promise<void> {
  const auth = resolveAuth();
  const client = createClient(auth);

  const server = new McpServer({
    name: 'emailbison',
    version: '0.1.0',
  });

  for (const cmdDef of allCommands) {
    const zodShape: Record<string, unknown> = {};
    const shape = cmdDef.inputSchema.shape as Record<string, unknown>;
    for (const [key, val] of Object.entries(shape)) {
      zodShape[key] = val;
    }

    // Paginated GET list commands get auto-pagination params. The inputSchema
    // strips these before the handler runs; they only steer the client below.
    const canPaginate =
      cmdDef.endpoint.method === 'GET' && cmdDef.fieldMappings.page === 'query';
    if (canPaginate) {
      zodShape.all = z.boolean().optional().describe('Fetch every page and merge data');
      zodShape.max_pages = z.coerce
        .number()
        .optional()
        .describe('Page cap when all=true (default 50)');
    }

    server.tool(
      cmdDef.name,
      cmdDef.description,
      zodShape,
      async (args: Record<string, unknown>) => {
        try {
          const parsed = cmdDef.inputSchema.safeParse(args);
          if (!parsed.success) {
            return {
              content: [
                {
                  type: 'text' as const,
                  text: JSON.stringify({ error: parsed.error.message, code: 'VALIDATION_ERROR' }),
                },
              ],
              isError: true,
            };
          }
          const maxPages = args.max_pages !== undefined ? Number(args.max_pages) : undefined;
          const effectiveClient =
            canPaginate && args.all === true
              ? { ...client, request: (o: BisonRequestOptions) => client.paginate(o, maxPages) }
              : client;
          const result = await cmdDef.handler(parsed.data, effectiveClient);
          return {
            content: [{ type: 'text' as const, text: JSON.stringify(result, null, 2) }],
          };
        } catch (error: unknown) {
          return {
            content: [
              { type: 'text' as const, text: JSON.stringify(formatError(error)) },
            ],
            isError: true,
          };
        }
      },
    );
  }

  const transport = new StdioServerTransport();
  await server.connect(transport);
}
