import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const tagsAttachToCampaignsCommand: CommandDefinition = {
  name: 'tags_attach-to-campaigns',
  group: 'tags',
  subcommand: 'attach-to-campaigns',
  description: 'Attach tags to campaigns.',
  examples: ['bison tags attach-to-campaigns --tag_ids \'["tag1"]\' --campaign_ids \'["camp1"]\''],
  inputSchema: z.object({
    tag_ids: z.string().describe('JSON string array of tag IDs'),
    campaign_ids: z.string().describe('JSON string array of campaign IDs'),
  }),
  cliMappings: {
    options: [
      { field: 'tag_ids', flags: '--tag_ids <string>', description: 'JSON string array of tag IDs' },
      { field: 'campaign_ids', flags: '--campaign_ids <string>', description: 'JSON string array of campaign IDs' },
    ],
  },
  endpoint: { method: 'POST', path: '/api/tags/attach-to-campaigns' },
  fieldMappings: { tag_ids: 'body', campaign_ids: 'body' },
  handler: (input, client) => executeCommand(tagsAttachToCampaignsCommand, input, client),
};
