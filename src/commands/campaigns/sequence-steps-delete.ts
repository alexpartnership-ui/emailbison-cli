import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const campaignsSequenceStepsDeleteCommand: CommandDefinition = {
  name: 'campaigns_sequence-steps-delete',
  group: 'campaigns',
  subcommand: 'sequence-steps-delete',
  description: 'Delete a sequence step.',
  examples: ['bison campaigns sequence-steps-delete --sequence-step_id step123'],
  inputSchema: z.object({
    sequence_step_id: z.string().describe('Sequence step ID to delete'),
  }),
  cliMappings: {
    options: [
      { field: 'sequence_step_id', flags: '--sequence-step-id <string>', description: 'Sequence step ID' },
    ],
  },
  endpoint: { method: 'DELETE', path: '/api/campaigns/sequence-steps/{sequence_step_id}' },
  fieldMappings: { sequence_step_id: 'path' },
  handler: (input, client) => executeCommand(campaignsSequenceStepsDeleteCommand, input, client),
};
