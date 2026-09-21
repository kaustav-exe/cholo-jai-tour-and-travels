import type { APIRoute } from 'astro';
import { ReelsService } from '../../services/reels/reelsService';

export const prerender = false;

export const GET: APIRoute = async ({ request }) => {
  try {
    const url = new URL(request.url);
    const refresh = url.searchParams.get('refresh') === 'true';

    const reels = await ReelsService.getActiveReels(refresh);

    return new Response(JSON.stringify({ reels }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=300',
      },
    });
  } catch (err: any) {
    return new Response(
      JSON.stringify({ error: err?.message || 'Failed to fetch reels' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
