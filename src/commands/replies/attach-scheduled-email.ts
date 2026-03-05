import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const repliesAttachScheduledEmailCommand: CommandDefinition = {
  name: 'replies_attach-scheduled-email',
  group: 'replies',
  subcommand: 'attach-scheduled-email',
  description: 'Attach a scheduled email to a reply.',
  examples: ['bison replies attach-scheduled-email <reply-id> --scheduled-email-id abc123'],
  inputSchema: z.object({
    reply_id: z.string().describe('Reply ID'),
    scheduled_email_id: z.string().describe('Scheduled email ID to attach'),
  }),
  cliMappings: {
    args: [{ field: 'reply_id', name: 'reply-id', required: true }],
    options: [
      { field: 'scheduled_email_id', flags: '--scheduled-email-id <id>', description: 'Scheduled email ID' },
    ],
  },
  endpoint: { method: 'POST', path: '/api/replies/{reply_id}/attach-scheduled-email-to-reply' },
  fieldMappings: { reply_id: 'path', scheduled_email_id: 'body' },
  handler: (input, client) => executeCommand(repliesAttachScheduledEmailCommand, input, client),
};
