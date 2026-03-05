import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const accountsListCommand: CommandDefinition = {
  name: 'accounts_list',
  group: 'accounts',
  subcommand: 'list',
  description: 'List all sender email accounts in the workspace.',
  examples: ['bison accounts list', 'bison accounts list --page 2'],
  inputSchema: z.object({
    page: z.coerce.number().optional().describe('Page number for pagination'),
  }),
  cliMappings: {
    options: [
      { field: 'page', flags: '--page <number>', description: 'Page number' },
    ],
  },
  endpoint: { method: 'GET', path: '/api/sender-emails' },
  fieldMappings: { page: 'query' },
  handler: (input, client) => executeCommand(accountsListCommand, input, client),
};
