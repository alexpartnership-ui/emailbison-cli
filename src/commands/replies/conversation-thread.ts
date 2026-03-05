import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const repliesConversationThreadCommand: CommandDefinition = {
  name: 'replies_conversation-thread',
  group: 'replies',
  subcommand: 'conversation-thread',
  description: 'Get the full conversation thread for a reply.',
  examples: ['bison replies conversation-thread <reply-id>'],
  inputSchema: z.object({
    reply_id: z.string().describe('Reply ID'),
  }),
  cliMappings: {
    args: [{ field: 'reply_id', name: 'reply-id', required: true }],
  },
  endpoint: { method: 'GET', path: '/api/replies/{reply_id}/conversation-thread' },
  fieldMappings: { reply_id: 'path' },
  handler: (input, client) => executeCommand(repliesConversationThreadCommand, input, client),
};
