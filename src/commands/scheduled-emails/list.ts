import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const scheduledEmailsListCommand: CommandDefinition = {
  name: 'scheduled-emails_list',
  group: 'scheduled-emails',
  subcommand: 'list',
  description: 'List all scheduled emails in the workspace.',
  examples: ['bison scheduled-emails list', 'bison scheduled-emails list --page 2'],
  inputSchema: z.object({
    page: z.coerce.number().optional().describe('Page number for pagination'),
  }),
  cliMappings: {
    options: [
      { field: 'page', flags: '--page <number>', description: 'Page number' },
    ],
  },
  endpoint: { method: 'GET', path: '/api/scheduled-emails' },
  fieldMappings: { page: 'query' },
  handler: (input, client) => executeCommand(scheduledEmailsListCommand, input, client),
};
