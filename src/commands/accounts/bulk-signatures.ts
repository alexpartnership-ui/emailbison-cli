import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const accountsBulkSignaturesCommand: CommandDefinition = {
  name: 'accounts_bulk-signatures',
  group: 'accounts',
  subcommand: 'bulk-signatures',
  description: 'Bulk update signatures for multiple sender email accounts.',
  examples: ['bison accounts bulk-signatures --sender_email_ids \'["id1","id2"]\' --signature "<p>Thanks</p>"'],
  inputSchema: z.object({
    sender_email_ids: z.string().describe('JSON string array of sender email IDs'),
    signature: z.string().describe('Email signature to apply'),
  }),
  cliMappings: {
    options: [
      { field: 'sender_email_ids', flags: '--sender_email_ids <string>', description: 'JSON string array of sender email IDs' },
      { field: 'signature', flags: '--signature <string>', description: 'Email signature to apply' },
    ],
  },
  endpoint: { method: 'PATCH', path: '/api/sender-emails/signatures/bulk' },
  fieldMappings: { sender_email_ids: 'body', signature: 'body' },
  handler: (input, client) => executeCommand(accountsBulkSignaturesCommand, input, client),
};
