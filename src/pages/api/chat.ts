import type { APIRoute } from 'astro';
import { AIService } from '../../services/ai/aiService';
import type { UserContext } from '../../features/types';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { messages, sessionId, context, user: requestUser } = body;

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return new Response(
        JSON.stringify({ error: 'Missing messages in request payload' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Resolve user context (from session token, header, or default free user)
    const user: UserContext = requestUser || {
      id: request.headers.get('x-user-id') || 'guest_user',
      plan: (request.headers.get('x-user-plan') as any) || 'free',
    };

    const result = await AIService.processChat(user, {
      messages,
      sessionId,
      context,
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
