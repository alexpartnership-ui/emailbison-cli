import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const campaignsPauseCommand: CommandDefinition = {
  name: 'campaigns_pause',
  group: 'campaigns',
  subcommand: 'pause',
  description: 'Pause a running campaign.',
  examples: ['bison campaigns pause --campaign-id abc123'],
  inputSchema: z.object({
    campaign_id: z.string().describe('Campaign ID to pause'),
  }),
  cliMappings: {
    options: [
      { field: 'campaign_id', flags: '--campaign-id <string>', description: 'Campaign ID to pause' },
    ],
  },
  endpoint: { method: 'PATCH', path: '/api/campaigns/{campaign_id}/pause' },
  fieldMappings: { campaign_id: 'path' },
  handler: (input, client) => executeCommand(campaignsPauseCommand, input, client),
};
