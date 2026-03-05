import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const accountsBulkCreateCommand: CommandDefinition = {
  name: 'accounts_bulk-create',
  group: 'accounts',
  subcommand: 'bulk-create',
  description: 'Bulk create sender email accounts.',
  examples: ['bison accounts bulk-create --sender-emails \'[{"email":"a@b.com"}]\''],
  inputSchema: z.object({
    sender_emails: z.string().describe('JSON string array of sender email objects'),
  }),
  cliMappings: {
    options: [
      { field: 'sender_emails', flags: '--sender-emails <string>', description: 'JSON string array of sender email objects' },
    ],
  },
  endpoint: { method: 'POST', path: '/api/sender-emails/bulk' },
  fieldMappings: { sender_emails: 'body' },
  handler: (input, client) => executeCommand(accountsBulkCreateCommand, input, client),
};
