import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const replyTemplatesDeleteCommand: CommandDefinition = {
  name: 'reply-templates_delete',
  group: 'reply-templates',
  subcommand: 'delete',
  description: 'Delete a reply template.',
  examples: ['bison reply-templates delete --reply_template_id abc123'],
  inputSchema: z.object({
    reply_template_id: z.string().describe('Reply template ID to delete'),
  }),
  cliMappings: {
    options: [
      { field: 'reply_template_id', flags: '--reply_template_id <string>', description: 'Reply template ID' },
    ],
  },
  endpoint: { method: 'DELETE', path: '/api/reply-templates/{reply_template_id}' },
  fieldMappings: { reply_template_id: 'path' },
  handler: (input, client) => executeCommand(replyTemplatesDeleteCommand, input, client),
};
