import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const tagsRemoveFromLeadsCommand: CommandDefinition = {
  name: 'tags_remove-from-leads',
  group: 'tags',
  subcommand: 'remove-from-leads',
  description: 'Remove tags from leads.',
  examples: ['bison tags remove-from-leads --tag-ids \'["tag1"]\' --lead-ids \'["lead1"]\''],
  inputSchema: z.object({
    tag_ids: z.string().describe('JSON string array of tag IDs'),
    lead_ids: z.string().describe('JSON string array of lead IDs'),
  }),
  cliMappings: {
    options: [
      { field: 'tag_ids', flags: '--tag-ids <string>', description: 'JSON string array of tag IDs' },
      { field: 'lead_ids', flags: '--lead-ids <string>', description: 'JSON string array of lead IDs' },
    ],
  },
  endpoint: { method: 'POST', path: '/api/tags/remove-from-leads' },
  fieldMappings: { tag_ids: 'body', lead_ids: 'body' },
  handler: (input, client) => executeCommand(tagsRemoveFromLeadsCommand, input, client),
};
