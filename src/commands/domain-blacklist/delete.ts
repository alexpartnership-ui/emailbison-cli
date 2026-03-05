import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const domainBlacklistDeleteCommand: CommandDefinition = {
  name: 'domain-blacklist_delete',
  group: 'domain-blacklist',
  subcommand: 'delete',
  description: 'Remove a domain from the blacklist.',
  examples: ['bison domain-blacklist delete --blacklisted-domain_id abc123'],
  inputSchema: z.object({
    blacklisted_domain_id: z.string().describe('Blacklisted domain ID'),
  }),
  cliMappings: {
    options: [
      { field: 'blacklisted_domain_id', flags: '--blacklisted-domain-id <string>', description: 'Blacklisted domain ID' },
    ],
  },
  endpoint: { method: 'DELETE', path: '/api/blacklisted-domains/{blacklisted_domain_id}' },
  fieldMappings: { blacklisted_domain_id: 'path' },
  handler: (input, client) => executeCommand(domainBlacklistDeleteCommand, input, client),
};
