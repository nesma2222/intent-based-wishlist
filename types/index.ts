// types/index.ts
export interface Product {
  id: string;
  name: string;
  category: 'gaming' | 'study' | 'travel' | 'beauty' | 'discount' | 'other';
  price: number;
  discount?: number;
  image: string;
}

export interface Wishlist {
  id: string;
  name: string;
  products: Product[];
  createdAt: number;
}

export interface PatternRule {
  category: Product['category'];
  threshold: number;
  wishlistName: string;
  message: string;
}