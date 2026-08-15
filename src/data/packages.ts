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
  
  // Extended Details
  rating?: number;
  reviewsCount?: number;
  nextDate?: string;
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
    id: "pkg-1",
    title: "Enchanting Kashmir",
    destination: "Kashmir, India",
    duration: "5 Nights / 6 Days",
    price: "₹18,500",
    image: "/images/hero_kashmir_1783678442997.png",
    shortDescription: "Experience paradise on earth with our curated Kashmir package. Includes Srinagar, Gulmarg, and Pahalgam.",
    featured: true,
    rating: 4.9,
    reviewsCount: 142,
    nextDate: "25 Aug",
    gallery: [
      "/images/hero_kashmir_1783678442997.png",
      "/images/tour-1.jpeg",
      "/images/tour-4.png",
      "/images/tour-7.png"
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    highlights: [
      "Shikara Ride on Dal Lake with complimentary Kahwa",
      "Overnight stay in a Deluxe Houseboat",
      "Gondola Cable Car ride to Phase 1 & Phase 2 in Gulmarg",
      "Pahalgam Valley exploration — Aru & Betaab Valleys",
      "Mughal Gardens visit (Nishat & Shalimar Bagh)"
    ],
    transport: {
      mode: "Flight / Train to Jammu & Flight to Srinagar",
      pickup: "Srinagar International Airport (SXR) or Jammu Railway Station",
      vehicle: "Private AC/Non-AC Sedan / SUV (Innova/Tavera) reserved for full tour",
      details: "Seamless transfer from arrival till departure with an experienced mountain driver."
    },
    accommodation: {
      category: "3-Star Deluxe Hotels & Traditional Houseboat",
      description: "2 Nights Srinagar Deluxe Hotel + 1 Night Dal Lake Houseboat + 1 Night Gulmarg Resort + 1 Night Pahalgam Valley Hotel",
      meals: "Daily Breakfast & Dinner included (Buffet style with veg/non-veg options)",
      features: ["Central Heating / Electric Blankets", "24x7 Hot Water", "Free Wi-Fi", "Mountain / Lake Views"]
    },
    pricingDetails: {
      perHead: "₹18,500 / person (Quad/Triple Sharing)",
      originalPrice: "₹22,000",
      groupDiscount: "10% Flat Discount for groups of 4+ travelers",
      inclusions: [
        "All transfers & sightseeing by private non-AC/AC vehicle",
        "5 Nights Deluxe Accommodation",
        "Daily Breakfast & Dinner",
        "1 Hour Shikara Ride on Dal Lake",
        "Inner Line Permits & Toll Taxes",
        "Driver allowances, fuel charges, and parking fees"
      ],
      exclusions: [
        "Airfare / Train fare to Srinagar/Jammu",
        "Gulmarg Gondola Ride tickets (Can be pre-booked on request)",
        "Union cabs for Aru/Betaab Valley in Pahalgam (as per court rule)",
        "Pony rides, personal laundry, and lunch"
      ]
    },
    itinerary: [
      {
        day: 1,
        title: "Arrival in Srinagar & Shikara Ride",
        desc: "Warm welcome at Srinagar Airport. Check-in to your hotel. In the evening, enjoy a romantic 1-hour Shikara ride across the serene Dal Lake.",
        spots: ["Srinagar Airport", "Dal Lake", "Boulevard Road"],
        meals: "Dinner Included"
      },
      {
        day: 2,
        title: "Srinagar to Gulmarg Excursion",
        desc: "Drive through pine-covered slopes to Gulmarg. Take the world's second highest Gondola ride up to Apharwat Peak.",
        spots: ["Gulmarg Meadow", "Gondola Cable Car", "St. Mary Church"],
        meals: "Breakfast & Dinner Included"
      },
      {
        day: 3,
        title: "Gulmarg to Pahalgam — Valley of Shepherds",
        desc: "Proceed to Pahalgam via Saffron fields of Pampore and Awantipora ruins. Visit the pristine Aru and Betaab valleys.",
        spots: ["Saffron Fields", "Awantipora Ruins", "Aru Valley", "Betaab Valley"],
        meals: "Breakfast & Dinner Included"
      },
      {
        day: 4,
        title: "Pahalgam to Srinagar Deluxe Houseboat",
        desc: "Return to Srinagar. Check-in to your heritage Dal Lake Houseboat. Enjoy sunset over the water.",
        spots: ["Lidder River", "Dal Lake Houseboat", "Floating Market"],
        meals: "Breakfast & Dinner Included"
      },
      {
        day: 5,
        title: "Srinagar Mughal Gardens Sightseeing",
        desc: "Explore Shalimar Bagh, Nishat Bagh, Chashme Shahi, and Shankaracharya Temple perched atop the hill.",
        spots: ["Shalimar Bagh", "Nishat Bagh", "Shankaracharya Temple"],
        meals: "Breakfast & Dinner Included"
      },
      {
        day: 6,
        title: "Departure from Srinagar",
        desc: "After breakfast, drop off at Srinagar Airport with unforgettable memories of Kashmir.",
        spots: ["Srinagar Airport"],
        meals: "Breakfast Included"
      }
    ],
    bookingProcess: [
      { step: 1, title: "Select Dates & Guest Count", desc: "Submit the quick booking inquiry form at the bottom." },
      { step: 2, title: "Customized Itinerary Confirmation", desc: "Our travel expert will send you a tailored quote on WhatsApp within 2 hours." },
      { step: 3, title: "Token Advance Payment", desc: "Pay 30% advance to lock hotel bookings & private cab." },
      { step: 4, title: "Voucher Receipt & Travel!", desc: "Receive official vouchers & driver contact details." }
    ],
    importantNotes: [
      "Carry valid Govt photo ID (Aadhaar / Passport / Voter ID).",
      "Postpaid SIM cards (Jio, Airtel, BSNL) work in Jammu & Kashmir.",
      "Warm woolens required even in spring/autumn months."
    ]
  },
  {
    id: "pkg-2",
    title: "Darjeeling & Sikkim Delight",
    destination: "Darjeeling, India",
    duration: "6 Nights / 7 Days",
    price: "₹15,000",
    image: "/images/hero_darjeeling_1783678472536.png",
    shortDescription: "Discover the breathtaking beauty of the Himalayas. Visit tea gardens, Tiger Hill sunrise, and Gangtok monasteries.",
    featured: true,
    rating: 4.8,
    reviewsCount: 118,
    nextDate: "28 Aug",
    gallery: [
      "/images/hero_darjeeling_1783678472536.png",
      "/images/tour-2.png",
      "/images/tour-8.png",
      "/images/tour-12.png"
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    highlights: [
      "Early morning Tiger Hill sunrise view of Mount Kanchenjunga",
      "Iconic Darjeeling Himalayan Toy Train ride",
      "Tsomgo Lake & Baba Mandir high-altitude excursion in Sikkim",
      "Visit Happy Valley Tea Estate & Himalayan Mountaineering Institute",
      "Gangtok Ropeway & MG Marg evening stroll"
    ],
    transport: {
      mode: "Train to NJP / Flight to Bagdogra (IXB) / Pakyong",
      pickup: "New Jalpaiguri Railway Station (NJP) or Bagdogra Airport (IXB)",
      vehicle: "Dedicated Xylo / Scorpio / Sumo Gold for hill roads",
      details: "Comfortable pickup and all inter-city transfers included."
    },
    accommodation: {
      category: "3-Star Hill View Resorts & Hotels",
      description: "3 Nights Darjeeling Deluxe Hotel + 3 Nights Gangtok Premium Hotel",
      meals: "Breakfast & Dinner included daily",
      features: ["Room Heaters on demand", "Free Wi-Fi", "Geyser in bathrooms", "In-house restaurant"]
    },
    pricingDetails: {
      perHead: "₹15,000 / person (Triple Sharing)",
      originalPrice: "₹18,000",
      groupDiscount: "Special discount for family bookings of 6+",
      inclusions: [
        "All transfers & sightseeing in non-AC mountain vehicle",
        "6 Nights Hotel Stay",
        "Daily Breakfast & Dinner",
        "Sikkim Inner Line Permits",
        "Driver charges, toll, and state tax"
      ],
      exclusions: [
        "Toy train tickets",
        "Nathula Pass permit (Optional extra ₹500/head)",
        "Entry fees to museums & gardens"
      ]
    },
    itinerary: [
      { day: 1, title: "NJP/Bagdogra to Darjeeling", desc: "Pickup & scenic drive through tea gardens to Queen of Hills.", spots: ["Mirik", "Pashupati Market", "Darjeeling Mall"], meals: "Dinner" },
      { day: 2, title: "Tiger Hill Sunrise & 7 Points Sightseeing", desc: "4 AM trip to Tiger Hill, followed by Batasia Loop, Ghoom Monastery & Tea Gardens.", spots: ["Tiger Hill", "Batasia Loop", "Japanese Temple"], meals: "Breakfast & Dinner" },
      { day: 3, title: "Darjeeling to Gangtok Transfer", desc: "Scenic journey along Teesta river into Sikkim's capital city.", spots: ["Teesta View Point", "MG Marg"], meals: "Breakfast & Dinner" },
      { day: 4, title: "Tsomgo Lake & Baba Mandir Excursion", desc: "Travel to glacial Tsomgo Lake (12,400 ft) and historic Baba Mandir.", spots: ["Tsomgo Lake", "Baba Harbhajan Mandir"], meals: "Breakfast & Dinner" },
      { day: 5, title: "Gangtok Local Sightseeing", desc: "Visit Rumtek Monastery, Hanuman Tok, Flower Show & Ropeway.", spots: ["Rumtek Monastery", "Ban Jhakri Falls", "Gangtok Ropeway"], meals: "Breakfast & Dinner" },
      { day: 6, title: "Gangtok to Kalimpong Excursion", desc: "Day trip to peaceful Kalimpong hill station.", spots: ["Deolo Hill", "Cactus Nursery"], meals: "Breakfast & Dinner" },
      { day: 7, title: "Drop to NJP / Bagdogra", desc: "Transfer back to NJP station / Bagdogra airport.", spots: ["NJP / IXB Airport"], meals: "Breakfast" }
    ],
    bookingProcess: [
      { step: 1, title: "Inquire via Form", desc: "Select travel date & number of passengers." },
      { step: 2, title: "Permit Clearance & Quote", desc: "Receive instant customized package plan." },
      { step: 3, title: "Advance Confirmation", desc: "Pay 25% token to secure hotel slots." },
      { step: 4, title: "Pack & Travel", desc: "Receive voucher & driver info." }
    ],
    importantNotes: ["Passport photos required for Sikkim permits", "Voter ID or Passport mandatory for Nathula/Tsomgo permit"]
  },
  {
    id: "pkg-3",
    title: "Andaman Adventure",
    destination: "Andaman Islands",
    duration: "4 Nights / 5 Days",
    price: "₹22,000",
    image: "/images/hero_andaman_1783678485939.png",
    shortDescription: "Relax on pristine beaches and explore rich marine life in the crystal clear waters of Andaman.",
    featured: true,
    rating: 4.9,
    reviewsCount: 95,
    nextDate: "02 Sep",
    gallery: [
      "/images/hero_andaman_1783678485939.png",
      "/images/tour-3.png",
      "/images/hero_goa_1783678456678.png",
      "/images/tour-6.png"
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    highlights: [
      "Cellular Jail Light & Sound Show in Port Blair",
      "Cruise to Havelock Island & Radhanagar Beach (Asia's #1 Beach)",
      "Scuba Diving / Snorkeling at Elephant Beach",
      "Speedboat transfer to Neil Island & Natural Bridge"
    ],
    transport: {
      mode: "Flight to Port Blair (IXZ)",
      pickup: "Veer Savarkar International Airport, Port Blair",
      vehicle: "AC Private Vehicle for island transfers + Makruzz / Green Ocean AC Catamaran Cruise between islands",
      details: "Complete island ferry tickets and land transfers pre-arranged."
    },
    accommodation: {
      category: "Luxury Beachfront Resorts",
      description: "2 Nights Port Blair Resort + 2 Nights Havelock Beachside Cottage",
      meals: "Daily Breakfast Included",
      features: ["Swimming Pool", "Beach Access", "Air Conditioned", "In-house Spa"]
    },
    pricingDetails: {
      perHead: "₹22,000 / person (Double Sharing)",
      originalPrice: "₹26,500",
      groupDiscount: "Flat ₹2,000 OFF per couple",
      inclusions: ["All ferry & catamaran cruise tickets", "4 Nights Beach Resort Stay", "Daily Breakfast", "Port Blair & Havelock transfers", "Cellular Jail tickets"],
      exclusions: ["Airfare to Port Blair", "Water sports activities (Scuba/Sea Walk)", "Personal expenses"]
    },
    itinerary: [
      { day: 1, title: "Arrival Port Blair & Cellular Jail", desc: "Land in Port Blair. Visit Cellular Jail and witness historic Light & Sound show.", spots: ["Cellular Jail", "Corbyn's Cove Beach"], meals: "Welcome Drink" },
      { day: 2, title: "Cruise to Havelock & Radhanagar Beach", desc: "Take high-speed catamaran to Havelock. Relax on white sands of Radhanagar Beach.", spots: ["Havelock Island", "Radhanagar Beach"], meals: "Breakfast" },
      { day: 3, title: "Elephant Beach Coral Reef Snorkeling", desc: "Boat trip to Elephant beach for water sports and vibrant coral reef exploration.", spots: ["Elephant Beach", "Coral Reef"], meals: "Breakfast" },
      { day: 4, title: "Neil Island Day Trip & Return to Port Blair", desc: "Explore Lakshmanpur Beach and Natural Bridge before returning to Port Blair.", spots: ["Neil Island", "Natural Bridge"], meals: "Breakfast" },
      { day: 5, title: "Departure", desc: "Drop to Port Blair airport.", spots: ["Port Blair Airport"], meals: "Breakfast" }
    ],
    bookingProcess: [
      { step: 1, title: "Fill Details", desc: "Send your preferred island dates." },
      { step: 2, title: "Ferry Ticket Lock", desc: "We reserve ferry seats on Makruzz." },
      { step: 3, title: "Confirmation", desc: "Receive resort booking vouchers." }
    ],
    importantNotes: ["Ferry bookings close early in peak season", "Water sports subject to weather conditions"]
  },
  {
    id: "pkg-4",
    title: "Majestic Rajasthan",
    destination: "Rajasthan, India",
    duration: "7 Nights / 8 Days",
    price: "₹25,000",
    image: "/images/tour-4.png",
    shortDescription: "Explore royal palaces, majestic forts, and vibrant desert sand dunes of Rajasthan.",
    featured: true,
    rating: 4.9,
    reviewsCount: 160,
    nextDate: "12 Sep",
    gallery: [
      "/images/tour-4.png",
      "/images/tour-9.png",
      "/images/tour-10.png",
      "/images/tour-1.jpeg"
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    highlights: [
      "Amber Fort elephant/jeep ride in Jaipur",
      "Overnight Swiss Tent stay in Jaisalmer Thar Desert with camel safari",
      "Rajasthani Folk Dance & Cultural Night with BBQ",
      "Boat ride on Lake Pichola in Udaipur",
      "Mehrangarh Fort exploration in Jodhpur"
    ],
    transport: {
      mode: "Train / Flight to Jaipur & Return from Udaipur",
      pickup: "Jaipur Airport / Railway Station",
      vehicle: "Private AC Tempo Traveler / SUV (Innova)",
      details: "Dedicated chauffeur with royal heritage circuit expertise."
    },
    accommodation: {
      category: "Heritage Haveli Hotels & Luxury Desert Camp",
      description: "2N Jaipur + 2N Jaisalmer (1N Desert Camp) + 1N Jodhpur + 2N Udaipur",
      meals: "Daily Breakfast + Royal Dinner in Desert Camp",
      features: ["Royal Decor", "Heritage Architecture", "Swimming Pool", "Cultural Performances"]
    },
    pricingDetails: {
      perHead: "₹25,000 / person (Twin Sharing)",
      originalPrice: "₹29,000",
      groupDiscount: "Group discount available for 6+ travelers",
      inclusions: ["7 Nights Heritage Stay", "Camel Safari & Dune Bashing", "Folk Dance Night", "Breakfast & Desert Dinner", "AC Transport"],
      exclusions: ["Monument entry tickets", "Personal shopping", "Lunches"]
    },
    itinerary: [
      { day: 1, title: "Arrival Jaipur — Pink City", desc: "Welcome to Jaipur. Visit City Palace and Hawa Mahal.", spots: ["Hawa Mahal", "City Palace", "Local Bazaar"], meals: "Dinner" },
      { day: 2, title: "Forts of Jaipur", desc: "Explore Amber Fort, Nahargarh Fort, and Jal Mahal.", spots: ["Amber Fort", "Nahargarh", "Jal Mahal"], meals: "Breakfast & Dinner" },
      { day: 3, title: "Jaipur to Jodhpur Blue City", desc: "Drive to Jodhpur. Visit Mehrangarh Fort and Jaswant Thada.", spots: ["Mehrangarh Fort", "Blue City Streets"], meals: "Breakfast & Dinner" },
      { day: 4, title: "Jodhpur to Jaisalmer Desert Camp", desc: "Reach Thar desert. Camel ride, sunset on dunes, and folk dance.", spots: ["Sam Sand Dunes", "Desert Camp"], meals: "Breakfast & Gala Dinner" },
      { day: 5, title: "Jaisalmer Fort & Patwon Ki Haveli", desc: "Explore the Golden Fort and carved havelis.", spots: ["Golden Fort", "Patwon Ki Haveli"], meals: "Breakfast & Dinner" },
      { day: 6, title: "Jaisalmer to Udaipur City of Lakes", desc: "Drive to Udaipur via Ranakpur Jain Temple.", spots: ["Ranakpur Temple", "Udaipur Lake"], meals: "Breakfast & Dinner" },
      { day: 7, title: "Udaipur Lakes & Palaces", desc: "Lake Pichola boat ride, Saheliyon Ki Bari, and Jagdish Temple.", spots: ["Lake Pichola", "City Palace Udaipur"], meals: "Breakfast & Dinner" },
      { day: 8, title: "Departure Udaipur", desc: "Drop off at Udaipur Airport/Station.", spots: ["Udaipur Airport"], meals: "Breakfast" }
    ],
    bookingProcess: [
      { step: 1, title: "Inquire Now", desc: "Submit date & total guests." },
      { step: 2, title: "Customize", desc: "Add/remove cities as needed." },
      { step: 3, title: "Confirm & Book", desc: "Pay advance & get instant vouchers." }
    ],
    importantNotes: ["Sunscreen and sunglasses recommended", "Light cotton clothes for day, jackets for desert nights"]
  },
  {
    id: "pkg-5",
    title: "Kerala Backwaters",
    destination: "Kerala, India",
    duration: "5 Nights / 6 Days",
    price: "₹16,500",
    image: "/images/hero_kerala_1783678518411.png",
    shortDescription: "Cruise through serene backwaters of Alleppey and relax in lush green tea gardens of Munnar.",
    featured: true,
    rating: 4.8,
    reviewsCount: 110,
    nextDate: "05 Sep",
    gallery: [
      "/images/hero_kerala_1783678518411.png",
      "/images/tour-5.png",
      "/images/hero_andaman_1783678485939.png",
      "/images/tour-12.png"
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    highlights: [
      "Overnight Houseboat Cruise in Alleppey backwaters with all meals",
      "Munnar Tea Gardens & Eravikulam National Park (Nilgiri Tahr)",
      "Spice Plantation tour in Thekkady",
      "Kathakali cultural dance show in Fort Kochi"
    ],
    transport: {
      mode: "Flight / Train to Cochin (COK)",
      pickup: "Cochin Airport / Ernakulam Railway Station",
      vehicle: "Private AC Sedan / Ertiga",
      details: "Chauffeur driven private car throughout Kerala circuit."
    },
    accommodation: {
      category: "4-Star Hill Resorts & Deluxe Houseboat",
      description: "2 Nights Munnar Hill Resort + 1 Night Thekkady Resort + 1 Night Alleppey Houseboat + 1 Night Cochin Hotel",
      meals: "Breakfast daily + All Meals on Houseboat (Lunch, Tea, Dinner, Breakfast)",
      features: ["Traditional Kerala Cuisine", "Houseboat Air Conditioning", "Tea Plantation Views"]
    },
    pricingDetails: {
      perHead: "₹16,500 / person",
      originalPrice: "₹19,500",
      groupDiscount: "Honeymoon special setup (Candlelight dinner + cake) free",
      inclusions: ["5 Nights Accommodation", "Private Houseboat with meals", "All AC transfers", "Spice Plantation entry fee"],
      exclusions: ["Airfare/Train fare", "Personal ayurvedic massage"]
    },
    itinerary: [
      { day: 1, title: "Cochin to Munnar", desc: "Scenic drive past Cheeyappara Waterfalls to tea hill station.", spots: ["Cheeyappara Waterfalls", "Munnar Tea Hills"], meals: "Dinner" },
      { day: 2, title: "Munnar Tea Estates & National Park", desc: "Eravikulam National Park, Mattupetty Dam, and Echo Point.", spots: ["Eravikulam Park", "Mattupetty Dam"], meals: "Breakfast & Dinner" },
      { day: 3, title: "Munnar to Thekkady Wild Reserve", desc: "Drive to Periyar Wildlife Sanctuary. Spice plantation tour.", spots: ["Periyar Lake", "Spice Gardens"], meals: "Breakfast & Dinner" },
      { day: 4, title: "Thekkady to Alleppey Houseboat", desc: "Board private houseboat. Cruise through coconut canals.", spots: ["Alleppey Backwaters", "Vembanad Lake"], meals: "Lunch, Tea & Dinner" },
      { day: 5, title: "Alleppey to Cochin Sightseeing", desc: "Fort Kochi Chinese Fishing Nets, St. Francis Church & Mattancherry.", spots: ["Chinese Fishing Nets", "Fort Kochi"], meals: "Breakfast & Dinner" },
      { day: 6, title: "Departure Cochin", desc: "Drop off at Cochin Airport.", spots: ["Cochin Airport"], meals: "Breakfast" }
    ],
    bookingProcess: [
      { step: 1, title: "Select Package", desc: "Specify family or honeymoon requirement." },
      { step: 2, title: "Houseboat Selection", desc: "Choose Deluxe or Premium AC Houseboat." },
      { step: 3, title: "Lock Package", desc: "Receive voucher on payment." }
    ],
    importantNotes: ["Houseboat AC operates 9 PM to 6 AM (Deluxe) or 24 hrs (Premium)", "Carry comfortable walking shoes"]
  },
  {
    id: "pkg-6",
    title: "Goa Getaway",
    destination: "Goa, India",
    duration: "3 Nights / 4 Days",
    price: "₹12,000",
    image: "/images/hero_goa_1783678456678.png",
    shortDescription: "Enjoy sun, sand, sea, watersports, and nightlife with our exciting Goa tour package.",
    featured: true,
    rating: 4.7,
    reviewsCount: 88,
    nextDate: "20 Aug",
    gallery: [
      "/images/hero_goa_1783678456678.png",
      "/images/tour-6.png",
      "/images/hero_andaman_1783678485939.png"
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    highlights: [
      "Sunset Cruise on Mandovi River",
      "North Goa Beach Tour (Baga, Calangute, Anjuna)",
      "South Goa Heritage Tour (Basilica of Bom Jesus & Mangueshi Temple)",
      "Dudhsagar Waterfalls jeep safari (Optional)"
    ],
    transport: {
      mode: "Flight / Train to Goa (GOI / GOX / Madgaon)",
      pickup: "Dabolim / Mopa Airport / Madgaon Station",
      vehicle: "Private AC Vehicle for airport transfers & tours",
      details: "Hassle-free transfers and sightseeing."
    },
    accommodation: {
      category: "3-Star / 4-Star Resort near Beach with Pool",
      description: "3 Nights Resort Stay in North Goa near Baga / Calangute",
      meals: "Daily Buffet Breakfast Included",
      features: ["Swimming Pool", "Bar & Restaurant", "10 min walk to beach"]
    },
    pricingDetails: {
      perHead: "₹12,000 / person",
      originalPrice: "₹14,500",
      groupDiscount: "Bachelor / Group discount available",
      inclusions: ["3 Nights Resort Stay", "Daily Breakfast", "Mandovi River Cruise", "North & South Goa Sightseeing", "Airport Transfers"],
      exclusions: ["Water sports charges", "Nightclub entry", "Lunches & Dinners"]
    },
    itinerary: [
      { day: 1, title: "Arrival Goa & Sunset Cruise", desc: "Pickup from airport. Check-in to resort. Evening Mandovi sunset cruise.", spots: ["Mandovi River Cruise", "Baga Beach"], meals: "Welcome Drink" },
      { day: 2, title: "North Goa Beaches & Nightlife", desc: "Calangute, Baga, Anjuna, Vagator Beach & Aguada Fort.", spots: ["Fort Aguada", "Anjuna Beach", "Vagator"], meals: "Breakfast" },
      { day: 3, title: "South Goa Cultural & Heritage Tour", desc: "Old Goa Churches, Mangueshi Temple, and Miramar Beach.", spots: ["Basilica of Bom Jesus", "Miramar Beach"], meals: "Breakfast" },
      { day: 4, title: "Departure", desc: "Shopping at Panjim market and drop to airport.", spots: ["Goa Airport"], meals: "Breakfast" }
    ],
    bookingProcess: [{ step: 1, title: "Form Submit", desc: "Choose travel dates." }, { step: 2, title: "Resort Confirmation", desc: "Select preferred resort location." }, { step: 3, title: "Instant Voucher", desc: "Get vouchers via WhatsApp." }],
    importantNotes: ["Valid ID mandatory for casino & cruise entry", "Sunscreen and beachwear recommended"]
  },
  {
    id: "pkg-7",
    title: "Magical Meghalaya",
    destination: "Meghalaya, India",
    duration: "5 Nights / 6 Days",
    price: "₹17,500",
    image: "/images/tour-7.png",
    shortDescription: "Discover the abode of clouds — double-decker living root bridges, crystal rivers, and waterfalls.",
    featured: true,
    rating: 4.9,
    reviewsCount: 104,
    nextDate: "15 Sep",
    gallery: [
      "/images/tour-7.png",
      "/images/tour-13.png",
      "/images/hero_kashmir_1783678442997.png"
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    highlights: [
      "Transparent water boating at Dawki (Umngot River)",
      "Nongriat Double Decker Living Root Bridge trek",
      "Cherrapunji Seven Sisters & Nohkalikai Waterfalls",
      "Mawlynnong — Cleanest Village in Asia"
    ],
    transport: {
      mode: "Flight to Guwahati (GAU) / Shillong (SHL)",
      pickup: "Guwahati Airport / Railway Station",
      vehicle: "Private SUV (Innova / Sumo) for mountain terrain",
      details: "Experienced driver skilled in mist & serpentine roads."
    },
    accommodation: {
      category: "Eco Resorts & Boutique Homestays",
      description: "2 Nights Shillong + 2 Nights Cherrapunji + 1 Night Dawki/Shillong",
      meals: "Daily Breakfast & Dinner",
      features: ["Nature Views", "Bonfire Option", "Geyser & Clean Linen"]
    },
    pricingDetails: {
      perHead: "₹17,500 / person",
      originalPrice: "₹21,000",
      groupDiscount: "Group discount for 4+ trek enthusiasts",
      inclusions: ["5 Nights Accommodation", "Daily Breakfast & Dinner", "Dawki Boating", "Guwahati Pick & Drop", "All Permits"],
      exclusions: ["Guide fee for root bridge trek", "Personal expenses"]
    },
    itinerary: [
      { day: 1, title: "Guwahati to Shillong", desc: "Pickup at Guwahati. Visit Umiam Lake (Barapani) on way to Shillong.", spots: ["Umiam Lake", "Police Bazar"], meals: "Dinner" },
      { day: 2, title: "Shillong to Cherrapunji", desc: "Visit Elephant Falls, Mawsmai Cave, Seven Sisters & Nohkalikai Falls.", spots: ["Nohkalikai Falls", "Mawsmai Cave"], meals: "Breakfast & Dinner" },
      { day: 3, title: "Double Decker Root Bridge Trek", desc: "Trek down 3,000 steps to Nongriat Living Root Bridge & Rainbow Falls.", spots: ["Nongriat Root Bridge", "Rainbow Falls"], meals: "Breakfast & Dinner" },
      { day: 4, title: "Mawlynnong & Dawki River", desc: "Explore Asia's cleanest village and ride crystal clear Umngot River at Dawki.", spots: ["Mawlynnong", "Dawki River"], meals: "Breakfast & Dinner" },
      { day: 5, title: "Dawki to Shillong Sightseeing", desc: "Laitlum Canyons and Don Bosco Museum.", spots: ["Laitlum Canyons", "Shillong Peak"], meals: "Breakfast & Dinner" },
      { day: 6, title: "Departure via Guwahati", desc: "Drop off at Guwahati Airport / Station.", spots: ["Guwahati Airport"], meals: "Breakfast" }
    ],
    bookingProcess: [{ step: 1, title: "Inquire Date", desc: "Send dates & fitness level info." }, { step: 2, title: "Itinerary Plan", desc: "Tailored eco-tour outline." }, { step: 3, title: "Book", desc: "Pay deposit to secure homestays." }],
    importantNotes: ["Good trekking shoes mandatory for root bridge trek", "Raincoats recommended year-round"]
  },
  {
    id: "pkg-8",
    title: "Ooty & Kodaikanal Hills",
    destination: "Tamil Nadu, India",
    duration: "4 Nights / 5 Days",
    price: "₹13,500",
    image: "/images/tour-8.png",
    shortDescription: "Escape to the Nilgiri hills with tea estates, Nilgiri Mountain Railway, and pine forests.",
    featured: true,
    rating: 4.7,
    reviewsCount: 76,
    nextDate: "22 Aug",
    gallery: [
      "/images/tour-8.png",
      "/images/tour-12.png",
      "/images/hero_darjeeling_1783678472536.png"
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    highlights: ["Nilgiri Toy Train Ride (Coonoor to Ooty)", "Botanical Gardens & Ooty Lake boating", "Kodaikanal Pillar Rocks & Coaker's Walk", "Pine Forest & Silver Cascade Waterfall"],
    transport: { mode: "Train to Coimbatore (CBE) / Flight to Coimbatore", pickup: "Coimbatore Airport / Railway Station", vehicle: "Private AC Sedan / Ertiga", details: "Smooth hill road transfers." },
    accommodation: { category: "3-Star Deluxe Hill Resorts", description: "2 Nights Ooty + 2 Nights Kodaikanal", meals: "Breakfast & Dinner", features: ["Valley View Rooms", "Heaters on request"] },
    pricingDetails: { perHead: "₹13,500 / person", originalPrice: "₹16,000", inclusions: ["4 Nights Hotel Stay", "Breakfast & Dinner", "Private Transport", "Toll & Taxes"], exclusions: ["Toy train tickets", "Boating charges"] },
    itinerary: [
      { day: 1, title: "Coimbatore to Ooty", desc: "Scenic drive up Nilgiri hills. Visit Ooty Lake & Botanical Garden.", spots: ["Ooty Lake", "Botanical Garden"], meals: "Dinner" },
      { day: 2, title: "Ooty & Coonoor Excursion", desc: "Doddabetta Peak, Tea Factory, and Toy Train ride to Coonoor.", spots: ["Doddabetta Peak", "Tea Factory", "Coonoor"], meals: "Breakfast & Dinner" },
      { day: 3, title: "Ooty to Kodaikanal Transfer", desc: "Drive to Princess of Hill Stations. Evening walk around Kodai Lake.", spots: ["Kodai Lake"], meals: "Breakfast & Dinner" },
      { day: 4, title: "Kodaikanal Sightseeing", desc: "Pillar Rocks, Coaker's Walk, Pine Forest, and Green Valley View.", spots: ["Pillar Rocks", "Pine Forest", "Coaker's Walk"], meals: "Breakfast & Dinner" },
      { day: 5, title: "Departure", desc: "Drop off at Coimbatore Airport/Station.", spots: ["Coimbatore Airport"], meals: "Breakfast" }
    ],
    bookingProcess: [{ step: 1, title: "Submit Form", desc: "Choose travel dates." }, { step: 2, title: "Confirm Car", desc: "Select car size." }, { step: 3, title: "Get Voucher", desc: "Instant confirmation." }],
    importantNotes: ["Heavy woolens needed in winter months", "Advance toy train booking recommended"]
  },
  {
    id: "pkg-9",
    title: "Golden Triangle Tour",
    destination: "Delhi-Agra-Jaipur",
    duration: "5 Nights / 6 Days",
    price: "₹19,000",
    image: "/images/tour-9.png",
    shortDescription: "The classic India experience — visit the iconic Taj Mahal, Amber Fort, and Red Fort.",
    featured: true,
    rating: 4.8,
    reviewsCount: 130,
    gallery: [
      "/images/tour-9.png",
      "/images/tour-4.png",
      "/images/tour-11.png"
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    highlights: ["Sunrise tour of Taj Mahal in Agra", "Agra Fort & Fatehpur Sikri UNESCO sites", "Amber Fort & City Palace in Jaipur", "Qutub Minar & India Gate in Delhi"],
    transport: { mode: "Flight / Train to Delhi (DEL)", pickup: "Delhi Airport / Railway Station", vehicle: "Private AC Dzire / Etios / Innova", details: "Express highway connectivity with experienced driver." },
    accommodation: { category: "4-Star City Hotels", description: "1N Delhi + 1N Agra + 3N Jaipur", meals: "Breakfast Included Daily", features: ["Wi-Fi", "AC Rooms", "Central Location"] },
    pricingDetails: { perHead: "₹19,000 / person", originalPrice: "₹23,000", inclusions: ["5 Nights Accommodation", "Daily Breakfast", "AC Private Car", "Interstate Tolls & Taxes"], exclusions: ["Taj Mahal & Monument entry fees", "Tour Guide tips"] },
    itinerary: [
      { day: 1, title: "Arrival Delhi Sightseeing", desc: "Qutub Minar, Lotus Temple, India Gate & Parliament House.", spots: ["Qutub Minar", "India Gate"], meals: "Welcome Drink" },
      { day: 2, title: "Delhi to Agra Transfer", desc: "Yamuna Expressway drive. Visit Agra Fort & Mehtab Bagh at sunset.", spots: ["Agra Fort", "Mehtab Bagh"], meals: "Breakfast" },
      { day: 3, title: "Taj Mahal Sunrise to Jaipur", desc: "Sunrise at Taj Mahal. En route visit Fatehpur Sikri.", spots: ["Taj Mahal", "Fatehpur Sikri"], meals: "Breakfast" },
      { day: 4, title: "Jaipur Heritage Tour", desc: "Amber Fort, Jal Mahal, Hawa Mahal & Jantar Mantar.", spots: ["Amber Fort", "Hawa Mahal"], meals: "Breakfast" },
      { day: 5, title: "Jaipur Bazaars & Forts", desc: "Jaigarh Fort & Johari Bazaar shopping.", spots: ["Johari Bazaar"], meals: "Breakfast" },
      { day: 6, title: "Jaipur to Delhi Departure", desc: "Drive back to Delhi Airport.", spots: ["Delhi Airport"], meals: "Breakfast" }
    ],
    bookingProcess: [{ step: 1, title: "Inquire", desc: "Provide headcount & dates." }, { step: 2, title: "Customization", desc: "Add guide or luxury hotel options." }, { step: 3, title: "Confirmation", desc: "Voucher dispatched." }],
    importantNotes: ["Taj Mahal is closed on Fridays", "Carry valid photo ID for monument entry"]
  },
  {
    id: "pkg-10",
    title: "Leh Ladakh Expedition",
    destination: "Ladakh, India",
    duration: "7 Nights / 8 Days",
    price: "₹28,000",
    image: "/images/tour-10.png",
    shortDescription: "Conquer the land of high passes with dramatic mountain landscapes, monasteries, and Pangong Lake.",
    featured: true,
    rating: 4.9,
    reviewsCount: 155,
    gallery: [
      "/images/tour-10.png",
      "/images/tour-13.png",
      "/images/hero_kashmir_1783678442997.png"
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    highlights: ["Drive through Khardung La (World's highest motorable road)", "Overnight camp stay at Pangong Tso Lake", "Nubra Valley Bactrian Camel ride on sand dunes", "Magnetic Hill & Sangam (Confluence of Zanskar & Indus)"],
    transport: { mode: "Flight to Leh (IXL)", pickup: "Kushok Bakula Rimpochee Airport, Leh", vehicle: "Dedicated Non-AC Xylo / Scorpio (Local Ladakh Taxi Union)", details: "Highland experienced local driver." },
    accommodation: { category: "Deluxe Hotels & Luxury Lake Camps", description: "4N Leh + 2N Nubra Valley + 1N Pangong Tso Camp", meals: "Breakfast & Dinner daily", features: ["Oxygen Cylinders available", "Warm Bedding", "Hot Water"] },
    pricingDetails: { perHead: "₹28,000 / person", originalPrice: "₹34,000", inclusions: ["7 Nights Stay", "Breakfast & Dinner", "Inner Line Permits & Wildlife Fee", "Airport Pick & Drop", "Oxygen Cylinder in vehicle"], exclusions: ["Airfare to Leh", "Camel ride & Quad biking charges"] },
    itinerary: [
      { day: 1, title: "Arrival in Leh & Acclimatization", desc: "Mandatory rest day in Leh to adjust to high altitude (11,500 ft).", spots: ["Leh Main Market"], meals: "Dinner" },
      { day: 2, title: "Leh Local Monasteries & Hall of Fame", desc: "Visit Shey Palace, Thiksey Monastery, and Hall of Fame.", spots: ["Thiksey Monastery", "Hall of Fame"], meals: "Breakfast & Dinner" },
      { day: 3, title: "Leh to Nubra Valley via Khardung La", desc: "Cross Khardung La pass (17,582 ft). Double-humped camel ride in Hunder.", spots: ["Khardung La", "Diskit Monastery", "Hunder Dunes"], meals: "Breakfast & Dinner" },
      { day: 4, title: "Nubra Valley to Turtuk Village", desc: "Excursion to India's northernmost village near LOC.", spots: ["Turtuk Village"], meals: "Breakfast & Dinner" },
      { day: 5, title: "Nubra to Pangong Tso Lake", desc: "Drive along Shayok river to color-changing Pangong Tso Lake.", spots: ["Pangong Lake"], meals: "Breakfast & Dinner" },
      { day: 6, title: "Pangong Lake to Leh via Chang La", desc: "Sunrise over Pangong. Return to Leh over Chang La pass.", spots: ["Chang La Pass", "Leh"], meals: "Breakfast & Dinner" },
      { day: 7, title: "Sham Valley & Magnetic Hill", desc: "Magnetic Hill, Gurudwara Pathar Sahib & Sangam confluence.", spots: ["Magnetic Hill", "Sangam"], meals: "Breakfast & Dinner" },
      { day: 8, title: "Departure Leh", desc: "Early drop off at Leh Airport.", spots: ["Leh Airport"], meals: "Breakfast" }
    ],
    bookingProcess: [{ step: 1, title: "Medical Check & Submit", desc: "Check fitness & send dates." }, { step: 2, title: "Permit Application", desc: "We apply for Ladakh ILP." }, { step: 3, title: "Fly to Leh!", desc: "Receive voucher & oxygen kit info." }],
    importantNotes: ["Mandatory 24hr acclimatization upon landing in Leh", "Postpaid BSNL / Airtel work best"]
  },
  {
    id: "pkg-11",
    title: "Varanasi Spiritual Tour",
    destination: "Varanasi, India",
    duration: "3 Nights / 4 Days",
    price: "₹10,500",
    image: "/images/tour-11.png",
    shortDescription: "Witness mystical Ganga Aarti, sunrise boat ride, and explore ancient temples in the world's oldest city.",
    featured: false,
    rating: 4.8,
    reviewsCount: 64,
    gallery: [
      "/images/tour-11.png",
      "/images/tour-9.png",
      "/images/tour-4.png"
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    highlights: ["Evening Ganga Aarti at Dashashwamedh Ghat", "Sunrise wooden boat ride on River Ganges", "Kashi Vishwanath Temple Darshan", "Sarnath Excursion (Lord Buddha's First Sermon spot)"],
    transport: { mode: "Train to Varanasi (BSB / DDU) / Flight to Varanasi (VNS)", pickup: "Varanasi Airport / Station", vehicle: "Private AC Car", details: "Easy ghat transfers." },
    accommodation: { category: "3-Star Boutique Hotel near Ghats", description: "3 Nights Hotel Stay", meals: "Breakfast Included Daily", features: ["Pure Veg Restaurant", "24hr Power Backup"] },
    pricingDetails: { perHead: "₹10,500 / person", originalPrice: "₹12,800", inclusions: ["3 Nights Hotel Stay", "Daily Breakfast", "Sunrise Boat Ride", "Sarnath Sightseeing", "Station Pick & Drop"], exclusions: ["Temple VIP darshan passes", "Personal offerings"] },
    itinerary: [
      { day: 1, title: "Arrival Varanasi & Evening Aarti", desc: "Check-in to hotel. Witness spectacular Dashashwamedh Ghat Ganga Aarti.", spots: ["Dashashwamedh Ghat"], meals: "Welcome Drink" },
      { day: 2, title: "Sunrise Boat Ride & Temple Darshan", desc: "Early morning boat ride past Manikarnika & Assi Ghats. Visit Kashi Vishwanath & Annapurna Temple.", spots: ["Kashi Vishwanath", "Assi Ghat"], meals: "Breakfast" },
      { day: 3, title: "Sarnath Excursion & BHU", desc: "Visit Sarnath stupas, museum, BHU campus & Sankat Mochan Temple.", spots: ["Sarnath Stupa", "BHU Vishwanath Temple"], meals: "Breakfast" },
      { day: 4, title: "Departure", desc: "Shopping for Banarasi silk sarees and drop to station/airport.", spots: ["Varanasi Station / Airport"], meals: "Breakfast" }
    ],
    bookingProcess: [{ step: 1, title: "Book", desc: "Select dates." }, { step: 2, title: "Voucher", desc: "Get boat ride schedule & hotel voucher." }],
    importantNotes: ["Dress modestly when visiting temples", "Boating depends on river water levels"]
  },
  {
    id: "pkg-12",
    title: "Coorg Coffee Trails",
    destination: "Coorg, Karnataka",
    duration: "3 Nights / 4 Days",
    price: "₹11,000",
    image: "/images/tour-12.png",
    shortDescription: "Immerse yourself in lush coffee plantations, misty hills, and cascading waterfalls in the Scotland of India.",
    featured: false,
    rating: 4.7,
    reviewsCount: 52,
    gallery: [
      "/images/tour-12.png",
      "/images/hero_kerala_1783678518411.png",
      "/images/tour-8.png"
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    highlights: ["Guided Walk through 50-acre Organic Coffee Estate", "Dubare Elephant Camp interaction & river rafting", "Abbey Waterfalls & Raja's Seat Sunset View", "Golden Temple Namdroling Monastery in Bylakuppe"],
    transport: { mode: "Train / Flight to Mysore / Bengaluru", pickup: "Mysore / Bengaluru Airport or Station", vehicle: "Private AC Sedan", details: "Scenic drive through Western Ghats." },
    accommodation: { category: "Luxury Plantation Resort / Estate Homestay", description: "3 Nights Plantation Resort", meals: "Breakfast & Plantation Style Dinner", features: ["Coffee Estate View", "Bonfire", "Authentic Kodava Cuisine"] },
    pricingDetails: { perHead: "₹11,000 / person", originalPrice: "₹13,500", inclusions: ["3 Nights Plantation Resort Stay", "Breakfast & Dinner", "Coffee Estate Walk", "AC Car Transfers"], exclusions: ["Rafting fees", "Lunch"] },
    itinerary: [
      { day: 1, title: "Bengaluru/Mysore to Coorg", desc: "Drive to Madikeri. Visit Bylakuppe Golden Temple en route.", spots: ["Bylakuppe Tibetan Monastery"], meals: "Dinner" },
      { day: 2, title: "Coorg Waterfalls & Sunset", desc: "Abbey Falls, Omkareshwara Temple, and Raja's Seat sunset view.", spots: ["Abbey Falls", "Raja's Seat"], meals: "Breakfast & Dinner" },
      { day: 3, title: "Elephants & Coffee Estate Walk", desc: "Visit Dubare Elephant Camp and take guided coffee plantation walk.", spots: ["Dubare Elephant Camp", "Coffee Plantation"], meals: "Breakfast & Dinner" },
      { day: 4, title: "Departure", desc: "Drive back to Mysore / Bengaluru.", spots: ["Bengaluru Airport"], meals: "Breakfast" }
    ],
    bookingProcess: [{ step: 1, title: "Inquire", desc: "Submit dates." }, { step: 2, title: "Confirm Homestay", desc: "Receive estate voucher." }],
    importantNotes: ["Leech protection spray advised during monsoons", "Buy fresh coffee beans & spices direct from estate"]
  },
  {
    id: "pkg-13",
    title: "Spiti Valley Circuit",
    destination: "Himachal Pradesh",
    duration: "8 Nights / 9 Days",
    price: "₹32,000",
    image: "/images/tour-13.png",
    shortDescription: "An off-beat Himalayan adventure through ancient monasteries, high-altitude villages, and Chandratal Lake.",
    featured: false,
    rating: 4.9,
    reviewsCount: 92,
    gallery: [
      "/images/tour-13.png",
      "/images/tour-10.png",
      "/images/tour-7.png"
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    highlights: ["Camping at crescent-shaped Chandratal Lake", "Visit Key Monastery & Kibber (High village)", "Hikkim — World's Highest Post Office (Send a postcard!)", "Langza Fossil Village & Kaza Market"],
    transport: { mode: "Train to Shimla / Chandigarh / Flight to Chandigarh (IXC)", pickup: "Chandigarh Railway Station / Airport", vehicle: "4x4 Force Traveler / Tempo / SUV", details: "All-terrain high clearance vehicle with rugged terrain specialist driver." },
    accommodation: { category: "Spiti Homestays & High Altitude Tents", description: "2N Kalpa + 3N Kaza + 1N Chandratal Camp + 1N Manali + 1N Shimla", meals: "Breakfast & Dinner daily", features: ["Local Hospitality", "Warm Blankets", "Authentic Himachali Food"] },
    pricingDetails: { perHead: "₹32,000 / person", originalPrice: "₹38,000", inclusions: ["8 Nights Accommodation", "Breakfast & Dinner", "4x4 Vehicle Transfer", "Permits & Taxes"], exclusions: ["Personal shopping", "Postcard stamps in Hikkim"] },
    itinerary: [
      { day: 1, title: "Chandigarh to Shimla/Narkanda", desc: "Pickup from Chandigarh. Drive into Himachal hills.", spots: ["Narkanda Pine Forests"], meals: "Dinner" },
      { day: 2, title: "Narkanda to Kalpa", desc: "Drive along Sutlej river. View Kinnaur Kailash peak.", spots: ["Kalpa Village", "Kinnaur Kailash View"], meals: "Breakfast & Dinner" },
      { day: 3, title: "Kalpa to Kaza via Nako & Tabo", desc: "Enter Spiti Valley. Nako Lake & 1,000-year-old Tabo Monastery.", spots: ["Tabo Monastery", "Nako Lake"], meals: "Breakfast & Dinner" },
      { day: 4, title: "Key Monastery, Kibber & Chicham Bridge", desc: "Explore iconic Key Monastery and cross Asia's highest Chicham bridge.", spots: ["Key Monastery", "Chicham Bridge"], meals: "Breakfast & Dinner" },
      { day: 5, title: "Hikkim, Komic & Langza", desc: "Post a card from Hikkim post office (14,567 ft) and search fossils in Langza.", spots: ["Hikkim Post Office", "Langza Buddha Statue"], meals: "Breakfast & Dinner" },
      { day: 6, title: "Kaza to Chandratal Lake Camping", desc: "Drive over Kunzum Pass (15,060 ft) to blue Chandratal Lake.", spots: ["Kunzum Pass", "Chandratal Lake"], meals: "Breakfast & Camp Dinner" },
      { day: 7, title: "Chandratal to Manali via Atal Tunnel", desc: "Cross Batal & Rohtang/Atal Tunnel to reach green Manali.", spots: ["Atal Tunnel", "Manali"], meals: "Breakfast & Dinner" },
      { day: 8, title: "Manali to Chandigarh", desc: "Drive down to Chandigarh.", spots: ["Chandigarh"], meals: "Breakfast & Dinner" },
      { day: 9, title: "Departure", desc: "Drop off at Chandigarh Airport/Station.", spots: ["Chandigarh Airport"], meals: "Breakfast" }
    ],
    bookingProcess: [{ step: 1, title: "Check Dates", desc: "Spiti circuit opens June to October." }, { step: 2, title: "Confirm Seat", desc: "Book 4x4 seat." }, { step: 3, title: "Voucher", desc: "Receive trip briefing." }],
    importantNotes: ["ATM and mobile network limited in Spiti", "Carry thermal innerwear and moisturizer"]
  },
  {
    id: "pkg-14",
    title: "Sundarbans Mangrove Tour",
    destination: "West Bengal, India",
    duration: "2 Nights / 3 Days",
    price: "₹8,500",
    image: "/images/tour-14.png",
    shortDescription: "Explore the world's largest mangrove delta — spot Royal Bengal Tigers and cruise through dense jungle waterways.",
    featured: false,
    rating: 4.8,
    reviewsCount: 78,
    gallery: [
      "/images/tour-14.png",
      "/images/hero_kerala_1783678518411.png",
      "/images/hero_andaman_1783678485939.png"
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    highlights: ["Exclusive Jungle Boat Safari through narrow delta creeks", "Watchtowers visit: Sajnekhali, Sudhanyakhali & Dobanki", "Spot Royal Bengal Tigers, Estuarine Crocodiles & Spotted Deer", "Jhumur Folk Dance & Fresh Seafood Experience"],
    transport: { mode: "Pickup from Kolkata (Esplanade / Science City)", pickup: "Kolkata City Center / Howrah / Sealdah Station", vehicle: "AC Tourist Coach to Godkhali + Covered Motor Launch Boat for jungle cruise", details: "All river transfers included." },
    accommodation: { category: "Eco Jungle Resort on Island", description: "2 Nights Island Eco Resort near National Park", meals: "6 Meals: 2 Breakfast, 3 Lunch, 2 Dinner (Traditional Bengali / Seafood)", features: ["Jungle Views", "Cultural Evening", "Clean AC / Non-AC Rooms"] },
    pricingDetails: { perHead: "₹8,500 / person", originalPrice: "₹10,500", inclusions: ["2 Nights Resort Stay", "All 6 Meals (Veg/Non-Veg/Fish/Crab)", "Exclusive Boat Cruise", "Forest Entry Permits & Guide Fees", "Kolkata Pick & Drop"], exclusions: ["Camera charges in forest", "Personal tips"] },
    itinerary: [
      { day: 1, title: "Kolkata to Sundarbans Island", desc: "Drive to Godkhali port. Boat transfer to island resort. Afternoon village walk & evening Folk Dance.", spots: ["Godkhali Port", "Sundarbans Island", "Jhumur Dance"], meals: "Lunch & Dinner" },
      { day: 2, title: "Full Day Jungle Boat Safari", desc: "Cruise through deep mangroves. Visit Sajnekhali, Sudhanyakhali & Dobanki canopy walk watchtowers.", spots: ["Sudhanyakhali Watchtower", "Dobanki Canopy Walk"], meals: "Breakfast, Boat Lunch & Dinner" },
      { day: 3, title: "Village Walk & Return Kolkata", desc: "Morning boat trip to Hamilton Bungalow & Beacon Island. Return transfer to Kolkata.", spots: ["Hamilton Bungalow", "Godkhali Port", "Kolkata"], meals: "Breakfast & Lunch" },
    ],
    bookingProcess: [{ step: 1, title: "Submit Form", desc: "Select weekend or weekday slot." }, { step: 2, title: "Confirm Seat", desc: "Receive pickup point details." }, { step: 3, title: "Go Safari!", desc: "Board the coach in Kolkata." }],
    importantNotes: ["Forest permissions managed by our guide", "Carry binocular & mosquito repellent"]
  }
];
