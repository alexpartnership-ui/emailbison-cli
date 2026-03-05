import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const usersHeadlessUiTokenCommand: CommandDefinition = {
  name: 'users_headless-ui-token',
  group: 'users',
  subcommand: 'headless-ui-token',
  description: 'Generate a headless UI token for the current user.',
  examples: ['bison users headless-ui-token'],
  inputSchema: z.object({}),
  cliMappings: {},
  endpoint: { method: 'POST', path: '/api/users/headless-ui-token' },
  fieldMappings: {},
  handler: (input, client) => executeCommand(usersHeadlessUiTokenCommand, input, client),
};
