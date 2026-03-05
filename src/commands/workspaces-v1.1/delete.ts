import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const workspacesV11DeleteCommand: CommandDefinition = {
  name: 'workspaces-v1.1_delete',
  group: 'workspaces-v1.1',
  subcommand: 'delete',
  description: 'Delete a workspace (v1.1).',
  examples: ['bison workspaces-v1.1 delete --team-id abc123'],
  inputSchema: z.object({
    team_id: z.string().describe('Team/workspace ID to delete'),
  }),
  cliMappings: {
    options: [
      { field: 'team_id', flags: '--team-id <string>', description: 'Team/workspace ID to delete' },
    ],
  },
  endpoint: { method: 'DELETE', path: '/api/workspaces/v1.1/{team_id}' },
  fieldMappings: { team_id: 'path' },
  handler: (input, client) => executeCommand(workspacesV11DeleteCommand, input, client),
};
