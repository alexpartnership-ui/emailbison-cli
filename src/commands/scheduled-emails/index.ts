import type { CommandDefinition } from '../../core/types.js';
import { scheduledEmailsListCommand } from './list.js';
import { scheduledEmailsGetCommand } from './get.js';

export {
  scheduledEmailsListCommand,
  scheduledEmailsGetCommand,
};

export const scheduledEmailCommands: CommandDefinition[] = [
  scheduledEmailsListCommand,
  scheduledEmailsGetCommand,
];
