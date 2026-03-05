import type { CommandDefinition } from '../../core/types.js';
import { tagsListCommand } from './list.js';
import { tagsGetCommand } from './get.js';
import { tagsCreateCommand } from './create.js';
import { tagsDeleteCommand } from './delete.js';
import { tagsAttachToCampaignsCommand } from './attach-to-campaigns.js';
import { tagsRemoveFromCampaignsCommand } from './remove-from-campaigns.js';
import { tagsAttachToLeadsCommand } from './attach-to-leads.js';
import { tagsRemoveFromLeadsCommand } from './remove-from-leads.js';
import { tagsAttachToSenderEmailsCommand } from './attach-to-sender-emails.js';
import { tagsRemoveFromSenderEmailsCommand } from './remove-from-sender-emails.js';

export {
  tagsListCommand,
  tagsGetCommand,
  tagsCreateCommand,
  tagsDeleteCommand,
  tagsAttachToCampaignsCommand,
  tagsRemoveFromCampaignsCommand,
  tagsAttachToLeadsCommand,
  tagsRemoveFromLeadsCommand,
  tagsAttachToSenderEmailsCommand,
  tagsRemoveFromSenderEmailsCommand,
};

export const tagCommands: CommandDefinition[] = [
  tagsListCommand,
  tagsGetCommand,
  tagsCreateCommand,
  tagsDeleteCommand,
  tagsAttachToCampaignsCommand,
  tagsRemoveFromCampaignsCommand,
  tagsAttachToLeadsCommand,
  tagsRemoveFromLeadsCommand,
  tagsAttachToSenderEmailsCommand,
  tagsRemoveFromSenderEmailsCommand,
];
