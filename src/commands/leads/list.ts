import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const leadsListCommand: CommandDefinition = {
  name: 'leads_list',
  group: 'leads',
  subcommand: 'list',
  description: 'List all leads in the workspace.',
  examples: ['bison leads list', 'bison leads list --page 2'],
  inputSchema: z.object({
    page: z.coerce.number().optional().describe('Page number'),
  }),
  cliMappings: {
    options: [
      { field: 'page', flags: '--page <number>', description: 'Page number' },
    ],
  },
  endpoint: { method: 'GET', path: '/api/leads' },
  fieldMappings: { page: 'query' },
  handler: (input, client) => executeCommand(leadsListCommand, input, client),
};
