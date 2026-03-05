import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const workspacesV11SwitchCommand: CommandDefinition = {
  name: 'workspaces-v1.1_switch',
  group: 'workspaces-v1.1',
  subcommand: 'switch',
  description: 'Switch to a different workspace (v1.1).',
  examples: ['bison workspaces-v1.1 switch --team-id abc123'],
  inputSchema: z.object({
    team_id: z.string().describe('Team/workspace ID to switch to'),
  }),
  cliMappings: {
    options: [
      { field: 'team_id', flags: '--team-id <string>', description: 'Team/workspace ID to switch to' },
    ],
  },
  endpoint: { method: 'POST', path: '/api/workspaces/v1.1/switch-workspace' },
  fieldMappings: { team_id: 'body' },
  handler: (input, client) => executeCommand(workspacesV11SwitchCommand, input, client),
};
