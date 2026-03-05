import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const workspacesV11RemoveMemberCommand: CommandDefinition = {
  name: 'workspaces-v1.1_remove-member',
  group: 'workspaces-v1.1',
  subcommand: 'remove-member',
  description: 'Remove a member from a workspace (v1.1).',
  examples: ['bison workspaces-v1.1 remove-member --user_id abc123'],
  inputSchema: z.object({
    user_id: z.string().describe('User ID to remove'),
  }),
  cliMappings: {
    options: [
      { field: 'user_id', flags: '--user_id <string>', description: 'User ID to remove' },
    ],
  },
  endpoint: { method: 'DELETE', path: '/api/workspaces/v1.1/members/{user_id}' },
  fieldMappings: { user_id: 'path' },
  handler: (input, client) => executeCommand(workspacesV11RemoveMemberCommand, input, client),
};
