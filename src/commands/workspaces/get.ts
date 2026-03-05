import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const workspacesGetCommand: CommandDefinition = {
  name: 'workspaces_get',
  group: 'workspaces',
  subcommand: 'get',
  description: 'Get a specific workspace by team ID (v1, deprecated).',
  examples: ['bison workspaces get --team_id abc123'],
  inputSchema: z.object({
    team_id: z.string().describe('Team/workspace ID'),
  }),
  cliMappings: {
    options: [
      { field: 'team_id', flags: '--team_id <string>', description: 'Team/workspace ID' },
    ],
  },
  endpoint: { method: 'GET', path: '/api/workspaces/{team_id}' },
  fieldMappings: { team_id: 'path' },
  handler: (input, client) => executeCommand(workspacesGetCommand, input, client),
};
