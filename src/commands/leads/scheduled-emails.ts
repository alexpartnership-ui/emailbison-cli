import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const leadsScheduledEmailsCommand: CommandDefinition = {
  name: 'leads_scheduled-emails',
  group: 'leads',
  subcommand: 'scheduled-emails',
  description: 'Get scheduled emails for a lead.',
  examples: ['bison leads scheduled-emails <lead_id>', 'bison leads scheduled-emails <lead_id> --page 2'],
  inputSchema: z.object({
    lead_id: z.string().describe('Lead ID'),
    page: z.coerce.number().optional().describe('Page number'),
  }),
  cliMappings: {
    args: [{ field: 'lead_id', name: 'lead_id', required: true }],
    options: [
      { field: 'page', flags: '--page <number>', description: 'Page number' },
    ],
  },
  endpoint: { method: 'GET', path: '/api/leads/{lead_id}/scheduled-emails' },
  fieldMappings: { lead_id: 'path', page: 'query' },
  handler: (input, client) => executeCommand(leadsScheduledEmailsCommand, input, client),
};
