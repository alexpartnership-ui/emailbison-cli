import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const workspacesRemoveMemberCommand: CommandDefinition = {
  name: 'workspaces_remove-member',
  group: 'workspaces',
  subcommand: 'remove-member',
  description: 'Remove a member from a workspace (v1, deprecated).',
  examples: ['bison workspaces remove-member --user_id abc123'],
  inputSchema: z.object({
    user_id: z.string().describe('User ID to remove'),
  }),
  cliMappings: {
    options: [
      { field: 'user_id', flags: '--user_id <string>', description: 'User ID to remove' },
    ],
  },
  endpoint: { method: 'DELETE', path: '/api/workspaces/members/{user_id}' },
  fieldMappings: { user_id: 'path' },
  handler: (input, client) => executeCommand(workspacesRemoveMemberCommand, input, client),
};
