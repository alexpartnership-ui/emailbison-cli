import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const campaignsScheduleFromTemplateCommand: CommandDefinition = {
  name: 'campaigns_schedule-from-template',
  group: 'campaigns',
  subcommand: 'schedule-from-template',
  description: 'Create a campaign schedule from an existing template.',
  examples: ['bison campaigns schedule-from-template --campaign_id abc123 --schedule_id tmpl456'],
  inputSchema: z.object({
    campaign_id: z.string().describe('Campaign ID'),
    schedule_id: z.string().describe('Schedule template ID to use'),
  }),
  cliMappings: {
    options: [
      { field: 'campaign_id', flags: '--campaign_id <string>', description: 'Campaign ID' },
      { field: 'schedule_id', flags: '--schedule_id <string>', description: 'Schedule template ID' },
    ],
  },
  endpoint: { method: 'POST', path: '/api/campaigns/{campaign_id}/create-schedule-from-template' },
  fieldMappings: { campaign_id: 'path', schedule_id: 'body' },
  handler: (input, client) => executeCommand(campaignsScheduleFromTemplateCommand, input, client),
};
