import { workspacesListCommand } from './list.js';
import { workspacesGetCommand } from './get.js';
import { workspacesCreateCommand } from './create.js';
import { workspacesUpdateCommand } from './update.js';
import { workspacesSwitchCommand } from './switch.js';
import { workspacesInviteMembersCommand } from './invite-members.js';
import { workspacesAcceptInviteCommand } from './accept-invite.js';
import { workspacesUpdateMemberCommand } from './update-member.js';
import { workspacesRemoveMemberCommand } from './remove-member.js';

export const workspaceCommands = [
  workspacesListCommand,
  workspacesGetCommand,
  workspacesCreateCommand,
  workspacesUpdateCommand,
  workspacesSwitchCommand,
  workspacesInviteMembersCommand,
  workspacesAcceptInviteCommand,
  workspacesUpdateMemberCommand,
  workspacesRemoveMemberCommand,
];
