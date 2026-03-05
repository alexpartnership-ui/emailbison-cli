import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const webhookEventsEventTypesCommand: CommandDefinition = {
  name: 'webhook-events_event-types',
  group: 'webhook-events',
  subcommand: 'event-types',
  description: 'List all available webhook event types.',
  examples: ['bison webhook-events event-types'],
  inputSchema: z.object({}),
  cliMappings: {},
  endpoint: { method: 'GET', path: '/api/webhook-events/event-types' },
  fieldMappings: {},
  handler: (input, client) => executeCommand(webhookEventsEventTypesCommand, input, client),
};
