import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const trackingDomainsListCommand: CommandDefinition = {
  name: 'tracking-domains_list',
  group: 'tracking-domains',
  subcommand: 'list',
  description: 'List all custom tracking domains.',
  examples: ['bison tracking-domains list', 'bison tracking-domains list --page 2'],
  inputSchema: z.object({
    page: z.coerce.number().optional().describe('Page number for pagination'),
  }),
  cliMappings: {
    options: [
      { field: 'page', flags: '--page <number>', description: 'Page number' },
    ],
  },
  endpoint: { method: 'GET', path: '/api/custom-tracking-domain' },
  fieldMappings: { page: 'query' },
  handler: (input, client) => executeCommand(trackingDomainsListCommand, input, client),
};
