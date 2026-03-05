import type { CommandDefinition } from '../../core/types.js';
import { campaignEventsStatsCommand } from './stats.js';

export { campaignEventsStatsCommand };

export const campaignEventCommands: CommandDefinition[] = [
  campaignEventsStatsCommand,
];
