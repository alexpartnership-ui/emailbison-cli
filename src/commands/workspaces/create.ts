import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const workspacesCreateCommand: CommandDefinition = {
  name: 'workspaces_create',
  group: 'workspaces',
  subcommand: 'create',
  description: 'Create a new workspace (v1, deprecated).',
  examples: ['bison workspaces create --name "My Workspace"'],
  inputSchema: z.object({
    name: z.string().describe('Workspace name'),
  }),
  cliMappings: {
    options: [
      { field: 'name', flags: '--name <string>', description: 'Workspace name' },
    ],
  },
  endpoint: { method: 'POST', path: '/api/workspaces' },
  fieldMappings: { name: 'body' },
  handler: (input, client) => executeCommand(workspacesCreateCommand, input, client),
};
