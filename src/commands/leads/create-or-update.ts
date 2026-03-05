import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const leadsCreateOrUpdateCommand: CommandDefinition = {
  name: 'leads_create-or-update',
  group: 'leads',
  subcommand: 'create-or-update',
  description: 'Create or update a lead by ID.',
  examples: ['bison leads create-or-update <lead_id> --email user@example.com'],
  inputSchema: z.object({
    lead_id: z.string().describe('Lead ID'),
    email: z.string().email().optional().describe('Lead email address'),
    first_name: z.string().optional().describe('First name'),
    last_name: z.string().optional().describe('Last name'),
    company_name: z.string().optional().describe('Company name'),
    title: z.string().optional().describe('Job title'),
    phone: z.string().optional().describe('Phone number'),
    website: z.string().optional().describe('Website URL'),
    custom_variables: z.string().optional().describe('Custom variables as JSON string'),
  }),
  cliMappings: {
    args: [{ field: 'lead_id', name: 'lead_id', required: true }],
    options: [
      { field: 'email', flags: '--email <email>', description: 'Lead email address' },
      { field: 'first_name', flags: '--first-name <name>', description: 'First name' },
      { field: 'last_name', flags: '--last-name <name>', description: 'Last name' },
      { field: 'company_name', flags: '--company-name <name>', description: 'Company name' },
      { field: 'title', flags: '--title <title>', description: 'Job title' },
      { field: 'phone', flags: '--phone <phone>', description: 'Phone number' },
      { field: 'website', flags: '--website <url>', description: 'Website URL' },
      { field: 'custom_variables', flags: '--custom-variables <json>', description: 'Custom variables as JSON string' },
    ],
  },
  endpoint: { method: 'POST', path: '/api/leads/create-or-update/{lead_id}' },
  fieldMappings: {
    lead_id: 'path',
    email: 'body',
    first_name: 'body',
    last_name: 'body',
    company_name: 'body',
    title: 'body',
    phone: 'body',
    website: 'body',
    custom_variables: 'body',
  },
  handler: (input, client) => executeCommand(leadsCreateOrUpdateCommand, input, client),
};
