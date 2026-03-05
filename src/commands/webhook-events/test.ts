import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const webhookEventsTestCommand: CommandDefinition = {
  name: 'webhook-events_test',
  group: 'webhook-events',
  subcommand: 'test',
  description: 'Send a test webhook event to a webhook URL.',
  examples: ['bison webhook-events test --webhook_url_id abc123 --event_type reply'],
  inputSchema: z.object({
    webhook_url_id: z.string().describe('Webhook URL ID to send the test event to'),
    event_type: z.string().describe('Type of event to simulate'),
  }),
  cliMappings: {
    options: [
      { field: 'webhook_url_id', flags: '--webhook_url_id <string>', description: 'Webhook URL ID' },
      { field: 'event_type', flags: '--event_type <string>', description: 'Event type to simulate' },
    ],
  },
  endpoint: { method: 'POST', path: '/api/webhook-events/test-event' },
  fieldMappings: { webhook_url_id: 'body', event_type: 'body' },
  handler: (input, client) => executeCommand(webhookEventsTestCommand, input, client),
};
