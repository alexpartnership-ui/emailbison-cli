import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const campaignsV11SequenceStepsCreateCommand: CommandDefinition = {
  name: 'campaigns-v1.1_sequence-steps-create',
  group: 'campaigns-v1.1',
  subcommand: 'sequence-steps-create',
  description: 'Create sequence steps for a campaign (v1.1).',
  examples: ['bison campaigns-v1.1 sequence-steps-create --campaign-id abc123 --title "Step 1" --sequence-steps \'[...]\''],
  inputSchema: z.object({
    campaign_id: z.string().describe('Campaign ID'),
    title: z.string().describe('Sequence step title'),
    sequence_steps: z.string().describe('JSON string of sequence steps'),
  }),
  cliMappings: {
    options: [
      { field: 'campaign_id', flags: '--campaign-id <string>', description: 'Campaign ID' },
      { field: 'title', flags: '--title <string>', description: 'Sequence step title' },
      { field: 'sequence_steps', flags: '--sequence-steps <string>', description: 'JSON string of sequence steps' },
    ],
  },
  endpoint: { method: 'POST', path: '/api/campaigns/v1.1/{campaign_id}/sequence-steps' },
  fieldMappings: {
    campaign_id: 'path',
    title: 'body',
    sequence_steps: 'body',
  },
  handler: (input, client) => executeCommand(campaignsV11SequenceStepsCreateCommand, input, client),
};
