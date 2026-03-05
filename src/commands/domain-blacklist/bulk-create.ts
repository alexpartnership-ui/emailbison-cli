import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const domainBlacklistBulkCreateCommand: CommandDefinition = {
  name: 'domain-blacklist_bulk-create',
  group: 'domain-blacklist',
  subcommand: 'bulk-create',
  description: 'Bulk add domains to the blacklist.',
  examples: ['bison domain-blacklist bulk-create --domains \'["example.com","test.com"]\''],
  inputSchema: z.object({
    domains: z.string().describe('JSON string array of domains to blacklist'),
  }),
  cliMappings: {
    options: [
      { field: 'domains', flags: '--domains <string>', description: 'JSON string array of domains to blacklist' },
    ],
  },
  endpoint: { method: 'POST', path: '/api/blacklisted-domains/bulk' },
  fieldMappings: { domains: 'body' },
  handler: (input, client) => executeCommand(domainBlacklistBulkCreateCommand, input, client),
};
