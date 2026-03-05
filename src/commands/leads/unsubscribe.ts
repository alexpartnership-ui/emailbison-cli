import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const leadsUnsubscribeCommand: CommandDefinition = {
  name: 'leads_unsubscribe',
  group: 'leads',
  subcommand: 'unsubscribe',
  description: 'Unsubscribe a lead by ID.',
  examples: ['bison leads unsubscribe <lead_id>'],
  inputSchema: z.object({
    lead_id: z.string().describe('Lead ID'),
  }),
  cliMappings: {
    args: [{ field: 'lead_id', name: 'lead_id', required: true }],
  },
  endpoint: { method: 'PATCH', path: '/api/leads/{lead_id}/unsubscribe' },
  fieldMappings: { lead_id: 'path' },
  handler: (input, client) => executeCommand(leadsUnsubscribeCommand, input, client),
};
