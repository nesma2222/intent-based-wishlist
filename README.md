# Wishly 

A smart wishlist platform that automatically organizes saved products into meaningful categories using pattern detection — no manual effort needed.

## Core Feature
Add 3+ products from the same category → Wishly detects the pattern and suggests a wishlist automatically via a Smart Suggestion Popover.

## Tech Stack
Next.js 16 · TypeScript · Tailwind CSS v4 · shadcn/ui · localStorage · lucide-react · embla-carousel-react

## Getting Started
```bash
npm install
npm run dev
```

## Folder Structure
## Pages
| Route | Description |
|-------|-------------|
| `/` | Home page — hero carousel, category pills, flash deals |
| `/products` | PLP — search and category filters |
| `/product/[id]` | PDP — product detail with countdown timer |
| `/wishlist` | Wishlist management page |
| `/cart` | Cart page with order summary |
| `/login` | Login and register page |

## Features
- Smart Suggestion Popover — pattern detection engine
- Multiple wishlist categories (Gaming, Study, Travel, Beauty, Offers)
- Scenario A — creates new wishlist when pattern detected
- Scenario B — merges into existing wishlist if already exists
- Live countdown timer on offer products
- Add to Cart / Wishlist toggle
- Hero banner carousel with auto-slide
- Mobile responsive with slide-in drawer menu
- localStorage persistence for guest users

## Branch Strategy
| Branch | Purpose |
|--------|---------|
| `main` | Production ready — mentor reviewed |
| `develop` | Integration branch — all features merged here |
| `feature/day*` | Daily feature branches |

## Development Roadmap
| Date | Task | Status |
|------|------|--------|
| 15 June | Project Setup | 
| 16 June | Types, Data, ProductCard | 
| 17 June | Wishlist Context | 
| 18 June | Pattern Detection + Popover | 
| 19 June | Header, Footer, Home Page | 
| 22 June | PLP — Search + Filters | 
| 23 June | PDP + Countdown Timer | 
| 24 June | Wishlist + Cart Pages | 
| 25 June | Notification Center | 
| 26 June | Login Page | 
| 29 June | Polish + Responsive | 
| 30 June | Final Testing + Docs | 

## Author
Frontend Internship Project — June 2026