import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const workspacesV11GetCommand: CommandDefinition = {
  name: 'workspaces-v1.1_get',
  group: 'workspaces-v1.1',
  subcommand: 'get',
  description: 'Get a specific workspace by team ID (v1.1).',
  examples: ['bison workspaces-v1.1 get --team_id abc123'],
  inputSchema: z.object({
    team_id: z.string().describe('Team/workspace ID'),
  }),
  cliMappings: {
    options: [
      { field: 'team_id', flags: '--team_id <string>', description: 'Team/workspace ID' },
    ],
  },
  endpoint: { method: 'GET', path: '/api/workspaces/v1.1/{team_id}' },
  fieldMappings: { team_id: 'path' },
  handler: (input, client) => executeCommand(workspacesV11GetCommand, input, client),
};
