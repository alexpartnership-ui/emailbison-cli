import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const replyTemplatesListCommand: CommandDefinition = {
  name: 'reply-templates_list',
  group: 'reply-templates',
  subcommand: 'list',
  description: 'List all reply templates in the workspace.',
  examples: ['bison reply-templates list', 'bison reply-templates list --page 2'],
  inputSchema: z.object({
    page: z.coerce.number().optional().describe('Page number for pagination'),
  }),
  cliMappings: {
    options: [
      { field: 'page', flags: '--page <number>', description: 'Page number' },
    ],
  },
  endpoint: { method: 'GET', path: '/api/reply-templates' },
  fieldMappings: { page: 'query' },
  handler: (input, client) => executeCommand(replyTemplatesListCommand, input, client),
};
