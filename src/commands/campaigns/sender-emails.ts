import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const campaignsSenderEmailsCommand: CommandDefinition = {
  name: 'campaigns_sender-emails',
  group: 'campaigns',
  subcommand: 'sender-emails',
  description: 'List sender emails attached to a campaign.',
  examples: ['bison campaigns sender-emails --campaign_id abc123', 'bison campaigns sender-emails --campaign_id abc123 --page 2'],
  inputSchema: z.object({
    campaign_id: z.string().describe('Campaign ID'),
    page: z.coerce.number().optional().describe('Page number for pagination'),
  }),
  cliMappings: {
    options: [
      { field: 'campaign_id', flags: '--campaign_id <string>', description: 'Campaign ID' },
      { field: 'page', flags: '--page <number>', description: 'Page number' },
    ],
  },
  endpoint: { method: 'GET', path: '/api/campaigns/{campaign_id}/sender-emails' },
  fieldMappings: { campaign_id: 'path', page: 'query' },
  handler: (input, client) => executeCommand(campaignsSenderEmailsCommand, input, client),
};
