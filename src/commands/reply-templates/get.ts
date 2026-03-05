import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const replyTemplatesGetCommand: CommandDefinition = {
  name: 'reply-templates_get',
  group: 'reply-templates',
  subcommand: 'get',
  description: 'Get a specific reply template by ID.',
  examples: ['bison reply-templates get --id abc123'],
  inputSchema: z.object({
    id: z.string().describe('Reply template ID'),
  }),
  cliMappings: {
    options: [
      { field: 'id', flags: '--id <string>', description: 'Reply template ID' },
    ],
  },
  endpoint: { method: 'GET', path: '/api/reply-templates/{id}' },
  fieldMappings: { id: 'path' },
  handler: (input, client) => executeCommand(replyTemplatesGetCommand, input, client),
};
