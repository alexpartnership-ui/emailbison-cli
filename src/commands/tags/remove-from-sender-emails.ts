import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const tagsRemoveFromSenderEmailsCommand: CommandDefinition = {
  name: 'tags_remove-from-sender-emails',
  group: 'tags',
  subcommand: 'remove-from-sender-emails',
  description: 'Remove tags from sender email accounts.',
  examples: ['bison tags remove-from-sender-emails --tag_ids \'["tag1"]\' --sender_email_ids \'["acc1"]\''],
  inputSchema: z.object({
    tag_ids: z.string().describe('JSON string array of tag IDs'),
    sender_email_ids: z.string().describe('JSON string array of sender email IDs'),
  }),
  cliMappings: {
    options: [
      { field: 'tag_ids', flags: '--tag_ids <string>', description: 'JSON string array of tag IDs' },
      { field: 'sender_email_ids', flags: '--sender_email_ids <string>', description: 'JSON string array of sender email IDs' },
    ],
  },
  endpoint: { method: 'POST', path: '/api/tags/remove-from-sender-emails' },
  fieldMappings: { tag_ids: 'body', sender_email_ids: 'body' },
  handler: (input, client) => executeCommand(tagsRemoveFromSenderEmailsCommand, input, client),
};
