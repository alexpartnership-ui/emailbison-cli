import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const accountsRepliesCommand: CommandDefinition = {
  name: 'accounts_replies',
  group: 'accounts',
  subcommand: 'replies',
  description: 'List replies for a sender email account.',
  examples: ['bison accounts replies --senderEmailId abc123 --page 1'],
  inputSchema: z.object({
    senderEmailId: z.string().describe('Sender email account ID'),
    page: z.coerce.number().optional().describe('Page number for pagination'),
  }),
  cliMappings: {
    options: [
      { field: 'senderEmailId', flags: '--senderEmailId <string>', description: 'Sender email account ID' },
      { field: 'page', flags: '--page <number>', description: 'Page number' },
    ],
  },
  endpoint: { method: 'GET', path: '/api/sender-emails/{senderEmailId}/replies' },
  fieldMappings: { senderEmailId: 'path', page: 'query' },
  handler: (input, client) => executeCommand(accountsRepliesCommand, input, client),
};
