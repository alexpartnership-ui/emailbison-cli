import type { CommandDefinition } from '../../core/types.js';
import { emailBlacklistListCommand } from './list.js';
import { emailBlacklistGetCommand } from './get.js';
import { emailBlacklistCreateCommand } from './create.js';
import { emailBlacklistBulkCreateCommand } from './bulk-create.js';
import { emailBlacklistDeleteCommand } from './delete.js';

export {
  emailBlacklistListCommand,
  emailBlacklistGetCommand,
  emailBlacklistCreateCommand,
  emailBlacklistBulkCreateCommand,
  emailBlacklistDeleteCommand,
};

export const emailBlacklistCommands: CommandDefinition[] = [
  emailBlacklistListCommand,
  emailBlacklistGetCommand,
  emailBlacklistCreateCommand,
  emailBlacklistBulkCreateCommand,
  emailBlacklistDeleteCommand,
];
