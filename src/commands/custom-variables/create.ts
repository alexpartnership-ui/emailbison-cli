import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const customVariablesCreateCommand: CommandDefinition = {
  name: 'custom-variables_create',
  group: 'custom-variables',
  subcommand: 'create',
  description: 'Create a new custom variable.',
  examples: ['bison custom-variables create --name "company_size"'],
  inputSchema: z.object({
    name: z.string().describe('Name of the custom variable'),
  }),
  cliMappings: {
    options: [
      { field: 'name', flags: '--name <string>', description: 'Custom variable name' },
    ],
  },
  endpoint: { method: 'POST', path: '/api/custom-variables' },
  fieldMappings: { name: 'body' },
  handler: (input, client) => executeCommand(customVariablesCreateCommand, input, client),
};
