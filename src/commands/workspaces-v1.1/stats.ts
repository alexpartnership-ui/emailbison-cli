import { z } from 'zod';
import type { CommandDefinition, BisonClient } from '../../core/types.js';

function defaultStartDate(): string {
  const d = new Date();
  d.setDate(d.getDate() - 30);
  return d.toISOString().split('T')[0];
}

function defaultEndDate(): string {
  return new Date().toISOString().split('T')[0];
}

export const workspacesV11StatsCommand: CommandDefinition = {
  name: 'workspaces-v1.1_stats',
  group: 'workspaces-v1.1',
  subcommand: 'stats',
  description: 'Get workspace statistics (v1.1). Defaults to the last 30 days when no dates are provided.',
  examples: [
    'bison workspaces-v1.1 stats',
    'bison workspaces-v1.1 stats --start-date 2025-01-01 --end-date 2025-03-31',
  ],
  inputSchema: z.object({
    start_date: z.string().optional().describe('Start date (YYYY-MM-DD). Defaults to 30 days ago.'),
    end_date: z.string().optional().describe('End date (YYYY-MM-DD). Defaults to today.'),
  }),
  cliMappings: {
    options: [
      { field: 'start_date', flags: '--start-date <string>', description: 'Start date YYYY-MM-DD (default: 30 days ago)' },
      { field: 'end_date', flags: '--end-date <string>', description: 'End date YYYY-MM-DD (default: today)' },
    ],
  },
  endpoint: { method: 'GET', path: '/api/workspaces/v1.1/stats' },
  fieldMappings: {
    start_date: 'query',
    end_date: 'query',
  },
  handler: async (input: { start_date?: string; end_date?: string }, client: BisonClient) => {
    return client.request({
      method: 'GET',
      path: '/api/workspaces/v1.1/stats',
      query: {
        start_date: input.start_date ?? defaultStartDate(),
        end_date: input.end_date ?? defaultEndDate(),
      },
    });
  },
};
