import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const campaignsRemoveSenderEmailsCommand: CommandDefinition = {
  name: 'campaigns_remove-sender-emails',
  group: 'campaigns',
  subcommand: 'remove-sender-emails',
  description: 'Remove sender emails from a campaign.',
  examples: ['bison campaigns remove-sender-emails --campaign_id abc123 --sender_email_ids \'["id1","id2"]\''],
  inputSchema: z.object({
    campaign_id: z.string().describe('Campaign ID'),
    sender_email_ids: z.string().describe('JSON array of sender email IDs to remove'),
  }),
  cliMappings: {
    options: [
      { field: 'campaign_id', flags: '--campaign_id <string>', description: 'Campaign ID' },
      { field: 'sender_email_ids', flags: '--sender_email_ids <string>', description: 'JSON array of sender email IDs' },
    ],
  },
  endpoint: { method: 'DELETE', path: '/api/campaigns/{campaign_id}/remove-sender-emails' },
  fieldMappings: { campaign_id: 'path', sender_email_ids: 'body' },
  handler: (input, client) => executeCommand(campaignsRemoveSenderEmailsCommand, input, client),
};
