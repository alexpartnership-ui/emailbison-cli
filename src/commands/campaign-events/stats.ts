import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const campaignEventsStatsCommand: CommandDefinition = {
  name: 'campaign-events_stats',
  group: 'campaign-events',
  subcommand: 'stats',
  description: 'Get campaign event statistics with optional filters.',
  examples: [
    'bison campaign-events stats',
    'bison campaign-events stats --campaign_id abc123 --start_date 2025-01-01 --end_date 2025-01-31',
  ],
  inputSchema: z.object({
    campaign_id: z.string().optional().describe('Filter by campaign ID'),
    sender_email_id: z.string().optional().describe('Filter by sender email ID'),
    start_date: z.string().optional().describe('Start date filter (YYYY-MM-DD)'),
    end_date: z.string().optional().describe('End date filter (YYYY-MM-DD)'),
    page: z.coerce.number().optional().describe('Page number for pagination'),
  }),
  cliMappings: {
    options: [
      { field: 'campaign_id', flags: '--campaign-id <string>', description: 'Campaign ID' },
      { field: 'sender_email_id', flags: '--sender-email-id <string>', description: 'Sender email ID' },
      { field: 'start_date', flags: '--start-date <string>', description: 'Start date (YYYY-MM-DD)' },
      { field: 'end_date', flags: '--end-date <string>', description: 'End date (YYYY-MM-DD)' },
      { field: 'page', flags: '--page <number>', description: 'Page number' },
    ],
  },
  endpoint: { method: 'GET', path: '/api/campaign-events/stats' },
  fieldMappings: {
    campaign_id: 'query',
    sender_email_id: 'query',
    start_date: 'query',
    end_date: 'query',
    page: 'query',
  },
  handler: (input, client) => executeCommand(campaignEventsStatsCommand, input, client),
};
