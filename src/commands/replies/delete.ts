import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const repliesDeleteCommand: CommandDefinition = {
  name: 'replies_delete',
  group: 'replies',
  subcommand: 'delete',
  description: 'Delete a reply by ID.',
  examples: ['bison replies delete <reply-id>'],
  inputSchema: z.object({
    reply_id: z.string().describe('Reply ID to delete'),
  }),
  cliMappings: {
    args: [{ field: 'reply_id', name: 'reply-id', required: true }],
  },
  endpoint: { method: 'DELETE', path: '/api/replies/{reply_id}' },
  fieldMappings: { reply_id: 'path' },
  handler: (input, client) => executeCommand(repliesDeleteCommand, input, client),
};
