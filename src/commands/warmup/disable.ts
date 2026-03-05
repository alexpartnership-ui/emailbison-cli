import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const warmupDisableCommand: CommandDefinition = {
  name: 'warmup_disable',
  group: 'warmup',
  subcommand: 'disable',
  description: 'Disable warmup for sender emails.',
  examples: ['bison warmup disable --sender_email_ids \'["id1","id2"]\''],
  inputSchema: z.object({
    sender_email_ids: z.string().describe('JSON string array of sender email IDs'),
  }),
  cliMappings: {
    options: [
      { field: 'sender_email_ids', flags: '--sender_email_ids <string>', description: 'JSON string array of sender email IDs' },
    ],
  },
  endpoint: { method: 'PATCH', path: '/api/warmup/sender-emails/disable' },
  fieldMappings: { sender_email_ids: 'body' },
  handler: (input, client) => executeCommand(warmupDisableCommand, input, client),
};
