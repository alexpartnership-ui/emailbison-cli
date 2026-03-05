import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const accountsUpdateCommand: CommandDefinition = {
  name: 'accounts_update',
  group: 'accounts',
  subcommand: 'update',
  description: 'Update a sender email account.',
  examples: ['bison accounts update --senderEmailId abc123 --from_name "John Doe"'],
  inputSchema: z.object({
    senderEmailId: z.string().describe('Sender email account ID'),
    from_name: z.string().optional().describe('Display name for the sender'),
    daily_limit: z.coerce.number().optional().describe('Daily sending limit'),
    signature: z.string().optional().describe('Email signature'),
  }),
  cliMappings: {
    options: [
      { field: 'senderEmailId', flags: '--senderEmailId <string>', description: 'Sender email account ID' },
      { field: 'from_name', flags: '--from_name <string>', description: 'Display name for the sender' },
      { field: 'daily_limit', flags: '--daily_limit <number>', description: 'Daily sending limit' },
      { field: 'signature', flags: '--signature <string>', description: 'Email signature' },
    ],
  },
  endpoint: { method: 'PATCH', path: '/api/sender-emails/{senderEmailId}' },
  fieldMappings: {
    senderEmailId: 'path',
    from_name: 'body',
    daily_limit: 'body',
    signature: 'body',
  },
  handler: (input, client) => executeCommand(accountsUpdateCommand, input, client),
};
