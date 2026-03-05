import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const campaignsStatsCommand: CommandDefinition = {
  name: 'campaigns_stats',
  group: 'campaigns',
  subcommand: 'stats',
  description: 'Get campaign statistics.',
  examples: ['bison campaigns stats --campaign_id abc123'],
  inputSchema: z.object({
    campaign_id: z.string().describe('Campaign ID'),
  }),
  cliMappings: {
    options: [
      { field: 'campaign_id', flags: '--campaign_id <string>', description: 'Campaign ID' },
    ],
  },
  endpoint: { method: 'POST', path: '/api/campaigns/{campaign_id}/stats' },
  fieldMappings: { campaign_id: 'path' },
  handler: (input, client) => executeCommand(campaignsStatsCommand, input, client),
};
