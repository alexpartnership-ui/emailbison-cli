import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const webhooksGetCommand: CommandDefinition = {
  name: 'webhooks_get',
  group: 'webhooks',
  subcommand: 'get',
  description: 'Get a specific webhook URL by ID.',
  examples: ['bison webhooks get --id abc123'],
  inputSchema: z.object({
    id: z.string().describe('Webhook URL ID'),
  }),
  cliMappings: {
    options: [
      { field: 'id', flags: '--id <string>', description: 'Webhook URL ID' },
    ],
  },
  endpoint: { method: 'GET', path: '/api/webhook-url/{id}' },
  fieldMappings: { id: 'path' },
  handler: (input, client) => executeCommand(webhooksGetCommand, input, client),
};
