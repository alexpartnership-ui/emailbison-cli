import type { CommandDefinition } from '../../core/types.js';
import { trackingDomainsListCommand } from './list.js';
import { trackingDomainsGetCommand } from './get.js';
import { trackingDomainsCreateCommand } from './create.js';
import { trackingDomainsDeleteCommand } from './delete.js';

export {
  trackingDomainsListCommand,
  trackingDomainsGetCommand,
  trackingDomainsCreateCommand,
  trackingDomainsDeleteCommand,
};

export const trackingDomainCommands: CommandDefinition[] = [
  trackingDomainsListCommand,
  trackingDomainsGetCommand,
  trackingDomainsCreateCommand,
  trackingDomainsDeleteCommand,
];
