import type { CommandDefinition } from '../../core/types.js';
import { customVariablesListCommand } from './list.js';
import { customVariablesCreateCommand } from './create.js';

export {
  customVariablesListCommand,
  customVariablesCreateCommand,
};

export const customVariableCommands: CommandDefinition[] = [
  customVariablesListCommand,
  customVariablesCreateCommand,
];
