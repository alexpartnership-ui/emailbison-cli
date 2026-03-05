import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const workspacesAcceptInviteCommand: CommandDefinition = {
  name: 'workspaces_accept-invite',
  group: 'workspaces',
  subcommand: 'accept-invite',
  description: 'Accept a workspace invitation (v1, deprecated).',
  examples: ['bison workspaces accept-invite --team-invitation_id abc123'],
  inputSchema: z.object({
    team_invitation_id: z.string().describe('Team invitation ID'),
  }),
  cliMappings: {
    options: [
      { field: 'team_invitation_id', flags: '--team-invitation-id <string>', description: 'Team invitation ID' },
    ],
  },
  endpoint: { method: 'POST', path: '/api/workspaces/accept/{team_invitation_id}' },
  fieldMappings: { team_invitation_id: 'path' },
  handler: (input, client) => executeCommand(workspacesAcceptInviteCommand, input, client),
};
