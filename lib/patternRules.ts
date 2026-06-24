import { PatternRule } from "@/types";

export const PATTERN_RULES: PatternRule[] = [
  {
    category: "gaming",
    threshold: 3,
    wishlistName: "Gaming Setup",
    message: "Looks like you're building a Gaming Setup. Create a Gaming Setup Wishlist?",
  },
  {
    category: "study",
    threshold: 3,
    wishlistName: "Study Essentials",
    message: "Create a Study Essentials Wishlist?",
  },
  {
    category: "travel",
    threshold: 3,
    wishlistName: "Travel Wishlist",
    message: "Create a Travel Wishlist?",
  },
  {
    category: "beauty",
    threshold: 3,
    wishlistName: "Beauty Wishlist",
    message: "Create a Beauty Wishlist?",
  },
  {
    category: "discount",
    threshold: 3,
    wishlistName: "Offers & Deals",
    message: "Create an Offers & Deals Wishlist?",
  },
];