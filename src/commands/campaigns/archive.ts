import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const campaignsArchiveCommand: CommandDefinition = {
  name: 'campaigns_archive',
  group: 'campaigns',
  subcommand: 'archive',
  description: 'Archive a campaign.',
  examples: ['bison campaigns archive --campaign_id abc123'],
  inputSchema: z.object({
    campaign_id: z.string().describe('Campaign ID to archive'),
  }),
  cliMappings: {
    options: [
      { field: 'campaign_id', flags: '--campaign_id <string>', description: 'Campaign ID to archive' },
    ],
  },
  endpoint: { method: 'PATCH', path: '/api/campaigns/{campaign_id}/archive' },
  fieldMappings: { campaign_id: 'path' },
  handler: (input, client) => executeCommand(campaignsArchiveCommand, input, client),
};
