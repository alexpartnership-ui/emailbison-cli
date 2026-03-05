import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const domainBlacklistListCommand: CommandDefinition = {
  name: 'domain-blacklist_list',
  group: 'domain-blacklist',
  subcommand: 'list',
  description: 'List all blacklisted domains.',
  examples: ['bison domain-blacklist list', 'bison domain-blacklist list --page 2'],
  inputSchema: z.object({
    page: z.coerce.number().optional().describe('Page number for pagination'),
  }),
  cliMappings: {
    options: [
      { field: 'page', flags: '--page <number>', description: 'Page number' },
    ],
  },
  endpoint: { method: 'GET', path: '/api/blacklisted-domains' },
  fieldMappings: { page: 'query' },
  handler: (input, client) => executeCommand(domainBlacklistListCommand, input, client),
};
