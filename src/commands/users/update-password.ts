import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const usersUpdatePasswordCommand: CommandDefinition = {
  name: 'users_update-password',
  group: 'users',
  subcommand: 'update-password',
  description: 'Update the current user password.',
  examples: ['bison users update-password --current-password old123 --password new456 --password-confirmation new456'],
  inputSchema: z.object({
    current_password: z.string().describe('Current password'),
    password: z.string().describe('New password'),
    password_confirmation: z.string().describe('New password confirmation'),
  }),
  cliMappings: {
    options: [
      { field: 'current_password', flags: '--current-password <string>', description: 'Current password' },
      { field: 'password', flags: '--password <string>', description: 'New password' },
      { field: 'password_confirmation', flags: '--password-confirmation <string>', description: 'New password confirmation' },
    ],
  },
  endpoint: { method: 'PUT', path: '/api/users/password' },
  fieldMappings: {
    current_password: 'body',
    password: 'body',
    password_confirmation: 'body',
  },
  handler: (input, client) => executeCommand(usersUpdatePasswordCommand, input, client),
};
