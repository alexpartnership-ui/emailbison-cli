import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const webhooksCreateCommand: CommandDefinition = {
  name: 'webhooks_create',
  group: 'webhooks',
  subcommand: 'create',
  description: 'Create a new webhook URL.',
  examples: ['bison webhooks create --url https://example.com/hook', 'bison webhooks create --url https://example.com/hook --event_types \'["reply","bounce"]\''],
  inputSchema: z.object({
    url: z.string().describe('Webhook endpoint URL'),
    event_types: z.string().optional().describe('JSON string of event types to subscribe to'),
  }),
  cliMappings: {
    options: [
      { field: 'url', flags: '--url <string>', description: 'Webhook endpoint URL' },
      { field: 'event_types', flags: '--event_types <string>', description: 'JSON string of event types' },
    ],
  },
  endpoint: { method: 'POST', path: '/api/webhook-url' },
  fieldMappings: { url: 'body', event_types: 'body' },
  handler: (input, client) => executeCommand(webhooksCreateCommand, input, client),
};
