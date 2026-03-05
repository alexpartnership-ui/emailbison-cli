import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const workspacesV11AcceptInviteCommand: CommandDefinition = {
  name: 'workspaces-v1.1_accept-invite',
  group: 'workspaces-v1.1',
  subcommand: 'accept-invite',
  description: 'Accept a workspace invitation (v1.1).',
  examples: ['bison workspaces-v1.1 accept-invite --team-invitation_id abc123'],
  inputSchema: z.object({
    team_invitation_id: z.string().describe('Team invitation ID'),
  }),
  cliMappings: {
    options: [
      { field: 'team_invitation_id', flags: '--team-invitation-id <string>', description: 'Team invitation ID' },
    ],
  },
  endpoint: { method: 'POST', path: '/api/workspaces/v1.1/accept/{team_invitation_id}' },
  fieldMappings: { team_invitation_id: 'path' },
  handler: (input, client) => executeCommand(workspacesV11AcceptInviteCommand, input, client),
};
