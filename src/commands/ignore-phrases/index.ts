import type { CommandDefinition } from '../../core/types.js';
import { ignorePhrasesListCommand } from './list.js';
import { ignorePhrasesGetCommand } from './get.js';
import { ignorePhrasesCreateCommand } from './create.js';
import { ignorePhrasesDeleteCommand } from './delete.js';

export {
  ignorePhrasesListCommand,
  ignorePhrasesGetCommand,
  ignorePhrasesCreateCommand,
  ignorePhrasesDeleteCommand,
};

export const ignorePhraseCommands: CommandDefinition[] = [
  ignorePhrasesListCommand,
  ignorePhrasesGetCommand,
  ignorePhrasesCreateCommand,
  ignorePhrasesDeleteCommand,
];
