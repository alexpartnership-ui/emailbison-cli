import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const workspacesUpdateCommand: CommandDefinition = {
  name: 'workspaces_update',
  group: 'workspaces',
  subcommand: 'update',
  description: 'Update a workspace (v1, deprecated).',
  examples: ['bison workspaces update --team_id abc123 --name "New Name"'],
  inputSchema: z.object({
    team_id: z.string().describe('Team/workspace ID'),
    name: z.string().optional().describe('New workspace name'),
  }),
  cliMappings: {
    options: [
      { field: 'team_id', flags: '--team_id <string>', description: 'Team/workspace ID' },
      { field: 'name', flags: '--name <string>', description: 'New workspace name' },
    ],
  },
  endpoint: { method: 'PUT', path: '/api/workspaces/{team_id}' },
  fieldMappings: {
    team_id: 'path',
    name: 'body',
  },
  handler: (input, client) => executeCommand(workspacesUpdateCommand, input, client),
};
