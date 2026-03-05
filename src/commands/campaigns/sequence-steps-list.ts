import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const campaignsSequenceStepsListCommand: CommandDefinition = {
  name: 'campaigns_sequence-steps-list',
  group: 'campaigns',
  subcommand: 'sequence-steps-list',
  description: 'List sequence steps for a campaign.',
  examples: ['bison campaigns sequence-steps-list --campaign_id abc123'],
  inputSchema: z.object({
    campaign_id: z.string().describe('Campaign ID'),
  }),
  cliMappings: {
    options: [
      { field: 'campaign_id', flags: '--campaign_id <string>', description: 'Campaign ID' },
    ],
  },
  endpoint: { method: 'GET', path: '/api/campaigns/{campaign_id}/sequence-steps' },
  fieldMappings: { campaign_id: 'path' },
  handler: (input, client) => executeCommand(campaignsSequenceStepsListCommand, input, client),
};
