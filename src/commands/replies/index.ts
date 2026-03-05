import type { CommandDefinition } from '../../core/types.js';
import { repliesListCommand } from './list.js';
import { repliesGetCommand } from './get.js';
import { repliesNewCommand } from './new.js';
import { repliesReplyCommand } from './reply.js';
import { repliesForwardCommand } from './forward.js';
import { repliesMarkInterestedCommand } from './mark-interested.js';
import { repliesMarkNotInterestedCommand } from './mark-not-interested.js';
import { repliesMarkReadUnreadCommand } from './mark-read-unread.js';
import { repliesMarkAutomatedCommand } from './mark-automated.js';
import { repliesUnsubscribeCommand } from './unsubscribe.js';
import { repliesConversationThreadCommand } from './conversation-thread.js';
import { repliesAttachScheduledEmailCommand } from './attach-scheduled-email.js';
import { repliesPushToFollowupCommand } from './push-to-followup.js';
import { repliesDeleteCommand } from './delete.js';

export const replyCommands: CommandDefinition[] = [
  repliesListCommand,
  repliesGetCommand,
  repliesNewCommand,
  repliesReplyCommand,
  repliesForwardCommand,
  repliesMarkInterestedCommand,
  repliesMarkNotInterestedCommand,
  repliesMarkReadUnreadCommand,
  repliesMarkAutomatedCommand,
  repliesUnsubscribeCommand,
  repliesConversationThreadCommand,
  repliesAttachScheduledEmailCommand,
  repliesPushToFollowupCommand,
  repliesDeleteCommand,
];

export {
  repliesListCommand,
  repliesGetCommand,
  repliesNewCommand,
  repliesReplyCommand,
  repliesForwardCommand,
  repliesMarkInterestedCommand,
  repliesMarkNotInterestedCommand,
  repliesMarkReadUnreadCommand,
  repliesMarkAutomatedCommand,
  repliesUnsubscribeCommand,
  repliesConversationThreadCommand,
  repliesAttachScheduledEmailCommand,
  repliesPushToFollowupCommand,
  repliesDeleteCommand,
};
