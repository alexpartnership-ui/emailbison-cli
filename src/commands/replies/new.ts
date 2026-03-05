import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const repliesNewCommand: CommandDefinition = {
  name: 'replies_new',
  group: 'replies',
  subcommand: 'new',
  description: 'Send a new reply email.',
  examples: [
    'bison replies new --to-email user@example.com --from-sender-email-id abc123 --subject "Hello" --body-text "Hi there"',
  ],
  inputSchema: z.object({
    to_email: z.string().describe('Recipient email address'),
    from_sender_email_id: z.string().describe('Sender email account ID'),
    subject: z.string().optional().describe('Email subject'),
    body_text: z.string().optional().describe('Plain text body'),
    body_html: z.string().optional().describe('HTML body'),
  }),
  cliMappings: {
    options: [
      { field: 'to_email', flags: '--to-email <email>', description: 'Recipient email address' },
      { field: 'from_sender_email_id', flags: '--from-sender-email-id <id>', description: 'Sender email account ID' },
      { field: 'subject', flags: '--subject <text>', description: 'Email subject' },
      { field: 'body_text', flags: '--body-text <text>', description: 'Plain text body' },
      { field: 'body_html', flags: '--body-html <html>', description: 'HTML body' },
    ],
  },
  endpoint: { method: 'POST', path: '/api/replies/new' },
  fieldMappings: {
    to_email: 'body',
    from_sender_email_id: 'body',
    subject: 'body',
    body_text: 'body',
    body_html: 'body',
  },
  handler: (input, client) => executeCommand(repliesNewCommand, input, client),
};
