import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const warmupUpdateLimitsCommand: CommandDefinition = {
  name: 'warmup_update-limits',
  group: 'warmup',
  subcommand: 'update-limits',
  description: 'Update daily warmup limits for sender emails.',
  examples: ['bison warmup update-limits --sender_email_ids \'["id1"]\' --daily_warmup_limit 50'],
  inputSchema: z.object({
    sender_email_ids: z.string().describe('JSON string array of sender email IDs'),
    daily_warmup_limit: z.coerce.number().describe('Daily warmup limit'),
  }),
  cliMappings: {
    options: [
      { field: 'sender_email_ids', flags: '--sender_email_ids <string>', description: 'JSON string array of sender email IDs' },
      { field: 'daily_warmup_limit', flags: '--daily_warmup_limit <number>', description: 'Daily warmup limit' },
    ],
  },
  endpoint: { method: 'PATCH', path: '/api/warmup/sender-emails/update-daily-warmup-limits' },
  fieldMappings: {
    sender_email_ids: 'body',
    daily_warmup_limit: 'body',
  },
  handler: (input, client) => executeCommand(warmupUpdateLimitsCommand, input, client),
};
