import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const accountsBulkCheckMxCommand: CommandDefinition = {
  name: 'accounts_bulk-check-mx',
  group: 'accounts',
  subcommand: 'bulk-check-mx',
  description: 'Bulk check missing MX records for all sender email accounts.',
  examples: ['bison accounts bulk-check-mx'],
  inputSchema: z.object({}),
  cliMappings: {},
  endpoint: { method: 'POST', path: '/api/sender-emails/bulk-check-missing-mx-records' },
  fieldMappings: {},
  handler: (input, client) => executeCommand(accountsBulkCheckMxCommand, input, client),
};
