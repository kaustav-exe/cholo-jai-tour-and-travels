import type { VoiceSessionRequest, VoiceSessionResponse } from './types';
import type { UserContext } from '../../features/types';
import { canUseFeature } from '../../features/access';
import { isQuotaExceeded, getRemainingUsage } from '../../features/limits';
import { usageTracker } from '../../features/usageTracker';
import { AIService } from './aiService';

export class VoiceService {
  /**
   * Process voice audio or transcript query with duration tracking
   */
  static async processVoiceInteraction(
    user: UserContext,
    request: VoiceSessionRequest
  ): Promise<VoiceSessionResponse> {
    // 1. Centralized Feature Permission Check
    if (!canUseFeature(user, 'voice_assistant')) {
      throw new Error('Voice Assistant is only available on Basic, Pro, or Premium plans.');
    }

    // 2. Centralized Quota Check (Minutes per month)
    if (await isQuotaExceeded(user, 'voice_assistant', 'voice_minutes')) {
      throw new Error('You have exhausted your voice assistant minutes for this billing cycle.');
    }

    const sessionId = request.sessionId || `voice_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
    const transcript = request.textTranscript || 'Tell me about the best family tour package.';

    // 3. Obtain AI response for the voice query
    const aiResponse = await AIService.processChat(user, {
      messages: [{ role: 'user', content: transcript }],
      sessionId,
    });

    const estimatedVoiceSeconds = 20; // ~20 seconds of audio response
    const estimatedMinutes = Math.ceil(estimatedVoiceSeconds / 60);

    // 4. Track Voice Usage
    await usageTracker.recordUsage({
      userId: user.id,
      featureKey: 'voice_assistant',
      metric: 'voice_minutes',
      count: estimatedMinutes,
    });

    const remainingMinutes = await getRemainingUsage(user, 'voice_assistant', 'voice_minutes');

    return {
      textResponse: aiResponse.message,
      sessionId,
      voiceSecondsUsed: estimatedVoiceSeconds,
      remainingMinutes,
    };
  }
}
