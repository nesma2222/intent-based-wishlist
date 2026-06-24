import {
  Gamepad2,
  BookOpen,
  Plane,
  Sparkles,
  Tag,
  Package,
} from "lucide-react";

export const CATEGORY_CONFIG = {
  gaming: {
    icon: Gamepad2,
    color: "text-purple-500",
    bg: "bg-purple-50",
    label: "Gaming",
  },
  study: {
    icon: BookOpen,
    color: "text-blue-500",
    bg: "bg-blue-50",
    label: "Study",
  },
  travel: {
    icon: Plane,
    color: "text-amber-500",
    bg: "bg-amber-50",
    label: "Travel",
  },
  beauty: {
    icon: Sparkles,
    color: "text-pink-500",
    bg: "bg-pink-50",
    label: "Beauty",
  },
  discount: {
    icon: Tag,
    color: "text-green-500",
    bg: "bg-green-50",
    label: "Offers",
  },
  other: {
    icon: Package,
    color: "text-slate-500",
    bg: "bg-slate-50",
    label: "Other",
  },
};