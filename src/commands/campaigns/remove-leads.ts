import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const campaignsRemoveLeadsCommand: CommandDefinition = {
  name: 'campaigns_remove-leads',
  group: 'campaigns',
  subcommand: 'remove-leads',
  description: 'Remove leads from a campaign.',
  examples: ['bison campaigns remove-leads --campaign-id abc123 --lead-ids \'["id1","id2"]\''],
  inputSchema: z.object({
    campaign_id: z.string().describe('Campaign ID'),
    lead_ids: z.string().describe('JSON array of lead IDs to remove'),
  }),
  cliMappings: {
    options: [
      { field: 'campaign_id', flags: '--campaign-id <string>', description: 'Campaign ID' },
      { field: 'lead_ids', flags: '--lead-ids <string>', description: 'JSON array of lead IDs' },
    ],
  },
  endpoint: { method: 'DELETE', path: '/api/campaigns/{campaign_id}/leads' },
  fieldMappings: { campaign_id: 'path', lead_ids: 'body' },
  handler: (input, client) => executeCommand(campaignsRemoveLeadsCommand, input, client),
};
