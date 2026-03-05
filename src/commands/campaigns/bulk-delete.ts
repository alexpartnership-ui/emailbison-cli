import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const campaignsBulkDeleteCommand: CommandDefinition = {
  name: 'campaigns_bulk-delete',
  group: 'campaigns',
  subcommand: 'bulk-delete',
  description: 'Delete multiple campaigns at once.',
  examples: ['bison campaigns bulk-delete --campaign-ids "id1,id2,id3"'],
  inputSchema: z.object({
    campaign_ids: z.string().describe('Comma-separated campaign IDs to delete'),
  }),
  cliMappings: {
    options: [
      { field: 'campaign_ids', flags: '--campaign-ids <string>', description: 'Comma-separated campaign IDs' },
    ],
  },
  endpoint: { method: 'DELETE', path: '/api/campaigns/bulk' },
  fieldMappings: { campaign_ids: 'body' },
  handler: (input, client) => executeCommand(campaignsBulkDeleteCommand, input, client),
};
