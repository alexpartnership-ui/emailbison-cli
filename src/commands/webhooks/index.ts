import type { CommandDefinition } from '../../core/types.js';
import { webhooksListCommand } from './list.js';
import { webhooksGetCommand } from './get.js';
import { webhooksCreateCommand } from './create.js';
import { webhooksUpdateCommand } from './update.js';
import { webhooksDeleteCommand } from './delete.js';

export {
  webhooksListCommand,
  webhooksGetCommand,
  webhooksCreateCommand,
  webhooksUpdateCommand,
  webhooksDeleteCommand,
};

export const webhookCommands: CommandDefinition[] = [
  webhooksListCommand,
  webhooksGetCommand,
  webhooksCreateCommand,
  webhooksUpdateCommand,
  webhooksDeleteCommand,
];
