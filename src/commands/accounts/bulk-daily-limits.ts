import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const accountsBulkDailyLimitsCommand: CommandDefinition = {
  name: 'accounts_bulk-daily-limits',
  group: 'accounts',
  subcommand: 'bulk-daily-limits',
  description: 'Bulk update daily sending limits for multiple sender email accounts.',
  examples: ['bison accounts bulk-daily-limits --sender_email_ids \'["id1","id2"]\' --daily_limit 50'],
  inputSchema: z.object({
    sender_email_ids: z.string().describe('JSON string array of sender email IDs'),
    daily_limit: z.coerce.number().describe('Daily sending limit to apply'),
  }),
  cliMappings: {
    options: [
      { field: 'sender_email_ids', flags: '--sender_email_ids <string>', description: 'JSON string array of sender email IDs' },
      { field: 'daily_limit', flags: '--daily_limit <number>', description: 'Daily sending limit to apply' },
    ],
  },
  endpoint: { method: 'PATCH', path: '/api/sender-emails/daily-limits/bulk' },
  fieldMappings: { sender_email_ids: 'body', daily_limit: 'body' },
  handler: (input, client) => executeCommand(accountsBulkDailyLimitsCommand, input, client),
};
