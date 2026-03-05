import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const usersGetCommand: CommandDefinition = {
  name: 'users_get',
  group: 'users',
  subcommand: 'get',
  description: 'Get the current user profile.',
  examples: ['bison users get'],
  inputSchema: z.object({}),
  cliMappings: {},
  endpoint: { method: 'GET', path: '/api/users' },
  fieldMappings: {},
  handler: (input, client) => executeCommand(usersGetCommand, input, client),
};
