import type { CommandDefinition } from '../../core/types.js';
import { accountsListCommand } from './list.js';
import { accountsGetCommand } from './get.js';
import { accountsUpdateCommand } from './update.js';
import { accountsDeleteCommand } from './delete.js';
import { accountsCreateImapSmtpCommand } from './create-imap-smtp.js';
import { accountsBulkCreateCommand } from './bulk-create.js';
import { accountsCampaignsCommand } from './campaigns.js';
import { accountsRepliesCommand } from './replies.js';
import { accountsOauthTokenCommand } from './oauth-token.js';
import { accountsCheckMxCommand } from './check-mx.js';
import { accountsBulkCheckMxCommand } from './bulk-check-mx.js';
import { accountsBulkDailyLimitsCommand } from './bulk-daily-limits.js';
import { accountsBulkSignaturesCommand } from './bulk-signatures.js';

export {
  accountsListCommand,
  accountsGetCommand,
  accountsUpdateCommand,
  accountsDeleteCommand,
  accountsCreateImapSmtpCommand,
  accountsBulkCreateCommand,
  accountsCampaignsCommand,
  accountsRepliesCommand,
  accountsOauthTokenCommand,
  accountsCheckMxCommand,
  accountsBulkCheckMxCommand,
  accountsBulkDailyLimitsCommand,
  accountsBulkSignaturesCommand,
};

export const accountCommands: CommandDefinition[] = [
  accountsListCommand,
  accountsGetCommand,
  accountsUpdateCommand,
  accountsDeleteCommand,
  accountsCreateImapSmtpCommand,
  accountsBulkCreateCommand,
  accountsCampaignsCommand,
  accountsRepliesCommand,
  accountsOauthTokenCommand,
  accountsCheckMxCommand,
  accountsBulkCheckMxCommand,
  accountsBulkDailyLimitsCommand,
  accountsBulkSignaturesCommand,
];
