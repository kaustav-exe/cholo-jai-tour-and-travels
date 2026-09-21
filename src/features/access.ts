import type { FeatureKey, UserContext } from './types';
import { getFeature } from './registry';
import { getPlan } from './plans';

/**
 * Check if a user is permitted to use a specific tool or feature
 */
export function canUseFeature(user: UserContext | null | undefined, featureKey: FeatureKey): boolean {
  const feature = getFeature(featureKey);
  if (!feature || !feature.isEnabled) {
    return false;
  }

  // Staff and superadmins have universal access
  if (user?.isStaff) {
    return true;
  }

  const userPlan = getPlan(user?.plan || 'free');
  return userPlan.allowedFeatures.includes(featureKey);
}

/**
 * Detailed feature status check for UI badges or upgrade triggers
 */
export function getFeatureAccessStatus(
  user: UserContext | null | undefined,
  featureKey: FeatureKey
): {
  allowed: boolean;
  reason?: 'feature_disabled' | 'plan_upgrade_required' | 'allowed';
  requiredPlan?: string;
} {
  const feature = getFeature(featureKey);
  if (!feature || !feature.isEnabled) {
    return { allowed: false, reason: 'feature_disabled' };
  }

  if (user?.isStaff) {
    return { allowed: true, reason: 'allowed' };
  }

  const allowed = canUseFeature(user, featureKey);
  if (!allowed) {
    return {
      allowed: false,
      reason: 'plan_upgrade_required',
      requiredPlan: feature.defaultPlan,
    };
  }

  return { allowed: true, reason: 'allowed' };
}
