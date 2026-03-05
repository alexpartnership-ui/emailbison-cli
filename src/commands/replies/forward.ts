import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const repliesForwardCommand: CommandDefinition = {
  name: 'replies_forward',
  group: 'replies',
  subcommand: 'forward',
  description: 'Forward a reply to another email address.',
  examples: ['bison replies forward <reply-id> --to-email user@example.com'],
  inputSchema: z.object({
    reply_id: z.string().describe('Reply ID to forward'),
    to_email: z.string().describe('Recipient email address'),
    body_text: z.string().optional().describe('Optional additional text'),
  }),
  cliMappings: {
    args: [{ field: 'reply_id', name: 'reply-id', required: true }],
    options: [
      { field: 'to_email', flags: '--to-email <email>', description: 'Recipient email address' },
      { field: 'body_text', flags: '--body-text <text>', description: 'Optional additional text' },
    ],
  },
  endpoint: { method: 'POST', path: '/api/replies/{reply_id}/forward' },
  fieldMappings: { reply_id: 'path', to_email: 'body', body_text: 'body' },
  handler: (input, client) => executeCommand(repliesForwardCommand, input, client),
};
