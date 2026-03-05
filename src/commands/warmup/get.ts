import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const warmupGetCommand: CommandDefinition = {
  name: 'warmup_get',
  group: 'warmup',
  subcommand: 'get',
  description: 'Get a specific warmup sender email by ID.',
  examples: ['bison warmup get --senderEmailId abc123'],
  inputSchema: z.object({
    senderEmailId: z.string().describe('Sender email ID'),
  }),
  cliMappings: {
    options: [
      { field: 'senderEmailId', flags: '--senderEmailId <string>', description: 'Sender email ID' },
    ],
  },
  endpoint: { method: 'GET', path: '/api/warmup/sender-emails/{senderEmailId}' },
  fieldMappings: { senderEmailId: 'path' },
  handler: (input, client) => executeCommand(warmupGetCommand, input, client),
};
