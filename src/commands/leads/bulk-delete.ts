import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const leadsBulkDeleteCommand: CommandDefinition = {
  name: 'leads_bulk-delete',
  group: 'leads',
  subcommand: 'bulk-delete',
  description: 'Delete multiple leads by IDs.',
  examples: ['bison leads bulk-delete --lead-ids \'["id1","id2"]\''],
  inputSchema: z.object({
    lead_ids: z.string().describe('JSON string of lead ID array'),
  }),
  cliMappings: {
    options: [
      { field: 'lead_ids', flags: '--lead-ids <json>', description: 'JSON string of lead ID array' },
    ],
  },
  endpoint: { method: 'DELETE', path: '/api/leads/bulk' },
  fieldMappings: { lead_ids: 'body' },
  handler: (input, client) => executeCommand(leadsBulkDeleteCommand, input, client),
};
