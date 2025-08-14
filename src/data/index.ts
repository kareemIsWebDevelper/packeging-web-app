import { Product, ProductCategory, Service, Customer } from '../types';

// Services data
export const services: Service[] = [
  {
    id: 'ice-cream',
    icon: '🍦',
    title: 'Ice cream cone sleeves',
    description: 'Specialized packaging for ice cream cones'
  },
  {
    id: 'lamination',
    icon: '🔄',
    title: 'Lamination',
    description: 'Dry Lamination, Wet Lamination, Poly Ethylene Extrusion'
  },
  {
    id: 'pe-film',
    icon: '📦',
    title: 'PE Blown Film',
    description: '25 : 120 micron PE film for Lamination'
  },
  {
    id: 'bag-making',
    icon: '👜',
    title: 'Bag/Pouch Making',
    description: 'Center Seal Pouches, 4 Sides Seal Pouches and Gusseted pouches'
  },
  {
    id: 'printing',
    icon: '🖨️',
    title: 'Printing',
    description: 'Rotogravure up to 10 colors, Reverse printing up to 2 colors'
  },
  {
    id: 'pvc-sleeves',
    icon: '📄',
    title: 'PVC Shrink sleeves',
    description: 'High-quality shrink sleeve packaging'
  },
  {
    id: 'stretch-film',
    icon: '🔗',
    title: 'Stretch Film',
    description: 'Automatic and manual for wrapping products and palettes'
  },
  {
    id: 'pe-extrusion',
    icon: '⚙️',
    title: 'PE Extrusion',
    description: 'Laminate/coat films, paper, alufoil, with PE film 10:50 microns'
  }
];

// Product categories
export const productCategories: ProductCategory[] = [
  {
    id: 'biscuits',
    name: 'Biscuits and Sweets',
    products: [
      { id: 'b1', name: 'Biscuit Package 1', image: '/images/biscuits001.png', category: 'biscuits' },
      { id: 'b2', name: 'Biscuit Package 2', image: '/images/biscuits002.png', category: 'biscuits' },
      { id: 'b3', name: 'Biscuit Package 3', image: '/images/biscuits003.png', category: 'biscuits' },
      { id: 'b4', name: 'Biscuit Package 4', image: '/images/biscuits004.png', category: 'biscuits' }
    ]
  },
  {
    id: 'chips',
    name: 'Chips and Snacks',
    products: [
      { id: 'c1', name: 'Chips Package 1', image: '/images/chips001.png', category: 'chips' },
      { id: 'c2', name: 'Chips Package 2', image: '/images/chips002.png', category: 'chips' },
      { id: 'c3', name: 'Chips Package 3', image: '/images/chips003.png', category: 'chips' },
      { id: 'c4', name: 'Chips Package 4', image: '/images/chips004.png', category: 'chips' },
      { id: 'c5', name: 'Chips Package 5', image: '/images/chips005.png', category: 'chips' },
      { id: 'c6', name: 'Chips Package 6', image: '/images/chips006.png', category: 'chips' }
    ]
  }
  // Add more categories as needed
];

// Customer logos
export const customers: Customer[] = [
  { id: '1', name: 'Customer 1', logo: '/images/customers/customer1.jpg' },
  { id: '2', name: 'Customer 2', logo: '/images/customers/customer2.jpg' },
  { id: '3', name: 'Customer 3', logo: '/images/customers/customer3.jpg' },
  { id: '4', name: 'Customer 4', logo: '/images/customers/customer4.jpg' },
  { id: '5', name: 'Customer 5', logo: '/images/customers/customer5.jpg' },
  { id: '6', name: 'Customer 6', logo: '/images/customers/customer6.jpg' }
];

// Contact information
export const contactInfo = {
  phone: '0554413164 / 165 / 166',
  email: 'info@ippegypt.com',
  address: 'Egypt',
  website: 'https://ippegypt.com'
};

// Company information
export const companyInfo = {
  name: 'IPP EGYPT',
  fullName: 'int. Printing & Packaging Materials Co.',
  slogan: 'We Find Highest Use for All Resources',
  description: 'The International Company for Printing and Packaging Materials is unique in its Calibo production line, the first in Egypt serving the ice cream sector.',
  founded: '1985',
  specialties: [
    'Packaging Materials',
    'Printing Services',
    'Lamination',
    'PE Films',
    'Custom Solutions'
  ]
};
