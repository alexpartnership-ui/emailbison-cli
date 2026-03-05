import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const campaignsAttachLeadsCommand: CommandDefinition = {
  name: 'campaigns_attach-leads',
  group: 'campaigns',
  subcommand: 'attach-leads',
  description: 'Attach leads to a campaign.',
  examples: ['bison campaigns attach-leads --campaign-id abc123 --lead-ids \'["id1","id2"]\''],
  inputSchema: z.object({
    campaign_id: z.string().describe('Campaign ID'),
    lead_ids: z.string().describe('JSON array of lead IDs to attach'),
  }),
  cliMappings: {
    options: [
      { field: 'campaign_id', flags: '--campaign-id <string>', description: 'Campaign ID' },
      { field: 'lead_ids', flags: '--lead-ids <string>', description: 'JSON array of lead IDs' },
    ],
  },
  endpoint: { method: 'POST', path: '/api/campaigns/{campaign_id}/leads/attach-leads' },
  fieldMappings: { campaign_id: 'path', lead_ids: 'body' },
  handler: (input, client) => executeCommand(campaignsAttachLeadsCommand, input, client),
};
