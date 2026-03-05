import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const ignorePhrasesCreateCommand: CommandDefinition = {
  name: 'ignore-phrases_create',
  group: 'ignore-phrases',
  subcommand: 'create',
  description: 'Create a new ignore phrase.',
  examples: ['bison ignore-phrases create --phrase "out of office"'],
  inputSchema: z.object({
    phrase: z.string().describe('Phrase to ignore in replies'),
  }),
  cliMappings: {
    options: [
      { field: 'phrase', flags: '--phrase <string>', description: 'Phrase to ignore' },
    ],
  },
  endpoint: { method: 'POST', path: '/api/ignore-phrases' },
  fieldMappings: { phrase: 'body' },
  handler: (input, client) => executeCommand(ignorePhrasesCreateCommand, input, client),
};
