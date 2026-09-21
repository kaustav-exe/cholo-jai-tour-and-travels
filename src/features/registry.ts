import type { FeatureDefinition, FeatureKey } from './types';

export const FEATURE_REGISTRY: Record<FeatureKey, FeatureDefinition> = {
  ai_chatbot: {
    key: 'ai_chatbot',
    name: 'AI Travel Chatbot',
    description: 'Instant AI-driven travel recommendations, package queries, and itinerary answers.',
    category: 'ai',
    isEnabled: true,
    defaultPlan: 'free',
  },
  voice_assistant: {
    key: 'voice_assistant',
    name: 'Voice Travel Assistant',
    description: 'Conversational Bengali/Hindi/English voice interaction for booking and travel advice.',
    category: 'ai',
    isEnabled: true,
    defaultPlan: 'basic',
  },
  custom_itinerary_builder: {
    key: 'custom_itinerary_builder',
    name: 'Custom Itinerary Planner',
    description: 'Interactive planner to build customized multi-day travel routes and hotel selections.',
    category: 'tool',
    isEnabled: true,
    defaultPlan: 'basic',
  },
  fare_calculator: {
    key: 'fare_calculator',
    name: 'Dynamic Fare & Group Calculator',
    description: 'Real-time seasonal rate and multi-guest quotation estimation tool.',
    category: 'tool',
    isEnabled: true,
    defaultPlan: 'free',
  },
  pdf_itinerary_download: {
    key: 'pdf_itinerary_download',
    name: 'Printable / PDF Itinerary',
    description: 'Download branded day-by-day itinerary brochure in PDF format.',
    category: 'tool',
    isEnabled: true,
    defaultPlan: 'free',
  },
  priority_whatsapp_support: {
    key: 'priority_whatsapp_support',
    name: 'Priority WhatsApp Desk',
    description: 'Direct priority agent routing for urgent queries and departures.',
    category: 'support',
    isEnabled: true,
    defaultPlan: 'pro',
  },
  exclusive_seasonal_deals: {
    key: 'exclusive_seasonal_deals',
    name: 'Exclusive Early-Bird Deals',
    description: 'Early access to festive and peak-season flight and hotel rates.',
    category: 'content',
    isEnabled: true,
    defaultPlan: 'pro',
  },
  reels_feed: {
    key: 'reels_feed',
    name: 'Dynamic Travel Reels Feed',
    description: 'Real-time video carousel of customer tours and scenic moments.',
    category: 'content',
    isEnabled: true,
    defaultPlan: 'free',
  },
};

export function getFeature(key: FeatureKey): FeatureDefinition | undefined {
  return FEATURE_REGISTRY[key];
}

export function getAllFeatures(): FeatureDefinition[] {
  return Object.values(FEATURE_REGISTRY);
}
