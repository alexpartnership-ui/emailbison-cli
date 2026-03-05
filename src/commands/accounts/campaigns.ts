import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const accountsCampaignsCommand: CommandDefinition = {
  name: 'accounts_campaigns',
  group: 'accounts',
  subcommand: 'campaigns',
  description: 'List campaigns associated with a sender email account.',
  examples: ['bison accounts campaigns --senderEmailId abc123 --page 1'],
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
  endpoint: { method: 'GET', path: '/api/sender-emails/{senderEmailId}/campaigns' },
  fieldMappings: { senderEmailId: 'path', page: 'query' },
  handler: (input, client) => executeCommand(accountsCampaignsCommand, input, client),
};
