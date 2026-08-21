# Rei Kuozaki Portfolio

A dark, atmospheric portfolio with interactive eyes that follow your cursor, smooth scrolling, and haunting animations.

## ⚠️ Node.js Version Note

This project works best with **Node.js 20.x or 22.x LTS**. If you see the warning:
```
[DEP0205] DeprecationWarning: `module.register()` is deprecated. Use `module.registerHooks()` instead.
```

This is a **harmless warning** from Node.js 26+ internal APIs used by Next.js / Tailwind CSS v4. It does not affect functionality. To suppress it:

```bash
# Option 1: Use Node 22 (recommended)
nvm use 22

# Option 2: Suppress the warning
NODE_OPTIONS='--no-deprecation' npm run dev

# Option 3: It will be fixed automatically in future Next.js releases
```

## Features

- **Interactive Eyes** — Two glowing eyes that track your cursor movement across the entire page
- **Terror Entity** — Eyes beside your name in the hero, like a dark entity watching
- **Fog Eyes** — Eyes that emerge from fog as you scroll from hero to about section
- **Smooth Scrolling** — Powered by Lenis for buttery-smooth scroll experience
- **GSAP Animations** — Scroll-triggered reveals, parallax effects, and staggered animations
- **Custom Cursor** — Minimalist dot + ring cursor with hover states
- **Noise & Vignette Overlay** — Atmospheric film grain and edge darkening
- **Scanline Effect** — Subtle CRT-style scanline animation
- **Floating Particles** — Ambient particles drifting upward
- **Tendril SVG Animation** — Dark branching lines that sway and draw themselves in
- **Responsive Design** — Works on all screen sizes

## Pages/Sections

1. **Hero** — Full-screen intro with name + terror entity eyes beside it
2. **Fog Eyes** — Eyes emerging from deep fog as you scroll down
3. **About** — Bio, skills with animated bars, experience timeline, decorative eyes
4. **Projects** — 6 project cards with hover effects, image zoom, and tag system
5. **Contact/Footer** — CTA with giant eyes, social links, mouse-following gradient

## Tech Stack

- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- GSAP + ScrollTrigger
- Lenis (smooth scroll)
- Lucide React (icons)

## Getting Started

```bash
# Use Node 22 (recommended)
nvm use 22

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
app/
  globals.css      # Global styles, animations, custom properties
  layout.tsx       # Root layout with metadata
  page.tsx         # Main page with Lenis + GSAP setup
components/
  CustomCursor.tsx # Custom cursor dot + ring
  NoiseOverlay.tsx # Noise texture + vignette overlay
  Navigation.tsx   # Fixed nav that appears on scroll
  Eyes.tsx         # The interactive eyes component (4 variants)
  FogEyes.tsx      # Eyes that emerge from fog on scroll
  Tendrils.tsx     # SVG tendril animations
  Hero.tsx         # Hero section with terror entity
  About.tsx        # About section with skills
  Projects.tsx     # Projects grid
  Footer.tsx       # Contact CTA + footer
```

## Eye Variants

The `Eyes` component supports 4 visual variants:

| Variant | Description | Use Case |
|---------|-------------|----------|
| `bright` | Full white glow | Default, high visibility |
| `dim` | Reduced glow, gray pupil | Subtle decorative eyes |
| `fog` | Very dim, barely visible | Eyes in fog/mist |
| `terror` | Menacing with red aura | Hero entity, dangerous feel |

```tsx
<Eyes
  size={320}          // Total width of both eyes
  gap={50}            // Space between eyes
  eyeSize={110}       // Diameter of each eye
  pupilSize={38}      // Diameter of pupil
  glowIntensity={1.2} // Glow brightness multiplier
  variant="terror"    // bright | dim | fog | terror
/>
```

## Colors

All colors are defined in `globals.css` as CSS custom properties:
- `--color-void` — Pure black (#000)
- `--color-abyss` — Near black (#050505)
- `--color-shadow` — Dark gray (#0a0a0a)
- `--color-pure` — Dim white (#999)
- `--color-danger` — Dark red tint (#1a0505)
- `--color-blood` — Blood red (#2a0a0a)

## License

MIT
