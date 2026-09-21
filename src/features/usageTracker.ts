import type { FeatureKey, UsageRecord } from './types';

export interface UsageStorageAdapter {
  recordUsage(record: Omit<UsageRecord, 'timestamp'>): Promise<void>;
  getDailyCount(userId: string, featureKey: FeatureKey, metric: string): Promise<number>;
  getMonthlyCount(userId: string, featureKey: FeatureKey, metric: string): Promise<number>;
}

/**
 * Default resilient in-memory storage adapter for serverless / edge runtime
 */
class MemoryUsageAdapter implements UsageStorageAdapter {
  private records: UsageRecord[] = [];

  async recordUsage(record: Omit<UsageRecord, 'timestamp'>): Promise<void> {
    this.records.push({
      ...record,
      timestamp: Date.now(),
    });
  }

  async getDailyCount(userId: string, featureKey: FeatureKey, metric: string): Promise<number> {
    const oneDayAgo = Date.now() - 24 * 60 * 60 * 1000;
    return this.records
      .filter(
        (r) =>
          r.userId === userId &&
          r.featureKey === featureKey &&
          r.metric === metric &&
          r.timestamp >= oneDayAgo
      )
      .reduce((sum, r) => sum + r.count, 0);
  }

  async getMonthlyCount(userId: string, featureKey: FeatureKey, metric: string): Promise<number> {
    const thirtyDaysAgo = Date.now() - 30 * 24 * 60 * 60 * 1000;
    return this.records
      .filter(
        (r) =>
          r.userId === userId &&
          r.featureKey === featureKey &&
          r.metric === metric &&
          r.timestamp >= thirtyDaysAgo
      )
      .reduce((sum, r) => sum + r.count, 0);
  }
}

export let usageTracker: UsageStorageAdapter = new MemoryUsageAdapter();

/**
 * Configure a custom database storage adapter (e.g. Redis, MongoDB, Supabase, Postgres)
 */
export function setUsageStorageAdapter(adapter: UsageStorageAdapter) {
  usageTracker = adapter;
}
