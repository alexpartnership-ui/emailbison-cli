import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const campaignsV11SequenceStepsListCommand: CommandDefinition = {
  name: 'campaigns-v1.1_sequence-steps-list',
  group: 'campaigns-v1.1',
  subcommand: 'sequence-steps-list',
  description: 'List sequence steps for a campaign (v1.1).',
  examples: ['bison campaigns-v1.1 sequence-steps-list --campaign-id abc123'],
  inputSchema: z.object({
    campaign_id: z.string().describe('Campaign ID'),
  }),
  cliMappings: {
    options: [
      { field: 'campaign_id', flags: '--campaign-id <string>', description: 'Campaign ID' },
    ],
  },
  endpoint: { method: 'GET', path: '/api/campaigns/v1.1/{campaign_id}/sequence-steps' },
  fieldMappings: { campaign_id: 'path' },
  handler: (input, client) => executeCommand(campaignsV11SequenceStepsListCommand, input, client),
};
