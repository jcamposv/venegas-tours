import heroImg from "../assets/images/hero.jpg";
import volcanoImg from "../assets/images/volcano.jpg";
import rioCelesteImg from "../assets/images/rio-celeste.jpg";
import miravallesImg from "../assets/images/miravalles.jpg";
import monteverdeImg from "../assets/images/monteverde.jpg";
import laLeonaImg from "../assets/images/la-leona.jpg";
import birdwatchingImg from "../assets/images/birdwatching.jpg";
import bijaguaImg from "../assets/images/bijagua.jpg";
import tarcolesImg from "../assets/images/tarcoles.jpg";
import sunsetBeachImg from "../assets/images/sunset-beach.jpg";
import rocaBrujaImg from "../assets/images/roca-bruja.jpg";
import sunsetDinnerImg from "../assets/images/sunset-dinner.jpg";
import playaAvellanasImg from "../assets/images/playa-avellanas.jpg";
import guaitilImg from "../assets/images/guaitil.jpg";
import playaConchalImg from "../assets/images/playa-conchal.jpg";
import playaFlamingoImg from "../assets/images/playa-flamingo.jpg";
import tamarindoImg from "../assets/images/tamarindo.jpg";
import playaGrandeImg from "../assets/images/playa-grande.jpg";
import lasCatalinasImg from "../assets/images/las-catalinas.jpg";
import sunsetImg from "../assets/images/sunset.jpg";
import aboutImg from "../assets/images/about-waterfall.jpg";
import romanticDinnerImg from "../assets/images/romantic-dinner.jpg";
import catamaranImg from "../assets/images/catamaran.jpg";

export const siteConfig = {
  name: "Venegas Costa Rica Tours",
  shortName: "Venegas",
  tagline: "Authentic Costa Rica Experiences",
  title: "Venegas Costa Rica Tours | Volcanoes, Beaches & Adventure",
  description:
    "Discover the best of Costa Rica with Venegas Tours. Volcano adventures, pristine beaches, rainforest trails, sunset cruises and unforgettable catamaran experiences.",
  url: "https://venegascostaricatours.com",
};

export const booking = {
  whatsapp: {
    number: "50663902506",
    number2: "50672528386",
    defaultMessage: "Hi! I'm interested in booking a tour with Venegas Costa Rica Tours.",
  },
  googleCalendar: { enabled: false, calendarId: "primary" },
};

