import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const repliesGetCommand: CommandDefinition = {
  name: 'replies_get',
  group: 'replies',
  subcommand: 'get',
  description: 'Get a specific reply by ID.',
  examples: ['bison replies get <id>'],
  inputSchema: z.object({
    id: z.string().describe('Reply ID'),
  }),
  cliMappings: {
    args: [{ field: 'id', name: 'id', required: true }],
  },
  endpoint: { method: 'GET', path: '/api/replies/{id}' },
  fieldMappings: { id: 'path' },
  handler: (input, client) => executeCommand(repliesGetCommand, input, client),
};
