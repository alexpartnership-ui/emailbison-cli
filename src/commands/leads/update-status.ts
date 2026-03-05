import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const leadsUpdateStatusCommand: CommandDefinition = {
  name: 'leads_update-status',
  group: 'leads',
  subcommand: 'update-status',
  description: 'Update the status of a lead.',
  examples: ['bison leads update-status <lead_id> --status active'],
  inputSchema: z.object({
    lead_id: z.string().describe('Lead ID'),
    status: z.string().describe('New lead status'),
  }),
  cliMappings: {
    args: [{ field: 'lead_id', name: 'lead_id', required: true }],
    options: [
      { field: 'status', flags: '--status <status>', description: 'New lead status' },
    ],
  },
  endpoint: { method: 'PATCH', path: '/api/leads/{lead_id}/update-status' },
  fieldMappings: { lead_id: 'path', status: 'body' },
  handler: (input, client) => executeCommand(leadsUpdateStatusCommand, input, client),
};
