import { usersGetCommand } from './get.js';
import { usersUpdatePasswordCommand } from './update-password.js';
import { usersUpdateProfilePictureCommand } from './update-profile-picture.js';
import { usersHeadlessUiTokenCommand } from './headless-ui-token.js';

export const userCommands = [
  usersGetCommand,
  usersUpdatePasswordCommand,
  usersUpdateProfilePictureCommand,
  usersHeadlessUiTokenCommand,
];
