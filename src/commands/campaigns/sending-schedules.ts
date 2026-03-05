import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const campaignsSendingSchedulesCommand: CommandDefinition = {
  name: 'campaigns_sending-schedules',
  group: 'campaigns',
  subcommand: 'sending-schedules',
  description: 'List all sending schedules.',
  examples: ['bison campaigns sending-schedules', 'bison campaigns sending-schedules --page 2'],
  inputSchema: z.object({
    page: z.coerce.number().optional().describe('Page number for pagination'),
  }),
  cliMappings: {
    options: [
      { field: 'page', flags: '--page <number>', description: 'Page number' },
    ],
  },
  endpoint: { method: 'GET', path: '/api/campaigns/sending-schedules' },
  fieldMappings: { page: 'query' },
  handler: (input, client) => executeCommand(campaignsSendingSchedulesCommand, input, client),
};
