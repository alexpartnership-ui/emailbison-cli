import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const campaignsAttachLeadListCommand: CommandDefinition = {
  name: 'campaigns_attach-lead-list',
  group: 'campaigns',
  subcommand: 'attach-lead-list',
  description: 'Attach an entire lead list to a campaign.',
  examples: ['bison campaigns attach-lead-list --campaign-id abc123 --lead-list_id list456'],
  inputSchema: z.object({
    campaign_id: z.string().describe('Campaign ID'),
    lead_list_id: z.string().describe('Lead list ID to attach'),
  }),
  cliMappings: {
    options: [
      { field: 'campaign_id', flags: '--campaign-id <string>', description: 'Campaign ID' },
      { field: 'lead_list_id', flags: '--lead-list-id <string>', description: 'Lead list ID' },
    ],
  },
  endpoint: { method: 'POST', path: '/api/campaigns/{campaign_id}/leads/attach-lead-list' },
  fieldMappings: { campaign_id: 'path', lead_list_id: 'body' },
  handler: (input, client) => executeCommand(campaignsAttachLeadListCommand, input, client),
};
