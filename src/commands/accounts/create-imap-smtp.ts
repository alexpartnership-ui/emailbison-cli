import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const accountsCreateImapSmtpCommand: CommandDefinition = {
  name: 'accounts_create-imap-smtp',
  group: 'accounts',
  subcommand: 'create-imap-smtp',
  description: 'Create a sender email account via IMAP/SMTP credentials.',
  examples: [
    'bison accounts create-imap-smtp --email user@example.com --from_name "John" --imap_host imap.example.com --imap_port 993 --imap_username user --imap_password pass --smtp_host smtp.example.com --smtp_port 587 --smtp_username user --smtp_password pass',
  ],
  inputSchema: z.object({
    email: z.string().describe('Email address'),
    from_name: z.string().describe('Display name for the sender'),
    imap_host: z.string().describe('IMAP server hostname'),
    imap_port: z.coerce.number().describe('IMAP server port'),
    imap_username: z.string().describe('IMAP username'),
    imap_password: z.string().describe('IMAP password'),
    smtp_host: z.string().describe('SMTP server hostname'),
    smtp_port: z.coerce.number().describe('SMTP server port'),
    smtp_username: z.string().describe('SMTP username'),
    smtp_password: z.string().describe('SMTP password'),
  }),
  cliMappings: {
    options: [
      { field: 'email', flags: '--email <string>', description: 'Email address' },
      { field: 'from_name', flags: '--from-name <string>', description: 'Display name for the sender' },
      { field: 'imap_host', flags: '--imap-host <string>', description: 'IMAP server hostname' },
      { field: 'imap_port', flags: '--imap-port <number>', description: 'IMAP server port' },
      { field: 'imap_username', flags: '--imap-username <string>', description: 'IMAP username' },
      { field: 'imap_password', flags: '--imap-password <string>', description: 'IMAP password' },
      { field: 'smtp_host', flags: '--smtp-host <string>', description: 'SMTP server hostname' },
      { field: 'smtp_port', flags: '--smtp-port <number>', description: 'SMTP server port' },
      { field: 'smtp_username', flags: '--smtp-username <string>', description: 'SMTP username' },
      { field: 'smtp_password', flags: '--smtp-password <string>', description: 'SMTP password' },
    ],
  },
  endpoint: { method: 'POST', path: '/api/sender-emails/imap-smtp' },
  fieldMappings: {
    email: 'body',
    from_name: 'body',
    imap_host: 'body',
    imap_port: 'body',
    imap_username: 'body',
    imap_password: 'body',
    smtp_host: 'body',
    smtp_port: 'body',
    smtp_username: 'body',
    smtp_password: 'body',
  },
  handler: (input, client) => executeCommand(accountsCreateImapSmtpCommand, input, client),
};
