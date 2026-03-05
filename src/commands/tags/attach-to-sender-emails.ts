import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const tagsAttachToSenderEmailsCommand: CommandDefinition = {
  name: 'tags_attach-to-sender-emails',
  group: 'tags',
  subcommand: 'attach-to-sender-emails',
  description: 'Attach tags to sender email accounts.',
  examples: ['bison tags attach-to-sender-emails --tag-ids \'["tag1"]\' --sender-email_ids \'["acc1"]\''],
  inputSchema: z.object({
    tag_ids: z.string().describe('JSON string array of tag IDs'),
    sender_email_ids: z.string().describe('JSON string array of sender email IDs'),
  }),
  cliMappings: {
    options: [
      { field: 'tag_ids', flags: '--tag-ids <string>', description: 'JSON string array of tag IDs' },
      { field: 'sender_email_ids', flags: '--sender-email-ids <string>', description: 'JSON string array of sender email IDs' },
    ],
  },
  endpoint: { method: 'POST', path: '/api/tags/attach-to-sender-emails' },
  fieldMappings: { tag_ids: 'body', sender_email_ids: 'body' },
  handler: (input, client) => executeCommand(tagsAttachToSenderEmailsCommand, input, client),
};
