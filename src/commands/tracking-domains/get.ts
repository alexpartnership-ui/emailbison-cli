import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const trackingDomainsGetCommand: CommandDefinition = {
  name: 'tracking-domains_get',
  group: 'tracking-domains',
  subcommand: 'get',
  description: 'Get a specific custom tracking domain by ID.',
  examples: ['bison tracking-domains get --id abc123'],
  inputSchema: z.object({
    id: z.string().describe('Custom tracking domain ID'),
  }),
  cliMappings: {
    options: [
      { field: 'id', flags: '--id <string>', description: 'Custom tracking domain ID' },
    ],
  },
  endpoint: { method: 'GET', path: '/api/custom-tracking-domain/{id}' },
  fieldMappings: { id: 'path' },
  handler: (input, client) => executeCommand(trackingDomainsGetCommand, input, client),
};
