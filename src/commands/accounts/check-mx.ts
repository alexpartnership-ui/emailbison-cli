import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const accountsCheckMxCommand: CommandDefinition = {
  name: 'accounts_check-mx',
  group: 'accounts',
  subcommand: 'check-mx',
  description: 'Check MX records for a sender email account.',
  examples: ['bison accounts check-mx --senderEmailId abc123'],
  inputSchema: z.object({
    senderEmailId: z.string().describe('Sender email account ID'),
  }),
  cliMappings: {
    options: [
      { field: 'senderEmailId', flags: '--senderEmailId <string>', description: 'Sender email account ID' },
    ],
  },
  endpoint: { method: 'POST', path: '/api/sender-emails/{senderEmailId}/check-mx-records' },
  fieldMappings: { senderEmailId: 'path' },
  handler: (input, client) => executeCommand(accountsCheckMxCommand, input, client),
};
