import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const workspacesV11UpdateCommand: CommandDefinition = {
  name: 'workspaces-v1.1_update',
  group: 'workspaces-v1.1',
  subcommand: 'update',
  description: 'Update a workspace (v1.1).',
  examples: ['bison workspaces-v1.1 update --team-id abc123 --name "New Name"'],
  inputSchema: z.object({
    team_id: z.string().describe('Team/workspace ID'),
    name: z.string().optional().describe('New workspace name'),
  }),
  cliMappings: {
    options: [
      { field: 'team_id', flags: '--team-id <string>', description: 'Team/workspace ID' },
      { field: 'name', flags: '--name <string>', description: 'New workspace name' },
    ],
  },
  endpoint: { method: 'PUT', path: '/api/workspaces/v1.1/{team_id}' },
  fieldMappings: {
    team_id: 'path',
    name: 'body',
  },
  handler: (input, client) => executeCommand(workspacesV11UpdateCommand, input, client),
};
