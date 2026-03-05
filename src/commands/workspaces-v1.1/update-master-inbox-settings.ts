import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const workspacesV11UpdateMasterInboxSettingsCommand: CommandDefinition = {
  name: 'workspaces-v1.1_update-master-inbox-settings',
  group: 'workspaces-v1.1',
  subcommand: 'update-master-inbox-settings',
  description: 'Update master inbox settings (v1.1).',
  examples: ['bison workspaces-v1.1 update-master-inbox-settings --settings \'{"key":"value"}\''],
  inputSchema: z.object({
    settings: z.string().describe('JSON string of settings to update'),
  }),
  cliMappings: {
    options: [
      { field: 'settings', flags: '--settings <string>', description: 'JSON string of settings to update' },
    ],
  },
  endpoint: { method: 'PATCH', path: '/api/workspaces/v1.1/master-inbox-settings' },
  fieldMappings: { settings: 'body' },
  handler: (input, client) => executeCommand(workspacesV11UpdateMasterInboxSettingsCommand, input, client),
};
