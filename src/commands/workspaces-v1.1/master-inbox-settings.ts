import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const workspacesV11MasterInboxSettingsCommand: CommandDefinition = {
  name: 'workspaces-v1.1_master-inbox-settings',
  group: 'workspaces-v1.1',
  subcommand: 'master-inbox-settings',
  description: 'Get master inbox settings (v1.1).',
  examples: ['bison workspaces-v1.1 master-inbox-settings'],
  inputSchema: z.object({}),
  cliMappings: {},
  endpoint: { method: 'GET', path: '/api/workspaces/v1.1/master-inbox-settings' },
  fieldMappings: {},
  handler: (input, client) => executeCommand(workspacesV11MasterInboxSettingsCommand, input, client),
};
