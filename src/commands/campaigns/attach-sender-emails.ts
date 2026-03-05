import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const campaignsAttachSenderEmailsCommand: CommandDefinition = {
  name: 'campaigns_attach-sender-emails',
  group: 'campaigns',
  subcommand: 'attach-sender-emails',
  description: 'Attach sender emails to a campaign.',
  examples: ['bison campaigns attach-sender-emails --campaign-id abc123 --sender-email_ids \'["id1","id2"]\''],
  inputSchema: z.object({
    campaign_id: z.string().describe('Campaign ID'),
    sender_email_ids: z.string().describe('JSON array of sender email IDs'),
  }),
  cliMappings: {
    options: [
      { field: 'campaign_id', flags: '--campaign-id <string>', description: 'Campaign ID' },
      { field: 'sender_email_ids', flags: '--sender-email-ids <string>', description: 'JSON array of sender email IDs' },
    ],
  },
  endpoint: { method: 'POST', path: '/api/campaigns/{campaign_id}/attach-sender-emails' },
  fieldMappings: { campaign_id: 'path', sender_email_ids: 'body' },
  handler: (input, client) => executeCommand(campaignsAttachSenderEmailsCommand, input, client),
};
