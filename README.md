# Chronicls - Luxury Streetwear Brand Website

A premium e-commerce website built with Next.js, React, and TypeScript for the Chronicls luxury streetwear brand.

## Features

✨ **Modern Design**
- Luxury aesthetic with black, white, and nude cream color scheme
- Responsive design for all devices
- Smooth animations and transitions

🛍️ **E-Commerce Functionality**
- Full product catalog with filtering and sorting
- Product detail pages
- Shopping cart system
- Stripe payment integration

📝 **Blog System**
- Blog listing page
- Individual blog post pages
- Category organization
- Date-based publishing

💼 **Business Pages**
- Home page with featured products
- About section
- Contact form
- Newsletter subscription

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Payments**: Stripe
- **Package Manager**: npm

## Getting Started

### Prerequisites

- Node.js 16.x or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/muchengetinyasha2006-dotcom/chronicls-website.git
cd chronicls-website
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env.local` file with your environment variables:
```
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_key
STRIPE_SECRET_KEY=sk_test_your_key
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
├── app/
│   ├── layout.tsx           # Root layout
│   ├── globals.css          # Global styles
│   ├── page.tsx             # Home page
│   ├── shop/
│   │   └── page.tsx         # Shop page
│   ├── blog/
│   │   └── page.tsx         # Blog listing
│   └── contact/
│       └── page.tsx         # Contact page
├── components/
│   ├── Navbar.tsx           # Navigation
│   ├── Footer.tsx           # Footer
│   ├── Hero.tsx             # Hero section
│   ├── FeaturedProducts.tsx # Featured products
│   ├── ProductCard.tsx      # Product card
│   ├── About.tsx            # About section
│   └── Newsletter.tsx       # Newsletter signup
├── public/images/           # Product images
└── README.md
```

## Customization

### Colors
Edit in `tailwind.config.js`:
```js
black: '#0a0a0a',
white: '#ffffff',
cream: '#f5f1ed',
accent: '#d4a574',
```

### Products
Edit `app/shop/page.tsx` and `components/FeaturedProducts.tsx`

### Content
- Home: `app/page.tsx`
- About: `components/About.tsx`
- Blog: `app/blog/page.tsx`
- Contact: `app/contact/page.tsx`

## Deployment

### Vercel (Recommended)
```bash
vercel
```

### Other Platforms
```bash
npm run build
npm start
```

## Next Steps

1. Add product images to `public/images/`
2. Set up Stripe payment processing
3. Customize brand copy and descriptions
4. Deploy to Vercel or your hosting

---

**Chronicls © 2024. All rights reserved.**
