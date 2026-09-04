# Prajwal Basnet — Portfolio

> A dark, atmospheric personal portfolio — fisheye lens distortion, smooth cinematic scroll, and immersive background effects.

<p align="center">
  <a href="https://github.com/PrajwalBasnet0219/Portfolio-prajwal"><img src="https://img.shields.io/github/stars/PrajwalBasnet0219/Portfolio-prajwal?style=flat" alt="stars" /></a>
  <img src="https://img.shields.io/badge/Next.js-15-black" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-19-61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6" alt="TS" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4" alt="Tailwind" />
</p>

**Live Demo →** https://portfolio-prajwal-basnet.vercel.app/

---

## Features

- **Fisheye Lens** — cursor-following warp that distorts backgrounds (`components/cursor/FisheyeCursor.tsx`)
- **Atmospheric Backgrounds** — LightTunnel, EtherWaves, Strands, Lightfall, FaultyTerminal
- **Smooth Scroll** — Lenis with GSAP ScrollTrigger reveals + blur transitions
- **Atmosphere** — Noise, vignette, scanlines, floating particles
- **Custom Cursor** — dot + ring with hover states (auto-disabled on mobile)
- **Fully Responsive** — mobile-first, respects `prefers-reduced-motion`

Sections: **Hero** → **About** (skills/bio/timeline) → **Projects** → **Contact / Footer**

## Tech Stack

| Layer | Tools |
|-------|-------|
| Framework | Next.js 15 (App Router), React 19, TypeScript |
| Styling | Tailwind CSS v4, `tw-animate-css`, `lightswind` |
| Animation | GSAP + ScrollTrigger, Lenis, Framer Motion |
| 3D / Effects | Three.js, @react-three/fiber, OGL |
| UI | shadcn/ui, lucide-react, class-variance-authority |

## Quick Start

```bash
# 1. clone
git clone https://github.com/PrajwalBasnet0219/Portfolio-prajwal.git
cd Portfolio-prajwal

# 2. install (Node 20 or 22 LTS recommended)
nvm use 22
npm install --legacy-peer-deps

# 3. run
npm run dev
```

Open `http://localhost:3000`

```bash
npm run build # production build
npm start     # serve production
npm run lint  # lint
```

## Project Structure

```
app/
  layout.tsx      # root layout + metadata + fonts (Geist)
  page.tsx        # Lenis + GSAP setup, section reveals
  globals.css     # design tokens + animations
  api/            # route handlers
components/
  hero/           # Hero + terror entity
  about/          # About, skills, timeline
  project/        # Project grid & cards
  layout/         # Navigation, Footer, NavigationGate
  cursor/         # FisheyeCursor + CustomCursor
  background/     # NoiseOverlay, LightTunnel, Strands, etc.
  effects/        # ShinyText, GlitchText, WarpText
  loading/        # ShutterLoader
  ui/             # shadcn primitives
  public/           # static assets
```

### FisheyeCursor

```tsx
import FisheyeCursor from "@/components/cursor/FisheyeCursor";

<FisheyeCursor strength={110} radius={360} damping={0.14}>
  <YourBackgroundOrSection />
</FisheyeCursor>
```

## Customization

- **Colors / Theme:** edit CSS variables in `app/globals.css` (`--color-void`, `--color-abyss`, etc.)
- **Content:** update `components/about/About.tsx` and `components/project/Project.tsx`
- **Metadata:** `app/layout.tsx:12` — `title` / `description`
- **Images:** set `next.config.js:8` `unoptimized: true` is for static export; remove if using Next Image Optimization

## Deployment

Deploys cleanly to Vercel (see `vercel.json:1`):

```bash
vercel --prod
```

Or any Node host that supports Next.js 15.

## FAQ

**DeprecationWarning `module.register()` on Node 24/26?**
Harmless warning from Next/Tailwind internals. Use Node 22 LTS or run with `NODE_OPTIONS='--no-deprecation' npm run dev` (already set in `package.json:9`). Fixed upstream in future Next.js releases.

## Author

**Prajwal Basnet** — [@PrajwalBasnet0219](https://github.com/PrajwalBasnet0219)

---

## License

MIT — free to fork, just keep attribution.
