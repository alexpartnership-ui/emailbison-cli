import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const leadsGetCommand: CommandDefinition = {
  name: 'leads_get',
  group: 'leads',
  subcommand: 'get',
  description: 'Get a lead by ID.',
  examples: ['bison leads get <lead_id>'],
  inputSchema: z.object({
    lead_id: z.string().describe('Lead ID'),
  }),
  cliMappings: {
    args: [{ field: 'lead_id', name: 'lead_id', required: true }],
  },
  endpoint: { method: 'GET', path: '/api/leads/{lead_id}' },
  fieldMappings: { lead_id: 'path' },
  handler: (input, client) => executeCommand(leadsGetCommand, input, client),
};
