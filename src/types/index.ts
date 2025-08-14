export interface Service {
  id: string;
  icon: string;
  title: string;
  description?: string;
}

export interface Product {
  id: string;
  name: string;
  image: string;
  category: string;
}

export interface ProductCategory {
  id: string;
  name: string;
  products: Product[];
}

export interface Customer {
  id: string;
  name: string;
  logo: string;
}

export interface MachineryImage {
  id: string;
  url: string;
  alt: string;
}

export interface Language {
  code: 'en' | 'ar';
  name: string;
  dir: 'ltr' | 'rtl';
}
