import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const campaignsV11SequenceStepsUpdateCommand: CommandDefinition = {
  name: 'campaigns-v1.1_sequence-steps-update',
  group: 'campaigns-v1.1',
  subcommand: 'sequence-steps-update',
  description: 'Update a sequence step (v1.1).',
  examples: ['bison campaigns-v1.1 sequence-steps-update --sequence_id abc123 --email_subject "New Subject"'],
  inputSchema: z.object({
    sequence_id: z.string().describe('Sequence step ID'),
    email_subject: z.string().optional().describe('Email subject'),
    email_body: z.string().optional().describe('Email body'),
    wait_in_days: z.coerce.number().optional().describe('Wait time in days between steps'),
    variant: z.string().optional().describe('Variant identifier'),
    variant_from_step: z.string().optional().describe('Variant from step reference'),
    thread_reply: z.string().optional().describe('Thread reply setting'),
  }),
  cliMappings: {
    options: [
      { field: 'sequence_id', flags: '--sequence_id <string>', description: 'Sequence step ID' },
      { field: 'email_subject', flags: '--email_subject <string>', description: 'Email subject' },
      { field: 'email_body', flags: '--email_body <string>', description: 'Email body' },
      { field: 'wait_in_days', flags: '--wait_in_days <number>', description: 'Wait time in days' },
      { field: 'variant', flags: '--variant <string>', description: 'Variant identifier' },
      { field: 'variant_from_step', flags: '--variant_from_step <string>', description: 'Variant from step reference' },
      { field: 'thread_reply', flags: '--thread_reply <string>', description: 'Thread reply setting' },
    ],
  },
  endpoint: { method: 'PUT', path: '/api/campaigns/v1.1/sequence-steps/{sequence_id}' },
  fieldMappings: {
    sequence_id: 'path',
    email_subject: 'body',
    email_body: 'body',
    wait_in_days: 'body',
    variant: 'body',
    variant_from_step: 'body',
    thread_reply: 'body',
  },
  handler: (input, client) => executeCommand(campaignsV11SequenceStepsUpdateCommand, input, client),
};
