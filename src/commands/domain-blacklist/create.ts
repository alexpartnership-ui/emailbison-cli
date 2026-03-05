import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const domainBlacklistCreateCommand: CommandDefinition = {
  name: 'domain-blacklist_create',
  group: 'domain-blacklist',
  subcommand: 'create',
  description: 'Add a domain to the blacklist.',
  examples: ['bison domain-blacklist create --domain example.com'],
  inputSchema: z.object({
    domain: z.string().describe('Domain to blacklist'),
  }),
  cliMappings: {
    options: [
      { field: 'domain', flags: '--domain <string>', description: 'Domain to blacklist' },
    ],
  },
  endpoint: { method: 'POST', path: '/api/blacklisted-domains' },
  fieldMappings: { domain: 'body' },
  handler: (input, client) => executeCommand(domainBlacklistCreateCommand, input, client),
};
