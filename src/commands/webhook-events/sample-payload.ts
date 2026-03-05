import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const webhookEventsSamplePayloadCommand: CommandDefinition = {
  name: 'webhook-events_sample-payload',
  group: 'webhook-events',
  subcommand: 'sample-payload',
  description: 'Get a sample payload for a webhook event type.',
  examples: ['bison webhook-events sample-payload', 'bison webhook-events sample-payload --event_type reply'],
  inputSchema: z.object({
    event_type: z.string().optional().describe('Event type to get sample payload for'),
  }),
  cliMappings: {
    options: [
      { field: 'event_type', flags: '--event_type <string>', description: 'Event type' },
    ],
  },
  endpoint: { method: 'GET', path: '/api/webhook-events/sample-payload' },
  fieldMappings: { event_type: 'query' },
  handler: (input, client) => executeCommand(webhookEventsSamplePayloadCommand, input, client),
};
