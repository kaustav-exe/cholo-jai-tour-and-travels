export interface FacebookReel {
  id: string;
  title: string;
  destination: string;
  thumbnail: string;
  facebookUrl: string;
  views: string;
  likes: string;
  duration: string;
  date: string;
}

export const facebookPageUrl = "https://www.facebook.com/share/1EwxdAGZvd/";
export const facebookProfileUrl = "https://www.facebook.com/profile.php?id=61577840137646";

// Top 5 most recent tour reels with official Facebook URLs
export const facebookReels: FacebookReel[] = [
  {
    id: "reel-1",
    title: "Snowfall magic in Gulmarg & Gondola Cable Car ride ❄️🏔️",
    destination: "Kashmir",
    thumbnail: "/images/hero_kashmir_1783678442997.png",
    facebookUrl: "https://www.facebook.com/share/1EwxdAGZvd/",
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
    facebookUrl: "https://www.facebook.com/share/1EwxdAGZvd/",
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
    facebookUrl: "https://www.facebook.com/share/1EwxdAGZvd/",
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
    facebookUrl: "https://www.facebook.com/share/1EwxdAGZvd/",
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
    facebookUrl: "https://www.facebook.com/share/1EwxdAGZvd/",
    views: "21.3K",
    likes: "2.8K",
    duration: "0:35",
    date: "Recent Reel"
  }
];
