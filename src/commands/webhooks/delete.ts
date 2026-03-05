import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const webhooksDeleteCommand: CommandDefinition = {
  name: 'webhooks_delete',
  group: 'webhooks',
  subcommand: 'delete',
  description: 'Delete a webhook URL.',
  examples: ['bison webhooks delete --webhook-url_id abc123'],
  inputSchema: z.object({
    webhook_url_id: z.string().describe('Webhook URL ID to delete'),
  }),
  cliMappings: {
    options: [
      { field: 'webhook_url_id', flags: '--webhook-url-id <string>', description: 'Webhook URL ID' },
    ],
  },
  endpoint: { method: 'DELETE', path: '/api/webhook-url/{webhook_url_id}' },
  fieldMappings: { webhook_url_id: 'path' },
  handler: (input, client) => executeCommand(webhooksDeleteCommand, input, client),
};
