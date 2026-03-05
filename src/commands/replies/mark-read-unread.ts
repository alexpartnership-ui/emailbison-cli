import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const repliesMarkReadUnreadCommand: CommandDefinition = {
  name: 'replies_mark-read-unread',
  group: 'replies',
  subcommand: 'mark-read-unread',
  description: 'Mark a reply as read or unread.',
  examples: [
    'bison replies mark-read-unread <reply-id> --is-read true',
    'bison replies mark-read-unread <reply-id> --is-read false',
  ],
  inputSchema: z.object({
    reply_id: z.string().describe('Reply ID'),
    is_read: z.coerce.boolean().describe('Set read (true) or unread (false)'),
  }),
  cliMappings: {
    args: [{ field: 'reply_id', name: 'reply-id', required: true }],
    options: [
      { field: 'is_read', flags: '--is-read <boolean>', description: 'Set read (true) or unread (false)' },
    ],
  },
  endpoint: { method: 'PATCH', path: '/api/replies/{reply_id}/mark-as-read-or-unread' },
  fieldMappings: { reply_id: 'path', is_read: 'body' },
  handler: (input, client) => executeCommand(repliesMarkReadUnreadCommand, input, client),
};
