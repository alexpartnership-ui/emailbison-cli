import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const workspacesInviteMembersCommand: CommandDefinition = {
  name: 'workspaces_invite-members',
  group: 'workspaces',
  subcommand: 'invite-members',
  description: 'Invite members to a workspace (v1, deprecated).',
  examples: ['bison workspaces invite-members --emails \'["user@example.com"]\''],
  inputSchema: z.object({
    emails: z.string().describe('JSON string array of email addresses'),
  }),
  cliMappings: {
    options: [
      { field: 'emails', flags: '--emails <string>', description: 'JSON string array of email addresses' },
    ],
  },
  endpoint: { method: 'POST', path: '/api/workspaces/invite-members' },
  fieldMappings: { emails: 'body' },
  handler: (input, client) => executeCommand(workspacesInviteMembersCommand, input, client),
};
