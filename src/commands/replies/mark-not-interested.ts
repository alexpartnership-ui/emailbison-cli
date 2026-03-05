import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const repliesMarkNotInterestedCommand: CommandDefinition = {
  name: 'replies_mark-not-interested',
  group: 'replies',
  subcommand: 'mark-not-interested',
  description: 'Mark a reply as not interested.',
  examples: ['bison replies mark-not-interested <reply-id>'],
  inputSchema: z.object({
    reply_id: z.string().describe('Reply ID to mark as not interested'),
  }),
  cliMappings: {
    args: [{ field: 'reply_id', name: 'reply-id', required: true }],
  },
  endpoint: { method: 'PATCH', path: '/api/replies/{reply_id}/mark-as-not-interested' },
  fieldMappings: { reply_id: 'path' },
  handler: (input, client) => executeCommand(repliesMarkNotInterestedCommand, input, client),
};
