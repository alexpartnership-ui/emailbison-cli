import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const workspacesSwitchCommand: CommandDefinition = {
  name: 'workspaces_switch',
  group: 'workspaces',
  subcommand: 'switch',
  description: 'Switch to a different workspace (v1, deprecated).',
  examples: ['bison workspaces switch --team_id abc123'],
  inputSchema: z.object({
    team_id: z.string().describe('Team/workspace ID to switch to'),
  }),
  cliMappings: {
    options: [
      { field: 'team_id', flags: '--team_id <string>', description: 'Team/workspace ID to switch to' },
    ],
  },
  endpoint: { method: 'POST', path: '/api/workspaces/switch-workspace' },
  fieldMappings: { team_id: 'body' },
  handler: (input, client) => executeCommand(workspacesSwitchCommand, input, client),
};
