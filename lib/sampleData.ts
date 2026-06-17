import { Product } from "@/types";

export const sampleProducts: Product[] = [
  // Gaming
  { id: "1", name: "Gaming Mouse", category: "gaming", price: 1200, image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=400&h=300&fit=crop" },
  { id: "2", name: "Gaming Keyboard", category: "gaming", price: 2500, image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&h=300&fit=crop" },
  { id: "3", name: "Gaming Headset", category: "gaming", price: 1800, image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400&h=300&fit=crop" },
  { id: "4", name: "RGB Monitor", category: "gaming", price: 15000, image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=300&fit=crop" },

  // Study
  { id: "5", name: "Laptop", category: "study", price: 45000, image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop" },
  { id: "6", name: "Backpack", category: "study", price: 1500, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop" },
  { id: "7", name: "Wireless Mouse", category: "study", price: 800, image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=300&fit=crop" },
  { id: "8", name: "Notebook Set", category: "study", price: 350, image: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=400&h=300&fit=crop" },

  // Travel
  { id: "9", name: "Cabin Luggage", category: "travel", price: 3500, image: "https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?w=400&h=300&fit=crop" },
  { id: "10", name: "Travel Bag", category: "travel", price: 2000, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop" },
  { id: "11", name: "Neck Pillow", category: "travel", price: 599, image: "https://images.unsplash.com/photo-1520038410233-7141be7e6f97?w=400&h=300&fit=crop" },

  // Beauty
  { id: "12", name: "Lipstick", category: "beauty", price: 799, image: "https://images.unsplash.com/photo-1586495777744-4e6232bf2263?w=400&h=300&fit=crop" },
  { id: "13", name: "Face Serum", category: "beauty", price: 1299, image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=300&fit=crop" },
  { id: "14", name: "Moisturizer", category: "beauty", price: 899, image: "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab12?w=400&h=300&fit=crop" },

  // Discount
  { id: "15", name: "Smart Watch", category: "discount", price: 5000, discount: 50, offerExpiry: Date.now() + 3 * 60 * 60 * 1000, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop" },
  { id: "16", name: "Shoes", category: "discount", price: 3000, discount: 40, offerExpiry: Date.now() + 5 * 60 * 60 * 1000, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop" },
  { id: "17", name: "Headphones", category: "discount", price: 2000, discount: 30, offerExpiry: Date.now() + 1 * 60 * 60 * 1000, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop" },
];