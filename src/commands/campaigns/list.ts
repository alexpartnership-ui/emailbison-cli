import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const campaignsListCommand: CommandDefinition = {
  name: 'campaigns_list',
  group: 'campaigns',
  subcommand: 'list',
  description: 'List all campaigns in the workspace.',
  examples: ['bison campaigns list', 'bison campaigns list --page 2 --pretty'],
  inputSchema: z.object({
    page: z.coerce.number().optional().describe('Page number for pagination'),
  }),
  cliMappings: {
    options: [
      { field: 'page', flags: '--page <number>', description: 'Page number' },
    ],
  },
  endpoint: { method: 'GET', path: '/api/campaigns' },
  fieldMappings: { page: 'query' },
  handler: (input, client) => executeCommand(campaignsListCommand, input, client),
};
