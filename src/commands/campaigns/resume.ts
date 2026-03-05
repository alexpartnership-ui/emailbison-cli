import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const campaignsResumeCommand: CommandDefinition = {
  name: 'campaigns_resume',
  group: 'campaigns',
  subcommand: 'resume',
  description: 'Resume a paused campaign.',
  examples: ['bison campaigns resume --campaign_id abc123'],
  inputSchema: z.object({
    campaign_id: z.string().describe('Campaign ID to resume'),
  }),
  cliMappings: {
    options: [
      { field: 'campaign_id', flags: '--campaign_id <string>', description: 'Campaign ID to resume' },
    ],
  },
  endpoint: { method: 'PATCH', path: '/api/campaigns/{campaign_id}/resume' },
  fieldMappings: { campaign_id: 'path' },
  handler: (input, client) => executeCommand(campaignsResumeCommand, input, client),
};
