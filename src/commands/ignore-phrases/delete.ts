import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const ignorePhrasesDeleteCommand: CommandDefinition = {
  name: 'ignore-phrases_delete',
  group: 'ignore-phrases',
  subcommand: 'delete',
  description: 'Delete an ignore phrase.',
  examples: ['bison ignore-phrases delete --ignore-phrase_id abc123'],
  inputSchema: z.object({
    ignore_phrase_id: z.string().describe('Ignore phrase ID to delete'),
  }),
  cliMappings: {
    options: [
      { field: 'ignore_phrase_id', flags: '--ignore-phrase-id <string>', description: 'Ignore phrase ID' },
    ],
  },
  endpoint: { method: 'DELETE', path: '/api/ignore-phrases/{ignore_phrase_id}' },
  fieldMappings: { ignore_phrase_id: 'path' },
  handler: (input, client) => executeCommand(ignorePhrasesDeleteCommand, input, client),
};
