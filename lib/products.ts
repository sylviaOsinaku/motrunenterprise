export interface Product {
  id: string
  name: string
  nameYoruba: string
  category: 'fish' | 'seafood' | 'specialty'
  weight: string
  price: number
  description: string
  educational: string
  image: string
  availability: 'in-stock' | 'limited' | 'out-of-stock'
  benefits: string[]
}

export const products: Product[] = [
  {
    id: 'hake-panla',
    name: 'Hake (Panla)',
    nameYoruba: 'Panla',
    category: 'fish',
    weight: '10kg',
    price: 37000,
    description: 'Premium grade frozen hake, perfect for grilling and frying. Maintains excellent texture after thawing.',
    educational: 'Hake is a lean white fish rich in protein and omega-3 fatty acids. It has a mild flavor and firm texture, making it versatile for various Nigerian and continental dishes.',
    image: '/images/hake.jpg',
    availability: 'in-stock',
    benefits: ['High protein content', 'Rich in Omega-3', 'Lean and healthy', 'Versatile cooking'],
  },
  {
    id: 'pacu-owere',
    name: 'Pacu (Owere)',
    nameYoruba: 'Owere',
    category: 'fish',
    weight: '10kg',
    price: 28000,
    description: 'Affordable and flavorful frozen pacu, ideal for soups and stews. Excellent value for bulk orders.',
    educational: 'Pacu is a freshwater fish with a mild, sweet taste. It\'s perfect for traditional Nigerian recipes like pepper soup and is an economical choice for food vendors.',
    image: '/images/pacu.jpg',
    availability: 'in-stock',
    benefits: ['Affordable', 'Flavorful', 'Great for soups', 'Excellent value'],
  },
  {
    id: 'chicken-soft',
    name: 'Nigerian Soft Chicken',
    nameYoruba: 'Chicken Sofidile',
    category: 'specialty',
    weight: '10kg',
    price: 43000,
    description: 'Frozen boneless chicken meat, premium quality. Clean, deboned, and ready for quick preparation.',
    educational: 'Soft chicken is premium poultry that has been processed and deboned. It\'s rich in protein and ideal for fast-moving food businesses that need quick, consistent prep times.',
    image: '/images/chicken.jpg',
    availability: 'in-stock',
    benefits: ['Boneless and ready', 'Premium quality', 'Quick prep time', 'High protein'],
  },
  {
    id: 'mackerel-titus',
    name: 'Mackerel (Titus)',
    nameYoruba: 'Titus',
    category: 'fish',
    weight: '30kg',
    price: 203000,
    description: 'Bulk mackerel with excellent fat content. High yield, perfect for large volume food businesses.',
    educational: 'Mackerel is an oily fish packed with omega-3 fatty acids and essential nutrients. Its rich flavor makes it ideal for Nigerian dishes and its affordability at bulk prices makes it a vendor favorite.',
    image: '/images/mackerel.jpg',
    availability: 'in-stock',
    benefits: ['Rich in Omega-3', 'High yield', 'Bulk discount', 'Flavorful'],
  },
  {
    id: 'horse-mackerel-kote',
    name: 'Horse Mackerel (Kote)',
    nameYoruba: 'Kote',
    category: 'fish',
    weight: '20kg',
    price: 85000,
    description: 'Fresh frozen horse mackerel with premium presentation. Great for retail and restaurant use.',
    educational: 'Horse mackerel is a popular fish in West Africa, known for its firm flesh and mild flavor. It\'s excellent for grilling and frying, and holds up well to traditional Nigerian cooking methods.',
    image: '/images/horse-mackerel.jpg',
    availability: 'in-stock',
    benefits: ['Firm texture', 'Mild flavor', 'Grill-friendly', 'Retail ready'],
  },
  {
    id: 'herring-shawa',
    name: 'Herring (Shawa)',
    nameYoruba: 'Shawa',
    category: 'fish',
    weight: '22kg',
    price: 55000,
    description: 'Frozen herring with consistent quality. Popular for soup and stew preparation in Nigerian cuisine.',
    educational: 'Herring is a small, oily fish rich in nutrients. It\'s a staple in Nigerian kitchens and adds wonderful flavor to soups, stews, and rice dishes. Highly nutritious and economical.',
    image: '/images/herring.jpg',
    availability: 'in-stock',
    benefits: ['Economical', 'Nutrient-rich', 'Soup-friendly', 'Consistent quality'],
  },
  {
    id: 'mullet-atoko',
    name: 'Mullet (Atoko)',
    nameYoruba: 'Atoko',
    category: 'fish',
    weight: '20kg',
    price: 51000,
    description: 'Premium frozen mullet with excellent meat quality. Ideal for upscale restaurants and catering.',
    educational: 'Mullet is a delicate fish with sweet, tender meat. It\'s highly prized in Nigerian cuisine and works beautifully whether grilled whole or prepared in traditional sauces.',
    image: '/images/mullet.jpg',
    availability: 'in-stock',
    benefits: ['Delicate taste', 'Premium quality', 'Grill-worthy', 'Restaurant favorite'],
  },
  {
    id: 'croaker-large',
    name: 'Large Croaker',
    nameYoruba: 'Yenye Nla',
    category: 'fish',
    weight: '20kg',
    price: 90000,
    description: 'Large croaker with excellent presentation. Perfect for restaurants and premium catering services.',
    educational: 'Croaker is a firm white fish with a slightly sweet flavor. Its large size and firm texture make it ideal for presentation and cooking methods that highlight premium fish quality.',
    image: '/images/croaker.jpg',
    availability: 'limited',
    benefits: ['Large size', 'Firm white meat', 'Presentation-ready', 'Premium grade'],
  },
]

export const categories = [
  { id: 'fish', label: 'Frozen Fish', count: 6 },
  { id: 'seafood', label: 'Seafood', count: 0 },
  { id: 'specialty', label: 'Specialty Items', count: 1 },
]

export function getProductsByCategory(category: string): Product[] {
  return products.filter(p => p.category === category)
}

export function getProduct(id: string): Product | undefined {
  return products.find(p => p.id === id)
}

export function formatPrice(price: number): string {
  return `₦${price.toLocaleString()}`
}
