import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const ignorePhrasesListCommand: CommandDefinition = {
  name: 'ignore-phrases_list',
  group: 'ignore-phrases',
  subcommand: 'list',
  description: 'List all ignore phrases in the workspace.',
  examples: ['bison ignore-phrases list', 'bison ignore-phrases list --page 2'],
  inputSchema: z.object({
    page: z.coerce.number().optional().describe('Page number for pagination'),
  }),
  cliMappings: {
    options: [
      { field: 'page', flags: '--page <number>', description: 'Page number' },
    ],
  },
  endpoint: { method: 'GET', path: '/api/ignore-phrases' },
  fieldMappings: { page: 'query' },
  handler: (input, client) => executeCommand(ignorePhrasesListCommand, input, client),
};
