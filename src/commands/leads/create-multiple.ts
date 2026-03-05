import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const leadsCreateMultipleCommand: CommandDefinition = {
  name: 'leads_create-multiple',
  group: 'leads',
  subcommand: 'create-multiple',
  description: 'Create multiple leads at once.',
  examples: ['bison leads create-multiple --leads \'[{"email":"a@b.com"},{"email":"c@d.com"}]\''],
  inputSchema: z.object({
    leads: z.string().describe('JSON string of leads array'),
  }),
  cliMappings: {
    options: [
      { field: 'leads', flags: '--leads <json>', description: 'JSON string of leads array' },
    ],
  },
  endpoint: { method: 'POST', path: '/api/leads/multiple' },
  fieldMappings: { leads: 'body' },
  handler: (input, client) => executeCommand(leadsCreateMultipleCommand, input, client),
};
