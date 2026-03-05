import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const campaignsLeadsCommand: CommandDefinition = {
  name: 'campaigns_leads',
  group: 'campaigns',
  subcommand: 'leads',
  description: 'List leads attached to a campaign.',
  examples: ['bison campaigns leads --campaign-id abc123', 'bison campaigns leads --campaign-id abc123 --page 2'],
  inputSchema: z.object({
    campaign_id: z.string().describe('Campaign ID'),
    page: z.coerce.number().optional().describe('Page number for pagination'),
  }),
  cliMappings: {
    options: [
      { field: 'campaign_id', flags: '--campaign-id <string>', description: 'Campaign ID' },
      { field: 'page', flags: '--page <number>', description: 'Page number' },
    ],
  },
  endpoint: { method: 'GET', path: '/api/campaigns/{campaign_id}/leads' },
  fieldMappings: { campaign_id: 'path', page: 'query' },
  handler: (input, client) => executeCommand(campaignsLeadsCommand, input, client),
};
