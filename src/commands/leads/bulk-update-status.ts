import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const leadsBulkUpdateStatusCommand: CommandDefinition = {
  name: 'leads_bulk-update-status',
  group: 'leads',
  subcommand: 'bulk-update-status',
  description: 'Update the status of multiple leads.',
  examples: ['bison leads bulk-update-status --lead-ids \'["id1","id2"]\' --status active'],
  inputSchema: z.object({
    lead_ids: z.string().describe('JSON string of lead ID array'),
    status: z.string().describe('New lead status'),
  }),
  cliMappings: {
    options: [
      { field: 'lead_ids', flags: '--lead-ids <json>', description: 'JSON string of lead ID array' },
      { field: 'status', flags: '--status <status>', description: 'New lead status' },
    ],
  },
  endpoint: { method: 'PATCH', path: '/api/leads/bulk-update-status' },
  fieldMappings: { lead_ids: 'body', status: 'body' },
  handler: (input, client) => executeCommand(leadsBulkUpdateStatusCommand, input, client),
};
