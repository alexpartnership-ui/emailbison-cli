import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const tagsListCommand: CommandDefinition = {
  name: 'tags_list',
  group: 'tags',
  subcommand: 'list',
  description: 'List all tags.',
  examples: ['bison tags list', 'bison tags list --page 2'],
  inputSchema: z.object({
    page: z.coerce.number().optional().describe('Page number for pagination'),
  }),
  cliMappings: {
    options: [
      { field: 'page', flags: '--page <number>', description: 'Page number' },
    ],
  },
  endpoint: { method: 'GET', path: '/api/tags' },
  fieldMappings: { page: 'query' },
  handler: (input, client) => executeCommand(tagsListCommand, input, client),
};
