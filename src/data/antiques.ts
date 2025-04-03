
export interface Antique {
  id: string;
  name: string;
  era: string;
  origin: string;
  material: string;
  year: string;
  description: string;
  longDescription?: string;
  imageUrl: string;
  additionalImages?: string[];
  featured: boolean;
  price?: string;
  dimensions?: string;
  condition?: string;
  provenance?: string;
}

export type Era = 'Renaissance' | 'Baroque' | 'Victorian' | 'Art Deco' | 'Medieval' | 'Ancient' | 'Modern';
export type Material = 'Wood' | 'Metal' | 'Porcelain' | 'Glass' | 'Silver' | 'Gold' | 'Textile' | 'Stone';
export type Origin = 'Europe' | 'Asia' | 'Americas' | 'Africa' | 'Middle East';

export const eras: Era[] = ['Renaissance', 'Baroque', 'Victorian', 'Art Deco', 'Medieval', 'Ancient', 'Modern'];
export const materials: Material[] = ['Wood', 'Metal', 'Porcelain', 'Glass', 'Silver', 'Gold', 'Textile', 'Stone'];
export const origins: Origin[] = ['Europe', 'Asia', 'Americas', 'Africa', 'Middle East'];

export const antiques: Antique[] = [
  {
    id: "1",
    name: "Louis XV Marquetry Commode",
    era: "Baroque",
    origin: "Europe",
    material: "Wood",
    year: "c. 1750",
    description: "An exquisite Louis XV period commode with marquetry inlay and gilt bronze mounts.",
    longDescription: "This remarkable Louis XV period commode exemplifies the elegance and sophistication of 18th century French furniture craftsmanship. The commode features a serpentine front and sides, with two drawers adorned with intricate marquetry work depicting floral motifs. The piece is elevated by gilt bronze mounts and stands on cabriole legs. The rich patina of the wood showcases its age and authenticity, making it a true collector's piece.",
    imageUrl: "https://images.unsplash.com/photo-1617104829017-7ea0cd981928?q=80&w=1964&auto=format&fit=crop",
    additionalImages: [
      "https://images.unsplash.com/photo-1631489351122-c4506f2d4235?q=80&w=1974&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607686527-a7820a829dfe?q=80&w=1935&auto=format&fit=crop"
    ],
    featured: true,
    price: "$45,000",
    dimensions: "87cm height x 130cm width x 60cm depth",
    condition: "Excellent for age, minor wear consistent with age and use",
    provenance: "From the collection of a French aristocratic family, acquired at auction in Paris, 1985."
  },
  {
    id: "2",
    name: "Ming Dynasty Vase",
    era: "Ancient",
    origin: "Asia",
    material: "Porcelain",
    year: "c. 1500",
    description: "A rare blue and white porcelain vase from the Ming Dynasty with dragon motifs.",
    longDescription: "This exceptional Ming Dynasty vase represents the pinnacle of Chinese porcelain artistry. Created during the reign of Emperor Jiajing (1522-1566), the vase displays the characteristic cobalt blue underglaze decoration on a brilliant white porcelain body. The intricate dragon motifs symbolize imperial power and good fortune. The vase has a balanced, elegant form with a slightly flared rim and a stable base. Its survival in such excellent condition for over 500 years is remarkable.",
    imageUrl: "https://images.unsplash.com/photo-1615184697985-c9bde1b07da7?q=80&w=1974&auto=format&fit=crop",
    additionalImages: [
      "https://images.unsplash.com/photo-1652694470347-684c0b16db25?q=80&w=1974&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1498464619740-386503e7e7f5?q=80&w=1974&auto=format&fit=crop"
    ],
    featured: true,
    price: "$120,000",
    dimensions: "32cm height x 18cm diameter",
    condition: "Very good, minor glaze crazing consistent with age",
    provenance: "Previously in the collection of Sir William Somerset, acquired in Hong Kong, 1955."
  },
  {
    id: "3",
    name: "Art Deco Diamond and Emerald Bracelet",
    era: "Art Deco",
    origin: "Europe",
    material: "Gold",
    year: "c. 1925",
    description: "A stunning Art Deco bracelet featuring diamonds and emeralds set in 18k gold.",
    longDescription: "This breathtaking Art Deco bracelet embodies the geometric precision and luxury of the 1920s Jazz Age. The piece features a symmetrical design with approximately 4 carats of high-quality round and baguette-cut diamonds alternating with vivid green emeralds. The stones are set in meticulously crafted 18k gold with platinum accents. The bracelet showcases the characteristic Art Deco style with its bold lines, contrasting colors, and emphasis on geometric patterns.",
    imageUrl: "https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?q=80&w=1973&auto=format&fit=crop",
    additionalImages: [
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1974&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1635478584409-701725b00dad?q=80&w=1916&auto=format&fit=crop"
    ],
    featured: true,
    price: "$78,000",
    dimensions: "18cm length x 2cm width",
    condition: "Excellent, all stones intact, clasp in perfect working order",
    provenance: "Previously owned by a prominent New York socialite, acquired at Christie's, 2010."
  },
  {
    id: "4",
    name: "Victorian Mahogany Dining Table",
    era: "Victorian",
    origin: "Europe",
    material: "Wood",
    year: "c. 1870",
    description: "A large Victorian extendable dining table made of solid mahogany with carved details.",
    imageUrl: "https://images.unsplash.com/photo-1617104829017-7ea0cd981928?q=80&w=1964&auto=format&fit=crop",
    featured: false,
    price: "$12,500",
    dimensions: "76cm height x 215cm length (extended) x 110cm width",
    condition: "Good, some patina and minor marks consistent with age and use"
  },
  {
    id: "5",
    name: "Renaissance Bronze Statuette",
    era: "Renaissance",
    origin: "Europe",
    material: "Metal",
    year: "c. 1580",
    description: "A finely cast bronze statuette of Mercury, attributed to Giambologna's workshop.",
    imageUrl: "https://images.unsplash.com/photo-1607614277830-bc67ba516308?q=80&w=1940&auto=format&fit=crop",
    featured: false,
    price: "$85,000",
    condition: "Good, with dark patina consistent with age"
  },
  {
    id: "6",
    name: "Tiffany Art Nouveau Lamp",
    era: "Modern",
    origin: "Americas",
    material: "Glass",
    year: "c. 1905",
    description: "A magnificent Tiffany Studios dragonfly pattern stained glass lamp with bronze base.",
    imageUrl: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=2070&auto=format&fit=crop",
    featured: true,
    price: "$150,000",
    condition: "Excellent, all glass panels intact with vivid colors"
  },
  {
    id: "7",
    name: "Medieval Illuminated Manuscript",
    era: "Medieval",
    origin: "Europe",
    material: "Textile",
    year: "c. 1400",
    description: "A beautifully preserved illuminated religious manuscript with gold leaf details.",
    imageUrl: "https://images.unsplash.com/photo-1519791883288-d90e72d5b72d?q=80&w=2070&auto=format&fit=crop",
    featured: false,
    price: "$95,000",
    condition: "Good for age, some discoloration and minor wear to bindings"
  },
  {
    id: "8",
    name: "Ancient Egyptian Ushabti Figure",
    era: "Ancient",
    origin: "Africa",
    material: "Stone",
    year: "c. 1200 BCE",
    description: "A well-preserved limestone ushabti figure with hieroglyphic inscriptions.",
    imageUrl: "https://images.unsplash.com/photo-1552125778-047d40a5a2e5?q=80&w=1957&auto=format&fit=crop",
    featured: false,
    price: "$18,000",
    condition: "Good, some weathering typical of ancient artifacts"
  },
  {
    id: "9",
    name: "Imperial Russian Silver Samovar",
    era: "Victorian",
    origin: "Europe",
    material: "Silver",
    year: "c. 1885",
    description: "A magnificent silver samovar with maker's marks from the Moscow workshop of Pavel Ovchinnikov.",
    imageUrl: "https://images.unsplash.com/photo-1593246049226-ded77bf90326?q=80&w=2035&auto=format&fit=crop",
    featured: false,
    price: "$35,000",
    condition: "Very good, minor dents and surface wear consistent with age and use"
  },
  {
    id: "10",
    name: "Qing Dynasty Jade Bi Disc",
    era: "Ancient",
    origin: "Asia",
    material: "Stone",
    year: "c. 1750",
    description: "A carved jade bi disc with auspicious cloud motifs from the Qianlong period.",
    imageUrl: "https://images.unsplash.com/photo-1498464619740-386503e7e7f5?q=80&w=1974&auto=format&fit=crop",
    featured: true,
    price: "$22,000",
    condition: "Excellent, with warm honey tones and good translucency"
  },
  {
    id: "11",
    name: "Navajo Chief's Blanket",
    era: "Modern",
    origin: "Americas",
    material: "Textile",
    year: "c. 1890",
    description: "A rare third-phase Navajo chief's blanket with indigo, red, and natural wool colors.",
    imageUrl: "https://images.unsplash.com/photo-1653941851948-38f5dcd983c1?q=80&w=1944&auto=format&fit=crop",
    featured: false,
    price: "$175,000",
    condition: "Very good, some minor wear and fading"
  },
  {
    id: "12",
    name: "Georgian Silver Tea Service",
    era: "Victorian",
    origin: "Europe",
    material: "Silver",
    year: "c. 1820",
    description: "A complete five-piece Georgian silver tea and coffee service with intricate chasing.",
    imageUrl: "https://images.unsplash.com/photo-1673305705375-86206d5df13a?q=80&w=1974&auto=format&fit=crop",
    featured: false,
    price: "$28,500",
    condition: "Excellent, with clear hallmarks and minimal wear"
  },
  {
    id: "13",
    name: "Roman Marble Bust",
    era: "Ancient",
    origin: "Europe",
    material: "Stone",
    year: "c. 100 CE",
    description: "A well-preserved Roman marble bust of a noble patrician with detailed facial features.",
    imageUrl: "https://images.unsplash.com/photo-1618220179428-22790b485390?q=80&w=2127&auto=format&fit=crop",
    featured: true,
    price: "$95,000",
    condition: "Excellent considering age, minor chips and weathering",
    provenance: "From an Italian noble family collection, documented since the 18th century"
  },
  {
    id: "14",
    name: "Persian Tabriz Carpet",
    era: "Victorian",
    origin: "Middle East",
    material: "Textile",
    year: "c. 1880",
    description: "An exceptional Persian Tabriz carpet with intricate floral medallion design and rich colors.",
    imageUrl: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop",
    featured: true,
    price: "$48,000",
    dimensions: "350cm x 250cm",
    condition: "Very good, some minor wear consistent with age",
    provenance: "Private collection, acquired in Istanbul, 1975"
  },
  {
    id: "15",
    name: "Japanese Meiji Period Tansu",
    era: "Victorian",
    origin: "Asia",
    material: "Wood",
    year: "c. 1890",
    description: "A finely crafted Japanese tansu chest with multiple compartments and iron hardware.",
    imageUrl: "https://images.unsplash.com/photo-1493957988430-a5f2e15f39a3?q=80&w=2070&auto=format&fit=crop",
    featured: true,
    price: "$18,500",
    dimensions: "120cm height x 180cm width x 45cm depth",
    condition: "Excellent, with beautiful patina and original hardware"
  }
];

export const getFeaturedAntiques = (): Antique[] => {
  return antiques.filter(antique => antique.featured);
};

export const getAntiqueById = (id: string): Antique | undefined => {
  return antiques.find(antique => antique.id === id);
};

export const filterAntiques = (
  filters: {era?: string; material?: string; origin?: string; search?: string}
): Antique[] => {
  return antiques.filter(antique => {
    const matchesEra = !filters.era || antique.era === filters.era;
    const matchesMaterial = !filters.material || antique.material === filters.material;
    const matchesOrigin = !filters.origin || antique.origin === filters.origin;
    const matchesSearch = !filters.search || 
      antique.name.toLowerCase().includes(filters.search.toLowerCase()) ||
      antique.description.toLowerCase().includes(filters.search.toLowerCase());
    
    return matchesEra && matchesMaterial && matchesOrigin && matchesSearch;
  });
};
