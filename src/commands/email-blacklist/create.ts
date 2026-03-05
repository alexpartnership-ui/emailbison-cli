import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const emailBlacklistCreateCommand: CommandDefinition = {
  name: 'email-blacklist_create',
  group: 'email-blacklist',
  subcommand: 'create',
  description: 'Add an email to the blacklist.',
  examples: ['bison email-blacklist create --email user@example.com'],
  inputSchema: z.object({
    email: z.string().describe('Email address to blacklist'),
  }),
  cliMappings: {
    options: [
      { field: 'email', flags: '--email <string>', description: 'Email address to blacklist' },
    ],
  },
  endpoint: { method: 'POST', path: '/api/blacklisted-emails' },
  fieldMappings: { email: 'body' },
  handler: (input, client) => executeCommand(emailBlacklistCreateCommand, input, client),
};
