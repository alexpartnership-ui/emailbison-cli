import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const campaignsMoveLeadsCommand: CommandDefinition = {
  name: 'campaigns_move-leads',
  group: 'campaigns',
  subcommand: 'move-leads',
  description: 'Move leads from one campaign to another.',
  examples: ['bison campaigns move-leads --campaign-id abc123 --lead-ids \'["id1"]\' --to-campaign_id xyz789'],
  inputSchema: z.object({
    campaign_id: z.string().describe('Source campaign ID'),
    lead_ids: z.string().describe('JSON array of lead IDs to move'),
    to_campaign_id: z.string().describe('Destination campaign ID'),
  }),
  cliMappings: {
    options: [
      { field: 'campaign_id', flags: '--campaign-id <string>', description: 'Source campaign ID' },
      { field: 'lead_ids', flags: '--lead-ids <string>', description: 'JSON array of lead IDs' },
      { field: 'to_campaign_id', flags: '--to-campaign-id <string>', description: 'Destination campaign ID' },
    ],
  },
  endpoint: { method: 'POST', path: '/api/campaigns/{campaign_id}/leads/move-to-another-campaign' },
  fieldMappings: { campaign_id: 'path', lead_ids: 'body', to_campaign_id: 'body' },
  handler: (input, client) => executeCommand(campaignsMoveLeadsCommand, input, client),
};
