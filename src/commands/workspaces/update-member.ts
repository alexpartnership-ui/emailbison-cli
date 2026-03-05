import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const workspacesUpdateMemberCommand: CommandDefinition = {
  name: 'workspaces_update-member',
  group: 'workspaces',
  subcommand: 'update-member',
  description: 'Update a workspace member role (v1, deprecated).',
  examples: ['bison workspaces update-member --user_id abc123 --role admin'],
  inputSchema: z.object({
    user_id: z.string().describe('User ID'),
    role: z.string().optional().describe('New role for the member'),
  }),
  cliMappings: {
    options: [
      { field: 'user_id', flags: '--user_id <string>', description: 'User ID' },
      { field: 'role', flags: '--role <string>', description: 'New role for the member' },
    ],
  },
  endpoint: { method: 'PUT', path: '/api/workspaces/members/{user_id}' },
  fieldMappings: {
    user_id: 'path',
    role: 'body',
  },
  handler: (input, client) => executeCommand(workspacesUpdateMemberCommand, input, client),
};
