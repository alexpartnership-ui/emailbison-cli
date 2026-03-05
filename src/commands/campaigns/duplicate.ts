import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const campaignsDuplicateCommand: CommandDefinition = {
  name: 'campaigns_duplicate',
  group: 'campaigns',
  subcommand: 'duplicate',
  description: 'Duplicate an existing campaign.',
  examples: ['bison campaigns duplicate --campaign_id abc123'],
  inputSchema: z.object({
    campaign_id: z.string().describe('Campaign ID to duplicate'),
  }),
  cliMappings: {
    options: [
      { field: 'campaign_id', flags: '--campaign_id <string>', description: 'Campaign ID to duplicate' },
    ],
  },
  endpoint: { method: 'POST', path: '/api/campaigns/{campaign_id}/duplicate' },
  fieldMappings: { campaign_id: 'path' },
  handler: (input, client) => executeCommand(campaignsDuplicateCommand, input, client),
};
