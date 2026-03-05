import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const repliesUnsubscribeCommand: CommandDefinition = {
  name: 'replies_unsubscribe',
  group: 'replies',
  subcommand: 'unsubscribe',
  description: 'Unsubscribe a reply contact.',
  examples: ['bison replies unsubscribe <reply-id>'],
  inputSchema: z.object({
    reply_id: z.string().describe('Reply ID to unsubscribe'),
  }),
  cliMappings: {
    args: [{ field: 'reply_id', name: 'reply-id', required: true }],
  },
  endpoint: { method: 'PATCH', path: '/api/replies/{reply_id}/unsubscribe' },
  fieldMappings: { reply_id: 'path' },
  handler: (input, client) => executeCommand(repliesUnsubscribeCommand, input, client),
};
