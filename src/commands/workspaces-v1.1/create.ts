import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const workspacesV11CreateCommand: CommandDefinition = {
  name: 'workspaces-v1.1_create',
  group: 'workspaces-v1.1',
  subcommand: 'create',
  description: 'Create a new workspace (v1.1).',
  examples: ['bison workspaces-v1.1 create --name "My Workspace"'],
  inputSchema: z.object({
    name: z.string().describe('Workspace name'),
  }),
  cliMappings: {
    options: [
      { field: 'name', flags: '--name <string>', description: 'Workspace name' },
    ],
  },
  endpoint: { method: 'POST', path: '/api/workspaces/v1.1' },
  fieldMappings: { name: 'body' },
  handler: (input, client) => executeCommand(workspacesV11CreateCommand, input, client),
};
