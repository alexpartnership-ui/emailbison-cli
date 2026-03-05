import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const repliesMarkAutomatedCommand: CommandDefinition = {
  name: 'replies_mark-automated',
  group: 'replies',
  subcommand: 'mark-automated',
  description: 'Mark a reply as automated or not automated.',
  examples: [
    'bison replies mark-automated <reply-id> --is-automated true',
    'bison replies mark-automated <reply-id> --is-automated false',
  ],
  inputSchema: z.object({
    reply_id: z.string().describe('Reply ID'),
    is_automated: z.coerce.boolean().describe('Set automated (true) or not automated (false)'),
  }),
  cliMappings: {
    args: [{ field: 'reply_id', name: 'reply-id', required: true }],
    options: [
      { field: 'is_automated', flags: '--is-automated <boolean>', description: 'Set automated (true) or not (false)' },
    ],
  },
  endpoint: { method: 'PATCH', path: '/api/replies/{reply_id}/mark-as-automated-or-not-automated' },
  fieldMappings: { reply_id: 'path', is_automated: 'body' },
  handler: (input, client) => executeCommand(repliesMarkAutomatedCommand, input, client),
};
