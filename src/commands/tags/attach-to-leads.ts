import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const tagsAttachToLeadsCommand: CommandDefinition = {
  name: 'tags_attach-to-leads',
  group: 'tags',
  subcommand: 'attach-to-leads',
  description: 'Attach tags to leads.',
  examples: ['bison tags attach-to-leads --tag_ids \'["tag1"]\' --lead_ids \'["lead1"]\''],
  inputSchema: z.object({
    tag_ids: z.string().describe('JSON string array of tag IDs'),
    lead_ids: z.string().describe('JSON string array of lead IDs'),
  }),
  cliMappings: {
    options: [
      { field: 'tag_ids', flags: '--tag_ids <string>', description: 'JSON string array of tag IDs' },
      { field: 'lead_ids', flags: '--lead_ids <string>', description: 'JSON string array of lead IDs' },
    ],
  },
  endpoint: { method: 'POST', path: '/api/tags/attach-to-leads' },
  fieldMappings: { tag_ids: 'body', lead_ids: 'body' },
  handler: (input, client) => executeCommand(tagsAttachToLeadsCommand, input, client),
};
