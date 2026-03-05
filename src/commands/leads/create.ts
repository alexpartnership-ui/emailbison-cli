import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const leadsCreateCommand: CommandDefinition = {
  name: 'leads_create',
  group: 'leads',
  subcommand: 'create',
  description: 'Create a new lead.',
  examples: [
    'bison leads create --email user@example.com',
    'bison leads create --email user@example.com --first-name John --last-name Doe',
  ],
  inputSchema: z.object({
    email: z.string().email().describe('Lead email address'),
    first_name: z.string().optional().describe('First name'),
    last_name: z.string().optional().describe('Last name'),
    company_name: z.string().optional().describe('Company name'),
    title: z.string().optional().describe('Job title'),
    phone: z.string().optional().describe('Phone number'),
    website: z.string().optional().describe('Website URL'),
    custom_variables: z.string().optional().describe('Custom variables as JSON string'),
  }),
  cliMappings: {
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
  endpoint: { method: 'POST', path: '/api/leads' },
  fieldMappings: {
    email: 'body',
    first_name: 'body',
    last_name: 'body',
    company_name: 'body',
    title: 'body',
    phone: 'body',
    website: 'body',
    custom_variables: 'body',
  },
  handler: (input, client) => executeCommand(leadsCreateCommand, input, client),
};
