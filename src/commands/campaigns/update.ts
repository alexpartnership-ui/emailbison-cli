import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const campaignsUpdateCommand: CommandDefinition = {
  name: 'campaigns_update',
  group: 'campaigns',
  subcommand: 'update',
  description: 'Update campaign settings.',
  examples: ['bison campaigns update --id abc123 --max-emails_per_day 50'],
  inputSchema: z.object({
    id: z.string().describe('Campaign ID'),
    max_emails_per_day: z.coerce.number().optional().describe('Maximum emails per day'),
    max_new_leads_per_day: z.coerce.number().optional().describe('Maximum new leads per day'),
    plain_text: z.boolean().optional().describe('Send as plain text'),
    open_tracking: z.boolean().optional().describe('Enable open tracking'),
    reputation_building: z.boolean().optional().describe('Enable reputation building'),
    can_unsubscribe: z.boolean().optional().describe('Allow unsubscribe'),
    unsubscribe_text: z.string().optional().describe('Custom unsubscribe text'),
  }),
  cliMappings: {
    options: [
      { field: 'id', flags: '--id <string>', description: 'Campaign ID' },
      { field: 'max_emails_per_day', flags: '--max-emails-per-day <number>', description: 'Max emails per day' },
      { field: 'max_new_leads_per_day', flags: '--max-new-leads-per-day <number>', description: 'Max new leads per day' },
      { field: 'plain_text', flags: '--plain-text', description: 'Send as plain text' },
      { field: 'open_tracking', flags: '--open-tracking', description: 'Enable open tracking' },
      { field: 'reputation_building', flags: '--reputation-building', description: 'Enable reputation building' },
      { field: 'can_unsubscribe', flags: '--can-unsubscribe', description: 'Allow unsubscribe' },
      { field: 'unsubscribe_text', flags: '--unsubscribe-text <string>', description: 'Custom unsubscribe text' },
    ],
  },
  endpoint: { method: 'PATCH', path: '/api/campaigns/{id}/update' },
  fieldMappings: {
    id: 'path',
    max_emails_per_day: 'body',
    max_new_leads_per_day: 'body',
    plain_text: 'body',
    open_tracking: 'body',
    reputation_building: 'body',
    can_unsubscribe: 'body',
    unsubscribe_text: 'body',
  },
  handler: (input, client) => executeCommand(campaignsUpdateCommand, input, client),
};
