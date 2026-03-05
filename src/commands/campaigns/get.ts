import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const campaignsGetCommand: CommandDefinition = {
  name: 'campaigns_get',
  group: 'campaigns',
  subcommand: 'get',
  description: 'Get a specific campaign by ID.',
  examples: ['bison campaigns get --id abc123'],
  inputSchema: z.object({
    id: z.string().describe('Campaign ID'),
  }),
  cliMappings: {
    options: [
      { field: 'id', flags: '--id <string>', description: 'Campaign ID' },
    ],
  },
  endpoint: { method: 'GET', path: '/api/campaigns/{id}' },
  fieldMappings: { id: 'path' },
  handler: (input, client) => executeCommand(campaignsGetCommand, input, client),
};
