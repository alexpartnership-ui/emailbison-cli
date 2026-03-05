import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const workspacesV11ListCommand: CommandDefinition = {
  name: 'workspaces-v1.1_list',
  group: 'workspaces-v1.1',
  subcommand: 'list',
  description: 'List all workspaces (v1.1).',
  examples: ['bison workspaces-v1.1 list', 'bison workspaces-v1.1 list --page 2'],
  inputSchema: z.object({
    page: z.coerce.number().optional().describe('Page number for pagination'),
  }),
  cliMappings: {
    options: [
      { field: 'page', flags: '--page <number>', description: 'Page number' },
    ],
  },
  endpoint: { method: 'GET', path: '/api/workspaces/v1.1' },
  fieldMappings: { page: 'query' },
  handler: (input, client) => executeCommand(workspacesV11ListCommand, input, client),
};
