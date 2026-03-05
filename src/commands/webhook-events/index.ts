import type { CommandDefinition } from '../../core/types.js';
import { webhookEventsTestCommand } from './test.js';
import { webhookEventsEventTypesCommand } from './event-types.js';
import { webhookEventsSamplePayloadCommand } from './sample-payload.js';

export {
  webhookEventsTestCommand,
  webhookEventsEventTypesCommand,
  webhookEventsSamplePayloadCommand,
};

export const webhookEventCommands: CommandDefinition[] = [
  webhookEventsTestCommand,
  webhookEventsEventTypesCommand,
  webhookEventsSamplePayloadCommand,
];
