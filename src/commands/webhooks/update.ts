import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const webhooksUpdateCommand: CommandDefinition = {
  name: 'webhooks_update',
  group: 'webhooks',
  subcommand: 'update',
  description: 'Update an existing webhook URL.',
  examples: ['bison webhooks update --id abc123 --url https://example.com/new-hook'],
  inputSchema: z.object({
    id: z.string().describe('Webhook URL ID'),
    url: z.string().optional().describe('Webhook endpoint URL'),
    event_types: z.string().optional().describe('JSON string of event types to subscribe to'),
  }),
  cliMappings: {
    options: [
      { field: 'id', flags: '--id <string>', description: 'Webhook URL ID' },
      { field: 'url', flags: '--url <string>', description: 'Webhook endpoint URL' },
      { field: 'event_types', flags: '--event-types <string>', description: 'JSON string of event types' },
    ],
  },
  endpoint: { method: 'PUT', path: '/api/webhook-url/{id}' },
  fieldMappings: { id: 'path', url: 'body', event_types: 'body' },
  handler: (input, client) => executeCommand(webhooksUpdateCommand, input, client),
};
