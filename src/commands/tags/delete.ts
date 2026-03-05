import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const tagsDeleteCommand: CommandDefinition = {
  name: 'tags_delete',
  group: 'tags',
  subcommand: 'delete',
  description: 'Delete a tag.',
  examples: ['bison tags delete --tag_id abc123'],
  inputSchema: z.object({
    tag_id: z.string().describe('Tag ID'),
  }),
  cliMappings: {
    options: [
      { field: 'tag_id', flags: '--tag_id <string>', description: 'Tag ID' },
    ],
  },
  endpoint: { method: 'DELETE', path: '/api/tags/{tag_id}' },
  fieldMappings: { tag_id: 'path' },
  handler: (input, client) => executeCommand(tagsDeleteCommand, input, client),
};
