import type { ChatRequestPayload, ChatResponsePayload } from './types';
import type { UserContext } from '../../features/types';
import { canUseFeature } from '../../features/access';
import { isQuotaExceeded, getRemainingUsage } from '../../features/limits';
import { usageTracker } from '../../features/usageTracker';
import { ContentService } from '../content/contentService';

export class AIService {
  /**
   * Process a chat query with plan verification and usage tracking
   */
  static async processChat(
    user: UserContext,
    payload: ChatRequestPayload
  ): Promise<ChatResponsePayload> {
    // 1. Centralized Feature Permission Check
    if (!canUseFeature(user, 'ai_chatbot')) {
      throw new Error('AI Chatbot is not available on your current plan. Please upgrade to continue.');
    }

    // 2. Centralized Quota Check
    if (await isQuotaExceeded(user, 'ai_chatbot', 'requests')) {
      throw new Error('You have reached your daily AI query limit. Please upgrade or try again tomorrow.');
    }

    const sessionId = payload.sessionId || `session_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
    const lastUserMessage = payload.messages.filter((m) => m.role === 'user').slice(-1)[0]?.content || '';

    // 3. Load dynamic travel knowledge from ContentService
    const allPackages = await ContentService.getAllPackages();
    const siteSettings = await ContentService.getSiteSettings();

    // 4. Generate AI Response (Provider-Agnostic with intelligent built-in fallback)
    const geminiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_AI_API_KEY;
    const openAiKey = process.env.OPENAI_API_KEY;

    let responseText = '';
    let tokensEstimate = 150;

    if (geminiKey) {
      try {
        // Direct REST invocation to avoid heavy SDK bloat
        const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${geminiKey}`;
        const systemPrompt = `You are the friendly AI travel expert for "Cholo Jai Tour & Travels", a top travel agency in Kolkata (Contact: ${siteSettings.phoneNumbers.join(', ')}, Email: ${siteSettings.email}).
Recommend packages from the following catalog: ${allPackages.map(p => `${p.title} (${p.duration}, ${p.price})`).join('; ')}.
Be enthusiastic, concise, and helpful. Always offer WhatsApp booking assistance (+91 9830905332).`;

        const res = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [
              { role: 'user', parts: [{ text: `${systemPrompt}\n\nUser Question: ${lastUserMessage}` }] }
            ]
          })
        });

        if (res.ok) {
          const data = await res.json();
          responseText = data.candidates?.[0]?.content?.parts?.[0]?.text || '';
          tokensEstimate = data.usageMetadata?.totalTokenCount || 200;
        }
      } catch (err) {
        console.warn('[AIService] Gemini API call failed, falling back to smart local responder:', err);
      }
    }

    if (!responseText) {
      // Intelligent rule-based responder tailored to Cholo Jai packages
      const lower = lastUserMessage.toLowerCase();
      if (lower.includes('andaman')) {
        const pkg = allPackages.find(p => p.id.includes('andaman')) || allPackages[0];
        responseText = `🌴 Andaman is one of our most popular destinations! Our **${pkg.title}** (${pkg.duration}) includes Kolkata flight tickets, cruise to Havelock, AC hotels, and all meals starting at ${pkg.price}/head. Would you like our team to send the full day-wise itinerary on WhatsApp?`;
      } else if (lower.includes('kashmir') || lower.includes('snow')) {
        responseText = `❄️ Kashmir is breathtaking! Our **Kashmir Winter & Snow Tour** includes Gulmarg gondola sightseeing, Dal Lake luxury houseboat stay, Pahalgam, and Sonmarg. Pricing starts from ₹19,990/person. What travel dates are you considering?`;
      } else if (lower.includes('sikkim') || lower.includes('gangtok') || lower.includes('north')) {
        responseText = `🏔️ North Sikkim & Gangtok is perfect for mountains and snow! Covering Lachung, Yumthang Valley, Zero Point, and Gurudongmar Lake. Let us know how many guests are traveling so we can share the best group discount!`;
      } else {
        responseText = `Namaste! 🙏 Welcome to Cholo Jai Tour & Travels. We organize curated family tours to **Andaman, Kashmir, North Sikkim, Rajasthan, Kerala, Himachal, and Nepal** with flights/trains, deluxe hotels, and personalized Bengali & multi-cuisine meals. How can I help plan your next vacation?`;
      }
    }

    // 5. Track Usage
    await usageTracker.recordUsage({
      userId: user.id,
      featureKey: 'ai_chatbot',
      metric: 'requests',
      count: 1,
    });

    const remainingQuota = await getRemainingUsage(user, 'ai_chatbot', 'requests');

    return {
      message: responseText,
      sessionId,
      usage: {
        tokensUsed: tokensEstimate,
        remainingQuota,
      },
      suggestedPackages: allPackages.slice(0, 3).map((p) => ({
        id: p.id,
        title: p.title,
        price: p.price,
      })),
    };
  }
}
