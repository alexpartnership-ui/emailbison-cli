import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const repliesReplyCommand: CommandDefinition = {
  name: 'replies_reply',
  group: 'replies',
  subcommand: 'reply',
  description: 'Reply to a specific reply thread.',
  examples: ['bison replies reply <reply-id> --body-text "Thanks for your email"'],
  inputSchema: z.object({
    reply_id: z.string().describe('Reply ID to respond to'),
    body_text: z.string().optional().describe('Plain text body'),
    body_html: z.string().optional().describe('HTML body'),
  }),
  cliMappings: {
    args: [{ field: 'reply_id', name: 'reply-id', required: true }],
    options: [
      { field: 'body_text', flags: '--body-text <text>', description: 'Plain text body' },
      { field: 'body_html', flags: '--body-html <html>', description: 'HTML body' },
    ],
  },
  endpoint: { method: 'POST', path: '/api/replies/{reply_id}/reply' },
  fieldMappings: { reply_id: 'path', body_text: 'body', body_html: 'body' },
  handler: (input, client) => executeCommand(repliesReplyCommand, input, client),
};
