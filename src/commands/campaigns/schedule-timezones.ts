import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const campaignsScheduleTimezonesCommand: CommandDefinition = {
  name: 'campaigns_schedule-timezones',
  group: 'campaigns',
  subcommand: 'schedule-timezones',
  description: 'List available timezones for campaign schedules.',
  examples: ['bison campaigns schedule-timezones'],
  inputSchema: z.object({}),
  cliMappings: {},
  endpoint: { method: 'GET', path: '/api/campaigns/schedule/available-timezones' },
  fieldMappings: {},
  handler: (input, client) => executeCommand(campaignsScheduleTimezonesCommand, input, client),
};
