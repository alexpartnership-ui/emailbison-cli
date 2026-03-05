import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const tagsCreateCommand: CommandDefinition = {
  name: 'tags_create',
  group: 'tags',
  subcommand: 'create',
  description: 'Create a new tag.',
  examples: ['bison tags create --name "My Tag"'],
  inputSchema: z.object({
    name: z.string().describe('Tag name'),
  }),
  cliMappings: {
    options: [
      { field: 'name', flags: '--name <string>', description: 'Tag name' },
    ],
  },
  endpoint: { method: 'POST', path: '/api/tags' },
  fieldMappings: { name: 'body' },
  handler: (input, client) => executeCommand(tagsCreateCommand, input, client),
};
