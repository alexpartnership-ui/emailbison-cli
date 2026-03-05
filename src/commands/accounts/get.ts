import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const accountsGetCommand: CommandDefinition = {
  name: 'accounts_get',
  group: 'accounts',
  subcommand: 'get',
  description: 'Get a specific sender email account by ID.',
  examples: ['bison accounts get --senderEmailId abc123'],
  inputSchema: z.object({
    senderEmailId: z.string().describe('Sender email account ID'),
  }),
  cliMappings: {
    options: [
      { field: 'senderEmailId', flags: '--senderEmailId <string>', description: 'Sender email account ID' },
    ],
  },
  endpoint: { method: 'GET', path: '/api/sender-emails/{senderEmailId}' },
  fieldMappings: { senderEmailId: 'path' },
  handler: (input, client) => executeCommand(accountsGetCommand, input, client),
};
