import { workspacesV11ListCommand } from './list.js';
import { workspacesV11GetCommand } from './get.js';
import { workspacesV11CreateCommand } from './create.js';
import { workspacesV11UpdateCommand } from './update.js';
import { workspacesV11DeleteCommand } from './delete.js';
import { workspacesV11SwitchCommand } from './switch.js';
import { workspacesV11CreateUserCommand } from './create-user.js';
import { workspacesV11InviteMembersCommand } from './invite-members.js';
import { workspacesV11AcceptInviteCommand } from './accept-invite.js';
import { workspacesV11RemoveMemberCommand } from './remove-member.js';
import { workspacesV11CreateApiTokenCommand } from './create-api-token.js';
import { workspacesV11StatsCommand } from './stats.js';
import { workspacesV11LineAreaChartStatsCommand } from './line-area-chart-stats.js';
import { workspacesV11MasterInboxSettingsCommand } from './master-inbox-settings.js';
import { workspacesV11UpdateMasterInboxSettingsCommand } from './update-master-inbox-settings.js';

export const workspaceV11Commands = [
  workspacesV11ListCommand,
  workspacesV11GetCommand,
  workspacesV11CreateCommand,
  workspacesV11UpdateCommand,
  workspacesV11DeleteCommand,
  workspacesV11SwitchCommand,
  workspacesV11CreateUserCommand,
  workspacesV11InviteMembersCommand,
  workspacesV11AcceptInviteCommand,
  workspacesV11RemoveMemberCommand,
  workspacesV11CreateApiTokenCommand,
  workspacesV11StatsCommand,
  workspacesV11LineAreaChartStatsCommand,
  workspacesV11MasterInboxSettingsCommand,
  workspacesV11UpdateMasterInboxSettingsCommand,
];
