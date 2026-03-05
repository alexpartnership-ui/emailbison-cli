import { z } from 'zod';
import type { CommandDefinition } from '../../core/types.js';
import { executeCommand } from '../../core/handler.js';

export const usersUpdateProfilePictureCommand: CommandDefinition = {
  name: 'users_update-profile-picture',
  group: 'users',
  subcommand: 'update-profile-picture',
  description: 'Update the current user profile picture.',
  examples: ['bison users update-profile-picture --photo /path/to/photo.jpg'],
  inputSchema: z.object({
    photo: z.string().describe('Path to profile picture file'),
  }),
  cliMappings: {
    options: [
      { field: 'photo', flags: '--photo <string>', description: 'Path to profile picture file' },
    ],
  },
  endpoint: { method: 'POST', path: '/api/users/profile-picture' },
  fieldMappings: { photo: 'body' },
  handler: (input, client) => executeCommand(usersUpdateProfilePictureCommand, input, client),
};
