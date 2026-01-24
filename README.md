# ShopifyQA Website

A high-performance, conversion-focused B2B marketing website for ShopifyQA — a Shopify-only QA testing service that helps eCommerce brands protect revenue, reduce checkout failures, and improve conversion rates.

## 🎯 Overview

ShopifyQA is a premium QA testing service built exclusively for Shopify stores. This website is designed to:

- Generate qualified inbound leads
- Promote Free Mini Audit as primary CTA
- Clearly explain ShopifyQA services
- Establish authority & trust
- Ensure excellent performance (SEO + Core Web Vitals)

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Animations**: Framer Motion

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── legal/
│   │   ├── privacy/       # Privacy Policy
│   │   └── terms/         # Terms of Service
│   ├── services/          # Services page
│   ├── globals.css        # Global styles & theme
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/
│   ├── layout/            # Header, Footer
│   ├── sections/          # Page sections
│   └── ui/                # shadcn components
├── data/                  # Mock data
├── lib/                   # Utilities
└── types/                 # TypeScript types
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

### Build for Production

```bash
npm run build
npm start
```

## 📄 Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage with hero, services overview, testimonials |
| `/about` | Company story, mission, and values |
| `/services` | Detailed service offerings |
| `/contact` | Contact options and forms |
| `/legal/terms` | Terms of Service |
| `/legal/privacy` | Privacy Policy |

## 🎨 Design System

### Colors

- **Primary**: `#1E3A5F` (Deep Blue)
- **Primary Light**: `#3B82F6` (Blue)
- **Success**: `#10B981` (Green)
- **Accent**: `#F59E0B` (Amber)

### Typography

- **Headings**: Plus Jakarta Sans
- **Body**: Inter

## ✅ Features

- ✅ Mobile-first responsive design
- ✅ SEO optimized with metadata
- ✅ Fast loading with SSR/SSG
- ✅ Accessible components
- ✅ Clean, minimal UI
- ✅ Trust-focused design
- ✅ Clear CTA placement

## 📝 Services

1. **Conversion QA Audit** - Deep-dive checkout and payment testing
2. **Bug Bash** - Comprehensive Shopify store testing
3. **Monthly Release QA Support** - Ongoing QA for regular updates
4. **Custom/Dedicated QA Support** - Tailored enterprise solutions

## 🔮 Future Enhancements

- [ ] Blog / Content marketing
- [ ] Case studies
- [ ] Pricing page
- [ ] CMS integration (Sanity/Contentful)
- [ ] Analytics integration

## 📜 License

© 2024 ShopifyQA. All rights reserved.
