import type { CommandDefinition } from '../../core/types.js';
import { replyTemplatesListCommand } from './list.js';
import { replyTemplatesGetCommand } from './get.js';
import { replyTemplatesCreateCommand } from './create.js';
import { replyTemplatesUpdateCommand } from './update.js';
import { replyTemplatesDeleteCommand } from './delete.js';

export {
  replyTemplatesListCommand,
  replyTemplatesGetCommand,
  replyTemplatesCreateCommand,
  replyTemplatesUpdateCommand,
  replyTemplatesDeleteCommand,
};

export const replyTemplateCommands: CommandDefinition[] = [
  replyTemplatesListCommand,
  replyTemplatesGetCommand,
  replyTemplatesCreateCommand,
  replyTemplatesUpdateCommand,
  replyTemplatesDeleteCommand,
];
