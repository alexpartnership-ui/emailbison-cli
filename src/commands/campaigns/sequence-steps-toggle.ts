import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const campaignsSequenceStepsToggleCommand: CommandDefinition = {
  name: 'campaigns_sequence-steps-toggle',
  group: 'campaigns',
  subcommand: 'sequence-steps-toggle',
  description: 'Activate or deactivate a sequence step.',
  examples: ['bison campaigns sequence-steps-toggle --sequence_step_id step123'],
  inputSchema: z.object({
    sequence_step_id: z.string().describe('Sequence step ID to toggle'),
  }),
  cliMappings: {
    options: [
      { field: 'sequence_step_id', flags: '--sequence_step_id <string>', description: 'Sequence step ID' },
    ],
  },
  endpoint: { method: 'PATCH', path: '/api/campaigns/sequence-steps/{sequence_step_id}/activate-or-deactivate' },
  fieldMappings: { sequence_step_id: 'path' },
  handler: (input, client) => executeCommand(campaignsSequenceStepsToggleCommand, input, client),
};
