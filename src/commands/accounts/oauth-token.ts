import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const accountsOauthTokenCommand: CommandDefinition = {
  name: 'accounts_oauth-token',
  group: 'accounts',
  subcommand: 'oauth-token',
  description: 'Get the OAuth access token for a sender email account.',
  examples: ['bison accounts oauth-token --senderEmailId abc123'],
  inputSchema: z.object({
    senderEmailId: z.string().describe('Sender email account ID'),
  }),
  cliMappings: {
    options: [
      { field: 'senderEmailId', flags: '--senderEmailId <string>', description: 'Sender email account ID' },
    ],
  },
  endpoint: { method: 'GET', path: '/api/sender-emails/{senderEmailId}/oauth-access-token' },
  fieldMappings: { senderEmailId: 'path' },
  handler: (input, client) => executeCommand(accountsOauthTokenCommand, input, client),
};
