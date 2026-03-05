import type { CommandDefinition } from '../../core/types.js';
import { domainBlacklistListCommand } from './list.js';
import { domainBlacklistGetCommand } from './get.js';
import { domainBlacklistCreateCommand } from './create.js';
import { domainBlacklistBulkCreateCommand } from './bulk-create.js';
import { domainBlacklistDeleteCommand } from './delete.js';

export {
  domainBlacklistListCommand,
  domainBlacklistGetCommand,
  domainBlacklistCreateCommand,
  domainBlacklistBulkCreateCommand,
  domainBlacklistDeleteCommand,
};

export const domainBlacklistCommands: CommandDefinition[] = [
  domainBlacklistListCommand,
  domainBlacklistGetCommand,
  domainBlacklistCreateCommand,
  domainBlacklistBulkCreateCommand,
  domainBlacklistDeleteCommand,
];
