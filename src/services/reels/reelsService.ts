import type { FacebookReel } from '../../data/facebookReels';
import { ContentService } from '../content/contentService';

interface CachedReels {
  data: FacebookReel[];
  cachedAt: number;
}

const CACHE_TTL_MS = 10 * 60 * 1000; // 10 minutes cache
let reelsCache: CachedReels | null = null;

export class ReelsService {
  /**
   * Get active reels with caching and multi-tier fallbacks
   */
  static async getActiveReels(forceRefresh = false): Promise<FacebookReel[]> {
    const now = Date.now();
    if (!forceRefresh && reelsCache && now - reelsCache.cachedAt < CACHE_TTL_MS) {
      return reelsCache.data;
    }

    try {
      // 1. Fetch from ContentService (Sanity or static dataset)
      const reels = await ContentService.getFacebookReels();

      // 2. Validate URL structure
      const validReels = reels.map((reel) => {
        let cleanUrl = reel.facebookUrl;
        // Ensure proper https protocol
        if (cleanUrl && !cleanUrl.startsWith('http')) {
          cleanUrl = `https://${cleanUrl}`;
        }
        return {
          ...reel,
          facebookUrl: cleanUrl,
        };
      });

      reelsCache = {
        data: validReels,
        cachedAt: now,
      };

      return validReels;
    } catch (err) {
      console.warn('[ReelsService] Error fetching dynamic reels:', err);
      return reelsCache?.data || [];
    }
  }

  /**
   * Clear reels cache (e.g. on CMS webhook or admin refresh)
   */
  static clearCache() {
    reelsCache = null;
  }
}
