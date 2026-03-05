import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const campaignsLineAreaChartStatsCommand: CommandDefinition = {
  name: 'campaigns_line-area-chart-stats',
  group: 'campaigns',
  subcommand: 'line-area-chart-stats',
  description: 'Get line/area chart statistics for a campaign.',
  examples: ['bison campaigns line-area-chart-stats --campaign-id abc123'],
  inputSchema: z.object({
    campaign_id: z.string().describe('Campaign ID'),
  }),
  cliMappings: {
    options: [
      { field: 'campaign_id', flags: '--campaign-id <string>', description: 'Campaign ID' },
    ],
  },
  endpoint: { method: 'GET', path: '/api/campaigns/{campaign_id}/line-area-chart-stats' },
  fieldMappings: { campaign_id: 'path' },
  handler: (input, client) => executeCommand(campaignsLineAreaChartStatsCommand, input, client),
};
