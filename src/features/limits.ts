import type { FeatureKey, UserContext } from './types';
import { getPlan } from './plans';
import { usageTracker } from './usageTracker';

/**
 * Get configured usage limit for a feature under the user's active plan
 */
export function getUsageLimit(
  user: UserContext | null | undefined,
  featureKey: FeatureKey,
  limitType: 'daily' | 'monthly' | 'voiceMinutes' = 'daily'
): number | 'unlimited' {
  if (user?.isStaff) return 'unlimited';

  const plan = getPlan(user?.plan || 'free');
  const limits = plan.limits[featureKey];

  if (!limits) return 0;
  if (limits.allowUnlimited) return 'unlimited';

  if (limitType === 'daily') {
    return limits.maxDailyRequests ?? 'unlimited';
  } else if (limitType === 'monthly') {
    return limits.maxMonthlyRequests ?? 'unlimited';
  } else if (limitType === 'voiceMinutes') {
    return limits.maxVoiceMinutesMonthly ?? 'unlimited';
  }

  return 'unlimited';
}

/**
 * Calculate remaining usage quota for a user
 */
export async function getRemainingUsage(
  user: UserContext,
  featureKey: FeatureKey,
  metric: 'requests' | 'voice_minutes' = 'requests'
): Promise<number | 'unlimited'> {
  if (user.isStaff) return 'unlimited';

  const limitType = metric === 'voice_minutes' ? 'voiceMinutes' : 'daily';
  const limit = getUsageLimit(user, featureKey, limitType);

  if (limit === 'unlimited') return 'unlimited';
  if (limit === 0) return 0;

  const currentUsage =
    metric === 'voice_minutes'
      ? await usageTracker.getMonthlyCount(user.id, featureKey, 'voice_minutes')
      : await usageTracker.getDailyCount(user.id, featureKey, 'requests');

  return Math.max(0, limit - currentUsage);
}

/**
 * Check if the user has reached their quota limit
 */
export async function isQuotaExceeded(
  user: UserContext,
  featureKey: FeatureKey,
  metric: 'requests' | 'voice_minutes' = 'requests'
): Promise<boolean> {
  const remaining = await getRemainingUsage(user, featureKey, metric);
  if (remaining === 'unlimited') return false;
  return remaining <= 0;
}
