import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const trackingDomainsDeleteCommand: CommandDefinition = {
  name: 'tracking-domains_delete',
  group: 'tracking-domains',
  subcommand: 'delete',
  description: 'Delete a custom tracking domain.',
  examples: ['bison tracking-domains delete --custom_tracking_domain_id abc123'],
  inputSchema: z.object({
    custom_tracking_domain_id: z.string().describe('Custom tracking domain ID'),
  }),
  cliMappings: {
    options: [
      { field: 'custom_tracking_domain_id', flags: '--custom_tracking_domain_id <string>', description: 'Custom tracking domain ID' },
    ],
  },
  endpoint: { method: 'DELETE', path: '/api/custom-tracking-domain/{custom_tracking_domain_id}' },
  fieldMappings: { custom_tracking_domain_id: 'path' },
  handler: (input, client) => executeCommand(trackingDomainsDeleteCommand, input, client),
};
