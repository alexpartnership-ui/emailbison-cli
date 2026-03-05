import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const domainBlacklistGetCommand: CommandDefinition = {
  name: 'domain-blacklist_get',
  group: 'domain-blacklist',
  subcommand: 'get',
  description: 'Get a specific blacklisted domain by ID.',
  examples: ['bison domain-blacklist get --blacklisted-domain_id abc123'],
  inputSchema: z.object({
    blacklisted_domain_id: z.string().describe('Blacklisted domain ID'),
  }),
  cliMappings: {
    options: [
      { field: 'blacklisted_domain_id', flags: '--blacklisted-domain-id <string>', description: 'Blacklisted domain ID' },
    ],
  },
  endpoint: { method: 'GET', path: '/api/blacklisted-domains/{blacklisted_domain_id}' },
  fieldMappings: { blacklisted_domain_id: 'path' },
  handler: (input, client) => executeCommand(domainBlacklistGetCommand, input, client),
};
