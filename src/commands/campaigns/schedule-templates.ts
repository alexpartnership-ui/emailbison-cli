import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const campaignsScheduleTemplatesCommand: CommandDefinition = {
  name: 'campaigns_schedule-templates',
  group: 'campaigns',
  subcommand: 'schedule-templates',
  description: 'List available schedule templates.',
  examples: ['bison campaigns schedule-templates'],
  inputSchema: z.object({}),
  cliMappings: {},
  endpoint: { method: 'GET', path: '/api/campaigns/schedule/templates' },
  fieldMappings: {},
  handler: (input, client) => executeCommand(campaignsScheduleTemplatesCommand, input, client),
};
