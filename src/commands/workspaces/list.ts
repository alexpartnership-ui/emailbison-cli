import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const workspacesListCommand: CommandDefinition = {
  name: 'workspaces_list',
  group: 'workspaces',
  subcommand: 'list',
  description: 'List all workspaces (v1, deprecated).',
  examples: ['bison workspaces list', 'bison workspaces list --page 2'],
  inputSchema: z.object({
    page: z.coerce.number().optional().describe('Page number for pagination'),
  }),
  cliMappings: {
    options: [
      { field: 'page', flags: '--page <number>', description: 'Page number' },
    ],
  },
  endpoint: { method: 'GET', path: '/api/workspaces' },
  fieldMappings: { page: 'query' },
  handler: (input, client) => executeCommand(workspacesListCommand, input, client),
};
