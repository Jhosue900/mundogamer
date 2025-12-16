export interface Product {
  id: string;
  name: string;
  price: number;
  priceMax?: number;
  category: string;
  platform: string;
  image: string;
  description?: string;
  inStock: boolean;
  isNew?: boolean;
  isPromo?: boolean;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  count: number;
  icon: string;
  gradient: string;
}

export const categories: Category[] = [
  { id: '1', name: 'Video Juegos', slug: 'video-juegos', count: 251, icon: '🎮', gradient: 'from-neon-cyan to-neon-green' },
  { id: '2', name: 'Consolas', slug: 'consolas', count: 16, icon: '🖥️', gradient: 'from-neon-purple to-neon-pink' },
  { id: '3', name: 'Controles', slug: 'controles', count: 13, icon: '🕹️', gradient: 'from-neon-blue to-neon-cyan' },
  { id: '4', name: 'Accesorios', slug: 'accesorios', count: 49, icon: '🎧', gradient: 'from-neon-pink to-neon-purple' },
  { id: '5', name: 'Streaming', slug: 'streaming', count: 41, icon: '📺', gradient: 'from-neon-green to-neon-cyan' },
  { id: '6', name: 'Suscripciones', slug: 'suscripciones', count: 15, icon: '💳', gradient: 'from-neon-cyan to-neon-blue' },
  { id: '7', name: 'Tarjetas Regalo', slug: 'tarjetas', count: 12, icon: '🎁', gradient: 'from-neon-purple to-neon-blue' },
];

export const platforms = ['Todos', 'PS5', 'PS4', 'PS3', 'Xbox', 'Nintendo Switch'];

export const products: Product[] = [
  // Consolas
  {
    id: 'ps5-pro',
    name: 'PS5 PRO',
    price: 3300000,
    category: 'consolas',
    platform: 'PS5',
    image: 'https://mundogamersshop.com/wp-content/uploads/2025/05/pro.png',
    description: 'La consola más potente de Sony',
    inStock: true,
    isNew: true
  },
  {
    id: 'ps5-slim-disco',
    name: 'PS5 SLIM DISCO',
    price: 2300000,
    category: 'consolas',
    platform: 'PS5',
    image: 'https://mundogamersshop.com/wp-content/uploads/2025/01/PS5-SLIM-DISCO-NUEVO.png',
    inStock: true,
    isNew: true
  },
  {
    id: 'xbox-series-s-1tb',
    name: 'XBOX SERIES S DE 1 TB',
    price: 1700000,
    category: 'consolas',
    platform: 'Xbox',
    image: 'https://mundogamersshop.com/wp-content/uploads/2025/01/XBOX-SERIES-S-DE-1-TB.png',
    inStock: true
  },
  {
    id: 'xbox-series-s-512',
    name: 'XBOX SERIES S DE 512GB',
    price: 1350000,
    category: 'consolas',
    platform: 'Xbox',
    image: 'https://mundogamersshop.com/wp-content/uploads/2025/01/XBOX-SERIES-S-DE-512GB.png',
    inStock: true
  },
  {
    id: 'xbox-360',
    name: 'XBOX 360 CON 2 CONTROLES',
    price: 450000,
    category: 'consolas',
    platform: 'Xbox',
    image: 'https://mundogamersshop.com/wp-content/uploads/2025/01/XBOX-360-CON-2-CONTROLES.png',
    inStock: true
  },
  
  // Controles
  {
    id: 'control-ps5-usado',
    name: 'CONTROLES PS5 USADOS',
    price: 230000,
    category: 'controles',
    platform: 'PS5',
    image: 'https://mundogamersshop.com/wp-content/uploads/2025/05/control-ps5.png',
    inStock: true
  },
  {
    id: 'control-ps5-original',
    name: 'CONTROLES PS5 ORIGINALES',
    price: 320000,
    category: 'controles',
    platform: 'PS5',
    image: 'https://mundogamersshop.com/wp-content/uploads/2025/01/CONTROLES-PS5-ORIGINALES.png',
    inStock: true
  },
  {
    id: 'control-xbox',
    name: 'CONTROLES XBOX',
    price: 280000,
    category: 'controles',
    platform: 'Xbox',
    image: 'https://mundogamersshop.com/wp-content/uploads/2025/01/CONTROLES-XBOX.png',
    inStock: true
  },
  {
    id: 'control-xbox-360',
    name: 'CONTROLES XBOX 360',
    price: 60000,
    category: 'controles',
    platform: 'Xbox',
    image: 'https://mundogamersshop.com/wp-content/uploads/2025/02/cnotroles-360.png',
    inStock: true
  },
  
  // Video Juegos PS4
  {
    id: 'session',
    name: 'Session',
    price: 30000,
    priceMax: 40000,
    category: 'video-juegos',
    platform: 'PS4',
    image: 'https://mundogamersshop.com/wp-content/uploads/2024/11/Session.png',
    inStock: true
  },
  {
    id: 'resident-evil-village',
    name: 'Resident Evil Village Gold Edition',
    price: 29900,
    priceMax: 59900,
    category: 'video-juegos',
    platform: 'PS4',
    image: 'https://mundogamersshop.com/wp-content/uploads/2024/11/Resident-Evil-Village-Gold-Edition.png',
    inStock: true,
    isPromo: true
  },
  {
    id: 'persona-3-reload',
    name: 'Persona 3 Reload',
    price: 45000,
    category: 'video-juegos',
    platform: 'PS4',
    image: 'https://mundogamersshop.com/wp-content/uploads/2024/11/Persona-3-Reload.png',
    inStock: true,
    isNew: true
  },
  {
    id: 'nfs-rivals',
    name: 'Need for Speed Rivals',
    price: 20000,
    priceMax: 30000,
    category: 'video-juegos',
    platform: 'PS4',
    image: 'https://mundogamersshop.com/wp-content/uploads/2024/11/Need-for-Speed-Rivals.png',
    inStock: true
  },
  {
    id: 'nfs-payback',
    name: 'Need for Speed Payback',
    price: 20000,
    priceMax: 30000,
    category: 'video-juegos',
    platform: 'PS4',
    image: 'https://mundogamersshop.com/wp-content/uploads/2024/11/Need-for-Speed-Payback.png',
    inStock: true
  },
  {
    id: 'saints-row',
    name: 'Saints Row The Third Remastered',
    price: 25000,
    category: 'video-juegos',
    platform: 'PS4',
    image: 'https://mundogamersshop.com/wp-content/uploads/2024/11/Saints-Row-The-Third-Remastered.png',
    inStock: true
  },
  {
    id: 'nascar-heat-5',
    name: 'NASCAR Heat 5',
    price: 30000,
    category: 'video-juegos',
    platform: 'PS4',
    image: 'https://mundogamersshop.com/wp-content/uploads/2024/11/NASCAR-Heat-5.png',
    inStock: true
  },
  {
    id: 'nascar-heat-3',
    name: 'NASCAR Heat 3',
    price: 25000,
    category: 'video-juegos',
    platform: 'PS4',
    image: 'https://mundogamersshop.com/wp-content/uploads/2024/11/NASCAR-Heat-3.png',
    inStock: true
  },
  
  // Suscripciones
  {
    id: 'ps-plus-deluxe',
    name: 'PS Plus Deluxe 12 Meses',
    price: 180000,
    category: 'suscripciones',
    platform: 'PS4',
    image: 'https://mundogamersshop.com/wp-content/uploads/2025/12/WhatsApp-Image5-2025-12-02-at-12.37.36-AM-300x300.jpeg',
    inStock: true,
    isPromo: true
  },
];

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(price);
};
