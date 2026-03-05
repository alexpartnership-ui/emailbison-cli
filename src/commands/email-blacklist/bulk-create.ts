import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const emailBlacklistBulkCreateCommand: CommandDefinition = {
  name: 'email-blacklist_bulk-create',
  group: 'email-blacklist',
  subcommand: 'bulk-create',
  description: 'Bulk add emails to the blacklist.',
  examples: ['bison email-blacklist bulk-create --emails \'["a@b.com","c@d.com"]\''],
  inputSchema: z.object({
    emails: z.string().describe('JSON string array of emails to blacklist'),
  }),
  cliMappings: {
    options: [
      { field: 'emails', flags: '--emails <string>', description: 'JSON string array of emails to blacklist' },
    ],
  },
  endpoint: { method: 'POST', path: '/api/blacklisted-emails/bulk' },
  fieldMappings: { emails: 'body' },
  handler: (input, client) => executeCommand(emailBlacklistBulkCreateCommand, input, client),
};
