import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const tagsGetCommand: CommandDefinition = {
  name: 'tags_get',
  group: 'tags',
  subcommand: 'get',
  description: 'Get a specific tag by ID.',
  examples: ['bison tags get --id abc123'],
  inputSchema: z.object({
    id: z.string().describe('Tag ID'),
  }),
  cliMappings: {
    options: [
      { field: 'id', flags: '--id <string>', description: 'Tag ID' },
    ],
  },
  endpoint: { method: 'GET', path: '/api/tags/{id}' },
  fieldMappings: { id: 'path' },
  handler: (input, client) => executeCommand(tagsGetCommand, input, client),
};
