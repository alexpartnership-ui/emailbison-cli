import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const campaignsSequenceStepsCreateCommand: CommandDefinition = {
  name: 'campaigns_sequence-steps-create',
  group: 'campaigns',
  subcommand: 'sequence-steps-create',
  description: 'Create sequence steps for a campaign.',
  examples: ['bison campaigns sequence-steps-create --campaign_id abc123 --title "Step 1" --sequence_steps \'[{"subject":"Hi","body":"Hello"}]\''],
  inputSchema: z.object({
    campaign_id: z.string().describe('Campaign ID'),
    title: z.string().describe('Sequence step title'),
    sequence_steps: z.string().describe('JSON string of sequence steps array'),
  }),
  cliMappings: {
    options: [
      { field: 'campaign_id', flags: '--campaign_id <string>', description: 'Campaign ID' },
      { field: 'title', flags: '--title <string>', description: 'Sequence step title' },
      { field: 'sequence_steps', flags: '--sequence_steps <string>', description: 'JSON string of sequence steps' },
    ],
  },
  endpoint: { method: 'POST', path: '/api/campaigns/{campaign_id}/sequence-steps' },
  fieldMappings: { campaign_id: 'path', title: 'body', sequence_steps: 'body' },
  handler: (input, client) => executeCommand(campaignsSequenceStepsCreateCommand, input, client),
};
