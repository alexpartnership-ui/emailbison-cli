import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const workspacesV11CreateApiTokenCommand: CommandDefinition = {
  name: 'workspaces-v1.1_create-api-token',
  group: 'workspaces-v1.1',
  subcommand: 'create-api-token',
  description: 'Create an API token for a workspace (v1.1).',
  examples: ['bison workspaces-v1.1 create-api-token --team_id abc123 --name "My Token"'],
  inputSchema: z.object({
    team_id: z.string().describe('Team/workspace ID'),
    name: z.string().describe('API token name'),
  }),
  cliMappings: {
    options: [
      { field: 'team_id', flags: '--team_id <string>', description: 'Team/workspace ID' },
      { field: 'name', flags: '--name <string>', description: 'API token name' },
    ],
  },
  endpoint: { method: 'POST', path: '/api/workspaces/v1.1/{team_id}/api-tokens' },
  fieldMappings: {
    team_id: 'path',
    name: 'body',
  },
  handler: (input, client) => executeCommand(workspacesV11CreateApiTokenCommand, input, client),
};
