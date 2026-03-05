import { campaignsListCommand } from './list.js';
import { campaignsGetCommand } from './get.js';
import { campaignsCreateCommand } from './create.js';
import { campaignsUpdateCommand } from './update.js';
import { campaignsDuplicateCommand } from './duplicate.js';
import { campaignsPauseCommand } from './pause.js';
import { campaignsResumeCommand } from './resume.js';
import { campaignsArchiveCommand } from './archive.js';
import { campaignsDeleteCommand } from './delete.js';
import { campaignsBulkDeleteCommand } from './bulk-delete.js';
import { campaignsStatsCommand } from './stats.js';
import { campaignsLineAreaChartStatsCommand } from './line-area-chart-stats.js';
import { campaignsSenderEmailsCommand } from './sender-emails.js';
import { campaignsAttachSenderEmailsCommand } from './attach-sender-emails.js';
import { campaignsRemoveSenderEmailsCommand } from './remove-sender-emails.js';
import { campaignsLeadsCommand } from './leads.js';
import { campaignsAttachLeadsCommand } from './attach-leads.js';
import { campaignsAttachLeadListCommand } from './attach-lead-list.js';
import { campaignsRemoveLeadsCommand } from './remove-leads.js';
import { campaignsMoveLeadsCommand } from './move-leads.js';
import { campaignsStopFutureEmailsCommand } from './stop-future-emails.js';
import { campaignsRepliesCommand } from './replies.js';
import { campaignsScheduledEmailsCommand } from './scheduled-emails.js';
import { campaignsSequenceStepsListCommand } from './sequence-steps-list.js';
import { campaignsSequenceStepsCreateCommand } from './sequence-steps-create.js';
import { campaignsSequenceStepsUpdateCommand } from './sequence-steps-update.js';
import { campaignsSequenceStepsDeleteCommand } from './sequence-steps-delete.js';
import { campaignsSequenceStepsToggleCommand } from './sequence-steps-toggle.js';
import { campaignsSequenceStepsTestEmailCommand } from './sequence-steps-test-email.js';
import { campaignsScheduleGetCommand } from './schedule-get.js';
import { campaignsScheduleCreateCommand } from './schedule-create.js';
import { campaignsScheduleUpdateCommand } from './schedule-update.js';
import { campaignsScheduleFromTemplateCommand } from './schedule-from-template.js';
import { campaignsScheduleTemplatesCommand } from './schedule-templates.js';
import { campaignsScheduleTimezonesCommand } from './schedule-timezones.js';
import { campaignsSendingSchedulesCommand } from './sending-schedules.js';

export const campaignCommands = [
  campaignsListCommand,
  campaignsGetCommand,
  campaignsCreateCommand,
  campaignsUpdateCommand,
  campaignsDuplicateCommand,
  campaignsPauseCommand,
  campaignsResumeCommand,
  campaignsArchiveCommand,
  campaignsDeleteCommand,
  campaignsBulkDeleteCommand,
  campaignsStatsCommand,
  campaignsLineAreaChartStatsCommand,
  campaignsSenderEmailsCommand,
  campaignsAttachSenderEmailsCommand,
  campaignsRemoveSenderEmailsCommand,
  campaignsLeadsCommand,
  campaignsAttachLeadsCommand,
  campaignsAttachLeadListCommand,
  campaignsRemoveLeadsCommand,
  campaignsMoveLeadsCommand,
  campaignsStopFutureEmailsCommand,
  campaignsRepliesCommand,
  campaignsScheduledEmailsCommand,
  campaignsSequenceStepsListCommand,
  campaignsSequenceStepsCreateCommand,
  campaignsSequenceStepsUpdateCommand,
  campaignsSequenceStepsDeleteCommand,
  campaignsSequenceStepsToggleCommand,
  campaignsSequenceStepsTestEmailCommand,
  campaignsScheduleGetCommand,
  campaignsScheduleCreateCommand,
  campaignsScheduleUpdateCommand,
  campaignsScheduleFromTemplateCommand,
  campaignsScheduleTemplatesCommand,
  campaignsScheduleTimezonesCommand,
  campaignsSendingSchedulesCommand,
];
