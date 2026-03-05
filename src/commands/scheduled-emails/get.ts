import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const scheduledEmailsGetCommand: CommandDefinition = {
  name: 'scheduled-emails_get',
  group: 'scheduled-emails',
  subcommand: 'get',
  description: 'Get a specific scheduled email by ID.',
  examples: ['bison scheduled-emails get --id abc123'],
  inputSchema: z.object({
    id: z.string().describe('Scheduled email ID'),
  }),
  cliMappings: {
    options: [
      { field: 'id', flags: '--id <string>', description: 'Scheduled email ID' },
    ],
  },
  endpoint: { method: 'GET', path: '/api/scheduled-emails/{id}' },
  fieldMappings: { id: 'path' },
  handler: (input, client) => executeCommand(scheduledEmailsGetCommand, input, client),
};
