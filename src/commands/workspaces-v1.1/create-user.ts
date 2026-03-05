import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const workspacesV11CreateUserCommand: CommandDefinition = {
  name: 'workspaces-v1.1_create-user',
  group: 'workspaces-v1.1',
  subcommand: 'create-user',
  description: 'Create a new user in the workspace (v1.1).',
  examples: ['bison workspaces-v1.1 create-user --name "John" --email user@example.com --password secret123'],
  inputSchema: z.object({
    name: z.string().describe('User name'),
    email: z.string().describe('User email'),
    password: z.string().describe('User password'),
  }),
  cliMappings: {
    options: [
      { field: 'name', flags: '--name <string>', description: 'User name' },
      { field: 'email', flags: '--email <string>', description: 'User email' },
      { field: 'password', flags: '--password <string>', description: 'User password' },
    ],
  },
  endpoint: { method: 'POST', path: '/api/workspaces/v1.1/users' },
  fieldMappings: {
    name: 'body',
    email: 'body',
    password: 'body',
  },
  handler: (input, client) => executeCommand(workspacesV11CreateUserCommand, input, client),
};
