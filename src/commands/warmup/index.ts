import { warmupListCommand } from './list.js';
import { warmupGetCommand } from './get.js';
import { warmupEnableCommand } from './enable.js';
import { warmupDisableCommand } from './disable.js';
import { warmupUpdateLimitsCommand } from './update-limits.js';

export const warmupCommands = [
  warmupListCommand,
  warmupGetCommand,
  warmupEnableCommand,
  warmupDisableCommand,
  warmupUpdateLimitsCommand,
];
