import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const campaignsCreateCommand: CommandDefinition = {
  name: 'campaigns_create',
  group: 'campaigns',
  subcommand: 'create',
  description: 'Create a new campaign.',
  examples: ['bison campaigns create --name "My Campaign"'],
  inputSchema: z.object({
    name: z.string().describe('Campaign name'),
  }),
  cliMappings: {
    options: [
      { field: 'name', flags: '--name <string>', description: 'Campaign name' },
    ],
  },
  endpoint: { method: 'POST', path: '/api/campaigns' },
  fieldMappings: { name: 'body' },
  handler: (input, client) => executeCommand(campaignsCreateCommand, input, client),
};
