import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const campaignsStopFutureEmailsCommand: CommandDefinition = {
  name: 'campaigns_stop-future-emails',
  group: 'campaigns',
  subcommand: 'stop-future-emails',
  description: 'Stop future emails for specific leads in a campaign.',
  examples: ['bison campaigns stop-future-emails --campaign_id abc123 --lead_ids \'["id1","id2"]\''],
  inputSchema: z.object({
    campaign_id: z.string().describe('Campaign ID'),
    lead_ids: z.string().describe('JSON array of lead IDs'),
  }),
  cliMappings: {
    options: [
      { field: 'campaign_id', flags: '--campaign_id <string>', description: 'Campaign ID' },
      { field: 'lead_ids', flags: '--lead_ids <string>', description: 'JSON array of lead IDs' },
    ],
  },
  endpoint: { method: 'POST', path: '/api/campaigns/{campaign_id}/leads/stop-future-emails' },
  fieldMappings: { campaign_id: 'path', lead_ids: 'body' },
  handler: (input, client) => executeCommand(campaignsStopFutureEmailsCommand, input, client),
};
