import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const workspacesV11StatsCommand: CommandDefinition = {
  name: 'workspaces-v1.1_stats',
  group: 'workspaces-v1.1',
  subcommand: 'stats',
  description: 'Get workspace statistics (v1.1).',
  examples: ['bison workspaces-v1.1 stats', 'bison workspaces-v1.1 stats --start_date 2025-01-01 --end_date 2025-12-31'],
  inputSchema: z.object({
    start_date: z.string().optional().describe('Start date for stats range'),
    end_date: z.string().optional().describe('End date for stats range'),
  }),
  cliMappings: {
    options: [
      { field: 'start_date', flags: '--start_date <string>', description: 'Start date for stats range' },
      { field: 'end_date', flags: '--end_date <string>', description: 'End date for stats range' },
    ],
  },
  endpoint: { method: 'GET', path: '/api/workspaces/v1.1/stats' },
  fieldMappings: {
    start_date: 'query',
    end_date: 'query',
  },
  handler: (input, client) => executeCommand(workspacesV11StatsCommand, input, client),
};
