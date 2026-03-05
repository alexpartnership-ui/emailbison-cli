import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const repliesMarkInterestedCommand: CommandDefinition = {
  name: 'replies_mark-interested',
  group: 'replies',
  subcommand: 'mark-interested',
  description: 'Mark a reply as interested.',
  examples: ['bison replies mark-interested <reply-id>'],
  inputSchema: z.object({
    reply_id: z.string().describe('Reply ID to mark as interested'),
  }),
  cliMappings: {
    args: [{ field: 'reply_id', name: 'reply-id', required: true }],
  },
  endpoint: { method: 'PATCH', path: '/api/replies/{reply_id}/mark-as-interested' },
  fieldMappings: { reply_id: 'path' },
  handler: (input, client) => executeCommand(repliesMarkInterestedCommand, input, client),
};
