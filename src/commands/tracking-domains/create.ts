import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const trackingDomainsCreateCommand: CommandDefinition = {
  name: 'tracking-domains_create',
  group: 'tracking-domains',
  subcommand: 'create',
  description: 'Add a custom tracking domain.',
  examples: ['bison tracking-domains create --domain track.example.com'],
  inputSchema: z.object({
    domain: z.string().describe('Custom tracking domain'),
  }),
  cliMappings: {
    options: [
      { field: 'domain', flags: '--domain <string>', description: 'Custom tracking domain' },
    ],
  },
  endpoint: { method: 'POST', path: '/api/custom-tracking-domain' },
  fieldMappings: { domain: 'body' },
  handler: (input, client) => executeCommand(trackingDomainsCreateCommand, input, client),
};
