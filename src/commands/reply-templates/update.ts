import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const replyTemplatesUpdateCommand: CommandDefinition = {
  name: 'reply-templates_update',
  group: 'reply-templates',
  subcommand: 'update',
  description: 'Update an existing reply template.',
  examples: ['bison reply-templates update --id abc123 --name "Updated Template"'],
  inputSchema: z.object({
    id: z.string().describe('Reply template ID'),
    name: z.string().optional().describe('Reply template name'),
    body_text: z.string().optional().describe('Plain text body of the template'),
    body_html: z.string().optional().describe('HTML body of the template'),
  }),
  cliMappings: {
    options: [
      { field: 'id', flags: '--id <string>', description: 'Reply template ID' },
      { field: 'name', flags: '--name <string>', description: 'Template name' },
      { field: 'body_text', flags: '--body-text <string>', description: 'Plain text body' },
      { field: 'body_html', flags: '--body-html <string>', description: 'HTML body' },
    ],
  },
  endpoint: { method: 'PUT', path: '/api/reply-templates/{id}' },
  fieldMappings: { id: 'path', name: 'body', body_text: 'body', body_html: 'body' },
  handler: (input, client) => executeCommand(replyTemplatesUpdateCommand, input, client),
};
