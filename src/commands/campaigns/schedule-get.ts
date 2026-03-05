import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const campaignsScheduleGetCommand: CommandDefinition = {
  name: 'campaigns_schedule-get',
  group: 'campaigns',
  subcommand: 'schedule-get',
  description: 'Get the schedule for a campaign.',
  examples: ['bison campaigns schedule-get --campaign-id abc123'],
  inputSchema: z.object({
    campaign_id: z.string().describe('Campaign ID'),
  }),
  cliMappings: {
    options: [
      { field: 'campaign_id', flags: '--campaign-id <string>', description: 'Campaign ID' },
    ],
  },
  endpoint: { method: 'GET', path: '/api/campaigns/{campaign_id}/schedule' },
  fieldMappings: { campaign_id: 'path' },
  handler: (input, client) => executeCommand(campaignsScheduleGetCommand, input, client),
};
