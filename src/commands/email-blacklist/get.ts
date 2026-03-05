import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const emailBlacklistGetCommand: CommandDefinition = {
  name: 'email-blacklist_get',
  group: 'email-blacklist',
  subcommand: 'get',
  description: 'Get a specific blacklisted email by ID.',
  examples: ['bison email-blacklist get --blacklisted_email_id abc123'],
  inputSchema: z.object({
    blacklisted_email_id: z.string().describe('Blacklisted email ID'),
  }),
  cliMappings: {
    options: [
      { field: 'blacklisted_email_id', flags: '--blacklisted_email_id <string>', description: 'Blacklisted email ID' },
    ],
  },
  endpoint: { method: 'GET', path: '/api/blacklisted-emails/{blacklisted_email_id}' },
  fieldMappings: { blacklisted_email_id: 'path' },
  handler: (input, client) => executeCommand(emailBlacklistGetCommand, input, client),
};
