export const business = {
  name: "Kokwani Chauke Water Drilling",
  slogan: "A Va Borhi Mati Manga Humi",
  phonePrimary: "083 747 7953",
  phoneSecondary: "071 809 6980",
  phonePrimaryLink: "+27837477953",
  phoneSecondaryLink: "+27718096980",
  whatsapp: "27837477953",
  address:
    "Giyani, Baloyi Complex, Office No. 26, R81 Main Road, next to Top Tiles & Nandos, Limpopo, South Africa.",
};

export const packages = [
  { depth: 40, price: 23900 },
  { depth: 50, price: 29600 },
  { depth: 60, price: 33900, featured: true },
  { depth: 70, price: 38000 },
  { depth: 80, price: 43000 },
  { depth: 90, price: 48000 },
  { depth: 100, price: 52000 },
];

export const services = [
  {
    title: "Water Borehole Drilling",
    description: "Drilling for homes, farms and commercial properties.",
  },
  {
    title: "Borehole & Pump Installation",
    description: "Pump, control box and pipe installation for your borehole.",
  },
  {
    title: "PVC Casing Installation",
    description: "Casing to support and protect your borehole.",
  },
  {
    title: "Pipe & Steel Casing",
    description: "Pipe and steel casing to suit ground conditions.",
  },
  {
    title: "Water Testing",
    description: "Testing to help you understand your borehole water.",
  },
  {
    title: "Water Tanks & Storage",
    description: "Tank and storage options to suit your water requirements.",
  },
];

export const images = {
  hero: "/images/borehole-drilling-truck.jpg",
  equipment:
    "https://images.unsplash.com/photo-1540643587290-a41eb7bbc164?auto=format&fit=crop&w=1400&q=80",
  tanks:
    "https://images.unsplash.com/photo-1696952316284-2d4755f0620b?auto=format&fit=crop&w=1400&q=80",
  drillingTruck: "/images/borehole-drilling-truck.jpg",
};

export const formatPrice = (value: number) =>
  new Intl.NumberFormat("en-ZA", {
    style: "currency",
    currency: "ZAR",
    minimumFractionDigits: 2,
  }).format(value);

export const whatsappUrl = (message: string) =>
  `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`;
export const generalMessage =
  "Hello Kokwani Chauke Water Drilling, I visited your website and would like to enquire about your borehole drilling services.";
