import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const emailBlacklistDeleteCommand: CommandDefinition = {
  name: 'email-blacklist_delete',
  group: 'email-blacklist',
  subcommand: 'delete',
  description: 'Remove an email from the blacklist.',
  examples: ['bison email-blacklist delete --blacklisted-email_id abc123'],
  inputSchema: z.object({
    blacklisted_email_id: z.string().describe('Blacklisted email ID'),
  }),
  cliMappings: {
    options: [
      { field: 'blacklisted_email_id', flags: '--blacklisted-email-id <string>', description: 'Blacklisted email ID' },
    ],
  },
  endpoint: { method: 'DELETE', path: '/api/blacklisted-emails/{blacklisted_email_id}' },
  fieldMappings: { blacklisted_email_id: 'path' },
  handler: (input, client) => executeCommand(emailBlacklistDeleteCommand, input, client),
};
