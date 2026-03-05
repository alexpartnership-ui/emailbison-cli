import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const ignorePhrasesGetCommand: CommandDefinition = {
  name: 'ignore-phrases_get',
  group: 'ignore-phrases',
  subcommand: 'get',
  description: 'Get a specific ignore phrase by ID.',
  examples: ['bison ignore-phrases get --ignore_phrase_id abc123'],
  inputSchema: z.object({
    ignore_phrase_id: z.string().describe('Ignore phrase ID'),
  }),
  cliMappings: {
    options: [
      { field: 'ignore_phrase_id', flags: '--ignore_phrase_id <string>', description: 'Ignore phrase ID' },
    ],
  },
  endpoint: { method: 'GET', path: '/api/ignore-phrases/{ignore_phrase_id}' },
  fieldMappings: { ignore_phrase_id: 'path' },
  handler: (input, client) => executeCommand(ignorePhrasesGetCommand, input, client),
};