export const navigation = [
  { label: "Home", href: "#top" },
  { label: "Tours", href: "#tours" },
  { label: "Beaches", href: "#beaches" },
  { label: "Experiences", href: "#experiences" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  badge: "Pura Vida · Family Owned Since 2010",
  headline: {
    line1: "Experience the Wild",
    accent: "Beauty",
    line2: "of Costa Rica",
  },
  description:
    "Volcanoes, rainforests, pristine beaches and unforgettable sunsets. Let local experts guide you through the most breathtaking corners of our paradise.",
  cta: { primary: "Book Your Adventure", secondary: "Explore Tours" },
  image: volcanoImg.src,
  stats: [
    { value: "15+", label: "Years Experience" },
    { value: "300+", label: "Happy Travelers" },
    { value: "10+", label: "Unique Tours" },
  ],
};

// ── Tours (Volcanoes, Rivers, Nature) ──
export const tours = {
  headline: "Signature Tours",
  subtitle: "Our most loved experiences — designed by locals, guided by experts.",
  items: [
    {
      index: "01",
      title: "La Leona Waterfall Tour",
      subtitle: "Curubandé · Rincón de la Vieja",
      category: "Waterfall",
      duration: "Half Day · 2 hrs",
      price: 95,
      description: "Experience the breathtaking beauty of La Leona Waterfall near the Rincón de la Vieja Volcano. Hike through tropical forest trails, rivers and canyons to reach stunning turquoise waters. Walk through caves, swim between rocks and enjoy one of the most unique hikes in the region.",
      highlights: ["Certified local guide", "Guided hike through rivers, caves & canyon", "Turquoise waterfall swimming", "Optional river tubing & lunch add-ons"],
      image: laLeonaImg.src,
    },
    {
      index: "02",
      title: "Arenal Volcano Adventure",
      subtitle: "Arenal National Park · La Fortuna",
      category: "Volcano",
      duration: "Full Day",
      price: 190,
      description: "Full day tour to Arenal National Park including hot springs, lunch and beverages. Hike the legendary Arenal Volcano trails, soak in natural thermal waters and witness breathtaking views of Costa Rica's most iconic volcano. Transportation available for $550 USD.",
      highlights: ["Arenal National Park guided hike", "Hot springs experience included", "Lunch & beverages included", "Optional transportation: $550 USD"],
      image: volcanoImg.src,
    },
    {
      index: "03",
      title: "Miravalles Volcano & Hot Springs",
      subtitle: "Guanacaste Province",
      category: "Volcano",
      duration: "Full Day · 8 hrs",
      price: 110,
      description: "Explore the lesser-known but equally stunning Miravalles Volcano. Experience geothermal wonders, therapeutic mud baths and thermal rivers in a truly authentic Costa Rican setting.",
      highlights: ["Geothermal activity tour", "Therapeutic mud baths", "Natural thermal river", "Local Guanacaste cuisine lunch"],
      image: miravallesImg.src,
    },
    {
      index: "04",
      title: "Rio Celeste Tour",
      subtitle: "Tenorio National Park",
      category: "Rainforest",
      duration: "Full Day · 9 hrs",
      price: 125,
      description: "Discover the mystical turquoise river of Tenorio National Park. Hike through pristine rainforest to reach the iconic waterfall — one of the most photographed spots in Costa Rica.",
      highlights: ["Guided rainforest hike", "The famous blue waterfall", "Blue lagoon viewpoint", "Wildlife spotting (sloths, monkeys)"],
      image: rioCelesteImg.src,
    },
    {
      index: "05",
      title: "Rainforest Trails & Hanging Bridges",
      subtitle: "Monteverde Cloud Forest",
      category: "Nature",
      duration: "Half Day · 4-5 hrs",
      price: 75,
      description: "Walk above the rainforest canopy on suspended bridges. Spot toucans, sloths and monkeys in their natural habitat with a certified naturalist guide who knows every trail by heart.",
      highlights: ["6 hanging bridges experience", "Canopy-level wildlife viewing", "Professional naturalist guide", "Best photography stops"],
      image: monteverdeImg.src,
    },
    {
      index: "06",
      title: "Birdwatching Tour",
      subtitle: "Santa Rosa National Park · Departure 3:00 AM",
      category: "Nature",
      duration: "Full Day · 3 AM departure",
      price: 350,
      description: "Discover why Costa Rica is a paradise for birdwatching in Santa Rosa National Park. Early 3 AM departure to catch the best bird activity. With over 900 bird species, you'll observe colorful macaws, toucans and elusive forest canopy birds. Includes breakfast with fresh fruits, lunch and beverages. Transportation available for $500 USD.",
      highlights: ["Professional birdwatching guide", "Breakfast with fresh fruits, lunch & beverages included", "National Park entrance & bird identification", "Optional transportation: $500 USD"],
      image: birdwatchingImg.src,
    },
    {
      index: "07",
      title: "Bijagua Nature & Adventure",
      subtitle: "Bijagua · Tenorio Volcano",
      category: "Nature",
      duration: "Full Day",
      price: 190,
      description: "Explore Bijagua, one of Costa Rica's hidden gems near Tenorio Volcano. A perfect combination of nature, adventure and relaxation through stunning landscapes, tropical trails and lush rainforest. Includes 2 Imperial beers per person.",
      highlights: ["Guided nature experience", "Tropical rainforest trails", "Bottled water & 2 Imperial beers included", "Optional transport & lunch add-ons"],
      image: bijaguaImg.src,
    },
    {
      index: "08",
      title: "Tárcoles River Crocodile Tour",
      subtitle: "Tárcoles River · Pacific Coast",
      category: "Wildlife",
      duration: "2.5 hrs boat · 3 hrs from Guanacaste",
      price: 190,
      description: "Experience one of Costa Rica's most exciting wildlife adventures on the famous Tárcoles River, known worldwide for having one of the highest concentrations of crocodiles. Get up close to massive crocodiles in their natural habitat while spotting exotic birds, monkeys and other native species. Includes water and 2 Imperial beers per person. Transportation available for $400 USD.",
      highlights: ["Guided boat safari tour", "Up-close crocodile encounters", "Water & 2 Imperial beers included", "Optional transportation: $400 USD"],
      image: tarcolesImg.src,
    },
    {
      index: "09",
      title: "Sunset Beach Tour",
      subtitle: "Tamarindo · Conchal · Flamingo · Las Catalinas",
      category: "Beach",
      duration: "Full Day",
      price: 190,
      description: "Explore some of the most beautiful beaches in Guanacaste and end the day with a breathtaking Pacific sunset. Visit Tamarindo's vibrant surf scene, Conchal's unique crushed-shell sand, peaceful Flamingo Beach and the charming coastal town of Las Catalinas. Transportation available for $250 USD.",
      highlights: ["4 iconic Guanacaste beaches in one day", "Crystal-clear waters & white sand", "Stunning Pacific Ocean sunset", "Optional transportation: $250 USD"],
      image: sunsetBeachImg.src,
    },
    {
      index: "10",
      title: "Guaitil Cultural Tour",
      subtitle: "Guaitil · Guanacaste",
      category: "Culture",
      duration: "1.5 hrs tour · 1h20 each way",
      price: 190,
      description: "Discover the rich cultural heritage of Guaitil, where local artisans create beautiful Chorotega pottery using pre-Columbian techniques passed down for generations. Each piece is 100% handmade with natural clay, polished with stones and decorated with indigenous symbols. Includes lunch and beverages. Transportation available for $230 USD.",
      highlights: ["Guided cultural experience", "Visit local pottery workshops", "Lunch & beverages included", "Optional transportation: $230 USD"],
      image: guaitilImg.src,
    },
  ],
};

// ── Top 5 Beaches ──
export const beaches = {
  headline: "Costa Rica's Top Beaches",
  subtitle: "Golden sand, turquoise waters and endless paradise on the Pacific coast.",
  items: [
    {
      name: "Playa Conchal",
      description: "A unique beach made entirely of tiny crushed shells. Crystal-clear waters perfect for snorkeling.",
      image: playaConchalImg.src,
      tag: "Most Photogenic",
    },
    {
      name: "Playa Flamingo",
      description: "Upscale beach with pink-hued sand, luxury marinas and world-class sportfishing.",
      image: playaFlamingoImg.src,
      tag: "Luxury",
    },
    {
      name: "Playa Tamarindo",
      description: "Vibrant surf town with endless waves, beachfront restaurants and legendary sunsets.",
      image: tamarindoImg.src,
      tag: "Surfer's Paradise",
    },
    {
      name: "Playa Grande",
      description: "Pristine, protected beach where leatherback sea turtles nest. Unspoiled natural beauty.",
      image: playaGrandeImg.src,
      tag: "Eco-Friendly",
    },
    {
      name: "Playa Las Catalinas",
      description: "A charming beachfront village with calm waters, ideal for families and romantic escapes.",
      image: lasCatalinasImg.src,
      tag: "Family Favorite",
    },
    {
      name: "Roca Bruja",
      description: "A dramatic rock formation rising from the ocean waves in Guanacaste. Known for powerful surf, stunning sunsets and a mystical atmosphere that gives it its name — Witch's Rock.",
      image: rocaBrujaImg.src,
      tag: "Legendary Surf",
    },
    {
      name: "Playa Avellanas",
      description: "A stunning beach famous for its world-class surf breaks and as a key nesting site for Olive Ridley sea turtles. Every year, thousands of turtles arrive in mass nesting events known as 'arribadas' to lay their eggs on the dark sand shores.",
      image: playaAvellanasImg.src,
      tag: "Turtle Nesting",
    },
  ],
};

// ── Sunset, Dinner, Catamaran Experiences ──
export const experiences = {
  headline: "Unforgettable Experiences",
  subtitle: "Turn your vacation into memories that last a lifetime.",
  items: [
    {
      title: "Sunset Sailing Tour",
      duration: "3 hours",
      price: 85,
      description: "Sail the Pacific coast while witnessing Costa Rica's world-famous sunsets. Tropical drinks and snacks included.",
      image: sunsetImg.src,
      icon: "sunset",
    },
    {
      title: "Sunset & Dinner at Las Catalinas",
      duration: "Evening",
      price: 190,
      description: "Walk through the charming seaside town of Las Catalinas, watch the Pacific sunset, and enjoy dinner at a top restaurant. Transportation available for $250 USD.",
      image: sunsetDinnerImg.src,
      icon: "dinner",
    },
    {
      title: "Catamaran Full Day",
      duration: "6 hours",
      price: 135,
      description: "Sail to hidden beaches, snorkel with tropical fish, enjoy gourmet lunch and open bar — all day luxury at sea.",
      image: catamaranImg.src,
      icon: "catamaran",
    },
  ],
};

// ── About ──
export const about = {
  headline: "Born in Costa Rica, Sharing Pura Vida with the World",
  paragraphs: [
    "Venegas Costa Rica Tours is a family-owned business founded in 2010 with one mission: to share the magic of our home country with travelers from all over the world.",
    "Our local guides are born and raised in Costa Rica — they know every hidden waterfall, the best spots to watch the sunset, and the secret trails where wildlife thrives. Every tour is an authentic experience, not a tourist trap.",
  ],
  stats: [
    { value: "15+", label: "Years Guiding" },
    { value: "300+", label: "Happy Guests" },
    { value: "100%", label: "Local Guides" },
  ],
  image: aboutImg.src,
};

// ── Testimonials ──
export const testimonials = [
  {
    name: "Jennifer M.",
    location: "Austin, TX",
    tour: "Arenal Volcano + Rio Celeste",
    review: "The most incredible trip of our lives! Our guide Carlos knew everything about the wildlife and we saw sloths, toucans and a volcano — all in one day. Venegas made Costa Rica unforgettable.",
    rating: 5,
  },
  {
    name: "David & Sarah K.",
    location: "New York, NY",
    tour: "Sunset Sailing + Catamaran",
    review: "The sunset cruise was magical. The catamaran day was even better. Food was delicious, drinks flowing, and the crew was amazing. Best part of our honeymoon!",
    rating: 5,
  },
  {
    name: "Michael R.",
    location: "Chicago, IL",
    tour: "Miravalles Volcano Tour",
    review: "Authentic Costa Rica experience. Not touristy at all. The mud baths and hot springs were otherworldly. Highly recommend Venegas for a real local adventure.",
    rating: 5,
  },
];

// ── Why Us ──
export const whyUs = {
  headline: "The Venegas Difference",
  items: [
    { title: "Local Guides", description: "Born and raised in Costa Rica. They know every trail, story and hidden gem.", icon: "guide" },
    { title: "Small Groups", description: "Maximum 12 guests per tour. More personal attention, better experiences.", icon: "group" },
    { title: "All-Inclusive", description: "Transport, meals, equipment and park fees — no hidden costs, no surprises.", icon: "check" },
    { title: "Safe & Certified", description: "ICT certified, fully insured, safety-first operation. Your wellbeing is our priority.", icon: "shield" },
  ],
};

// ── CTA ──
export const ctaSection = {
  headline: "Ready to Experience Pura Vida?",
  description: "Book your Costa Rica adventure today. Free quote, no deposit required, flexible cancellation.",
  cta: "Book Your Tour",
  secondary: "Or WhatsApp us at +506 7252-8386",
};

// ── Footer ──
export const footer = {
  tours: ["La Leona Waterfall", "Arenal Volcano", "Miravalles Volcano", "Rio Celeste", "Hanging Bridges", "Birdwatching", "Bijagua", "Tárcoles Crocodile", "Sunset Beach", "Guaitil Cultural"],
  beaches: ["Conchal", "Flamingo", "Tamarindo", "Playa Grande", "Las Catalinas", "Roca Bruja", "Avellanas"],
  experiences: ["Sunset Sailing", "Sunset & Dinner Las Catalinas", "Catamaran Full Day"],
  contact: {
    address: "Guanacaste, Costa Rica",
    phone: "+506 7252-8386",
    phone2: "+506 6390-2506",
    email: "info@venegastours.com",
  },
  hours: "Open Daily: 7:00 AM – 8:00 PM",
  socials: [
    { label: "Instagram", href: "https://www.instagram.com/venegas.olger?igsh=MThtb29jZDFneWtjYw%3D%3D&utm_source=qr" },
    { label: "Facebook", href: "https://www.facebook.com/share/1Edss9RNcn/?mibextid=wwXIfr" },
    { label: "TikTok", href: "https://www.tiktok.com/@olgervenegas?_r=1&_t=ZS-95bFtmD8uUD" },
  ],
};
