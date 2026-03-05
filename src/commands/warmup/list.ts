import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const warmupListCommand: CommandDefinition = {
  name: 'warmup_list',
  group: 'warmup',
  subcommand: 'list',
  description: 'List warmup sender emails.',
  examples: ['bison warmup list', 'bison warmup list --page 2'],
  inputSchema: z.object({
    page: z.coerce.number().optional().describe('Page number for pagination'),
  }),
  cliMappings: {
    options: [
      { field: 'page', flags: '--page <number>', description: 'Page number' },
    ],
  },
  endpoint: { method: 'GET', path: '/api/warmup/sender-emails' },
  fieldMappings: { page: 'query' },
  handler: (input, client) => executeCommand(warmupListCommand, input, client),
};
