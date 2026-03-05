import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const tagsRemoveFromCampaignsCommand: CommandDefinition = {
  name: 'tags_remove-from-campaigns',
  group: 'tags',
  subcommand: 'remove-from-campaigns',
  description: 'Remove tags from campaigns.',
  examples: ['bison tags remove-from-campaigns --tag-ids \'["tag1"]\' --campaign-ids \'["camp1"]\''],
  inputSchema: z.object({
    tag_ids: z.string().describe('JSON string array of tag IDs'),
    campaign_ids: z.string().describe('JSON string array of campaign IDs'),
  }),
  cliMappings: {
    options: [
      { field: 'tag_ids', flags: '--tag-ids <string>', description: 'JSON string array of tag IDs' },
      { field: 'campaign_ids', flags: '--campaign-ids <string>', description: 'JSON string array of campaign IDs' },
    ],
  },
  endpoint: { method: 'POST', path: '/api/tags/remove-from-campaigns' },
  fieldMappings: { tag_ids: 'body', campaign_ids: 'body' },
  handler: (input, client) => executeCommand(tagsRemoveFromCampaignsCommand, input, client),
};
