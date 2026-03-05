import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const leadsBulkCsvCommand: CommandDefinition = {
  name: 'leads_bulk-csv',
  group: 'leads',
  subcommand: 'bulk-csv',
  description: 'Import leads from a CSV string.',
  examples: ['bison leads bulk-csv --csv "email,first_name\\na@b.com,John"'],
  inputSchema: z.object({
    csv: z.string().describe('CSV string of leads'),
    campaign_id: z.string().optional().describe('Campaign ID to assign leads to'),
  }),
  cliMappings: {
    options: [
      { field: 'csv', flags: '--csv <csv>', description: 'CSV string of leads' },
      { field: 'campaign_id', flags: '--campaign-id <id>', description: 'Campaign ID to assign leads to' },
    ],
  },
  endpoint: { method: 'POST', path: '/api/leads/bulk/csv' },
  fieldMappings: { csv: 'body', campaign_id: 'body' },
  handler: (input, client) => executeCommand(leadsBulkCsvCommand, input, client),
};
