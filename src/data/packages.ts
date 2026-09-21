export interface ItineraryDay {
  day: number;
  title: string;
  desc: string;
  spots: string[];
  meals: string;
}

export interface TransportInfo {
  mode: string;
  pickup: string;
  vehicle: string;
  details: string;
}

export interface HotelInfo {
  category: string;
  description: string;
  meals: string;
  features: string[];
}

export interface PricingInfo {
  perHead: string;
  originalPrice?: string;
  groupDiscount?: string;
  inclusions: string[];
  exclusions: string[];
}

export interface ProcessStep {
  step: number;
  title: string;
  desc: string;
}

export interface TourPackage {
  id: string;
  title: string;
  destination: string;
  duration: string;
  price: string;
  image: string;
  shortDescription: string;
  featured?: boolean;
  
  // Extended Details & Seasonal Pricing
  rating?: number;
  reviewsCount?: number;
  nextDate?: string;
  stayBreakdown?: string;
  seasonalPricing?: Record<string, number>;
  pricingNote?: string;
  gallery?: string[];
  videoUrl?: string;
  highlights?: string[];
  transport?: TransportInfo;
  accommodation?: HotelInfo;
  pricingDetails?: PricingInfo;
  itinerary?: ItineraryDay[];
  bookingProcess?: ProcessStep[];
  importantNotes?: string[];
}

