import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const accountsDeleteCommand: CommandDefinition = {
  name: 'accounts_delete',
  group: 'accounts',
  subcommand: 'delete',
  description: 'Delete a sender email account.',
  examples: ['bison accounts delete --senderEmailId abc123'],
  inputSchema: z.object({
    senderEmailId: z.string().describe('Sender email account ID'),
  }),
  cliMappings: {
    options: [
      { field: 'senderEmailId', flags: '--senderEmailId <string>', description: 'Sender email account ID' },
    ],
  },
  endpoint: { method: 'DELETE', path: '/api/sender-emails/{senderEmailId}' },
  fieldMappings: { senderEmailId: 'path' },
  handler: (input, client) => executeCommand(accountsDeleteCommand, input, client),
};
