import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const campaignsDeleteCommand: CommandDefinition = {
  name: 'campaigns_delete',
  group: 'campaigns',
  subcommand: 'delete',
  description: 'Delete a campaign.',
  examples: ['bison campaigns delete --campaign-id abc123'],
  inputSchema: z.object({
    campaign_id: z.string().describe('Campaign ID to delete'),
  }),
  cliMappings: {
    options: [
      { field: 'campaign_id', flags: '--campaign-id <string>', description: 'Campaign ID to delete' },
    ],
  },
  endpoint: { method: 'DELETE', path: '/api/campaigns/{campaign_id}' },
  fieldMappings: { campaign_id: 'path' },
  handler: (input, client) => executeCommand(campaignsDeleteCommand, input, client),
};
