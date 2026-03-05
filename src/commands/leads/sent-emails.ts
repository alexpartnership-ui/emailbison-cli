import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const leadsSentEmailsCommand: CommandDefinition = {
  name: 'leads_sent-emails',
  group: 'leads',
  subcommand: 'sent-emails',
  description: 'Get sent emails for a lead.',
  examples: ['bison leads sent-emails <lead_id>', 'bison leads sent-emails <lead_id> --page 2'],
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
  endpoint: { method: 'GET', path: '/api/leads/{lead_id}/sent-emails' },
  fieldMappings: { lead_id: 'path', page: 'query' },
  handler: (input, client) => executeCommand(leadsSentEmailsCommand, input, client),
};
