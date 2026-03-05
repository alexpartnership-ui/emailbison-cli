import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const campaignsSequenceStepsTestEmailCommand: CommandDefinition = {
  name: 'campaigns_sequence-steps-test-email',
  group: 'campaigns',
  subcommand: 'sequence-steps-test-email',
  description: 'Send a test email for a sequence step.',
  examples: ['bison campaigns sequence-steps-test-email --sequence_step_id step123 --to_email test@example.com'],
  inputSchema: z.object({
    sequence_step_id: z.string().describe('Sequence step ID'),
    to_email: z.string().describe('Email address to send test to'),
  }),
  cliMappings: {
    options: [
      { field: 'sequence_step_id', flags: '--sequence_step_id <string>', description: 'Sequence step ID' },
      { field: 'to_email', flags: '--to_email <string>', description: 'Recipient email address' },
    ],
  },
  endpoint: { method: 'POST', path: '/api/campaigns/sequence-steps/{sequence_step_id}/test-email' },
  fieldMappings: { sequence_step_id: 'path', to_email: 'body' },
  handler: (input, client) => executeCommand(campaignsSequenceStepsTestEmailCommand, input, client),
};
