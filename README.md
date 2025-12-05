# Inopsio - Coming Soon Page

A stunning, production-ready Coming Soon / Under Construction page for the Inopsio cybersecurity platform suite.

## Features

- **Next.js 16.x** with App Router
- **React 19** with Server Components
- **TypeScript** for type safety
- **Tailwind CSS 4.x** for styling
- **Framer Motion** for smooth animations
- **Responsive Design** - Mobile to 4K
- **Accessibility** - WCAG 2.1 AA compliant
- **SEO Optimized** - Comprehensive metadata

## Components

- **AnimatedBackground** - Canvas-based particle animation with network connections
- **Logo** - Animated logo with glowing shield icon
- **CountdownTimer** - Flip-card style countdown to launch date
- **EmailSignup** - Newsletter signup with validation
- **FeaturePreview** - Showcase of platform features
- **SocialLinks** - Social media links and contact info

## Getting Started

### Prerequisites

- Node.js 18+ or 20+
- pnpm (recommended) or npm

### Installation

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

Open [http://localhost:3000](http://localhost:3000) to view the page.

## Customization

### Change Launch Date

Edit the `targetDate` prop in `app/page.tsx`:

```tsx
<CountdownTimer targetDate="2025-03-01T00:00:00" />
```

### Update Colors

Modify the color palette in `tailwind.config.ts`:

```ts
colors: {
  primary: {
    DEFAULT: "#0F172A",
    light: "#1E293B",
    dark: "#020617",
  },
  // ... more colors
}
```

### Update Branding

- Logo: Edit `components/Logo.tsx`
- Company name: Search and replace "Inopsio"
- Metadata: Edit `app/layout.tsx`

## Project Structure

```
.
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Main Coming Soon page
│   └── loading.tsx          # Loading state
├── components/
│   ├── AnimatedBackground.tsx
│   ├── CountdownTimer.tsx
│   ├── EmailSignup.tsx
│   ├── FeaturePreview.tsx
│   ├── Logo.tsx
│   └── SocialLinks.tsx
├── lib/
│   └── utils.ts             # Utility functions
├── tailwind.config.ts       # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
└── package.json
```

## Performance

- Lighthouse Score: 90+
- Server Components for optimal performance
- Lazy loading for below-fold sections
- Optimized animations with requestAnimationFrame
- CSS-based animations where possible

## Accessibility

- Semantic HTML5 elements
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus visible states
- Color contrast ratio ≥ 4.5:1
- Respects `prefers-reduced-motion`

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

ISC

## Contact

Questions? Reach us at hello@inopsio.com
