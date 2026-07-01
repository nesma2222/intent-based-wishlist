"use client";

import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";

const slides = [
  {
    id: 1,
    tag: "New Arrivals",
    title: "Level Up Your Gaming Setup",
    subtitle: "Discover the latest gaming gear handpicked for you.",
    cta: "Shop Gaming",
    href: "/products",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200&h=500&fit=crop",
  },
  {
    id: 2,
    tag: "Back to School",
    title: "Everything You Need to Study Smart",
    subtitle: "Laptops, bags, accessories and more.",
    cta: "Shop Study",
    href: "/products",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=1200&h=500&fit=crop",
  },
  {
    id: 3,
    tag: "Travel Season",
    title: "Pack Light, Travel Right",
    subtitle: "Luggage, pillows, bags — all in one place.",
    cta: "Shop Travel",
    href: "/products",
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1200&h=500&fit=crop",
  },
  {
    id: 4,
    tag: "Beauty Essentials",
    title: "Glow Up with Wishly",
    subtitle: "Top beauty picks curated just for you.",
    cta: "Shop Beauty",
    href: "/products",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=1200&h=500&fit=crop",
  },
  {
    id: 5,
    tag: "Flash Deals",
    title: "Up to 50% OFF Today Only",
    subtitle: "Limited time offers — save before they're gone.",
    cta: "Shop Deals",
    href: "/products",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1200&h=500&fit=crop",
  },
];

export default function HeroBanner() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => emblaApi.scrollNext(), 3000);
    return () => clearInterval(interval);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", () => setSelectedIndex(emblaApi.selectedScrollSnap()));
  }, [emblaApi]);

  return (
    <div className="relative w-full overflow-hidden" ref={emblaRef}>
      <div className="flex">
       {slides.map((slide) => (
  <div
    key={slide.id}
    className="relative min-w-full h-64 md:h-96 overflow-hidden"
  >
    {/* Background Image */}
    <img
      src={slide.image}
      alt={slide.title}
      className="absolute inset-0 w-full h-full object-cover"
    />

    {/* Dark overlay only — no color */}
    <div className="absolute inset-0 bg-black/50" />

    {/* Text Content */}
    <div className="relative z-10 h-full flex items-center px-6 md:px-16">
      <div className="max-w-md">
        <span className="text-xs font-semibold uppercase tracking-widest text-white/80 mb-2 block">
          {slide.tag}
        </span>
        <h1 className="text-2xl md:text-4xl font-bold mb-3 leading-tight text-white">
          {slide.title}
        </h1>
        <p className="text-sm md:text-base text-white/90 mb-6">
          {slide.subtitle}
        </p>
        <Link
          href={slide.href}
          className="inline-block bg-white text-slate-800 font-semibold px-6 py-2.5 rounded-full text-sm hover:bg-slate-100 transition-colors"
        >
          {slide.cta} →
        </Link>
      </div>
    </div>
  </div>
))}
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => emblaApi?.scrollTo(i)}
            className={`w-2 h-2 rounded-full transition-all ${
              i === selectedIndex ? "bg-white w-4" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
