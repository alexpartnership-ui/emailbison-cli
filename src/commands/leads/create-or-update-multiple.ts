import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const leadsCreateOrUpdateMultipleCommand: CommandDefinition = {
  name: 'leads_create-or-update-multiple',
  group: 'leads',
  subcommand: 'create-or-update-multiple',
  description: 'Create or update multiple leads at once.',
  examples: ['bison leads create-or-update-multiple --leads \'[{"email":"a@b.com"},{"email":"c@d.com"}]\''],
  inputSchema: z.object({
    leads: z.string().describe('JSON string of leads array'),
  }),
  cliMappings: {
    options: [
      { field: 'leads', flags: '--leads <json>', description: 'JSON string of leads array' },
    ],
  },
  endpoint: { method: 'POST', path: '/api/leads/create-or-update/multiple' },
  fieldMappings: { leads: 'body' },
  handler: (input, client) => executeCommand(leadsCreateOrUpdateMultipleCommand, input, client),
};
