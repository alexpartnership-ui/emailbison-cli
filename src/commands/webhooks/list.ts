import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const webhooksListCommand: CommandDefinition = {
  name: 'webhooks_list',
  group: 'webhooks',
  subcommand: 'list',
  description: 'List all webhook URLs in the workspace.',
  examples: ['bison webhooks list', 'bison webhooks list --page 2'],
  inputSchema: z.object({
    page: z.coerce.number().optional().describe('Page number for pagination'),
  }),
  cliMappings: {
    options: [
      { field: 'page', flags: '--page <number>', description: 'Page number' },
    ],
  },
  endpoint: { method: 'GET', path: '/api/webhook-url' },
  fieldMappings: { page: 'query' },
  handler: (input, client) => executeCommand(webhooksListCommand, input, client),
};
