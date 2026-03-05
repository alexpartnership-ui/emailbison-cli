import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const workspacesV11InviteMembersCommand: CommandDefinition = {
  name: 'workspaces-v1.1_invite-members',
  group: 'workspaces-v1.1',
  subcommand: 'invite-members',
  description: 'Invite members to a workspace (v1.1).',
  examples: ['bison workspaces-v1.1 invite-members --emails \'["user@example.com"]\''],
  inputSchema: z.object({
    emails: z.string().describe('JSON string array of email addresses'),
  }),
  cliMappings: {
    options: [
      { field: 'emails', flags: '--emails <string>', description: 'JSON string array of email addresses' },
    ],
  },
  endpoint: { method: 'POST', path: '/api/workspaces/v1.1/invite-members' },
  fieldMappings: { emails: 'body' },
  handler: (input, client) => executeCommand(workspacesV11InviteMembersCommand, input, client),
};
