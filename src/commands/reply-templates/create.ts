import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const replyTemplatesCreateCommand: CommandDefinition = {
  name: 'reply-templates_create',
  group: 'reply-templates',
  subcommand: 'create',
  description: 'Create a new reply template.',
  examples: ['bison reply-templates create --name "Follow Up" --body-text "Just checking in..."'],
  inputSchema: z.object({
    name: z.string().describe('Reply template name'),
    body_text: z.string().optional().describe('Plain text body of the template'),
    body_html: z.string().optional().describe('HTML body of the template'),
  }),
  cliMappings: {
    options: [
      { field: 'name', flags: '--name <string>', description: 'Template name' },
      { field: 'body_text', flags: '--body-text <string>', description: 'Plain text body' },
      { field: 'body_html', flags: '--body-html <string>', description: 'HTML body' },
    ],
  },
  endpoint: { method: 'POST', path: '/api/reply-templates' },
  fieldMappings: { name: 'body', body_text: 'body', body_html: 'body' },
  handler: (input, client) => executeCommand(replyTemplatesCreateCommand, input, client),
};
