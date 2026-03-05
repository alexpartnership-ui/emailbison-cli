import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const emailBlacklistListCommand: CommandDefinition = {
  name: 'email-blacklist_list',
  group: 'email-blacklist',
  subcommand: 'list',
  description: 'List all blacklisted emails.',
  examples: ['bison email-blacklist list', 'bison email-blacklist list --page 2'],
  inputSchema: z.object({
    page: z.coerce.number().optional().describe('Page number for pagination'),
  }),
  cliMappings: {
    options: [
      { field: 'page', flags: '--page <number>', description: 'Page number' },
    ],
  },
  endpoint: { method: 'GET', path: '/api/blacklisted-emails' },
  fieldMappings: { page: 'query' },
  handler: (input, client) => executeCommand(emailBlacklistListCommand, input, client),
};
