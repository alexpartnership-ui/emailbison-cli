import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const repliesPushToFollowupCommand: CommandDefinition = {
  name: 'replies_push-to-followup',
  group: 'replies',
  subcommand: 'push-to-followup',
  description: 'Push a reply to a follow-up campaign.',
  examples: ['bison replies push-to-followup <reply-id> --campaign-id abc123'],
  inputSchema: z.object({
    reply_id: z.string().describe('Reply ID'),
    campaign_id: z.string().describe('Follow-up campaign ID'),
  }),
  cliMappings: {
    args: [{ field: 'reply_id', name: 'reply-id', required: true }],
    options: [
      { field: 'campaign_id', flags: '--campaign-id <id>', description: 'Follow-up campaign ID' },
    ],
  },
  endpoint: { method: 'POST', path: '/api/replies/{reply_id}/followup-campaign/push' },
  fieldMappings: { reply_id: 'path', campaign_id: 'body' },
  handler: (input, client) => executeCommand(repliesPushToFollowupCommand, input, client),
};
