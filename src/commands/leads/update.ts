import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const leadsUpdateCommand: CommandDefinition = {
  name: 'leads_update',
  group: 'leads',
  subcommand: 'update',
  description: 'Update a lead by ID.',
  examples: ['bison leads update <lead_id> --first-name Jane'],
  inputSchema: z.object({
    lead_id: z.string().describe('Lead ID'),
    first_name: z.string().optional().describe('First name'),
    last_name: z.string().optional().describe('Last name'),
    company_name: z.string().optional().describe('Company name'),
    title: z.string().optional().describe('Job title'),
    phone: z.string().optional().describe('Phone number'),
    website: z.string().optional().describe('Website URL'),
  }),
  cliMappings: {
    args: [{ field: 'lead_id', name: 'lead_id', required: true }],
    options: [
      { field: 'first_name', flags: '--first-name <name>', description: 'First name' },
      { field: 'last_name', flags: '--last-name <name>', description: 'Last name' },
      { field: 'company_name', flags: '--company-name <name>', description: 'Company name' },
      { field: 'title', flags: '--title <title>', description: 'Job title' },
      { field: 'phone', flags: '--phone <phone>', description: 'Phone number' },
      { field: 'website', flags: '--website <url>', description: 'Website URL' },
    ],
  },
  endpoint: { method: 'PATCH', path: '/api/leads/{lead_id}' },
  fieldMappings: {
    lead_id: 'path',
    first_name: 'body',
    last_name: 'body',
    company_name: 'body',
    title: 'body',
    phone: 'body',
    website: 'body',
  },
  handler: (input, client) => executeCommand(leadsUpdateCommand, input, client),
};
