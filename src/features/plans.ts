import type { PlanDefinition, PlanKey } from './types';

export const PLANS: Record<PlanKey, PlanDefinition> = {
  free: {
    key: 'free',
    name: 'Free Explorer',
    description: 'Basic access to tour browsing, dynamic fare calculation, and standard AI chatbot.',
    allowedFeatures: [
      'fare_calculator',
      'pdf_itinerary_download',
      'reels_feed',
      'ai_chatbot',
    ],
    limits: {
      ai_chatbot: {
        maxDailyRequests: 15,
        maxMonthlyRequests: 100,
        maxTokensPerRequest: 1000,
      },
    },
  },
  basic: {
    key: 'basic',
    name: 'Basic Traveler',
    badge: 'Popular',
    pricePerMonth: 199,
    description: 'Includes custom itinerary planner and starter voice assistant access.',
    allowedFeatures: [
      'fare_calculator',
      'pdf_itinerary_download',
      'reels_feed',
      'ai_chatbot',
      'voice_assistant',
      'custom_itinerary_builder',
    ],
    limits: {
      ai_chatbot: {
        maxDailyRequests: 50,
        maxMonthlyRequests: 500,
        maxTokensPerRequest: 2000,
      },
      voice_assistant: {
        maxDailyRequests: 5,
        maxVoiceMinutesMonthly: 15,
      },
    },
  },
  pro: {
    key: 'pro',
    name: 'Pro Voyager',
    badge: 'Recommended',
    pricePerMonth: 499,
    description: 'Generous AI and voice interaction quota with priority WhatsApp support and early-bird discounts.',
    allowedFeatures: [
      'fare_calculator',
      'pdf_itinerary_download',
      'reels_feed',
      'ai_chatbot',
      'voice_assistant',
      'custom_itinerary_builder',
      'priority_whatsapp_support',
      'exclusive_seasonal_deals',
    ],
    limits: {
      ai_chatbot: {
        maxDailyRequests: 200,
        maxMonthlyRequests: 2000,
        maxTokensPerRequest: 4000,
      },
      voice_assistant: {
        maxDailyRequests: 20,
        maxVoiceMinutesMonthly: 60,
      },
    },
  },
  premium: {
    key: 'premium',
    name: 'VIP Club',
    badge: 'All Inclusive',
    pricePerMonth: 999,
    description: 'Unlimited access across all tools, unlimited voice assistance, and dedicated tour manager.',
    allowedFeatures: [
      'fare_calculator',
      'pdf_itinerary_download',
      'reels_feed',
      'ai_chatbot',
      'voice_assistant',
      'custom_itinerary_builder',
      'priority_whatsapp_support',
      'exclusive_seasonal_deals',
    ],
    limits: {
      ai_chatbot: {
        allowUnlimited: true,
      },
      voice_assistant: {
        maxDailyRequests: 100,
        maxVoiceMinutesMonthly: 300,
      },
    },
  },
};

export function getPlan(key: PlanKey): PlanDefinition {
  return PLANS[key] || PLANS.free;
}
