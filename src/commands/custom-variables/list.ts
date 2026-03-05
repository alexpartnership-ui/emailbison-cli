import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const customVariablesListCommand: CommandDefinition = {
  name: 'custom-variables_list',
  group: 'custom-variables',
  subcommand: 'list',
  description: 'List all custom variables in the workspace.',
  examples: ['bison custom-variables list', 'bison custom-variables list --page 2'],
  inputSchema: z.object({
    page: z.coerce.number().optional().describe('Page number for pagination'),
  }),
  cliMappings: {
    options: [
      { field: 'page', flags: '--page <number>', description: 'Page number' },
    ],
  },
  endpoint: { method: 'GET', path: '/api/custom-variables' },
  fieldMappings: { page: 'query' },
  handler: (input, client) => executeCommand(customVariablesListCommand, input, client),
};
