import type { APIRoute } from 'astro';
import { VoiceService } from '../../services/ai/voiceService';
import type { UserContext } from '../../features/types';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { textTranscript, sessionId, language, user: requestUser } = body;

    const user: UserContext = requestUser || {
      id: request.headers.get('x-user-id') || 'guest_user',
      plan: (request.headers.get('x-user-plan') as any) || 'basic',
    };

    const result = await VoiceService.processVoiceInteraction(user, {
      textTranscript,
      sessionId,
      language,
    });

    return new Response(JSON.stringify(result), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err: any) {
    return new Response(
      JSON.stringify({ error: err?.message || 'Internal Server Error' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
