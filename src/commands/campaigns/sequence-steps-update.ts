import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const campaignsSequenceStepsUpdateCommand: CommandDefinition = {
  name: 'campaigns_sequence-steps-update',
  group: 'campaigns',
  subcommand: 'sequence-steps-update',
  description: 'Update a sequence step.',
  examples: ['bison campaigns sequence-steps-update --sequence_id seq123 --email_subject "New Subject"'],
  inputSchema: z.object({
    sequence_id: z.string().describe('Sequence step ID'),
    email_subject: z.string().optional().describe('Email subject'),
    email_body: z.string().optional().describe('Email body'),
    wait_in_days: z.coerce.number().optional().describe('Wait time in days before sending'),
    variant: z.string().optional().describe('Variant identifier'),
    variant_from_step: z.string().optional().describe('Step to derive variant from'),
    thread_reply: z.boolean().optional().describe('Send as thread reply'),
  }),
  cliMappings: {
    options: [
      { field: 'sequence_id', flags: '--sequence_id <string>', description: 'Sequence step ID' },
      { field: 'email_subject', flags: '--email_subject <string>', description: 'Email subject' },
      { field: 'email_body', flags: '--email_body <string>', description: 'Email body' },
      { field: 'wait_in_days', flags: '--wait_in_days <number>', description: 'Wait time in days' },
      { field: 'variant', flags: '--variant <string>', description: 'Variant identifier' },
      { field: 'variant_from_step', flags: '--variant_from_step <string>', description: 'Step to derive variant from' },
      { field: 'thread_reply', flags: '--thread_reply', description: 'Send as thread reply' },
    ],
  },
  endpoint: { method: 'PUT', path: '/api/campaigns/sequence-steps/{sequence_id}' },
  fieldMappings: {
    sequence_id: 'path',
    email_subject: 'body',
    email_body: 'body',
    wait_in_days: 'body',
    variant: 'body',
    variant_from_step: 'body',
    thread_reply: 'body',
  },
  handler: (input, client) => executeCommand(campaignsSequenceStepsUpdateCommand, input, client),
};
