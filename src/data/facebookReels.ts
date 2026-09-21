export interface FacebookReel {
  id: string;
  title: string;
  destination: string;
  thumbnail: string;
  /**
   * IMPORTANT: This must be the DIRECT URL to the individual Facebook Reel/video.
   * Format examples:
   *   https://www.facebook.com/reel/1234567890123456
   *   https://www.facebook.com/watch/?v=1234567890123456
   *   https://fb.watch/xxxxxxxxxx/
   *
   * DO NOT use a generic page share link (https://www.facebook.com/share/XXXXX/)
   * as it will cause "Video Unavailable" when embedded.
   *
   * Ask the page admin to copy the direct URL of each individual Reel post.
   */
  facebookUrl: string;
  views: string;
  likes: string;
  duration: string;
  date: string;
}

export const facebookPageUrl = "https://www.facebook.com/profile.php?id=61577840137646";
export const facebookReelsTabUrl = "https://www.facebook.com/profile.php?id=61577840137646&sk=reels_tab";

/**
 * ⚠️  ACTION REQUIRED ⚠️
 * 
 * Each reel below currently uses a generic page share URL.
 * Replace each `facebookUrl` with the DIRECT URL of that specific Reel.
 * 
 * How to get the direct Reel URL:
 * 1. Open your Facebook page → Reels tab
 * 2. Click on the individual Reel
 * 3. Copy the URL from the browser address bar
 *    It will look like: https://www.facebook.com/reel/XXXXXXXXXX
 * 4. Paste that URL as the `facebookUrl` for the matching reel below.
 */
export const facebookReels: FacebookReel[] = [
  {
    id: "reel-1",
    title: "Snowfall magic in Gulmarg & Gondola Cable Car ride ❄️🏔️",
    destination: "Kashmir",
    thumbnail: "/images/hero_kashmir_1783678442997.png",
    facebookUrl: "https://www.facebook.com/reel/4633620303628812",
    views: "18.4K",
    likes: "2.1K",
    duration: "0:45",
    date: "Recent Reel"
  },
  {
    id: "reel-2",
    title: "Crystal clear turquoise waters of Radhanagar Beach & Havelock Island 🌴🌊",
    destination: "Andaman",
    thumbnail: "/images/hero_andaman_1783678485939.png",
    facebookUrl: "https://www.facebook.com/reel/1509073040496286",
    views: "24.6K",
    likes: "3.4K",
    duration: "0:30",
    date: "Recent Reel"
  },
  {
    id: "reel-3",
    title: "Dreamy Himalayan Toy Train journey from Kalka to Shimla 🚂🌲",
    destination: "Himachal Pradesh",
    thumbnail: "/images/hero_darjeeling_1783678472536.png",
    facebookUrl: "https://www.facebook.com/reel/1837187470928852",
    views: "15.2K",
    likes: "1.9K",
    duration: "0:50",
    date: "Recent Reel"
  },
  {
    id: "reel-4",
    title: "Evening Ganga Aarti vibes at Har Ki Pauri ghats, Haridwar 🙏✨",
    destination: "Haridwar",
    thumbnail: "/images/hero_goa_1783678456678.png",
    facebookUrl: "https://www.facebook.com/reel/1116749940884772",
    views: "31.8K",
    likes: "4.7K",
    duration: "0:40",
    date: "Recent Reel"
  },
  {
    id: "reel-5",
    title: "Cruising through the tranquil emerald backwaters of Alleppey ⛵🌴",
    destination: "Kerala",
    thumbnail: "/images/hero_kerala_1783678518411.png",
    facebookUrl: "https://www.facebook.com/reel/29078670298401322",
    views: "21.3K",
    likes: "2.8K",
    duration: "0:35",
    date: "Recent Reel"
  }
];
