export type PlanKey = 'free' | 'basic' | 'pro' | 'premium';

export type FeatureKey =
  | 'ai_chatbot'
  | 'voice_assistant'
  | 'custom_itinerary_builder'
  | 'fare_calculator'
  | 'pdf_itinerary_download'
  | 'priority_whatsapp_support'
  | 'exclusive_seasonal_deals'
  | 'reels_feed';

export interface FeatureLimit {
  maxDailyRequests?: number;
  maxMonthlyRequests?: number;
  maxVoiceMinutesMonthly?: number;
  maxTokensPerRequest?: number;
  allowUnlimited?: boolean;
}

export interface FeatureDefinition {
  key: FeatureKey;
  name: string;
  description: string;
  category: 'ai' | 'tool' | 'support' | 'content';
  isEnabled: boolean;
  defaultPlan: PlanKey;
}

export interface PlanDefinition {
  key: PlanKey;
  name: string;
  badge?: string;
  pricePerMonth?: number;
  description: string;
  allowedFeatures: FeatureKey[];
  limits: Partial<Record<FeatureKey, FeatureLimit>>;
}

export interface UserContext {
  id: string;
  name?: string;
  email?: string;
  plan: PlanKey;
  isStaff?: boolean;
  metadata?: Record<string, any>;
}

export interface UsageRecord {
  userId: string;
  featureKey: FeatureKey;
  metric: 'requests' | 'voice_minutes' | 'tokens';
  count: number;
  timestamp: number;
}
