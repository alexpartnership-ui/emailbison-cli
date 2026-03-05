import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const leadsBlacklistCommand: CommandDefinition = {
  name: 'leads_blacklist',
  group: 'leads',
  subcommand: 'blacklist',
  description: 'Blacklist a lead by ID.',
  examples: ['bison leads blacklist <lead_id>'],
  inputSchema: z.object({
    lead_id: z.string().describe('Lead ID'),
  }),
  cliMappings: {
    args: [{ field: 'lead_id', name: 'lead_id', required: true }],
  },
  endpoint: { method: 'POST', path: '/api/leads/{lead_id}/blacklist' },
  fieldMappings: { lead_id: 'path' },
  handler: (input, client) => executeCommand(leadsBlacklistCommand, input, client),
};
