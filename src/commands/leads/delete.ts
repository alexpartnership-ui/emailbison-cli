import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const leadsDeleteCommand: CommandDefinition = {
  name: 'leads_delete',
  group: 'leads',
  subcommand: 'delete',
  description: 'Delete a lead by ID.',
  examples: ['bison leads delete <lead_id>'],
  inputSchema: z.object({
    lead_id: z.string().describe('Lead ID'),
  }),
  cliMappings: {
    args: [{ field: 'lead_id', name: 'lead_id', required: true }],
  },
  endpoint: { method: 'DELETE', path: '/api/leads/{lead_id}' },
  fieldMappings: { lead_id: 'path' },
  handler: (input, client) => executeCommand(leadsDeleteCommand, input, client),
};