export const packages: TourPackage[] = [
  {
    id: "andaman-6n7d",
    title: "Tropical Andaman Island Package",
    destination: "Andaman Islands, India",
    duration: "6 Nights / 7 Days",
    price: "₹38,990",
    image: "/images/hero_andaman_1783678485939.png",
    shortDescription: "Complete 6N/7D tropical Andaman holiday including Kolkata-to-Kolkata flight tickets, AC hotels, AC vehicles, inter-island cruise, all meals, and Havelock photoshoot.",
    featured: true,
    rating: 4.9,
    reviewsCount: 184,
    nextDate: "Available on Booking",
    stayBreakdown: "Port Blair — 4 Nights | Havelock Island — 1 Night | Neil Island — 1 Night",
    seasonalPricing: {
      January: 38990,
      February: 38990,
      March: 38990,
      April: 38990,
      May: 38990,
      June: 38990,
      July: 38990,
      August: 38990,
      September: 38990,
      October: 38990,
      November: 38990,
      December: 38990
    },
    pricingNote: "Package includes roundtrip Kolkata to Kolkata flight tickets and cruise transfers.",
    gallery: [
      "/images/hero_andaman_1783678485939.png",
      "/images/tour-3.png",
      "/images/hero_goa_1783678456678.png",
      "/images/tour-6.png"
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    highlights: [
      "Roundtrip Kolkata to Kolkata Flight Tickets Included",
      "Stay breakdown: Port Blair (4N) + Havelock Island (1N) + Neil Island (1N)",
      "Inter-island cruise transfer by Green Ocean / Sea Link",
      "Cellular Jail Light & Sound Show, Corbyn's Cove Beach & Ross Island",
      "Radhanagar Beach (Asia's #1 Beach), Kala Patthar Beach & Havelock Island Photoshoot",
      "Neil Island Natural Bridge, Bharatpur Beach & Laxmanpur Beach",
      "Baratang Island excursion with ancient Limestone Caves",
      "All Meals: Daily Breakfast, Lunch & Dinner Included"
    ],
    transport: {
      mode: "Kolkata to Kolkata Return Flight Tickets + Private Inter-Island Cruise + AC Vehicle",
      pickup: "Veer Savarkar International Airport, Port Blair",
      vehicle: "Dedicated AC Vehicle for all land transfers and sightseeing",
      details: "Comprehensive flight, high-speed catamaran cruise, and private AC car transfers throughout."
    },
    accommodation: {
      category: "AC Deluxe Hotels & Island Resorts",
      description: "4 Nights Port Blair AC Hotel + 1 Night Havelock Island Resort + 1 Night Neil Island Resort",
      meals: "Daily Breakfast, Lunch & Dinner Included",
      features: ["Air Conditioned Rooms", "Private Bathroom with Geyser", "In-house Restaurant", "24/7 Power Backup"]
    },
    pricingDetails: {
      perHead: "₹38,990 / person",
      groupDiscount: "Special group arrangements available on advance inquiry",
      inclusions: [
        "Kolkata to Kolkata Flight Tickets",
        "AC Hotel Accommodation (6 Nights)",
        "AC Vehicle for all land transfers and sightseeing",
        "Breakfast, Lunch & Dinner",
        "All Entry Fees & Boat Tickets",
        "Inter-island Cruise Tickets (Port Blair - Havelock - Neil - Port Blair)",
        "Havelock Island Photoshoot",
        "Experienced Tour Guide"
      ],
      exclusions: [
        "Personal expenses (shopping, laundry, tips)",
        "Optional water sports activities (Scuba diving, Sea Walk, Jet Ski)",
        "Any item not mentioned in the inclusions"
      ]
    },
    itinerary: [
      {
        day: 1,
        title: "Arrival at Port Blair, Cellular Jail & Light & Sound Show",
        desc: "Arrive at Port Blair Airport. Transfer to hotel. Visit historic Cellular Jail, Corbyn's Cove Beach, and witness the Light & Sound Show.",
        spots: ["Port Blair Airport", "Cellular Jail", "Corbyn's Cove Beach", "Light & Sound Show"],
        meals: "Lunch & Dinner Included"
      },
      {
        day: 2,
        title: "Ross Island & North Bay Coral Island Tour",
        desc: "Excursion to Ross Island (historical ruins) and North Bay Island for picturesque views and coral exploration. Overnight stay at Port Blair.",
        spots: ["Ross Island", "North Bay Island"],
        meals: "Breakfast, Lunch & Dinner Included"
      },
      {
        day: 3,
        title: "Port Blair to Havelock Island — Radhanagar & Kala Patthar Beach",
        desc: "Board private cruise to Havelock Island. Check-in to resort. Visit world-famous Radhanagar Beach and scenic Kala Patthar Beach. Havelock photoshoot session.",
        spots: ["Havelock Island", "Radhanagar Beach", "Kala Patthar Beach"],
        meals: "Breakfast, Lunch & Dinner Included"
      },
      {
        day: 4,
        title: "Havelock to Neil Island — Bharatpur, Laxmanpur & Natural Bridge",
        desc: "Cruise transfer from Havelock to Neil Island. Visit Bharatpur Beach, Laxmanpur Beach, and the iconic Natural Rock Bridge formation. Overnight at Neil Island.",
        spots: ["Neil Island", "Bharatpur Beach", "Laxmanpur Beach", "Natural Bridge"],
        meals: "Breakfast, Lunch & Dinner Included"
      },
      {
        day: 5,
        title: "Neil Island to Port Blair Return Cruise",
        desc: "Return to Port Blair via premium cruise (Green Ocean / Sea Link). Check in to hotel at Port Blair with evening at leisure for local markets.",
        spots: ["Neil Island", "Port Blair Cruise", "Local Market"],
        meals: "Breakfast, Lunch & Dinner Included"
      },
      {
        day: 6,
        title: "Baratang Island Excursion & Limestone Caves",
        desc: "Full day excursion to Baratang Island passing through dense mangrove waterways to explore ancient Limestone Caves. Return to Port Blair for overnight stay.",
        spots: ["Baratang Island", "Limestone Cave", "Mangrove Creeks"],
        meals: "Breakfast, Lunch & Dinner Included"
      },
      {
        day: 7,
        title: "Airport Drop & Departure",
        desc: "After breakfast, drop off at Veer Savarkar International Airport, Port Blair for flight back to Kolkata with cherished island memories.",
        spots: ["Port Blair Airport"],
        meals: "Breakfast Included"
      }
    ],
    bookingProcess: [
      { step: 1, title: "Select Travel Date", desc: "Contact our team via phone or WhatsApp to check upcoming flight batch dates." },
      { step: 2, title: "Flight & Hotel Confirmation", desc: "We reserve your Kolkata flights, cruise seats, and AC resort rooms." },
      { step: 3, title: "Receive Official Vouchers", desc: "Receive confirmed flight tickets and tour vouchers." }
    ],
    importantNotes: [
      "Valid Government Photo ID (Aadhaar / Passport / Voter ID) mandatory for airport and island ferry boarding.",
      "Water sports activities depend on sea conditions and weather clearance."
    ]
  },
  {
    id: "pkg-1",
    title: "Enchanting Kashmir Winter & Snow Tour",
    destination: "Kashmir, India",
    duration: "10 Nights / 11 Days",
    price: "₹22,990",
    image: "/images/hero_kashmir_1783678442997.png",
    shortDescription: "Special 10N/11D Kashmir winter departure (24 Dec 2026) featuring 3AC train journey, Vande Bharat Express, Srinagar, Gulmarg with Gondola Phase 1, Sonmarg, Pahalgam with bonfire, and Dal Lake Shikara ride.",
    featured: true,
    rating: 4.9,
    reviewsCount: 142,
    nextDate: "24 Dec 2026",
    stayBreakdown: "Srinagar — 4 Nights | Pahalgam — 2 Nights | On Train — 4 Nights",
    seasonalPricing: {
      January: 22990,
      February: 22990,
      March: 22990,
      April: 22990,
      May: 22990,
      June: 22990,
      July: 22990,
      August: 22990,
      September: 22990,
      October: 22990,
      November: 22990,
      December: 22990
    },
    pricingNote: "Departure date: 24th December 2026. Rate: ₹22,990 (Triple Sharing) | ₹23,990 (Double Sharing).",
    gallery: [
      "/images/hero_kashmir_1783678442997.png",
      "/images/tour-1.jpeg",
      "/images/tour-4.png",
      "/images/tour-7.png"
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    highlights: [
      "Fixed Winter Departure: 24th December 2026 from Kolkata",
      "3-Tier AC Train Journey (Jammu Tawi Express) + Vande Bharat Express (Jammu to Srinagar)",
      "Gulmarg Gondola Phase 1 Cable Car Ticket Included",
      "1-Hour Relaxing Shikara Ride on Dal Lake Included",
      "All Monument & Sightseeing Entry Tickets Included",
      "Pahalgam stay with special evening Bonfire arrangement",
      "Local Union Cabs & Sightseeing Vehicles Included",
      "Full Meal Plan: 2x Tea/Biscuits, Breakfast, Lunch, Evening Snacks & Dinner (Chicken, Mutton, Fish, Egg, Biryani, Fried Rice, Chilli Chicken)"
    ],
    transport: {
      mode: "3-Tier AC Train (Jammu Tawi Express) + Vande Bharat Express + Local Union Vehicles",
      pickup: "Kolkata Railway Station",
      vehicle: "Dedicated Local Union & Sightseeing Vehicles across Srinagar, Gulmarg, Sonmarg & Pahalgam",
      details: "Roundtrip 3AC train from Kolkata, Vande Bharat connectivity between Jammu and Srinagar, and private local mountain cabs."
    },
    accommodation: {
      category: "Deluxe Hotels",
      description: "Deluxe hotel accommodation (Family / 3 Sharing basis in Srinagar and Pahalgam)",
      meals: "Morning & Evening Tea/Biscuits, Breakfast, Lunch, Evening Snacks and Dinner with diverse menu (Fish, Egg, Chicken, Mutton, Biryani, Fried Rice, Chilli Chicken)",
      features: ["Comfortable Warm Bedding", "Geyser Hot Water", "Room Heating", "In-house Dining"]
    },
    pricingDetails: {
      perHead: "₹22,990 / person (Triple Sharing) | ₹23,990 / person (Double Sharing)",
      inclusions: [
        "3-Tier AC Train Ticket (Jammu Tawi Express)",
        "Vande Bharat Express ticket from Jammu to Srinagar & return",
        "Deluxe Hotel Accommodation (Family / Triple Sharing)",
        "Daily Meals: 2x Tea & Biscuits, Breakfast, Lunch, Evening Snacks, Dinner",
        "All Entry Tickets for sightseeing spots",
        "Gulmarg Gondola Phase 1 Cable Car Ticket",
        "1-Hour Shikara Ride on Dal Lake",
        "Local Union vehicles & all sightseeing transportation",
        "Evening Bonfire at Pahalgam"
      ],
      exclusions: [
        "Meals and drinks during train journeys",
        "Packaged mineral water",
        "Personal expenses, pony/horse rides, or sledging charges"
      ]
    },
    itinerary: [
      {
        day: 1,
        title: "Departure from Kolkata Station",
        desc: "Meet at Kolkata Railway Station and board the Jammu Tawi Express in 3-Tier AC coach for our journey towards Jammu. (Train food/drinks at own arrangement).",
        spots: ["Kolkata Railway Station", "Jammu Tawi Express"],
        meals: "Train journey — own arrangement"
      },
      {
        day: 2,
        title: "Full Day & Night Train Journey",
        desc: "Day and night train journey across northern India with lively group camaraderie.",
        spots: ["Train Journey"],
        meals: "Train journey — own arrangement"
      },
      {
        day: 3,
        title: "Arrival in Jammu & Vande Bharat to Srinagar",
        desc: "Arrive at Jammu Station around 9:00 AM. Board the Vande Bharat Express at 12:00 PM for the scenic mountain train ride to Srinagar. Check in to hotel at Srinagar for overnight stay.",
        spots: ["Jammu Railway Station", "Vande Bharat Express", "Srinagar Hotel"],
        meals: "Dinner Included"
      },
      {
        day: 4,
        title: "Srinagar Local Sightseeing & Dal Lake Shikara Ride",
        desc: "Explore famous Srinagar attractions: Hazratbal Shrine, Mughal Gardens (Nishat & Shalimar Bagh), Dal Lake, Shankaracharya Temple, and enjoy an included 1-hour Shikara ride. Overnight in Srinagar.",
        spots: ["Hazratbal", "Mughal Gardens", "Dal Lake", "Shankaracharya Temple", "Shikara Ride"],
        meals: "Breakfast, Lunch, Evening Snacks & Dinner"
      },
      {
        day: 5,
        title: "Day Excursion to Sonmarg — Meadow of Gold",
        desc: "Morning scenic drive to Sonmarg surrounded by snow-clad peaks and glaciers. Explore the golden valley and return to Srinagar for overnight stay.",
        spots: ["Sonmarg Valley", "Thajiwas Glacier View", "Sindh River"],
        meals: "Breakfast, Lunch, Evening Snacks & Dinner"
      },
      {
        day: 6,
        title: "Gulmarg Day Excursion with Gondola Cable Car",
        desc: "Morning departure for Gulmarg. Experience the thrill of the Gondola Cable Car (Phase 1 ticket included) to witness breathtaking snow fields. Return to Srinagar for overnight stay.",
        spots: ["Gulmarg Meadow", "Gondola Phase 1", "Apharwat Mountain View"],
        meals: "Breakfast, Lunch, Evening Snacks & Dinner"
      },
      {
        day: 7,
        title: "Srinagar to Pahalgam — Valley of Shepherds & Evening Bonfire",
        desc: "Scenic journey to picturesque Pahalgam along the Lidder river. Check in to hotel. In the evening, enjoy a cozy group bonfire arrangement. Overnight in Pahalgam.",
        spots: ["Pahalgam Valley", "Lidder River", "Evening Bonfire"],
        meals: "Breakfast, Lunch, Evening Snacks & Dinner"
      },
      {
        day: 8,
        title: "Pahalgam Local Sightseeing — Chandanwari, Betaab & Aru Valleys",
        desc: "Explore the breathtaking valleys of Pahalgam by local union vehicles, including Chandanwari, Betaab Valley, and Aru Valley. Overnight stay in Pahalgam.",
        spots: ["Chandanwari", "Betaab Valley", "Aru Valley"],
        meals: "Breakfast, Lunch, Evening Snacks & Dinner"
      },
      {
        day: 9,
        title: "Pahalgam to Jammu via Vande Bharat & Return Train",
        desc: "Travel from Pahalgam to Srinagar and board the Vande Bharat Express to Jammu. At night, board the Jammu Tawi Express (3AC) from Jammu Station towards Kolkata.",
        spots: ["Srinagar", "Jammu Station", "Return Train"],
        meals: "Breakfast & Lunch Included"
      },
      {
        day: 10,
        title: "Full Day Train Journey",
        desc: "Relax on board the train journey reminiscing the snow-filled memories of Kashmir.",
        spots: ["Train Journey"],
        meals: "Train journey — own arrangement"
      },
      {
        day: 11,
        title: "Arrival at Kolkata",
        desc: "Arrive at Kolkata Station in the afternoon. Tour concludes with wonderful memories.",
        spots: ["Kolkata Railway Station"],
        meals: "Tour Concludes"
      }
    ],
    bookingProcess: [
      { step: 1, title: "Book Your Slot", desc: "Limited 30 seats per batch. Register early with token advance and photo ID." },
      { step: 2, title: "Train & Ticket Issuance", desc: "IRCTC 3AC train and Vande Bharat tickets reserved." },
      { step: 3, title: "WhatsApp Group Coordination", desc: "Join dedicated WhatsApp tour group for real-time updates." }
    ],
    importantNotes: [
      "Children: 5–7 years half price; 7+ years full price.",
      "Heavy winter woolens and thermals recommended for December snowfall.",
      "Sightseeing spot access subject to weather conditions and local administration regulations."
    ]
  },
  {
    id: "pkg-2",
    title: "North Sikkim & Gangtok Tour",
    destination: "Sikkim, India",
    duration: "5 Nights / 6 Days",
    price: "₹11,000",
    image: "/images/hero_darjeeling_1783678472536.png",
    shortDescription: "5N/6D North Sikkim tour from NJP to NJP covering Gangtok (3N), Lachung (2N), Tsomgo Lake, Baba Mandir, Yumthang Valley, and MG Marg with all non-veg meals and permits.",
    featured: true,
    rating: 4.8,
    reviewsCount: 118,
    nextDate: "Available on Booking",
    stayBreakdown: "Gangtok — 3 Nights | Lachung — 2 Nights",
    seasonalPricing: {
      January: 11000,
      February: 11000,
      March: 11000,
      April: 12500,
      May: 13000,
      June: 11000,
      July: 10000,
      August: 10000,
      September: 11000,
      October: 12500,
      November: 12000,
      December: 11500
    },
    pricingNote: "Tour Cost: ₹11,000/- per head (Season rates may vary slightly).",
    gallery: [
      "/images/hero_darjeeling_1783678472536.png",
      "/images/tour-2.png",
      "/images/tour-8.png",
      "/images/tour-12.png"
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    highlights: [
      "NJP / Siliguri / Bagdogra Pick Up & Drop Included",
      "Stay: 3 Nights Gangtok + 2 Nights Lachung in Standard Hotels",
      "Glacial Tsomgo (Chhangu) Lake & Baba Harbhajan Singh Mandir Excursion",
      "Scenic Yumthang Valley — Valley of Flowers & Snow",
      "North Sikkim Entry Permits Included",
      "All Non-Veg & Veg Meals Included from Day 1 Lunch to Day 6 Breakfast",
      "Evening stroll and shopping at famous MG Marg, Gangtok"
    ],
    transport: {
      mode: "Dedicated Mountain Vehicle (NJP to NJP)",
      pickup: "NJP Railway Station / Siliguri / Bagdogra Airport",
      vehicle: "Dedicated Mountain Vehicle (Sumo / Bolero / Maxx) for North Sikkim circuit",
      details: "Complete pickup, drop, and high-altitude transfers with experienced hill driver."
    },
    accommodation: {
      category: "Standard Clean Hotels",
      description: "3 Nights Gangtok Standard Hotel + 2 Nights Lachung Standard Hotel",
      meals: "Breakfast, Lunch & Dinner (Non-Veg / Veg Food included)",
      features: ["Clean Rooms", "Attached Bath with Geyser", "In-house Kitchen", "Room Service"]
    },
    pricingDetails: {
      perHead: "₹11,000 / person",
      inclusions: [
        "All meals from Day 1 Lunch to Day 6 Breakfast (Non-veg & Veg)",
        "Standard Hotel Accommodation (3N Gangtok + 2N Lachung)",
        "All sightseeing as mentioned in the itinerary",
        "NJP / Siliguri / Bagdogra Pick up & Drop",
        "North Sikkim Entry Permits"
      ],
      exclusions: [
        "Any monument/park entry fees",
        "Camera charges",
        "Nathula Pass, Katao, and Zero Point excursions (optional at driver direct payment)",
        "Train or flight fares to NJP/Bagdogra",
        "Room heater charges"
      ]
    },
    itinerary: [
      {
        day: 1,
        title: "Pick up from NJP / Siliguri / Bagdogra to Gangtok",
        desc: "Pick up from NJP Railway Station / Siliguri / Bagdogra Airport and scenic transfer to Gangtok hotel. Enjoy lunch, evening walk at MG Marg. Overnight stay in Gangtok.",
        spots: ["NJP / Bagdogra", "Teesta River View", "Gangtok MG Marg"],
        meals: "Lunch & Dinner Included"
      },
      {
        day: 2,
        title: "Tsomgo (Chhangu) Lake & Baba Mandir Excursion",
        desc: "After breakfast, excursion to the glacial Tsomgo Lake (12,400 ft) and the sacred Baba Harbhajan Singh Mandir. Return to Gangtok for overnight stay.",
        spots: ["Tsomgo Lake", "Baba Mandir"],
        meals: "Breakfast, Lunch & Dinner Included"
      },
      {
        day: 3,
        title: "Gangtok to Lachung via Mangan",
        desc: "After breakfast, check out and journey towards North Sikkim. Enjoy lunch at Mangan en route. Reach Lachung by evening. Overnight stay in Lachung.",
        spots: ["Mangan", "Chungthang Confluence", "Lachung Village"],
        meals: "Breakfast, Lunch & Dinner Included"
      },
      {
        day: 4,
        title: "Yumthang Valley Excursion & Return to Lachung",
        desc: "Morning visit to the magnificent Yumthang Valley (Valley of Flowers / Snow). (Zero Point & Mount Katao optional at own cost). Return to Lachung for overnight stay.",
        spots: ["Yumthang Valley", "Singba Rhododendron Sanctuary", "Hot Springs"],
        meals: "Breakfast, Lunch & Dinner Included"
      },
      {
        day: 5,
        title: "Lachung to Gangtok Return & MG Marg Evening",
        desc: "After breakfast, drive back to Gangtok. Check in to hotel. Spend the evening exploring MG Marg for local souvenirs and handicrafts. Overnight in Gangtok.",
        spots: ["Lachung to Gangtok", "MG Marg"],
        meals: "Breakfast, Lunch & Dinner Included"
      },
      {
        day: 6,
        title: "Gangtok to NJP / Siliguri Drop",
        desc: "After breakfast, depart Gangtok with beautiful mountain memories for drop at NJP Railway Station or Bagdogra Airport.",
        spots: ["NJP / Siliguri / Bagdogra"],
        meals: "Breakfast Included"
      }
    ],
    bookingProcess: [
      { step: 1, title: "Submit Inquiry", desc: "Contact us via WhatsApp or Phone with your planned travel dates." },
      { step: 2, title: "Permit Documentation", desc: "Submit passport photos & valid photo ID for Sikkim entry permits." },
      { step: 3, title: "Token Confirmation", desc: "Pay token amount to confirm your booking vouchers." }
    ],
    importantNotes: [
      "Voter ID card or Passport and 4 passport-size photographs required for North Sikkim permits.",
      "Zero Point & Katao visits depend on snow and military clearance."
    ]
  },
  {
    id: "pkg-3",
    title: "Shimla – Kullu – Manali Himalayan Tour",
    destination: "Himachal Pradesh, India",
    duration: "9 Nights / 10 Days",
    price: "₹11,990",
    image: "/images/tour-10.png",
    shortDescription: "10 Days complete Himalayan tour (Howrah to Howrah) featuring Kalka-Shimla heritage Toy Train ride, Kufri, Manali, Kullu, Solang Valley, Rohtang Pass, Atal Tunnel, Sissu Village, Kasol, Manikaran, and full Bengali meals.",
    featured: true,
    rating: 4.8,
    reviewsCount: 110,
    nextDate: "Available on Booking",
    stayBreakdown: "Shimla — 2 Nights | Manali — 3 Nights | On Train — 4 Nights",
    seasonalPricing: {
      January: 11990,
      February: 11990,
      March: 11990,
      April: 12990,
      May: 13990,
      June: 13990,
      July: 11990,
      August: 11990,
      September: 11990,
      October: 12990,
      November: 11990,
      December: 12990
    },
    pricingNote: "10-Day Package: ₹11,990/- per head (Triple/Quad Share) | ₹12,990/- per head (Double Share).",
    gallery: [
      "/images/tour-10.png",
      "/images/tour-13.png",
      "/images/hero_kashmir_1783678442997.png",
      "/images/tour-1.jpeg"
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    highlights: [
      "Roundtrip Howrah to Howrah Tour (Sleeper Class Train Tickets Included)",
      "Scenic Kalka to Shimla Heritage Toy Train Ride Included",
      "Shimla Mall Road, Ridge, Kali Bari & Kufri Sightseeing",
      "Manali via Kullu Valley & River Rafting Point",
      "Solang Valley, Atal Tunnel, Sissu Village & Rohtang Pass (subject to opening)",
      "Kasol Parvati Valley & Sacred Manikaran Gurudwara en route to Chandigarh",
      "4-Time Bengali Meals Daily (Morning Tea, Breakfast, Lunch, Evening Tea, Dinner with Fish, Egg, Chicken, 1-Day Mutton, Chutney, Papad)",
      "Standard Clean Hotels & Dedicated Sightseeing Vehicles"
    ],
    transport: {
      mode: "Sleeper Class Train (Howrah - Kalka & Chandigarh - Howrah) + Heritage Toy Train + Sightseeing Vehicle",
      pickup: "Howrah Railway Station",
      vehicle: "Dedicated Sightseeing Vehicle for all Himachal transfers and local tours",
      details: "Hassle-free sleeper train tickets, 5-hour UNESCO Toy Train experience, and mountain vehicles throughout."
    },
    accommodation: {
      category: "Standard Clean Hotels",
      description: "2 Nights Shimla Clean Hotel + 3 Nights Manali Clean Hotel",
      meals: "4 Meals Daily from Day 3 Lunch to Day 8 Lunch (Rice, Dal, Bhaja, Fish, Egg, Chicken, 1-Day Mutton, Chutney, Papad)",
      features: ["Clean Bedding", "Attached Bathroom with Hot Water", "In-house Dining", "Good Location"]
    },
    pricingDetails: {
      perHead: "₹11,990 / person (Triple/Quad Share) | ₹12,990 / person (Double Share)",
      inclusions: [
        "Roundtrip Sleeper Class Train Tickets (Howrah - Kalka / Chandigarh - Howrah)",
        "Kalka to Shimla Toy Train Ticket",
        "Standard Clean Hotel Accommodation (Shimla 2N + Manali 3N)",
        "All 4 Meals Daily from Day 3 Lunch to Day 8 Lunch",
        "Dedicated Sightseeing Vehicle across Shimla, Kufri, Kullu, Manali, Solang, Atal Tunnel, Sissu, Kasol, Manikaran"
      ],
      exclusions: [
        "Any adventure activity, ropeway, horse riding, river rafting, boat rides",
        "Entry fees at monuments/parks",
        "Personal expenses, room heater, mineral water",
        "Meals during train journey"
      ]
    },
    itinerary: [
      {
        day: 1,
        title: "Departure from Howrah Station",
        desc: "Meet at Howrah Railway Station and board our train at 9:55 PM for Himachal Pradesh. Overnight train journey.",
        spots: ["Howrah Railway Station"],
        meals: "Train journey — own arrangement"
      },
      {
        day: 2,
        title: "Full Day Train Journey",
        desc: "Full day traveling through northern plains on the train.",
        spots: ["Train Journey"],
        meals: "Train journey — own arrangement"
      },
      {
        day: 3,
        title: "Arrive Kalka, Toy Train to Shimla & Local Sightseeing",
        desc: "Arrive at Kalka Station in the morning. Board the dream Himalayan Toy Train to Shimla (approx. 5 hours journey). Check in to hotel, explore Shimla local sights (Mall, Ridge, Kali Bari). Overnight in Shimla.",
        spots: ["Kalka Station", "Toy Train Ride", "Shimla Mall Road", "Kali Bari"],
        meals: "Lunch, Evening Tea & Dinner Included"
      },
      {
        day: 4,
        title: "Shimla to Kufri Sightseeing Excursion",
        desc: "After breakfast, depart for Kufri. Enjoy panoramic Himalayan views, nature park, and Himalayan viewpoints. Return to hotel. Overnight in Shimla.",
        spots: ["Kufri", "Himalayan Viewpoints", "Shimla"],
        meals: "Morning Tea, Breakfast, Lunch, Evening Tea & Dinner"
      },
      {
        day: 5,
        title: "Shimla to Manali via Kullu Sightseeing",
        desc: "Drive from Shimla to Manali via scenic Kullu Valley. Enjoy scenic stopovers, Kullu shawl factories, and river valley views. Check in to Manali hotel for overnight stay.",
        spots: ["Kullu Valley", "Beas River", "Manali"],
        meals: "Morning Tea, Breakfast, Lunch, Evening Tea & Dinner"
      },
      {
        day: 6,
        title: "Manali Local Sightseeing",
        desc: "Explore Manali local attractions: Hadimba Temple, Vashisht Hot Springs, Club House, Tibetan Monastery, and Mall Road. Overnight in Manali.",
        spots: ["Hadimba Temple", "Vashisht Kund", "Manali Mall Road"],
        meals: "Morning Tea, Breakfast, Lunch, Evening Tea & Dinner"
      },
      {
        day: 7,
        title: "Solang Valley, Atal Tunnel, Sissu Village & Rohtang Pass",
        desc: "Full day excursion to Solang Valley, world-famous engineering marvel Atal Tunnel, beautiful Sissu Village in Lahaul, and Rohtang Pass (subject to opening). Overnight in Manali.",
        spots: ["Solang Valley", "Atal Tunnel", "Sissu Village", "Rohtang Pass"],
        meals: "Morning Tea, Breakfast, Lunch, Evening Tea & Dinner"
      },
      {
        day: 8,
        title: "Manali to Chandigarh via Kasol & Manikaran",
        desc: "Depart Manali for Chandigarh via scenic Kasol in Parvati Valley and sacred Manikaran Hot Springs Gurudwara. Reach Chandigarh Station to board return train.",
        spots: ["Kasol", "Manikaran Sahib", "Chandigarh Station"],
        meals: "Morning Tea, Breakfast & Lunch Included"
      },
      {
        day: 9,
        title: "Full Day Train Journey",
        desc: "Full day on train traveling back towards West Bengal.",
        spots: ["Train Journey"],
        meals: "Train journey — own arrangement"
      },
      {
        day: 10,
        title: "Arrival at Howrah Station",
        desc: "Arrive at Howrah Railway Station. Tour concludes with wonderful memories.",
        spots: ["Howrah Railway Station"],
        meals: "Tour Concludes"
      }
    ],
    bookingProcess: [
      { step: 1, title: "Book Early", desc: "Contact us on WhatsApp or phone to register your seat with token advance." },
      { step: 2, title: "Train & Toy Train Booking", desc: "We manage IRCTC train and Kalka-Shimla Toy Train reservations." },
      { step: 3, title: "Departure Briefing", desc: "Receive ticket vouchers and trip instructions." }
    ],
    importantNotes: [
      "Child Policy: Up to 4 years Free; 5–7 years 50% charge; 8+ years Full charge.",
      "Rohtang Pass entry subject to weather, snow clearance, and NGT permit guidelines."
    ]
  },
  {
    id: "pkg-4",
    title: "Majestic Rajasthan Royal Tour",
    destination: "Rajasthan, India",
    duration: "13 Nights / 14 Days",
    price: "₹24,500",
    image: "/images/tour-4.png",
    shortDescription: "Grand 13N/14D Royal Rajasthan tour (04 Dec – 17 Dec 2026) covering Jaipur, Ajmer Sharif, Pushkar, Chittorgarh Fort, Udaipur, Mount Abu, Jaisalmer Thar Desert Camp with folk dance, and Jodhpur.",
    featured: true,
    rating: 4.9,
    reviewsCount: 160,
    nextDate: "04 Dec 2026",
    stayBreakdown: "Jaipur (2N) | Pushkar (1N) | Udaipur (2N) | Mount Abu (2N) | Jaisalmer (2N - 1N Camp) | Jodhpur (1N) | Train (4N)",
    seasonalPricing: {
      January: 24500, February: 24500, March: 24500, April: 24500,
      May: 24500, June: 24500, July: 24500, August: 24500,
      September: 24500, October: 24500, November: 24500, December: 24500
    },
    pricingNote: "Tour Dates: 04/12/2026 to 17/12/2026. Rate: ₹24,500 (Triple Share) | ₹25,500 (Double Share). Advance token: ₹5,000.",
    gallery: [
      "/images/tour-4.png",
      "/images/tour-9.png",
      "/images/tour-10.png",
      "/images/tour-1.jpeg"
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    highlights: [
      "Fixed Winter Dates: 04 December 2026 to 17 December 2026",
      "Roundtrip Sleeper Class Train Transportation + AC Volvo / Tourist Bus",
      "Jaipur: Amber Fort, Jal Mahal, City Palace, Albert Hall, Jantar Mantar, Hawa Mahal, Birla Mandir",
      "Ajmer Sharif Moinuddin Chishti Dargah & Pushkar Brahma Temple & Lake",
      "Historic Chittorgarh Fort & Udaipur City of Lakes (Lake Pichola, Saheliyon Ki Bari)",
      "Mount Abu Hill Station (Nakki Lake, Dilwara Jain Temples, Om Shanti Bhawan)",
      "Jaisalmer Thar Desert Camp Stay with Rajasthani Folk Culture & Dance Performance",
      "Jaisalmer Golden Fort (Sonar Kella), Patwon Ki Haveli & Gadisar Lake",
      "Jodhpur: Mehrangarh Fort, Umaid Bhawan Palace, Jaswant Thada, Mandore Gardens",
      "All Meals: Daily Breakfast, Lunch & Dinner Included"
    ],
    transport: {
      mode: "Sleeper Class Train from Kolkata + AC Volvo / Deluxe Bus across Rajasthan",
      pickup: "Kolkata Railway Station",
      vehicle: "AC Volvo / Deluxe Tourist Coach for all intercity journeys and sightseeing",
      details: "Complete roundtrip train, luxury bus transportation, toll taxes, parking, and driver allowances included."
    },
    accommodation: {
      category: "Deluxe Hotels & Luxury Desert Camp",
      description: "Deluxe hotels in Jaipur (2N), Pushkar (1N), Udaipur (2N), Mount Abu (2N), Jaisalmer (1N Hotel + 1N Desert Camp), Jodhpur (1N)",
      meals: "Daily Breakfast, Lunch and Dinner Included throughout the tour",
      features: ["Air Conditioned / Deluxe Rooms", "Attached Bath with Geyser", "Authentic Cultural Evening in Desert", "Central Locations"]
    },
    pricingDetails: {
      perHead: "₹24,500 / person (Triple Share) | ₹25,500 / person (Double Share)",
      inclusions: [
        "Sleeper Class Train Tickets (Kolkata - Jaipur & Jodhpur - Kolkata)",
        "AC Volvo / Bus Transportation throughout Rajasthan",
        "Toll Tax, Parking, Driver Allowance",
        "All Sightseeing as per program",
        "Deluxe Hotel & Desert Camp Accommodation",
        "Daily Breakfast, Lunch & Dinner",
        "All Taxes and Service Charges"
      ],
      exclusions: [
        "Camel riding, jeep safari, and rafting charges",
        "Meals during train journey",
        "Entry fees at monuments and museums",
        "Camera and porter charges",
        "AC Class train upgrade (optional extra fare)"
      ]
    },
    itinerary: [
      {
        day: 1,
        title: "Departure from Kolkata for Jaipur",
        desc: "Board the train for Jaipur in the afternoon from Kolkata. Overnight train journey.",
        spots: ["Kolkata Railway Station"],
        meals: "Train journey — own arrangement"
      },
      {
        day: 2,
        title: "Train Journey & Arrival in Jaipur",
        desc: "Arrive in Jaipur in the afternoon/evening. Transfer to hotel, check-in, relax and spend the evening at leisure. Overnight in Jaipur.",
        spots: ["Jaipur Station", "Jaipur Hotel"],
        meals: "Dinner Included"
      },
      {
        day: 3,
        title: "Jaipur Sightseeing — Pink City Heritage",
        desc: "After breakfast, explore Amber Fort, Jal Mahal, Kanak Garden, City Palace, Albert Hall Museum, Jantar Mantar, Hawa Mahal, and Birla Mandir. Overnight in Jaipur.",
        spots: ["Amber Fort", "Jal Mahal", "City Palace", "Albert Hall", "Hawa Mahal", "Birla Mandir"],
        meals: "Breakfast, Lunch & Dinner"
      },
      {
        day: 4,
        title: "Jaipur to Pushkar via Ajmer Sharif Dargah",
        desc: "Check out after breakfast, drive to Pushkar. En route visit the famous Ajmer Sharif Moinuddin Chishti Dargah. In Pushkar, visit Brahma Temple and Pushkar Lake. Overnight in Pushkar.",
        spots: ["Ajmer Sharif Dargah", "Brahma Temple", "Pushkar Lake"],
        meals: "Breakfast, Lunch & Dinner"
      },
      {
        day: 5,
        title: "Pushkar to Udaipur via Chittorgarh Fort",
        desc: "Drive from Pushkar to Udaipur. En route spend time exploring the majestic Chittorgarh Fort. Reach Udaipur in the evening. Check in and overnight in Udaipur.",
        spots: ["Chittorgarh Fort", "Udaipur"],
        meals: "Breakfast, Lunch & Dinner"
      },
      {
        day: 6,
        title: "Udaipur Sightseeing — City of Lakes",
        desc: "Explore Lake Pichola, City Palace, Fateh Sagar Lake, Saheliyon Ki Bari, Moti Magri, and Lok Kala Mandal. Overnight in Udaipur.",
        spots: ["Lake Pichola", "City Palace Udaipur", "Fateh Sagar", "Saheliyon Ki Bari"],
        meals: "Breakfast, Lunch & Dinner"
      },
      {
        day: 7,
        title: "Udaipur to Mount Abu & Nakki Lake",
        desc: "After breakfast, drive to Mount Abu hill station. Check in to hotel. Spend a peaceful evening at Nakki Lake. Overnight in Mount Abu.",
        spots: ["Mount Abu", "Nakki Lake"],
        meals: "Breakfast, Lunch & Dinner"
      },
      {
        day: 8,
        title: "Mount Abu Sightseeing — Dilwara Temples",
        desc: "Visit Om Shanti Bhawan, Shankar Math, and intricately carved Dilwara Jain Temples. Overnight in Mount Abu.",
        spots: ["Dilwara Temples", "Om Shanti Bhawan", "Shankar Math"],
        meals: "Breakfast, Lunch & Dinner"
      },
      {
        day: 9,
        title: "Mount Abu to Jaisalmer Thar Desert Camp",
        desc: "Early morning drive to Jaisalmer. Reach the Thar Desert Camp. Enjoy sunset on sand dunes and evening Rajasthani folk dance & music performance. Overnight in Desert Camp.",
        spots: ["Thar Desert", "Desert Camp", "Rajasthani Folk Show"],
        meals: "Breakfast, Lunch & Gala Dinner"
      },
      {
        day: 10,
        title: "Jaisalmer Fort (Sonar Kella) & Patwon Ki Haveli",
        desc: "Check out from camp, transfer to Jaisalmer hotel. Explore the Golden Fort (Sonar Kella), Gadisar Lake, and Patwon Ki Haveli. Overnight in Jaisalmer.",
        spots: ["Sonar Kella", "Gadisar Lake", "Patwon Ki Haveli"],
        meals: "Breakfast, Lunch & Dinner"
      },
      {
        day: 11,
        title: "Jaisalmer to Jodhpur Blue City",
        desc: "After breakfast, drive to Jodhpur. Check in to hotel, relax and explore local market. Overnight in Jodhpur.",
        spots: ["Jodhpur", "Clock Tower Market"],
        meals: "Breakfast, Lunch & Dinner"
      },
      {
        day: 12,
        title: "Jodhpur Sightseeing & Night Train to Kolkata",
        desc: "Explore Mehrangarh Fort, Umaid Bhawan Palace, Mandore Gardens, and Jaswant Thada. Board night train for Kolkata.",
        spots: ["Mehrangarh Fort", "Umaid Bhawan Palace", "Jaswant Thada", "Mandore Gardens"],
        meals: "Breakfast & Lunch Included"
      },
      {
        day: 13,
        title: "Full Day Train Journey",
        desc: "Full day traveling on train across India.",
        spots: ["Train Journey"],
        meals: "Train journey — own arrangement"
      },
      {
        day: 14,
        title: "Arrival at Kolkata",
        desc: "Arrive in Kolkata early morning with lifetime memories of royal Rajasthan.",
        spots: ["Kolkata"],
        meals: "Tour Concludes"
      }
    ],
    bookingProcess: [
      { step: 1, title: "Advance Booking Token", desc: "Book your seat now with an advance token of ₹5,000 per person." },
      { step: 2, title: "Train & Hotel Lock", desc: "We reserve your Sleeper/AC train tickets and deluxe hotel rooms." },
      { step: 3, title: "Voucher Receipt", desc: "Receive official confirmation and itinerary booklet." }
    ],
    importantNotes: [
      "Token amount ₹5,000 per head required at booking time.",
      "Warm woolens recommended for desert nights in December."
    ]
  },
  {
    id: "pkg-5",
    title: "Kerala & Kanyakumari Grand Tour",
    destination: "Kerala & Tamil Nadu, India",
    duration: "12 Nights / 13 Days",
    price: "₹21,490",
    image: "/images/hero_kerala_1783678518411.png",
    shortDescription: "12N/13D complete South India tour (Howrah to Howrah, 15 Feb departure) covering Kochi, Munnar, Thekkady, Alleppey with 3-hour Backwater boat cruise, Kovalam, and Kanyakumari. \"কাশ্মীর তু মে কন্যাকুমারী...\"",
    featured: true,
    rating: 4.9,
    reviewsCount: 152,
    nextDate: "15 Feb",
    stayBreakdown: "Kochi (1N) | Munnar (2N) | Thekkady (1N) | Alleppey (1N) | Kovalam (1N) | Kanyakumari (2N) | Train (4N)",
    seasonalPricing: {
      January: 21490, February: 21490, March: 21490, April: 21490,
      May: 21490, June: 21490, July: 21490, August: 21490,
      September: 21490, October: 21490, November: 21490, December: 21490
    },
    pricingNote: "Departure Date: 15th February. Cost: ₹21,490/- (Triple Sharing) | ₹22,990/- (Double Sharing).",
    gallery: [
      "/images/hero_kerala_1783678518411.png",
      "/images/tour-5.png",
      "/images/hero_andaman_1783678485939.png",
      "/images/tour-12.png"
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    highlights: [
      "Song Quote: \"কাশ্মীর তু মে কন্যাকুমারী...\"",
      "Departure: 15th February from Howrah / Santragachi via Coromandel Express",
      "Kochi: Marine Drive, Fort Kochi view & historic Chinese Fishing Nets",
      "Munnar: Echo Point, Mattupetty Dam, Eravikulam National Park / Rajamalai tea estates",
      "Thekkady: Spice Garden tour & Periyar National Park / Lake",
      "Alleppey: Included 3-hour famous Backwater Boat Cruise",
      "Kovalam: Padmanabhaswamy Temple & Kovalam Sea Beach",
      "Kanyakumari: Suchindram Temple, Vivekananda Rock Memorial, Gandhi Mandapam, Sunrise & Sunset",
      "Authentic Bengali Meals (Breakfast, Lunch, Dinner) from arrival in Cochin till departure",
      "Dedicated Non-AC Private Coach & Experienced Tour Manager"
    ],
    transport: {
      mode: "Sleeper Class Train (Coromandel & Alleppey Exp / Vivek Exp) + Private Non-AC Tourist Coach",
      pickup: "Howrah / Santragachi Railway Station",
      vehicle: "Private Non-AC Tourist Coach for entire Kerala & Tamil Nadu circuit",
      details: "Roundtrip train tickets (AC available at extra fare) and dedicated coach throughout."
    },
    accommodation: {
      category: "Standard / Deluxe Hotels",
      description: "Family non-AC rooms across Kochi (1N), Munnar (2N), Thekkady (1N), Alleppey (1N), Kovalam (1N), Kanyakumari (2N)",
      meals: "Delicious Bengali food (Breakfast, Lunch, Dinner) starting upon arrival in Cochin",
      features: ["Clean Rooms", "Attached Bath with Hot Water", "Bengali Cuisine", "Experienced Manager"]
    },
    pricingDetails: {
      perHead: "₹21,490 / person (Triple Sharing) | ₹22,990 / person (Double Sharing)",
      inclusions: [
        "Sleeper Class Train Tickets (AC upgrade at additional cost)",
        "Family non-AC rooms in Standard/Deluxe Hotels",
        "Bengali food: Breakfast, Lunch and Dinner from Cochin arrival",
        "3-Hour Backwater Boat Cruise Ticket in Alleppey",
        "Private Non-AC Coach for all mentioned sightseeing",
        "Experienced Tour Manager throughout the tour"
      ],
      exclusions: [
        "Packaged mineral water and train meals",
        "Entry fees, camera charges, and cultural program tickets",
        "Elephant safari and auto rickshaw fares",
        "Boat/launch charges other than the included Alleppey Backwater cruise",
        "Tips to hotel/driver/cooks and personal expenses"
      ]
    },
    itinerary: [
      {
        day: 1,
        title: "Departure from Howrah / Santragachi",
        desc: "Meet at Howrah / Santragachi Station and board the Coromandel Express at 3:20 PM towards Chennai. Overnight train journey.",
        spots: ["Howrah / Santragachi Station", "Coromandel Express"],
        meals: "Train journey — own arrangement"
      },
      {
        day: 2,
        title: "Arrive Chennai & Connect to Alleppey Express",
        desc: "Arrive at Chennai at 5:00 PM. Rest in waiting room (optional Marina Beach visit if on time). Board Alleppey Express at 8:50 PM for Ernakulam/Kochi.",
        spots: ["Chennai Central", "Alleppey Express"],
        meals: "Train journey — own arrangement"
      },
      {
        day: 3,
        title: "Arrival in Kochi & Marine Drive Sightseeing",
        desc: "Arrive in Kochi, check in to hotel and fresh up. Visit Kochi Marine Drive, view Fort Kochi, and witness traditional Chinese Fishing Nets. Overnight in Kochi.",
        spots: ["Kochi Marine Drive", "Fort Kochi", "Chinese Fishing Nets"],
        meals: "Lunch & Dinner Included"
      },
      {
        day: 4,
        title: "Kochi to Munnar via Echo Point & Mattupetty Dam",
        desc: "Morning departure (7:00–7:30 AM) for Munnar. Enjoy picnic lunch on the way. Visit Echo Point and Mattupetty Dam. Overnight in Munnar.",
        spots: ["Echo Point", "Mattupetty Dam", "Munnar Hills"],
        meals: "Breakfast, Lunch & Dinner"
      },
      {
        day: 5,
        title: "Munnar Tea Gardens & Eravikulam National Park",
        desc: "Visit Eravikulam National Park / Rajamalai Forest and scenic tea plantations where the famous song \"কাশ্মীর তু মে কন্যাকুমারী...\" was filmed. Overnight in Munnar.",
        spots: ["Eravikulam National Park", "Rajamalai", "Tea Plantations"],
        meals: "Breakfast, Lunch & Dinner"
      },
      {
        day: 6,
        title: "Munnar to Thekkady Spice Garden Tour",
        desc: "Drive to Thekkady. Visit Spice Garden. Check in to hotel, lunch, and optional evening Kathakali dance & Martial Arts performance. Overnight in Thekkady.",
        spots: ["Thekkady", "Spice Garden", "Kathakali Cultural Show"],
        meals: "Breakfast, Lunch & Dinner"
      },
      {
        day: 7,
        title: "Periyar Lake & 3-Hour Alleppey Backwater Cruise",
        desc: "Morning visit to Periyar National Park / Lake. Drive to Alleppey, check in to hotel, and enjoy the famous 3-hour Backwater Boat Cruise. Overnight in Alleppey.",
        spots: ["Periyar Lake", "Alleppey Backwaters", "Backwater Cruise"],
        meals: "Breakfast, Lunch & Dinner"
      },
      {
        day: 8,
        title: "Alleppey to Kovalam & Padmanabhaswamy Temple",
        desc: "Drive to Kovalam / Thiruvananthapuram. Visit historic Padmanabhaswamy Temple (traditional dress mandatory). Spend afternoon at Kovalam Beach. Overnight in Kovalam.",
        spots: ["Padmanabhaswamy Temple", "Kovalam Beach"],
        meals: "Breakfast, Lunch & Dinner"
      },
      {
        day: 9,
        title: "Kovalam Sea Bath to Kanyakumari via Suchindram",
        desc: "Morning sea bath at Kovalam Beach. After lunch, drive to Kanyakumari (approx. 3.5 hrs drive) via Suchindram Temple. Overnight in Kanyakumari.",
        spots: ["Kovalam Beach", "Suchindram Temple", "Kanyakumari"],
        meals: "Breakfast, Lunch & Dinner"
      },
      {
        day: 10,
        title: "Kanyakumari Sunrise, Vivekananda Rock & Sunset",
        desc: "Early morning sunrise walk. Visit iconic Vivekananda Rock Memorial, Gandhi Mandapam, enjoy sunset view and evening shopping. Overnight in Kanyakumari.",
        spots: ["Kanyakumari Sunrise", "Vivekananda Rock Memorial", "Gandhi Mandapam", "Sunset Point"],
        meals: "Breakfast, Lunch & Dinner"
      },
      {
        day: 11,
        title: "Board Return Train from Kanyakumari",
        desc: "After lunch, board the return train (Vivek Express) from Kanyakumari Station at 5:25 PM.",
        spots: ["Kanyakumari Station", "Vivek Express"],
        meals: "Breakfast & Lunch Included"
      },
      {
        day: 12,
        title: "Full Day Train Journey",
        desc: "Full day on train traveling back to West Bengal.",
        spots: ["Train Journey"],
        meals: "Train journey — own arrangement"
      },
      {
        day: 13,
        title: "Arrival at Dankuni / Santragachi",
        desc: "Arrive at Dankuni / Santragachi Station in the afternoon. Tour concludes with cherished memories.",
        spots: ["Dankuni / Santragachi"],
        meals: "Tour Concludes"
      }
    ],
    bookingProcess: [
      { step: 1, title: "Select Sharing Option", desc: "Choose Double Sharing (₹22,990) or Triple Sharing (₹21,490)." },
      { step: 2, title: "Submit ID Proofs", desc: "Share passenger details for train and hotel bookings." },
      { step: 3, title: "Token Confirmation", desc: "Pay advance token and receive confirmation." }
    ],
    importantNotes: [
      "Children: Under 5 years Free; 5–7 years ₹13,000 (with car seat, without train ticket); 7+ years Full charge.",
      "Padmanabhaswamy Temple requires Dhoti for men and Saree for women."
    ]
  },
  {
    id: "pkg-6",
    title: "Vizag & Araku Valley Tour",
    destination: "Andhra Pradesh, India",
    duration: "5 Nights / 6 Days",
    price: "₹7,990",
    image: "/images/tour-6.png",
    shortDescription: "5N/6D coastal and hill retreat (December 2026 departure) covering Visakhapatnam, Rushikonda Beach, Submarine Museum, Aircraft Museum, scenic Araku Valley, and ancient Borra Caves.",
    featured: true,
    rating: 4.7,
    reviewsCount: 88,
    nextDate: "Dec 2026",
    stayBreakdown: "Visakhapatnam (3N) | On Train (2N)",
    seasonalPricing: {
      January: 7990, February: 7990, March: 7990, April: 7990,
      May: 7990, June: 7990, July: 7990, August: 7990,
      September: 7990, October: 7990, November: 7990, December: 7990
    },
    pricingNote: "Departure: December 2026. Rate: ₹7,990 (Triple Share) | ₹8,990 (Double Share).",
    gallery: [
      "/images/hero_goa_1783678456678.png",
      "/images/tour-6.png",
      "/images/hero_andaman_1783678485939.png"
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    highlights: [
      "Travel Date: December 2026 from Howrah (Coromandel Express)",
      "Rushikonda Beach Sea Bath & RK Beach Stroll",
      "INS Kursura Submarine Museum & TU 142 Aircraft Museum",
      "Excursion to scenic Araku Valley & million-year-old Borra Caves",
      "Visakhapatnam Hill & Viewpoints Sightseeing",
      "Bengali Meals prepared and served by our in-house cook",
      "Standard Clean Rooms (Family / 3 Sharing basis)"
    ],
    transport: {
      mode: "Sleeper Class Train (Coromandel Exp 12841) + Tempo Traveler / Dedicated Vehicle",
      pickup: "Howrah Railway Station",
      vehicle: "Tempo Traveler / Car for all local sightseeing and Araku Valley tour",
      details: "Roundtrip sleeper train and convenient local vehicles."
    },
    accommodation: {
      category: "Standard Clean Hotel",
      description: "Standard clean rooms (Family / 3 Sharing basis)",
      meals: "Morning & Evening Tea, Breakfast (Luchi, Kachori, Butter Toast) and Lunch/Dinner (Rice, Dal, Veg/Bhaja, Fish, Chicken, Egg, Biryani, Fried Rice, Chilli Chicken)",
      features: ["Clean Bedding", "Attached Bath", "In-house Bengali Cooking"]
    },
    pricingDetails: {
      perHead: "₹7,990 / person (Triple Share) | ₹8,990 / person (Double Share)",
      inclusions: [
        "Sleeper Class Train Tickets (Howrah - Vizag & Vizag - Shalimar)",
        "Standard Clean Hotel Accommodation",
        "Sightseeing by Tempo Traveler / Car / Auto as convenient",
        "Morning & Evening Tea + 3 Meals Daily (Breakfast, Lunch, Dinner)",
        "Delicious food cooked by our dedicated cook"
      ],
      exclusions: [
        "Entry fees, ropeway, boat rides, and water sports",
        "Meals and drinking water during train journey",
        "Personal expenses"
      ]
    },
    itinerary: [
      {
        day: 1,
        title: "Departure from Howrah Station",
        desc: "Board the Coromandel Express (12841) from Howrah Station at 3:10 PM. Overnight train journey.",
        spots: ["Howrah Railway Station", "Coromandel Express"],
        meals: "Train journey — own arrangement"
      },
      {
        day: 2,
        title: "Arrive Vizag, Rushikonda Beach & Submarine Museum",
        desc: "Arrive in Visakhapatnam at 4:20 AM. Check in to hotel, breakfast, and enjoy sea bathing at Rushikonda Beach. In the afternoon, visit Submarine Museum, TU-142 Aircraft Museum, and Visakha Museum along RK Beach. Overnight in Vizag.",
        spots: ["Rushikonda Beach", "Submarine Museum", "TU 142 Museum", "RK Beach"],
        meals: "Breakfast, Lunch & Dinner"
      },
      {
        day: 3,
        title: "Vizag City Sightseeing",
        desc: "After breakfast, explore key sights of Visakhapatnam including Kailasagiri Hill, Simhachalam Temple, Yarada Beach, and Dolphin's Nose Lighthouse. Overnight in Vizag.",
        spots: ["Kailasagiri", "Simhachalam", "Yarada Beach", "Dolphin's Nose"],
        meals: "Breakfast, Lunch & Dinner"
      },
      {
        day: 4,
        title: "Araku Valley & Borra Caves Excursion",
        desc: "Full day excursion to Araku Valley and the famous Borra Caves via picturesque hill roads, coffee plantations, and viewpoints. Return to Vizag for overnight stay.",
        spots: ["Araku Valley", "Borra Caves", "Coffee Plantations"],
        meals: "Breakfast, Lunch & Dinner"
      },
      {
        day: 5,
        title: "RK Beach, Shopping & Night Train to Kolkata",
        desc: "Morning at RK Beach, explore local markets for shopping. After dinner, board return train at 9:30 PM for Kolkata.",
        spots: ["RK Beach", "Vizag Market", "Vizag Station"],
        meals: "Breakfast, Lunch & Dinner Included"
      },
      {
        day: 6,
        title: "Arrival at Shalimar Station",
        desc: "Arrive at Shalimar Station around 11:00 AM. Tour concludes.",
        spots: ["Shalimar Railway Station"],
        meals: "Tour Concludes"
      }
    ],
    bookingProcess: [
      { step: 1, title: "Contact Us", desc: "Call 9830905332 / 9239458171 to check December availability." },
      { step: 2, title: "ID Submission", desc: "Submit photo ID for train booking." },
      { step: 3, title: "Confirmation", desc: "Pay advance token to secure seats." }
    ],
    importantNotes: [
      "Child Policy: 1–4 years Free; 5–7 years 50% charge; 7+ years Full charge.",
      "Train food not included in package."
    ]
  },
  {
    id: "pkg-7",
    title: "Meghalaya, Shillong, Dawki & Cherrapunji",
    destination: "Meghalaya & Assam, India",
    duration: "7 Nights / 8 Days",
    price: "₹7,990",
    image: "/images/tour-7.png",
    shortDescription: "7N/8D North East tour (December 2026 departure) covering Kamakhya Temple, Umiam Lake, Shillong, crystal Dawki river, Living Root Bridge, Mawlynnong, Cherrapunji waterfalls, and caves with in-house Bengali cooking.",
    featured: true,
    rating: 4.9,
    reviewsCount: 104,
    nextDate: "Dec 2026",
    stayBreakdown: "Guwahati (1N) | Shillong (4N) | Train (2N)",
    seasonalPricing: {
      January: 7990, February: 7990, March: 7990, April: 7990,
      May: 7990, June: 7990, July: 7990, August: 7990,
      September: 7990, October: 7990, November: 7990, December: 7990
    },
    pricingNote: "Departure: December 2026. Rate: ₹7,990 (Triple Share) | ₹8,990 (Double Share).",
    gallery: [
      "/images/tour-7.png",
      "/images/tour-13.png",
      "/images/hero_kashmir_1783678442997.png"
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    highlights: [
      "Travel Date: December 2026 departure via Saraighat Express (12345)",
      "Guwahati: Kamakhya Temple, Umananda Temple, Bhubaneswari Temple, Basistha Ashram",
      "Scenic Umiam Lake (Barapani) en route to Shillong",
      "Dawki Umngot River, Borhill Falls, Living Root Bridge & Mawlynnong (Cleanest village in Asia)",
      "Cherrapunji: Mawkdok Valley, Thangkharang Park, Seven Sisters Falls, Mawsmai Cave, Nohkalikai Falls",
      "Shillong Local: Wards Lake, Lady Hydari Park, Cathedral, Golf Course, Elephant Falls, Shillong Peak",
      "Delicious Bengali meals prepared by our personal cook (Fish, Chicken, Egg, Biryani, Fried Rice, Chilli Chicken)"
    ],
    transport: {
      mode: "Sleeper Class Train (Saraighat Exp) + Tempo Traveler / Dedicated Mountain Vehicle",
      pickup: "Howrah Railway Station",
      vehicle: "Tempo Traveler / Dedicated Vehicle for all sightseeing across Assam and Meghalaya",
      details: "Roundtrip train tickets from Howrah and comfortable road transport throughout."
    },
    accommodation: {
      category: "Standard Clean Hotel",
      description: "1 Night Guwahati Hotel + 4 Nights Shillong Hotel (Family / 3 Sharing basis)",
      meals: "2x Tea daily + Breakfast (Luchi, Kachori, Toast) and Lunch/Dinner (Rice, Dal, Veg, Fish, Chicken, Egg, Biryani, Fried Rice, Chilli Chicken)",
      features: ["Clean Rooms", "Attached Bath with Hot Water", "In-house Cook"]
    },
    pricingDetails: {
      perHead: "₹7,990 / person (Triple Share) | ₹8,990 / person (Double Share)",
      inclusions: [
        "Sleeper Class Train Tickets (Saraighat Exp)",
        "Standard Clean Hotel Accommodation",
        "Tempo Traveler / Vehicle for all sightseeing",
        "Morning & Evening Tea + Breakfast, Lunch, Dinner",
        "Food freshly prepared and served by our cook"
      ],
      exclusions: [
        "Entry tickets, ropeway, horse riding, and boating activities",
        "Meals and water during train journey",
        "Personal expenses"
      ]
    },
    itinerary: [
      {
        day: 1,
        title: "Departure from Howrah Station",
        desc: "Board the Saraighat Express (12345) from Howrah Station at 4:05 PM for Guwahati. Overnight train journey.",
        spots: ["Howrah Station", "Saraighat Express"],
        meals: "Train journey — own arrangement"
      },
      {
        day: 2,
        title: "Arrive Guwahati & Temple Sightseeing",
        desc: "Arrive at Guwahati Station at 9:40 AM. Check in to hotel. Visit holy Kamakhya Temple, Umananda Temple (river island), Bhubaneswari Temple, Basistha Ashram, Nehru Park, and Assam State Museum. Overnight in Guwahati.",
        spots: ["Kamakhya Temple", "Umananda Temple", "Basistha Ashram", "Guwahati"],
        meals: "Lunch & Dinner Included"
      },
      {
        day: 3,
        title: "Guwahati to Shillong via Umiam Lake",
        desc: "After breakfast, drive to Shillong. En route visit famous Umiam Lake (Barapani). Check in to hotel at Shillong. Overnight in Shillong.",
        spots: ["Umiam Lake", "Shillong"],
        meals: "Breakfast, Lunch & Dinner"
      },
      {
        day: 4,
        title: "Dawki River, Living Root Bridge & Mawlynnong",
        desc: "Early breakfast and drive to Canyon Valley view point, crystal clear Dawki River (Umngot), Borhill Falls, Living Root Bridge, and Mawlynnong Village (Cleanest Village in Asia). Return to Shillong for overnight stay.",
        spots: ["Dawki River", "Living Root Bridge", "Borhill Falls", "Mawlynnong Village"],
        meals: "Breakfast, Lunch & Dinner"
      },
      {
        day: 5,
        title: "Cherrapunji Waterfalls, Mawsmai Cave & Eco Park",
        desc: "Visit Mawkdok Dympep Valley, Thangkharang Park, Seven Sisters Waterfalls, Mawsmai Cave, Cherrapunji Eco Park, and Nohkalikai Falls. Return to Shillong for overnight stay.",
        spots: ["Nohkalikai Falls", "Seven Sisters Falls", "Mawsmai Cave", "Eco Park"],
        meals: "Breakfast, Lunch & Dinner"
      },
      {
        day: 6,
        title: "Shillong Local Sightseeing",
        desc: "Explore Wards Lake, Lady Hydari Park, Cathedral of Mary, State Museum, Golf Course, Elephant Falls, and Shillong Peak. Overnight in Shillong.",
        spots: ["Wards Lake", "Elephant Falls", "Shillong Peak", "Golf Course"],
        meals: "Breakfast, Lunch & Dinner"
      },
      {
        day: 7,
        title: "Shopping & Night Train from Guwahati",
        desc: "Morning shopping in Shillong. After lunch, drive to Guwahati Station to board return night train for Kolkata.",
        spots: ["Police Bazar", "Guwahati Station"],
        meals: "Breakfast & Lunch Included"
      },
      {
        day: 8,
        title: "Arrival at Howrah Station",
        desc: "Arrive at Howrah Railway Station. Tour concludes.",
        spots: ["Howrah Station"],
        meals: "Tour Concludes"
      }
    ],
    bookingProcess: [
      { step: 1, title: "Inquire Now", desc: "Contact us via WhatsApp / Phone to check December slots." },
      { step: 2, title: "Reserve Ticket", desc: "Provide IDs for train ticket reservation." },
      { step: 3, title: "Get Vouchers", desc: "Receive trip confirmation." }
    ],
    importantNotes: [
      "Child Policy: 1–4 years Free; 5–7 years 50% charge; 7+ years Full charge.",
      "Good walking shoes recommended for root bridge and cave visits."
    ]
  },
  {
    id: "pkg-8",
    title: "Arunachal & Kaziranga Snowfall Expedition",
    destination: "Arunachal Pradesh & Assam, India",
    duration: "8 Nights / 9 Days",
    price: "₹18,990",
    image: "/images/tour-8.png",
    shortDescription: "8N/9D magical winter trip (Nov–March, snowfall Dec–Feb) covering Bhalukpong, Dirang, Sela Pass & Lake (13,700 ft), Tawang Monastery, Bumla Pass (15,200 ft), Madhuri Lake, Nuranang Falls, Bomdila, and Kaziranga National Park.",
    featured: true,
    rating: 4.9,
    reviewsCount: 112,
    nextDate: "Nov–March",
    stayBreakdown: "Bhalukpong (2N) | Tawang (2N) | Bomdila (1N) | Kaziranga (1N) | Train (2N)",
    seasonalPricing: {
      January: 18990, February: 18990, March: 18990, April: 18990,
      May: 18990, June: 18990, July: 18990, August: 18990,
      September: 18990, October: 18990, November: 18990, December: 18990
    },
    pricingNote: "Rate: ₹18,990/- (Triple Share) | ₹19,990/- (Double Share). Peak snowfall period: December to February.",
    gallery: [
      "/images/tour-8.png",
      "/images/tour-12.png",
      "/images/hero_darjeeling_1783678472536.png"
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    highlights: [
      "Optimal Season: November to March (Magical Snowfall from Dec to Feb)",
      "Roundtrip Sleeper Class Train from Howrah to Guwahati",
      "Bhalukpong, Dirang (Orchid Research Centre, Mandala Top, LDL Monastery)",
      "High-altitude Sela Pass (13,700 ft) & frozen bluish Sela Lake",
      "Tawang: War Memorial, 2nd Largest Buddhist Monastery in the World & Giant Buddha",
      "Bumla Pass (15,200 ft - Indo-China border) by local union vehicle",
      "Picturesque Madhuri Lake (Sangetsar Tso) & Nuranang Falls (Koyla movie shoot)",
      "Bomdila Buddhist Monastery & Kaziranga National Park",
      "All meals from Day 2 Lunch to Day 8 Dinner (Fish, Chicken, Egg, Biryani, Fried Rice, Chilli Chicken)"
    ],
    transport: {
      mode: "Sleeper Class Train + Dedicated Mountain Vehicle + Local Union Bumla Cab",
      pickup: "Howrah Railway Station",
      vehicle: "Dedicated Mountain Vehicle + Local Union vehicle for Bumla Pass",
      details: "Complete rail and high-altitude transport provided."
    },
    accommodation: {
      category: "Standard Hotel",
      description: "Standard clean rooms (Family / 3 Sharing basis)",
      meals: "2x Tea/Biscuits daily, Breakfast, Lunch & Dinner from Day 2 lunch to Day 8 dinner",
      features: ["Clean Bedding", "Geyser Hot Water", "In-house Dining"]
    },
    pricingDetails: {
      perHead: "₹18,990 / person (Triple Share) | ₹19,990 / person (Double Share)",
      inclusions: [
        "Sleeper Class Train from Howrah to Guwahati & return",
        "Local Union vehicle for Bumla Pass",
        "Standard Room Accommodation (Family / 3 Sharing)",
        "All meals from Day 2 Lunch to Day 8 Dinner",
        "Dedicated mountain vehicle for the circuit"
      ],
      exclusions: [
        "Kaziranga National Park safari charges (at own cost)",
        "Entry tickets, ropeway, horse riding, and activities",
        "Meals during train journey"
      ]
    },
    itinerary: [
      {
        day: 1,
        title: "Departure from Howrah Station",
        desc: "Board the train at 3:00 PM from Howrah Station for Guwahati. Overnight train journey.",
        spots: ["Howrah Station"],
        meals: "Train journey — own arrangement"
      },
      {
        day: 2,
        title: "Guwahati to Bhalukpong (260 km)",
        desc: "Arrive in Guwahati, drive to charming hillside village Bhalukpong surrounded by lush greenery and misty hills. Overnight in Bhalukpong.",
        spots: ["Guwahati", "Bhalukpong"],
        meals: "Lunch & Dinner Included"
      },
      {
        day: 3,
        title: "Bhalukpong to Dirang (93 km)",
        desc: "Visit Orchid Research Centre, Mandala Top, and LDL Buddhist Monastery en route to Dirang. Overnight in Bhalukpong / Dirang area.",
        spots: ["Orchid Centre", "Mandala Top", "Dirang Monastery"],
        meals: "Breakfast, Lunch & Dinner"
      },
      {
        day: 4,
        title: "Dirang to Tawang via Sela Pass & Sela Lake (130 km)",
        desc: "Adventure day! Cross Jung Waterfalls, snow-covered Sela Pass, and the frozen bluish Sela Lake (13,700 ft). Reach Tawang, visit War Memorial, 2nd largest Monastery in the world, and giant Buddha. Overnight in Tawang.",
        spots: ["Jung Falls", "Sela Pass (13,700 ft)", "Sela Lake", "Tawang Monastery", "War Memorial"],
        meals: "Breakfast, Lunch & Dinner"
      },
      {
        day: 5,
        title: "Tawang to Bumla Pass (15,200 ft), Madhuri Lake & Nuranang Falls",
        desc: "Thrilling drive by local union cab to Bumla Pass at Indo-China border (15,200 ft), postcard-perfect Madhuri Lake, and the famous Nuranang Falls. Overnight in Tawang/Nuranang.",
        spots: ["Bumla Pass", "Madhuri Lake", "Nuranang Falls"],
        meals: "Breakfast, Lunch & Dinner"
      },
      {
        day: 6,
        title: "Tawang to Bomdila (140 km)",
        desc: "Scenic drive to Bomdila. Visit peaceful Bomdila Buddhist Monastery with fluttering prayer flags. Overnight in Bomdila.",
        spots: ["Bomdila Monastery", "Bomdila Viewpoint"],
        meals: "Breakfast, Lunch & Dinner"
      },
      {
        day: 7,
        title: "Bomdila to Kaziranga (183 km)",
        desc: "Scenic drive from Bomdila to Kaziranga. Check in to hotel. Overnight in Kaziranga.",
        spots: ["Kaziranga Valley"],
        meals: "Breakfast, Lunch & Dinner"
      },
      {
        day: 8,
        title: "Kaziranga Safari & Night Train from Guwahati",
        desc: "Morning Kaziranga National Park safari (own cost). After lunch, drive to Guwahati Station and board night train for Kolkata.",
        spots: ["Kaziranga National Park", "Guwahati Station"],
        meals: "Breakfast, Lunch & Dinner Included"
      },
      {
        day: 9,
        title: "Arrival at Howrah Station",
        desc: "Arrive at Howrah Station with unforgettable memories of snow-clad mountains and frozen lakes.",
        spots: ["Howrah Station"],
        meals: "Tour Concludes"
      }
    ],
    bookingProcess: [
      { step: 1, title: "Reserve Early", desc: "Contact via Phone / WhatsApp to book Arunachal winter slot." },
      { step: 2, title: "ILP Permits", desc: "Submit photo ID for Inner Line Permit processing." },
      { step: 3, title: "Confirm Travel", desc: "Receive booking confirmation." }
    ],
    importantNotes: [
      "Child Policy: 5–7 years 50% charge; 7+ years Full charge.",
      "Heavy woolens and gloves essential for Sela Pass and Bumla Pass."
    ]
  },
  {
    id: "pkg-9",
    title: "Haridwar – Mussoorie – Dehradun Tour",
    destination: "Uttarakhand, India",
    duration: "7 Nights / 8 Days",
    price: "₹7,990",
    image: "/images/tour-9.png",
    shortDescription: "7N/8D spiritual and hill holiday (Howrah to Howrah, 15 Nov departure) covering Haridwar Ganga Aarti, Mansa Devi, Chandi Devi, Rishikesh, Triveni Sangam, Laxman Jhula, Dehradun, and Mussoorie. \"হর হর মহাদেব...\"",
    featured: true,
    rating: 4.8,
    reviewsCount: 130,
    nextDate: "15 Nov",
    stayBreakdown: "Haridwar (3N) | On Train (4N)",
    seasonalPricing: {
      January: 7990, February: 7990, March: 7990, April: 7990,
      May: 7990, June: 7990, July: 7990, August: 7990,
      September: 7990, October: 7990, November: 7990, December: 7990
    },
    pricingNote: "Departure Date: 15th November. Rate: ₹7,990 (Triple Share) | ₹8,500 (Double Share).",
    gallery: [
      "/images/tour-9.png",
      "/images/tour-4.png",
      "/images/tour-11.png"
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    highlights: [
      "Spiritual Chant: \"হর হর মহাদেব...\"",
      "Fixed Departure: 15th November (Howrah to Howrah)",
      "Haridwar: Har Ki Pauri, Mansa Devi Temple, Chandi Devi Temple, Kankhal & evening Ganga Aarti",
      "Rishikesh: Triveni Sangam, Laxman Jhula, Ram Jhula & Neelkanth Mahadev (if possible)",
      "Dehradun & Queen of Hills Mussoorie Sightseeing",
      "Roundtrip Sleeper Class Train Tickets Included",
      "Non-AC Vehicle for all days & all sightseeing",
      "All meals from Day 1 Lunch to Day 6 Dinner Included",
      "Experienced Tour Manager & Driver"
    ],
    transport: {
      mode: "Sleeper Class Train (Howrah - Haridwar & Haridwar - Howrah) + Non-AC Tourist Vehicle",
      pickup: "Howrah Railway Station",
      vehicle: "Non-AC Tourist Vehicle for all sightseeing transfers",
      details: "Roundtrip sleeper train and private coach throughout."
    },
    accommodation: {
      category: "Standard Good Service Hotel",
      description: "Family non-AC rooms in good service hotel at Haridwar (3 Nights)",
      meals: "All meals included from Day 1 Lunch to Day 6 Dinner",
      features: ["Clean Rooms", "Attached Bath with Hot Water", "Good Service", "Experienced Manager"]
    },
    pricingDetails: {
      perHead: "₹7,990 / person (Triple Share) | ₹8,500 / person (Double Share)",
      inclusions: [
        "Roundtrip Sleeper Class Train Tickets",
        "Family non-AC rooms in good service hotel",
        "All meals from Day 1 Lunch to Day 6 Dinner",
        "Non-AC Vehicle from Day 1 to Day 6",
        "All sightseeing as per plan",
        "Tour conducted by experienced manager/driver"
      ],
      exclusions: [
        "Meals during train journey",
        "Rides, entry fees, and room heater",
        "Mineral water, extra food/drinks",
        "Puja offerings, personal expenses, and extra points"
      ]
    },
    itinerary: [
      {
        day: 1,
        title: "Departure from Howrah Station",
        desc: "Meet at Howrah Station at scheduled time, complete introductions, and board our train for Haridwar. Overnight train journey.",
        spots: ["Howrah Station"],
        meals: "Train journey — own arrangement"
      },
      {
        day: 2,
        title: "Full Day & Night Train Journey",
        desc: "Full day and night in train with pleasant group conversations and scenic window views.",
        spots: ["Train Journey"],
        meals: "Train journey — own arrangement"
      },
      {
        day: 3,
        title: "Arrive Haridwar, Mansa Devi, Chandi Devi & Ganga Aarti",
        desc: "Morning arrival at Haridwar Station. Transfer to hotel. Visit Ganga Ghats, Mansa Devi Temple, Chandi Devi Temple, and witness the captivating evening Ganga Aarti at Har Ki Pauri. Overnight in Haridwar.",
        spots: ["Haridwar Station", "Har Ki Pauri", "Mansa Devi Temple", "Chandi Devi Temple", "Ganga Aarti"],
        meals: "Lunch & Dinner Included"
      },
      {
        day: 4,
        title: "Haridwar to Rishikesh Excursion",
        desc: "Full day excursion to Rishikesh: Triveni Sangam, Laxman Jhula, Ram Jhula, and Neelkanth Mahadev (if feasible). Return to Haridwar for overnight stay.",
        spots: ["Rishikesh", "Triveni Sangam", "Laxman Jhula", "Ram Jhula"],
        meals: "Breakfast, Lunch & Dinner"
      },
      {
        day: 5,
        title: "Dehradun & Mussoorie Excursion",
        desc: "Full day sightseeing excursion to Dehradun and Queen of Hills Mussoorie. Return to Haridwar for overnight stay.",
        spots: ["Dehradun", "Mussoorie Mall Road", "Kempty View"],
        meals: "Breakfast, Lunch & Dinner"
      },
      {
        day: 6,
        title: "Haridwar Shopping & Return Train",
        desc: "Spend the morning at leisure for local shopping and holy souvenirs. After dinner, board return train from Haridwar Station.",
        spots: ["Haridwar Market", "Haridwar Station"],
        meals: "Breakfast, Lunch & Dinner Included"
      },
      {
        day: 7,
        title: "Full Day Train Journey",
        desc: "Full day relaxing and chatting on board the train journey.",
        spots: ["Train Journey"],
        meals: "Train journey — own arrangement"
      },
      {
        day: 8,
        title: "Arrival at Howrah Station",
        desc: "Morning arrival at Howrah Station with sweet memories. Tour concludes.",
        spots: ["Howrah Station"],
        meals: "Tour Concludes"
      }
    ],
    bookingProcess: [
      { step: 1, title: "Book Seat", desc: "Contact via Phone / WhatsApp to register for 15th November departure." },
      { step: 2, title: "Ticket Allocation", desc: "Train tickets and hotel room allocated." },
      { step: 3, title: "Confirmation", desc: "Receive voucher and trip guidelines." }
    ],
    importantNotes: [
      "Child Policy: Below 5 years Free; 5–7 years ₹4,000 (without train ticket); Above 7 years Full charge.",
      "Custom tour plans also available on request."
    ]
  },
  {
    id: "pkg-10",
    title: "Char Dham & Do Dham Yatra",
    destination: "Uttarakhand Himalayas, India",
    duration: "14 Nights / 15 Days",
    price: "₹27,500",
    image: "/images/tour-10.png",
    shortDescription: "Sacred Himalayan pilgrimage (3 June / 1 Sept 2026 for Char Dham 14N/15D; 12 Sept 2026 for Do Dham 12N/13D) covering Yamunotri, Gangotri, Kedarnath (16km trek), Badrinath, Mana Village, and Rishikesh. \"হর হর মহাদেব...\"",
    featured: true,
    rating: 4.9,
    reviewsCount: 155,
    nextDate: "03 Jun / 01 Sep",
    stayBreakdown: "Haridwar (2N) | Barkot (2N) | Uttarkashi (2N) | Guptkashi (2N) | Kedarnath (1N) | Badrinath (1N) | Pipalkoti (1N) | Train (4N)",
    seasonalPricing: {
      January: 0, February: 0, March: 0, April: 0,
      May: 27500, June: 27500, July: 0, August: 0,
      September: 27500, October: 27500, November: 0, December: 0
    },
    pricingNote: "Char Dham (14N/15D): ₹27,500 (Triple) | ₹28,000 (Double). Do Dham (12N/13D): ₹20,499 (Triple) | ₹20,999 (Double). Token: ₹3,000.",
    gallery: [
      "/images/tour-10.png",
      "/images/tour-13.png",
      "/images/hero_kashmir_1783678442997.png"
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    highlights: [
      "Sacred Invocation: \"হর হর মহাদেব...\"",
      "Char Dham Dates: 03 June – 18 June 2026 & 01 September – 16 September 2026",
      "Do Dham Dates (Kedarnath & Badrinath): 12 September – 23 September 2026",
      "Yamunotri Temple & Surya Kund Hot Sulfur Springs",
      "Gangotri Temple, Bhagirathi Shila & holy Bhagirathi River",
      "Kedarnath Jyotirlinga Temple & Adi Shankaracharya Samadhi (16 km trek)",
      "Badrinath Temple Puja & Mana Village (Last Village of India)",
      "Devprayag (Alaknanda & Bhagirathi Sangam), Rishikesh (Laxman & Ram Jhula), Haridwar",
      "Non-AC Train Tickets (Doon Express from Howrah) + Luxury Bus / Traveler",
      "Complete Bengali Meals (Bed Tea, Breakfast, Lunch, Dinner)"
    ],
    transport: {
      mode: "Non-AC Train (Doon Express from Howrah) + Traveler / Luxury Bus",
      pickup: "Howrah Railway Station",
      vehicle: "Force Traveler / Luxury Bus for mountain yatra circuit",
      details: "Roundtrip train tickets from Howrah and dedicated mountain bus/traveler."
    },
    accommodation: {
      category: "Deluxe Hotels",
      description: "Deluxe hotel accommodation across Haridwar, Barkot, Uttarkashi, Guptkashi, Kedarnath, Badrinath, Pipalkoti",
      meals: "Complete Bengali meals: Bed Tea, Breakfast, Lunch, Dinner and return dinner from Haridwar",
      features: ["Comfortable Clean Rooms", "Hot Water Facility", "Dedicated Bengali Cooking/Food", "Tour Manager"]
    },
    pricingDetails: {
      perHead: "Char Dham: ₹27,500 (Triple) / ₹28,000 (Double) | Do Dham: ₹20,499 (Triple) / ₹20,999 (Double)",
      inclusions: [
        "Non-AC Train Tickets (Doon Express from Howrah)",
        "Deluxe Hotel Accommodation (Family basis)",
        "Traveler / Luxury Bus for all yatra transfers",
        "Complete Bengali meals (Bed tea, breakfast, lunch, dinner)",
        "Dinner on return day from Haridwar",
        "Tour management and coordination"
      ],
      exclusions: [
        "Train meals and packaged mineral water",
        "Entry fees at monuments/temples",
        "Helicopter, pony, doli, palki, pithu charges for Kedarnath trek",
        "Porter charges and personal expenses",
        "Kedarnath registration broker fee (₹150/head if required)"
      ]
    },
    itinerary: [
      {
        day: 1,
        title: "Departure from Howrah via Doon Express",
        desc: "Board the Doon Express from Howrah at 8:25 PM. Overnight train journey.",
        spots: ["Howrah Station", "Doon Express"],
        meals: "Train journey — own arrangement"
      },
      {
        day: 2,
        title: "Full Day & Night Train Journey",
        desc: "Full day on train traveling towards Uttarakhand.",
        spots: ["Train Journey"],
        meals: "Train journey — own arrangement"
      },
      {
        day: 3,
        title: "Arrive Haridwar & Local Sightseeing",
        desc: "Morning arrival at Haridwar. Check in to hotel. After lunch, local sightseeing and Ganga Aarti. Overnight in Haridwar.",
        spots: ["Haridwar", "Har Ki Pauri"],
        meals: "Lunch & Dinner Included"
      },
      {
        day: 4,
        title: "Haridwar to Barkot",
        desc: "Scenic mountain drive from Haridwar to Barkot. Check in to hotel. Overnight in Barkot.",
        spots: ["Barkot"],
        meals: "Breakfast, Lunch & Dinner"
      },
      {
        day: 5,
        title: "Barkot – Yamunotri – Barkot Yatra",
        desc: "Early morning yatra to Yamunotri Temple and sacred hot sulfur springs. Perform puja and return to Barkot. Overnight in Barkot.",
        spots: ["Yamunotri Temple", "Surya Kund", "Barkot"],
        meals: "Breakfast, Lunch & Dinner"
      },
      {
        day: 6,
        title: "Barkot to Uttarkashi & Kashi Vishwanath Temple",
        desc: "Drive from Barkot to Uttarkashi. Evening visit to ancient Kashi Vishwanath Temple. Overnight in Uttarkashi.",
        spots: ["Uttarkashi", "Kashi Vishwanath Temple"],
        meals: "Breakfast, Lunch & Dinner"
      },
      {
        day: 7,
        title: "Uttarkashi – Gangotri – Uttarkashi Yatra",
        desc: "Excursion to sacred Gangotri Temple, Bhagirathi Shila, and holy Bhagirathi River. Return to Uttarkashi for overnight stay.",
        spots: ["Gangotri Temple", "Bhagirathi Shila", "Uttarkashi"],
        meals: "Breakfast, Lunch & Dinner"
      },
      {
        day: 8,
        title: "Uttarkashi to Guptkashi",
        desc: "Drive through scenic mountain valleys from Uttarkashi to Guptkashi. Overnight in Guptkashi.",
        spots: ["Guptkashi"],
        meals: "Breakfast, Lunch & Dinner"
      },
      {
        day: 9,
        title: "Guptkashi to Kedarnath Temple (16 km Trek)",
        desc: "Drive to Gaurikund and commence the sacred 16 km trek to Kedarnath. Evening darshan of Kedarnath Jyotirlinga and Adi Shankaracharya Samadhi. Overnight in Kedarnath.",
        spots: ["Gaurikund", "Kedarnath Temple", "Shankaracharya Samadhi"],
        meals: "Breakfast, Lunch & Dinner"
      },
      {
        day: 10,
        title: "Kedarnath to Gaurikund to Guptkashi",
        desc: "Morning puja at Kedarnath, trek down to Gaurikund, and drive back to Guptkashi by evening. Overnight in Guptkashi.",
        spots: ["Kedarnath", "Gaurikund", "Guptkashi"],
        meals: "Breakfast, Lunch & Dinner"
      },
      {
        day: 11,
        title: "Guptkashi to Badrinath",
        desc: "Scenic drive from Guptkashi to Badrinath. Check in to hotel. Overnight in Badrinath.",
        spots: ["Badrinath"],
        meals: "Breakfast, Lunch & Dinner"
      },
      {
        day: 12,
        title: "Badrinath Puja, Mana Village to Pipalkoti",
        desc: "Morning puja at Badrinath Temple. Visit Mana Village (the last village of India), Saraswati River, and drive to Pipalkoti. Overnight in Pipalkoti.",
        spots: ["Badrinath Temple", "Mana Village", "Pipalkoti"],
        meals: "Breakfast, Lunch & Dinner"
      },
      {
        day: 13,
        title: "Pipalkoti to Haridwar via Devprayag & Rishikesh",
        desc: "Drive from Pipalkoti to Haridwar. En route witness Devprayag (Alaknanda & Bhagirathi confluence), Laxman Jhula and Ram Jhula in Rishikesh. Overnight in Haridwar.",
        spots: ["Devprayag Sangam", "Rishikesh Laxman Jhula", "Haridwar"],
        meals: "Breakfast, Lunch & Dinner"
      },
      {
        day: 14,
        title: "Board Return Train from Haridwar",
        desc: "Board the Doon Express from Haridwar Station for Kolkata. Overnight train journey.",
        spots: ["Haridwar Station"],
        meals: "Dinner from Haridwar Included"
      },
      {
        day: 15,
        title: "Train Journey & Day 16 Arrival at Howrah",
        desc: "Full day on train, reaching Howrah Station on Day 16 morning with the divine blessings of Char Dham.",
        spots: ["Howrah Station"],
        meals: "Tour Concludes"
      }
    ],
    bookingProcess: [
      { step: 1, title: "Token Registration", desc: "Book your seat with ₹3,000 advance token money and photo ID (30 seats max per batch)." },
      { step: 2, title: "Train Ticket Opening", desc: "IRCTC train opening dates managed by our team." },
      { step: 3, title: "Yatra WhatsApp Group", desc: "Join dedicated Yatra WhatsApp coordination group." }
    ],
    importantNotes: [
      "Limited 30 seats per batch. Early registration recommended.",
      "Valid Government Photo ID mandatory for Kedarnath biometric registration.",
      "Warm thermals, walking stick, and comfortable trekking shoes required."
    ]
  },
  {
    id: "pkg-11",
    title: "Ayodhya – Varanasi – Kashi – Prayagraj Tour",
    destination: "Uttar Pradesh, India",
    duration: "6 Nights / 7 Days",
    price: "₹10,500",
    image: "/images/tour-11.png",
    shortDescription: "6N/7D comprehensive spiritual tour (22 July – 28 July 2026) covering Varanasi 64 Ghats boat ride, Ganga Aarti, Kashi Vishwanath, Prayagraj Triveni Sangam holy bath, Vindhyachal, and Ayodhya Ram Janmabhoomi & Hanuman Garhi.",
    featured: false,
    rating: 4.8,
    reviewsCount: 64,
    nextDate: "22 Jul 2026",
    stayBreakdown: "Varanasi (3N) | Ayodhya (1N) | Train (2N)",
    seasonalPricing: {
      January: 10500, February: 10500, March: 10500, April: 10500,
      May: 10500, June: 10500, July: 10500, August: 10500,
      September: 10500, October: 10500, November: 10500, December: 10500
    },
    pricingNote: "Tour Dates: 22 July 2026 to 28 July 2026. Package Cost: ₹10,500/- per person.",
    gallery: [
      "/images/tour-11.png",
      "/images/tour-9.png",
      "/images/tour-4.png"
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    highlights: [
      "Travel Dates: 22 July 2026 to 28 July 2026",
      "Roundtrip Sleeper Class Train from Kolkata (13151) / Asansol (13152)",
      "Varanasi: 64 Ghats Boat Ride (Manikarnika to Assi), Evening Dashashwamedh Ganga Aarti",
      "Kashi Vishwanath, Kal Bhairav, Vishalakshi, Annapurna Temple, Durga Mandir, Sarnath & Namo Ghat",
      "Prayagraj: Holy Snan at Triveni Sangam & Vindhyachal Temple",
      "Ayodhya: Saryu River Ghat, Lata Mangeshkar Chowk, Ram Ki Paidi Light & Sound Show, Nageshwar Nath",
      "Ayodhya: Hanuman Garhi, Ram Janmabhoomi Temple, Raj Dwar, Dashrath Mahal & Kanak Bhawan",
      "3-Time Bengali Vegetarian Meals Daily & Dedicated Tour Vehicle"
    ],
    transport: {
      mode: "Sleeper Class Train (Kolkata-Jammu Tawi Exp 13151 / Kolkata Exp 13152) + Private Tourist Vehicle",
      pickup: "Kolkata Railway Station / Asansol",
      vehicle: "Private Tourist Vehicle for all sightseeing across Varanasi, Prayagraj and Ayodhya",
      details: "Seamless rail tickets and private dedicated road coach with toll and parking included."
    },
    accommodation: {
      category: "Standard Good Hotel",
      description: "Family rooms in clean hotels across Varanasi (3N) and Ayodhya (1N)",
      meals: "3 Vegetarian Bengali Meals Daily (Breakfast, Lunch, Dinner)",
      features: ["Clean Rooms", "Attached Bath with Geyser", "Pure Vegetarian Meals", "Experienced Tour Manager"]
    },
    pricingDetails: {
      perHead: "₹10,500 / person",
      inclusions: [
        "Sleeper Class Train Tickets (Kolkata/Asansol to Varanasi & Ayodhya to Kolkata)",
        "Hotel accommodation with family rooms",
        "Private vehicle for all sightseeing in Prayagraj, Varanasi & Ayodhya",
        "3 Vegetarian Bengali meals daily (except during train travel)",
        "Experienced Tour Manager, toll, parking, driver allowance"
      ],
      exclusions: [
        "Entry fees at monuments and guide charges",
        "Packaged mineral water and cold drinks",
        "Camera and porter fees",
        "Boat ride, Ganga Aarti charges, and local e-rickshaw / auto fares to ghats"
      ]
    },
    itinerary: [
      {
        day: 1,
        title: "Departure from Kolkata / Asansol",
        desc: "Board the Kolkata-Jammu Tawi Express (13151) from Kolkata Station at 11:45 AM (or from Asansol at 3:05 PM). Overnight train journey.",
        spots: ["Kolkata Station / Asansol", "Jammu Tawi Express"],
        meals: "Train journey — own arrangement"
      },
      {
        day: 2,
        title: "Arrive Varanasi, 64 Ghats Boat Ride & Kashi Vishwanath",
        desc: "Arrive in Varanasi at 3:00 AM, rest at hotel. After lunch, take a boat ride covering 64 ghats from Manikarnika to Assi Ghat and witness Ganga Aarti. Visit Kashi Vishwanath, Vishalakshi, and Annapurna temples. Overnight in Varanasi.",
        spots: ["Varanasi Ghats", "Manikarnika to Assi Boat Ride", "Kashi Vishwanath", "Ganga Aarti"],
        meals: "Lunch & Dinner Included"
      },
      {
        day: 3,
        title: "Early Morning Kal Bhairav & Temple Darshan",
        desc: "Early morning darshan of Kal Bhairav and Kashi Vishwanath Temple. Rest and explore the ancient spiritual alleys of Varanasi. Overnight in Varanasi.",
        spots: ["Kal Bhairav", "Kashi Vishwanath"],
        meals: "Breakfast, Lunch & Dinner"
      },
      {
        day: 4,
        title: "Varanasi Local Sightseeing & Sarnath",
        desc: "Visit Durga Temple, Tulsi Manas, Sankat Mochan, Birla Temple (BHU), Ramnagar Fort, historic Sarnath, and Namo Ghat. Overnight in Varanasi.",
        spots: ["BHU Birla Temple", "Sankat Mochan", "Sarnath", "Namo Ghat"],
        meals: "Breakfast, Lunch & Dinner"
      },
      {
        day: 5,
        title: "Varanasi to Prayagraj Sangam & Ayodhya",
        desc: "Drive to Prayagraj at 6:00 AM. Take a holy dip at Triveni Sangam, visit Vindhyachal Temple, and proceed to Ayodhya. In the evening, visit Saryu River Ghat, Lata Mangeshkar Chowk, Ram Ki Paidi Light & Sound Show, and Nageshwar Nath Temple. Overnight in Ayodhya.",
        spots: ["Triveni Sangam", "Vindhyachal", "Saryu River Ghat", "Ram Ki Paidi", "Lata Mangeshkar Chowk"],
        meals: "Breakfast, Lunch & Dinner"
      },
      {
        day: 6,
        title: "Ayodhya Ram Mandir Darshan & Return Train",
        desc: "Morning darshan of Hanuman Garhi, Ram Janmabhoomi Temple, Raj Dwar, Dashrath Mahal, and Kanak Bhawan. Board return train Kolkata Express (13152) at 7:56 PM.",
        spots: ["Hanuman Garhi", "Ram Janmabhoomi Temple", "Kanak Bhawan", "Dashrath Mahal"],
        meals: "Breakfast & Lunch Included"
      },
      {
        day: 7,
        title: "Arrival at Asansol & Kolkata",
        desc: "Arrive at Asansol at 11:30 AM and Kolkata (Chitpur) Station at 3:40 PM. Tour concludes with divine blessings.",
        spots: ["Asansol", "Kolkata Chitpur Station"],
        meals: "Tour Concludes"
      }
    ],
    bookingProcess: [
      { step: 1, title: "Book July Slot", desc: "Contact via Phone / WhatsApp to register for 22nd July departure." },
      { step: 2, title: "Train Reservation", desc: "Sleeper tickets and hotel rooms reserved." },
      { step: 3, title: "Receive Confirmation", desc: "Get travel vouchers and itinerary." }
    ],
    importantNotes: [
      "Pure vegetarian Bengali meals provided throughout.",
      "Dress code: modest traditional attire recommended for temple entry."
    ]
  },
  {
    id: "pkg-12",
    title: "Puri Seaside & Heritage Tour",
    destination: "Odisha, India",
    duration: "5 Nights / 6 Days",
    price: "₹5,700",
    image: "/images/tour-12.png",
    shortDescription: "5N/6D complete beach and temple holiday (24 July departure) from Sodepur to Sodepur with included bus pickup/drop to Shalimar Station, Jagannath Temple, sea beach, Konark Sun Temple, Udayagiri, Khandagiri, Dhauli, and Nandankanan.",
    featured: false,
    rating: 4.8,
    reviewsCount: 95,
    nextDate: "24 Jul",
    stayBreakdown: "Puri (3N) | Train (2N)",
    seasonalPricing: {
      January: 5700, February: 5700, March: 5700, April: 5700,
      May: 5700, June: 5700, July: 5700, August: 5700,
      September: 5700, October: 5700, November: 5700, December: 5700
    },
    pricingNote: "Departure Date: 24th July. Package Cost: ₹5,700/- per person (Sodepur to Sodepur).",
    gallery: [
      "/images/tour-12.png",
      "/images/hero_kerala_1783678518411.png",
      "/images/tour-8.png"
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    highlights: [
      "Travel Date: 24th July (Sodepur to Sodepur)",
      "Included Bus Transfer from Sodepur to Shalimar Station & Return Drop to Sodepur",
      "Sleeper Class Train Tickets (Jagannath Express 18409)",
      "Puri Jagannath Temple Darshan & Puja, Sea Beach Bath & Stroll",
      "Full Day Sightseeing: Udayagiri, Khandagiri, Dhauli Peace Pagoda, Konark Sun Temple & Nandankanan Zoo",
      "All 4 Meals Daily from Day 2 Breakfast to Day 5 Dinner",
      "Dedicated Sightseeing Vehicle on Day 2 & Day 4"
    ],
    transport: {
      mode: "Bus Transfer (Sodepur - Shalimar - Sodepur) + Sleeper Train (Jagannath Exp 18409) + Sightseeing Car",
      pickup: "Sodepur (Near Deshbandhu School)",
      vehicle: "Bus for Shalimar transfers + Dedicated Tourist Coach for Odisha sightseeing",
      details: "Complete door-to-door transit from Sodepur with all road and rail transfers."
    },
    accommodation: {
      category: "Standard Clean Hotel",
      description: "Standard clean hotel rooms in Puri (Family / 3 Sharing basis)",
      meals: "All 4 meals daily from Day 2 Breakfast to Day 5 Dinner (Breakfast, Lunch, Evening Tea, Dinner)",
      features: ["Clean Rooms", "Attached Bath with Hot Water", "Near Beach", "In-house Cooking"]
    },
    pricingDetails: {
      perHead: "₹5,700 / person",
      inclusions: [
        "Bus transfer from Sodepur to Shalimar and Shalimar to Sodepur",
        "Roundtrip Sleeper Class Train Tickets (Jagannath Express)",
        "Standard Clean Hotel Accommodation in Puri (Family / 3 Sharing)",
        "All 4 meals daily from Day 2 Breakfast to Day 5 Dinner",
        "Dedicated vehicle for sightseeing on Day 2 and Day 4"
      ],
      exclusions: [
        "Entry fees at monuments and Nandankanan Zoo",
        "Puja expenses and panda/guide fees",
        "Auto fares and personal shopping"
      ]
    },
    itinerary: [
      {
        day: 1,
        title: "Sodepur to Shalimar & Train to Puri",
        desc: "Meet at Sodepur, board our bus transfer to Shalimar Station. Board the Jagannath Express (18409) at 6:55 PM for Puri. Overnight train journey.",
        spots: ["Sodepur", "Shalimar Station", "Jagannath Express"],
        meals: "Train journey — own arrangement"
      },
      {
        day: 2,
        title: "Arrive Puri, Hotel Check-in & Sea Beach",
        desc: "Arrive at Puri in the morning. Check in to hotel, enjoy breakfast, and head to the sea beach for bathing. Afternoon local temple sightseeing by car. Overnight in Puri.",
        spots: ["Puri Beach", "Local Temples"],
        meals: "Breakfast, Lunch, Evening Tea & Dinner"
      },
      {
        day: 3,
        title: "Jagannath Temple Puja & Beach Relaxation",
        desc: "Morning darshan and puja at sacred Jagannath Temple. Enjoy sea bathing, relax, and stroll along the lively Puri sea beach in the evening. Overnight in Puri.",
        spots: ["Jagannath Temple", "Puri Sea Beach"],
        meals: "Breakfast, Lunch, Evening Tea & Dinner"
      },
      {
        day: 4,
        title: "Konark Sun Temple, Dhauli, Udayagiri-Khandagiri & Nandankanan",
        desc: "Early morning sightseeing tour: Udayagiri & Khandagiri Caves, Dhauli Peace Pagoda, world-famous Konark Sun Temple, and Nandankanan Zoological Park. Overnight in Puri.",
        spots: ["Konark Sun Temple", "Dhauli Pagoda", "Udayagiri & Khandagiri", "Nandankanan Zoo"],
        meals: "Breakfast, Lunch, Evening Tea & Dinner"
      },
      {
        day: 5,
        title: "Beach Leisure, Shopping & Return Train",
        desc: "Spend the day relaxing by the sea, bathing, and shopping for handicrafts. After dinner, transfer to Puri Station to board return train to Shalimar.",
        spots: ["Puri Beach Market", "Puri Station"],
        meals: "Breakfast, Lunch, Evening Tea & Dinner Included"
      },
      {
        day: 6,
        title: "Arrive Shalimar & Bus Drop to Sodepur",
        desc: "Arrive at Shalimar Station in the morning. Board our bus transfer back to Sodepur. Tour concludes.",
        spots: ["Shalimar Station", "Sodepur"],
        meals: "Tour Concludes"
      }
    ],
    bookingProcess: [
      { step: 1, title: "Book July Slot", desc: "Call 9830905332 / 9239458171 to register for 24th July." },
      { step: 2, title: "Ticket Confirmation", desc: "IRCTC train and hotel reservation completed." },
      { step: 3, title: "Board from Sodepur", desc: "Assemble at Sodepur for bus transfer." }
    ],
    importantNotes: [
      "Child Policy: 5–7 years 50% charge; 7+ years Full charge.",
      "Bus pickup and drop strictly from Sodepur office location."
    ]
  },
  {
    id: "pkg-13",
    title: "Lahaul & Spiti Valley Himalayan Circuit",
    destination: "Himachal Pradesh, India",
    duration: "13 Nights / 14 Days",
    price: "₹24,499",
    image: "/images/tour-13.png",
    shortDescription: "Grand 13N/14D high-altitude Himalayan expedition (07 May – 20 May 2026) covering Shimla, Sarahan, Sangla, Chitkul, Kalpa, Tabo, Kaza, Sissu, and Manali with an accompanying Bengali cook.",
    featured: false,
    rating: 4.9,
    reviewsCount: 92,
    nextDate: "07 May 2026",
    stayBreakdown: "Shimla (1N) | Sarahan (1N) | Sangla (1N) | Kalpa (1N) | Tabo (1N) | Kaza (2N) | Sissu (1N) | Manali (1N) | Train (4N)",
    seasonalPricing: {
      January: 0, February: 0, March: 0, April: 0,
      May: 24499, June: 24499, July: 24499, August: 24499,
      September: 24499, October: 24499, November: 0, December: 0
    },
    pricingNote: "Tour Dates: 07 May 2026 to 20 May 2026. Rate: ₹24,499 (Triple Share) | ₹24,999 (Double Share).",
    gallery: [
      "/images/tour-13.png",
      "/images/tour-10.png",
      "/images/tour-7.png"
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    highlights: [
      "Travel Dates: 07 May 2026 to 20 May 2026",
      "Roundtrip Sleeper Class Train from Howrah to Chandigarh/Ambala",
      "Dedicated Tempo Traveler Vehicle for the entire high-altitude circuit",
      "Stays: Shimla (1N), Sarahan (1N), Sangla (1N), Kalpa (1N), Tabo (1N), Kaza (2N), Sissu (1N), Manali (1N)",
      "Bhimkali Temple, Narkanda, Padam Palace, Kinnaur Gate, Taranda Mata, Chitkul, Rakchham & Hindustan Ka Akhri Dhaba",
      "1,000-year-old Tabo Monastery, Langza, Kee Monastery, Kibber, Hikkim & Chicham Bridge",
      "Sissu Waterfall, Atal Tunnel, Manali, and Kasol Parvati Valley",
      "Fresh Bengali meals prepared on-tour by accompanying Bengali cook",
      "Deluxe Hotel Accommodation (Family / Double / Triple Sharing)"
    ],
    transport: {
      mode: "Sleeper Class Train + High-Altitude Tempo Traveler Vehicle",
      pickup: "Howrah Railway Station",
      vehicle: "Force Tempo Traveler for complete Himachal and Spiti circuit",
      details: "Roundtrip train tickets and rugged high-clearance mountain vehicle throughout."
    },
    accommodation: {
      category: "Deluxe Hotels & Homestays",
      description: "Deluxe hotel accommodation (Family / 2 / 3 Sharing basis across 8 hill destinations)",
      meals: "Breakfast, Lunch, Evening Tea, Dinner with authentic Bengali food by accompanying cook",
      features: ["Warm Bedding", "Clean Mountain Hotels", "Bengali Cuisine", "Experienced Mountain Crew"]
    },
    pricingDetails: {
      perHead: "₹24,499 / person (Triple Share) | ₹24,999 / person (Double Share)",
      inclusions: [
        "Roundtrip Non-AC Sleeper Train Tickets",
        "Deluxe Hotel & Homestay Accommodation",
        "All sightseeing as per plan",
        "Breakfast, Lunch, Evening Tea, Dinner",
        "Train dinner on return night",
        "Dedicated Tempo Traveler Vehicle"
      ],
      exclusions: [
        "Entry fees, rides, and local taxi/auto charges",
        "Special warm clothing / snow boot rentals",
        "Room heater charges",
        "Meals during onward train journey and mineral water",
        "Porter and luggage handling"
      ]
    },
    itinerary: [
      {
        day: 1,
        title: "Departure from Howrah Station",
        desc: "Board the train from Howrah Station for Himachal Pradesh. Overnight train journey.",
        spots: ["Howrah Station"],
        meals: "Train journey — own arrangement"
      },
      {
        day: 2,
        title: "Full Day & Night Train Journey",
        desc: "Full day traveling on train across the northern plains.",
        spots: ["Train Journey"],
        meals: "Train journey — own arrangement"
      },
      {
        day: 3,
        title: "Arrive Chandigarh/Ambala to Shimla",
        desc: "Arrive at Chandigarh/Ambala in early morning, drive to Shimla. Check in to hotel, breakfast, and explore Mall Road, Ridge, and Kali Bari. Overnight in Shimla.",
        spots: ["Shimla Mall Road", "Kali Bari"],
        meals: "Breakfast, Lunch, Evening Tea & Dinner"
      },
      {
        day: 4,
        title: "Shimla to Sarahan via Bhimkali Temple",
        desc: "After breakfast, drive to Sarahan. Visit the historic wooden Bhimkali Temple. Check in and overnight in Sarahan.",
        spots: ["Bhimkali Temple", "Sarahan"],
        meals: "Breakfast, Lunch, Evening Tea & Dinner"
      },
      {
        day: 5,
        title: "Sarahan to Sangla via Kinnaur Gate & Chitkul",
        desc: "Drive through Narkanda, Padam Palace, Kinnaur Gate, Taranda Mata temple, Rakchham, Hindustan Ka Akhri Dhaba, and Kamru temple. Overnight in Sangla.",
        spots: ["Kinnaur Gate", "Taranda Mata", "Chitkul", "Hindustan Ka Akhri Dhaba", "Sangla"],
        meals: "Breakfast, Lunch, Evening Tea & Dinner"
      },
      {
        day: 6,
        title: "Sangla to Chitkul Valley & Kalpa",
        desc: "Explore Chitkul (last inhabited village near Indo-Tibet border), then proceed to Kalpa with stunning views of Kinnaur Kailash. Overnight in Kalpa.",
        spots: ["Chitkul Valley", "Kalpa", "Kinnaur Kailash View"],
        meals: "Breakfast, Lunch, Evening Tea & Dinner"
      },
      {
        day: 7,
        title: "Kalpa to Tabo via Nako",
        desc: "Drive into high Spiti Valley via Nako Lake. Arrive in ancient Tabo. Overnight in Tabo.",
        spots: ["Nako Lake", "Tabo Monastery"],
        meals: "Breakfast, Lunch, Evening Tea & Dinner"
      },
      {
        day: 8,
        title: "Tabo to Kaza via Langza",
        desc: "Visit 1,000-year-old Tabo Monastery, Langza fossil village with giant Buddha statue, and Kee Monastery. Overnight in Kaza.",
        spots: ["Tabo Monastery", "Langza Buddha", "Kee Monastery", "Kaza"],
        meals: "Breakfast, Lunch, Evening Tea & Dinner"
      },
      {
        day: 9,
        title: "Kaza Local Sightseeing — Hikkim & Komic",
        desc: "Visit Hikkim (World's highest post office), Komic (Highest village with motorable road), and Chicham Bridge. Overnight in Kaza.",
        spots: ["Hikkim Post Office", "Komic", "Chicham Bridge"],
        meals: "Breakfast, Lunch, Evening Tea & Dinner"
      },
      {
        day: 10,
        title: "Spiti High Valley Exploration",
        desc: "Full day exploring surrounding mountain landscapes and serene Spiti valley vistas. Overnight in Kaza.",
        spots: ["Spiti Valley", "Kaza Market"],
        meals: "Breakfast, Lunch, Evening Tea & Dinner"
      },
      {
        day: 11,
        title: "Kaza to Manali via Sissu & Atal Tunnel",
        desc: "Drive over Kunzum Pass route to Sissu village in Lahaul, cross the engineering marvel Atal Tunnel, and reach Manali. Overnight in Manali.",
        spots: ["Kunzum Pass", "Sissu", "Atal Tunnel", "Manali"],
        meals: "Breakfast, Lunch, Evening Tea & Dinner"
      },
      {
        day: 12,
        title: "Manali to Chandigarh / Ambala Station",
        desc: "Drive down from Manali to Chandigarh / Kalka / Ambala Station to board return train. (Train dinner provided).",
        spots: ["Chandigarh / Ambala Station"],
        meals: "Breakfast, Lunch & Return Train Dinner"
      },
      {
        day: 13,
        title: "Full Day Train Journey",
        desc: "Full day relaxing on train with wonderful memories.",
        spots: ["Train Journey"],
        meals: "Train journey — own arrangement"
      },
      {
        day: 14,
        title: "Arrival at Howrah Station",
        desc: "Morning arrival at Howrah Station. Tour concludes.",
        spots: ["Howrah Station"],
        meals: "Tour Concludes"
      }
    ],
    bookingProcess: [
      { step: 1, title: "Book May Slot", desc: "Contact via Phone / WhatsApp to register for 07 May departure." },
      { step: 2, title: "Payment Clearance", desc: "Remaining payment to be completed by 2nd May 2026." },
      { step: 3, title: "Trip WhatsApp Group", desc: "Join WhatsApp group for live travel coordination." }
    ],
    importantNotes: [
      "Child Policy: 7+ years Full charge; 5–7 years ₹17,999 (with car seat); Under 5 years Free (lap child; ₹10,000 for seat).",
      "Spiti circuit involves high altitudes; carry warm thermals and skin moisturizer."
    ]
  },
  {
    id: "pkg-14",
    title: "Nepal Himalayan Heritage & Wildlife Tour",
    destination: "Nepal",
    duration: "8 Nights / 9 Days",
    price: "₹19,000",
    image: "/images/tour-14.png",
    shortDescription: "8N/9D complete international holiday (06 Jan – 14 Jan 2027) without passport requirement covering Lumbini (Lord Buddha's Birthplace 1N), Kathmandu (2N), Pokhara (2N), and Chitwan National Park (1N). \"আজ মন চেয়েছে আমি হারিয়ে যাবো, হারিয়ে যাবো আজ দিয়ার সাথে...\"",
    featured: false,
    rating: 4.8,
    reviewsCount: 78,
    nextDate: "06 Jan 2027",
    stayBreakdown: "Lumbini (1N) | Kathmandu (2N) | Pokhara (2N) | Chitwan (1N) | Train (2N)",
    seasonalPricing: {
      January: 19000, February: 19000, March: 19000, April: 19000,
      May: 19000, June: 19000, July: 19000, August: 19000,
      September: 19000, October: 19000, November: 19000, December: 19000
    },
    pricingNote: "Tour Dates: 06 Jan to 14 Jan 2027. Rate: ₹19,000 (Triple Share) | ₹19,500 (Double Share). No passport required.",
    gallery: [
      "/images/tour-14.png",
      "/images/hero_kerala_1783678518411.png",
      "/images/hero_andaman_1783678485939.png"
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    highlights: [
      "Poetic Line: \"আজ মন চেয়েছে আমি হারিয়ে যাবো, হারিয়ে যাবো আজ দিয়ার সাথে...\"",
      "Fixed Winter Dates: 06 January to 14 January 2027 (Passport-free foreign travel)",
      "Lumbini (1N): Lord Buddha's Birthplace, Mayadevi Temple, Sacred Garden UNESCO Heritage Site",
      "Kathmandu (2N): Pashupatinath Temple, Boudhanath Stupa, Budhanilkantha, Bhaktapur Durbar Square, Swayambhunath",
      "Pokhara (2N): Bindhyabasini Temple, Mahendra Cave, Gupteshwor Cave, Seti River, Davis Falls, Phewa Lake boating",
      "Chitwan (1N): Wildlife sanctuary home to Royal Bengal Tigers & One-horned Rhinos, Sita Cave, Trishuli River",
      "Roundtrip Train Tickets (Kolkata to Gorakhpur & Raxaul to Howrah in Sleeper Class)",
      "Private Vehicle for complete Gorakhpur - Nepal - Raxaul tour & Full-time Tour Manager",
      "All meals included from Day 2 Lunch to Day 8 Breakfast"
    ],
    transport: {
      mode: "Sleeper Class Train (Kolkata to Gorakhpur & Raxaul to Howrah) + Private Tourist Vehicle in Nepal",
      pickup: "Kolkata (Chitpur) Railway Station",
      vehicle: "Dedicated Private Tourist Vehicle for entire Gorakhpur - Nepal - Raxaul tour",
      details: "Seamless rail tickets and private coach across all Nepal destinations."
    },
    accommodation: {
      category: "Deluxe Hotels",
      description: "Deluxe hotel accommodation (Family basis) across Lumbini (1N), Kathmandu (2N), Pokhara (2N), Chitwan (1N)",
      meals: "All meals included from Day 2 Lunch to Day 8 Breakfast",
      features: ["Deluxe Rooms", "Attached Bath with Hot Water", "Good Hospitality", "Full-time Tour Manager"]
    },
    pricingDetails: {
      perHead: "₹19,000 / person (Triple Share) | ₹19,500 / person (Double Share)",
      inclusions: [
        "Sleeper Class Train Tickets (Kolkata to Gorakhpur & Raxaul to Howrah)",
        "Private vehicle for Gorakhpur - Nepal - Raxaul tour",
        "All meals from Day 2 Lunch to Day 8 Breakfast",
        "Deluxe Hotel Accommodation (Family basis)",
        "Sightseeing as per itinerary",
        "Full-time experienced Tour Manager"
      ],
      exclusions: [
        "Meals during train journey",
        "Chitwan Jungle Safari charges",
        "Campfire charges, room heater, mineral water",
        "Medical insurance, entry fees, and personal expenses"
      ]
    },
    itinerary: [
      {
        day: 1,
        title: "Departure from Kolkata (Chitpur) Station",
        desc: "Meet at Kolkata (Chitpur) Station by 1:00 PM and board train for Gorakhpur (can also board from Bandel, Naihati, Bardhaman). Overnight train journey.",
        spots: ["Kolkata Chitpur Station"],
        meals: "Train journey — own arrangement"
      },
      {
        day: 2,
        title: "Arrive Gorakhpur & Drive to Lumbini",
        desc: "Arrive at Gorakhpur Station at 7:30 AM. Cross border into Nepal and arrive at Lumbini. After lunch, visit Mayadevi Temple, monasteries, shrines, and UNESCO Sacred Garden. Overnight in Lumbini.",
        spots: ["Gorakhpur", "Lumbini", "Mayadevi Temple", "Sacred Garden"],
        meals: "Lunch & Dinner Included"
      },
      {
        day: 3,
        title: "Lumbini to Kathmandu — Capital City",
        desc: "Scenic drive from Lumbini to Kathmandu. Check in to deluxe hotel. Evening at leisure in vibrant Thamel/city center. Overnight in Kathmandu.",
        spots: ["Kathmandu", "Thamel"],
        meals: "Breakfast, Lunch & Dinner"
      },
      {
        day: 4,
        title: "Kathmandu Heritage & Temple Sightseeing",
        desc: "Full day exploring iconic landmarks: Pashupatinath Temple, Boudhanath Stupa, Budhanilkantha, Guhyeshwari Temple, Bhaktapur Durbar Square, and Swayambhunath Stupa. Overnight in Kathmandu.",
        spots: ["Pashupatinath Temple", "Boudhanath Stupa", "Budhanilkantha", "Bhaktapur Durbar Square", "Swayambhunath"],
        meals: "Breakfast, Lunch & Dinner"
      },
      {
        day: 5,
        title: "Kathmandu to Pokhara via Manakamana Temple",
        desc: "Drive to scenic Pokhara at the foothills of the Himalayas. En route view Swayambhunath & Manakamana Temple (cable car optional). Overnight in Pokhara.",
        spots: ["Manakamana", "Pokhara"],
        meals: "Breakfast, Lunch & Dinner"
      },
      {
        day: 6,
        title: "Pokhara Sightseeing & Phewa Lake Boating",
        desc: "Explore Bindhyabasini Temple, Mahendra Cave, Gupteshwor Cave, Seti River Gorge, Davis Falls, and enjoy serene Phewa Lake. Overnight in Pokhara.",
        spots: ["Bindhyabasini Temple", "Mahendra Cave", "Gupteshwor Cave", "Davis Falls", "Phewa Lake"],
        meals: "Breakfast, Lunch & Dinner"
      },
      {
        day: 7,
        title: "Pokhara to Chitwan National Park",
        desc: "Drive from Pokhara to Chitwan. En route view Sita Cave, Bhitti Cave, Trishuli River, and Devghat. Arrive at Chitwan wildlife reserve. Overnight in Chitwan.",
        spots: ["Trishuli River", "Devghat", "Chitwan National Park"],
        meals: "Breakfast, Lunch & Dinner"
      },
      {
        day: 8,
        title: "Chitwan Jungle Safari & Drive to Raxaul Station",
        desc: "Early morning Chitwan Jungle Safari (own cost). Drive to Raxaul Station enjoying breathtaking scenic views and board return train for Howrah.",
        spots: ["Chitwan Safari", "Raxaul Station"],
        meals: "Breakfast Included"
      },
      {
        day: 9,
        title: "Arrival at Howrah Station",
        desc: "Arrive at Howrah Station in the morning with sweet memories of the Himalayas. Tour concludes.",
        spots: ["Howrah Station"],
        meals: "Tour Concludes"
      }
    ],
    bookingProcess: [
      { step: 1, title: "Book January Slot", desc: "Contact via Phone / WhatsApp to register for 06 Jan 2027 departure." },
      { step: 2, title: "ID Proof Submission", desc: "Provide Voter ID or Aadhaar Card (No passport required)." },
      { step: 3, title: "Confirmation Vouchers", desc: "Receive ticket vouchers and trip briefing." }
    ],
    importantNotes: [
      "No passport required for Indian citizens (Valid Voter ID or Aadhaar mandatory).",
      "Child Policy: Under 5 years Free; 5–7 years ₹10,000 (with car seat, without train ticket); 7+ years Full charge."
    ]
  }
];
