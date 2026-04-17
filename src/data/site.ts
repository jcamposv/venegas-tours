import heroImg from "../assets/images/hero.jpg";
import volcanoImg from "../assets/images/volcano.jpg";
import rioCelesteImg from "../assets/images/rio-celeste.jpg";
import miravallesImg from "../assets/images/miravalles.jpg";
import monteverdeImg from "../assets/images/monteverde.jpg";
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
    number: "50670124238",
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
    { value: "10K+", label: "Happy Travelers" },
    { value: "20+", label: "Unique Tours" },
    { value: "4.9", label: "Rating" },
  ],
};

// ── Tours (Volcanoes, Rivers, Nature) ──
export const tours = {
  headline: "Signature Tours",
  subtitle: "Our most loved experiences — designed by locals, guided by experts.",
  items: [
    {
      index: "01",
      title: "Arenal Volcano Adventure",
      subtitle: "La Fortuna · Alajuela",
      category: "Volcano",
      duration: "Full Day · 8-10 hrs",
      groupSize: "Max 12 people",
      price: 95,
      description: "Hike the legendary Arenal Volcano trails, soak in natural hot springs and witness breathtaking views of Costa Rica's most iconic volcano. One of the most memorable experiences in Costa Rica.",
      highlights: ["1968 Lava Trail guided hike", "Natural hot springs soak", "Traditional Costa Rican lunch", "Hotel pickup in La Fortuna area"],
      image: volcanoImg.src,
    },
    {
      index: "02",
      title: "Miravalles Volcano & Hot Springs",
      subtitle: "Guanacaste Province",
      category: "Volcano",
      duration: "Full Day · 8 hrs",
      groupSize: "Max 12 people",
      price: 110,
      description: "Explore the lesser-known but equally stunning Miravalles Volcano. Experience geothermal wonders, therapeutic mud baths and thermal rivers in a truly authentic Costa Rican setting.",
      highlights: ["Geothermal activity tour", "Therapeutic mud baths", "Natural thermal river", "Local Guanacaste cuisine lunch"],
      image: miravallesImg.src,
    },
    {
      index: "03",
      title: "Rio Celeste Tour",
      subtitle: "Tenorio National Park",
      category: "Rainforest",
      duration: "Full Day · 9 hrs",
      groupSize: "Max 10 people",
      price: 125,
      description: "Discover the mystical turquoise river of Tenorio National Park. Hike through pristine rainforest to reach the iconic waterfall — one of the most photographed spots in Costa Rica.",
      highlights: ["Guided rainforest hike", "The famous blue waterfall", "Blue lagoon viewpoint", "Wildlife spotting (sloths, monkeys)"],
      image: rioCelesteImg.src,
    },
    {
      index: "04",
      title: "Rainforest Trails & Hanging Bridges",
      subtitle: "Monteverde Cloud Forest",
      category: "Nature",
      duration: "Half Day · 4-5 hrs",
      groupSize: "Max 12 people",
      price: 75,
      description: "Walk above the rainforest canopy on suspended bridges. Spot toucans, sloths and monkeys in their natural habitat with a certified naturalist guide who knows every trail by heart.",
      highlights: ["6 hanging bridges experience", "Canopy-level wildlife viewing", "Professional naturalist guide", "Best photography stops"],
      image: monteverdeImg.src,
    },
  ],
};

// ── Top 5 Beaches ──
export const beaches = {
  headline: "Costa Rica's Top 5 Beaches",
  subtitle: "Golden sand, turquoise waters and endless paradise on the Pacific coast.",
  items: [
    {
      name: "Playa Conchal",
      description: "A unique beach made entirely of tiny crushed shells. Crystal-clear waters perfect for snorkeling.",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      tag: "Most Photogenic",
    },
    {
      name: "Playa Flamingo",
      description: "Upscale beach with pink-hued sand, luxury marinas and world-class sportfishing.",
      image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=800&q=80",
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
      title: "Romantic Dinner Cruise",
      duration: "4 hours",
      price: 145,
      description: "Candlelit gourmet dinner aboard a private yacht. Live music, premium drinks and unforgettable ocean views.",
      image: romanticDinnerImg.src,
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
    { value: "10,000+", label: "Happy Guests" },
    { value: "100%", label: "Local Guides" },
    { value: "4.9", label: "TripAdvisor" },
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
  secondary: "Or WhatsApp us at +506 7012-4238",
};

// ── Footer ──
export const footer = {
  tours: ["Arenal Volcano", "Miravalles Volcano", "Rio Celeste", "Hanging Bridges"],
  beaches: ["Conchal", "Flamingo", "Tamarindo", "Playa Grande", "Las Catalinas"],
  experiences: ["Sunset Cruise", "Dinner Cruise", "Catamaran Day"],
  contact: {
    address: "Playa Flamingo, Guanacaste\nCosta Rica",
    phone: "+506 7012-4238",
    email: "info@venegascostaricatours.com",
  },
  hours: "Open Daily: 7:00 AM – 8:00 PM",
  socials: [
    { label: "Instagram", href: "#" },
    { label: "Facebook", href: "#" },
    { label: "TripAdvisor", href: "#" },
    { label: "YouTube", href: "#" },
  ],
};
