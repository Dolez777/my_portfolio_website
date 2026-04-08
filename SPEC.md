# Design System Specification — Personal Engineering Portfolio

> **Status:** Draft v1 · **Style:** Motion-Driven Minimalism + Subtle Glassmorphism  
> **Stack:** Next.js 15 · Tailwind CSS v4 · shadcn/ui · Framer Motion  
> **Last updated:** 2026-04-08

---

## 1. Design Philosophy

**"Clean enough for recruiters, technical enough for engineers."**

The design follows a **Motion-Driven Minimalism** aesthetic — clean layouts with generous whitespace, animated scroll reveals, and subtle glassmorphism accents on interactive elements. The goal is a premium, polished feel that conveys competence without being overly flashy.

### Design Principles

1. **Clarity first.** Every section has a single purpose. No clutter.
2. **Motion with purpose.** Animations guide the eye and convey polish — never decorative.
3. **Consistent spacing.** Strict rhythm using an 8px grid system.
4. **Accessible contrast.** WCAG AA minimum on all text + background combinations.
5. **Mobile-first.** Designed for 375px up, enhanced for larger screens.

### Style Keywords
`clean` · `monochrome` · `technical` · `spacious` · `animated` · `dark-first` · `professional`

---

## 2. Color Palette

Built on shadcn/ui's CSS variable system. Colors defined in HSL format for Tailwind compatibility. Both light and dark themes share semantic token names.

### 2.1 Light Theme (`:root`)

| Token | HSL Value | Hex Approx. | Usage |
|---|---|---|---|
| `--background` | `0 0% 100%` | `#FFFFFF` | Page background |
| `--foreground` | `240 10% 3.9%` | `#0A0A0B` | Primary text |
| `--card` | `0 0% 100%` | `#FFFFFF` | Card backgrounds |
| `--card-foreground` | `240 10% 3.9%` | `#0A0A0B` | Card text |
| `--popover` | `0 0% 100%` | `#FFFFFF` | Popover backgrounds |
| `--popover-foreground` | `240 10% 3.9%` | `#0A0A0B` | Popover text |
| `--primary` | `240 5.9% 10%` | `#18181B` | Primary buttons, emphasis |
| `--primary-foreground` | `0 0% 98%` | `#FAFAFA` | Text on primary |
| `--secondary` | `240 4.8% 95.9%` | `#F4F4F5` | Secondary backgrounds |
| `--secondary-foreground` | `240 5.9% 10%` | `#18181B` | Text on secondary |
| `--muted` | `240 4.8% 95.9%` | `#F4F4F5` | Muted backgrounds |
| `--muted-foreground` | `240 3.8% 46.1%` | `#71717A` | Muted/secondary text |
| `--accent` | `221 83% 53%` | `#2563EB` | Accent color — links, highlights |
| `--accent-foreground` | `0 0% 100%` | `#FFFFFF` | Text on accent |
| `--destructive` | `0 84.2% 60.2%` | `#EF4444` | Error states |
| `--destructive-foreground` | `0 0% 98%` | `#FAFAFA` | Text on destructive |
| `--border` | `240 5.9% 90%` | `#E4E4E7` | Borders |
| `--input` | `240 5.9% 90%` | `#E4E4E7` | Input borders |
| `--ring` | `221 83% 53%` | `#2563EB` | Focus rings |
| `--radius` | `0.625rem` | — | Border radius base |

### 2.2 Dark Theme (`.dark`)

| Token | HSL Value | Hex Approx. | Usage |
|---|---|---|---|
| `--background` | `240 10% 3.9%` | `#0A0A0B` | Page background |
| `--foreground` | `0 0% 98%` | `#FAFAFA` | Primary text |
| `--card` | `240 10% 5.5%` | `#111113` | Card backgrounds |
| `--card-foreground` | `0 0% 98%` | `#FAFAFA` | Card text |
| `--popover` | `240 10% 5.5%` | `#111113` | Popover backgrounds |
| `--popover-foreground` | `0 0% 98%` | `#FAFAFA` | Popover text |
| `--primary` | `0 0% 98%` | `#FAFAFA` | Primary buttons (inverted) |
| `--primary-foreground` | `240 5.9% 10%` | `#18181B` | Text on primary |
| `--secondary` | `240 3.7% 15.9%` | `#27272A` | Secondary backgrounds |
| `--secondary-foreground` | `0 0% 98%` | `#FAFAFA` | Text on secondary |
| `--muted` | `240 3.7% 15.9%` | `#27272A` | Muted backgrounds |
| `--muted-foreground` | `240 5% 64.9%` | `#A1A1AA` | Muted/secondary text |
| `--accent` | `217 91% 60%` | `#3B82F6` | Accent — slightly brighter for dark |
| `--accent-foreground` | `0 0% 100%` | `#FFFFFF` | Text on accent |
| `--destructive` | `0 62.8% 30.6%` | `#7F1D1D` | Error states (darker) |
| `--destructive-foreground` | `0 0% 98%` | `#FAFAFA` | Text on destructive |
| `--border` | `240 3.7% 15.9%` | `#27272A` | Borders |
| `--input` | `240 3.7% 15.9%` | `#27272A` | Input borders |
| `--ring` | `217 91% 60%` | `#3B82F6` | Focus rings |

### 2.3 Extended Palette (Custom CSS Variables)

These are additional project-specific tokens added alongside shadcn defaults:

```css
:root {
  /* Gradient accent pair */
  --gradient-from: 221 83% 53%;    /* Blue */
  --gradient-to: 270 76% 53%;      /* Purple */
  
  /* Glassmorphism */
  --glass-bg: 0 0% 100% / 0.6;     /* White at 60% opacity */
  --glass-border: 0 0% 100% / 0.2; /* White at 20% opacity */
  --glass-blur: 12px;
  
  /* Category colors (for project tech badges) */
  --cat-web: 221 83% 53%;       /* Blue */
  --cat-mobile: 142 71% 45%;    /* Green */
  --cat-data: 280 67% 55%;      /* Purple */
  --cat-automation: 25 95% 53%; /* Orange */
  --cat-ai: 350 80% 55%;        /* Rose */
}

.dark {
  --glass-bg: 240 10% 10% / 0.5;
  --glass-border: 0 0% 100% / 0.08;
  --glass-blur: 16px;
}
```

### 2.4 Color Usage Rules

1. **Never use raw Tailwind colors** (e.g., `bg-blue-500`). Always use semantic tokens: `bg-primary`, `text-accent`, `border-border`.
2. **Accent color is reserved** for links, CTAs, hover states, and focus rings.
3. **Category colors** are only used in `TechBadge` components and project category indicators.
4. **Gradients** use the `--gradient-from` / `--gradient-to` pair. Applied sparingly — hero heading, accent underlines, CTA buttons.

---

## 3. Typography

### 3.1 Font Selection

| Role | Font | Weight(s) | Google Fonts |
|---|---|---|---|
| **Headings** | **Space Grotesk** | 500, 700 | `next/font/google` |
| **Body** | **Inter** | 400, 500, 600 | `next/font/google` |
| **Code** | **JetBrains Mono** | 400 | `next/font/google` |

**Why this pairing:**
- **Space Grotesk** has a geometric, techy feel perfect for an engineering portfolio. It's distinctive without being distracting.
- **Inter** is the industry standard for UI text — highly readable at all sizes, excellent for body copy and UI elements.  
- **JetBrains Mono** for code snippets and tech badges to signal "developer."

### 3.2 Type Scale

Based on a **1.25 ratio** (Major Third), using `rem` units:

| Token | Size | Line Height | Weight | Usage |
|---|---|---|---|---|
| `text-display` | `3.5rem` (56px) | 1.1 | 700 | Hero headline only |
| `text-h1` | `2.5rem` (40px) | 1.2 | 700 | Page titles |
| `text-h2` | `2rem` (32px) | 1.25 | 700 | Section headers |
| `text-h3` | `1.5rem` (24px) | 1.3 | 500 | Card titles, subsections |
| `text-h4` | `1.25rem` (20px) | 1.4 | 500 | Sub-subsections |
| `text-body` | `1rem` (16px) | 1.6 | 400 | Body text |
| `text-body-lg` | `1.125rem` (18px) | 1.6 | 400 | Lead paragraphs |
| `text-small` | `0.875rem` (14px) | 1.5 | 400 | Captions, metadata |
| `text-xs` | `0.75rem` (12px) | 1.5 | 500 | Badges, labels |
| `text-code` | `0.875rem` (14px) | 1.7 | 400 | Inline code, code blocks |

### 3.3 Responsive Type (Mobile → Desktop)

| Token | Mobile (< 768px) | Desktop (≥ 768px) |
|---|---|---|
| `text-display` | `2.25rem` | `3.5rem` |
| `text-h1` | `1.875rem` | `2.5rem` |
| `text-h2` | `1.5rem` | `2rem` |
| `text-h3` | `1.25rem` | `1.5rem` |

### 3.4 Typography Rules

1. **One `<h1>` per page.** Use `text-h1` for page titles.
2. **Hero headline uses `text-display`** — this is the only place it appears.
3. **Body text is always `text-body`** (16px). Never go below 14px for readable content.
4. **Headings use Space Grotesk**, everything else uses Inter.
5. **Code snippets** (inline and blocks) use JetBrains Mono with `bg-muted` background.

### 3.5 Next.js Font Configuration

```typescript
// lib/fonts.ts
import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google';

export const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-heading',
  weight: ['500', '700'],
});

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
});

export const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-code',
  weight: ['400'],
});
```

---

## 4. Spacing System

Based on an **8px grid**, using Tailwind's default scale:

| Token | Value | Usage |
|---|---|---|
| `space-1` | `0.25rem` (4px) | Inline spacing, badge padding |
| `space-2` | `0.5rem` (8px) | Small gaps, icon spacing |
| `space-3` | `0.75rem` (12px) | Input padding, compact lists |
| `space-4` | `1rem` (16px) | Standard padding, card padding |
| `space-6` | `1.5rem` (24px) | Section sub-spacing |
| `space-8` | `2rem` (32px) | Component spacing |
| `space-12` | `3rem` (48px) | Section spacing (mobile) |
| `space-16` | `4rem` (64px) | Section spacing (desktop) |
| `space-20` | `5rem` (80px) | Page section padding (desktop) |
| `space-24` | `6rem` (96px) | Hero vertical padding |

### Section Spacing Convention

```tsx
{/* Standard section wrapper */}
<section className="py-16 md:py-24">
  <div className="container mx-auto px-4 md:px-6">
    {/* Section content */}
  </div>
</section>
```

### Container

- **Max width:** `1280px` (`max-w-7xl`)
- **Padding:** `1rem` (mobile) → `1.5rem` (desktop)

---

## 5. Layout Grid

### 5.1 Breakpoints

| Name | Min Width | Tailwind Prefix |
|---|---|---|
| **Mobile** | `0px` | (default) |
| **Tablet** | `768px` | `md:` |
| **Desktop** | `1024px` | `lg:` |
| **Wide** | `1280px` | `xl:` |

### 5.2 Project Grid

| Breakpoint | Columns | Gap |
|---|---|---|
| Mobile | 1 | `1.5rem` |
| Tablet | 2 | `1.5rem` |
| Desktop | 3 | `2rem` |

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
  {projects.map(p => <ProjectCard key={p.slug} project={p} />)}
</div>
```

---

## 6. Component Styling Specs

### 6.1 Navbar

```
Height:        64px (h-16)
Background:    glass effect (backdrop-blur, semi-transparent)
Position:      sticky top-0, z-50
Border:        1px bottom border (border-border/50)
Padding:       0 1.5rem
```

**Behavior:**
- Transparent on scroll-top, gains glass background on scroll.
- Mobile: hamburger → Sheet slide-in from right.
- Theme toggle: icon button with sun/moon swap animation.

### 6.2 Hero Section

```
Padding:       6rem top, 4rem bottom (desktop)
Layout:        Two columns (text + visual) on desktop, stacked on mobile
Heading:       text-display, gradient text on "name" or key word
Sub-heading:   text-body-lg, text-muted-foreground
CTA:           Two buttons — primary + outline
```

**Animations:**
- Heading: fade-up + blur-in (0.6s, ease-out)
- Sub-heading: fade-up (0.8s delay)
- CTA Buttons: fade-up (1.0s delay)
- Right visual: fade-in-scale (1.2s delay)

### 6.3 Project Card (shadcn `Card`)

```
Border:        1px border-border
Radius:        var(--radius) = 0.625rem (10px)
Shadow:        none default, shadow-lg on hover
Background:    bg-card
Transition:    all 300ms ease
Hover:         translateY(-4px), shadow-lg, border-accent/20
Image:         aspect-video, object-cover, rounded-t
Padding body:  1.5rem
```

**Glassmorphism variant** (for featured cards):
```
Background:    hsl(var(--glass-bg))
Border:        1px solid hsl(var(--glass-border))
Backdrop:      blur(var(--glass-blur))
```

### 6.4 Tech Badge

```
Font:          text-xs, font-code (JetBrains Mono)
Padding:       2px 8px
Radius:        full (rounded-full)
Background:    bg-secondary 
Color:         text-secondary-foreground
Border:        none
```

**Category-colored variant:**
```
Background:    hsl(var(--cat-{category}) / 0.1)
Color:         hsl(var(--cat-{category}))
Border:        1px solid hsl(var(--cat-{category}) / 0.2)
```

### 6.5 Section Header

```
Layout:        flex flex-col items-center text-center
Title:         text-h2, font-heading
Subtitle:      text-body-lg, text-muted-foreground, max-w-2xl
Spacing:       mb-12 (gap below header)
```

Optional: accent gradient underline below title (2px, 48px wide, centered).

### 6.6 Buttons (shadcn `Button`)

| Variant | Background | Text | Border | Use Case |
|---|---|---|---|---|
| `default` | `bg-primary` | `text-primary-foreground` | none | Primary CTA |
| `outline` | transparent | `text-foreground` | `border-border` | Secondary actions |
| `ghost` | transparent | `text-foreground` | none | Nav links, icon buttons |
| `link` | transparent | `text-accent` | none | Inline links |
| `gradient` (custom) | `gradient-from → gradient-to` | white | none | Hero CTA only |

**Gradient button** (custom variant to add via `cva`):
```css
.btn-gradient {
  background: linear-gradient(135deg, hsl(var(--gradient-from)), hsl(var(--gradient-to)));
  color: white;
  border: none;
  transition: opacity 300ms, transform 150ms;
}
.btn-gradient:hover {
  opacity: 0.9;
  transform: translateY(-1px);
}
```

### 6.7 Footer

```
Background:    bg-muted/50
Border:        1px top border (border-border)
Padding:       3rem 1.5rem
Layout:        Three columns → stacked on mobile
Content:       Logo, nav links, social icons, copyright
```

---

## 7. Animation Specifications

### 7.1 Framer Motion Variants

```typescript
// Scroll reveal — fade up
const fadeUpVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
  }
};

// Stagger children
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

// Scale-in (for cards on hover)
const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
};

// Blur-in (hero headline)
const blurIn = {
  hidden: { opacity: 0, filter: 'blur(8px)', y: 16 },
  visible: { 
    opacity: 1, 
    filter: 'blur(0px)', 
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }
  }
};
```

### 7.2 Animation Rules

1. **Entry animations trigger once** — when elements enter viewport (`once: true`).
2. **Hero animations are sequenced** — heading → subtitle → CTA → visual.
3. **Card grids use stagger** — cards appear one by one with `staggerChildren: 0.1`.
4. **Hover animations are CSS only** — use Tailwind `transition-all duration-300`.
5. **No animations on `prefers-reduced-motion: reduce`.**
6. **Max animation duration: 0.8s.** Keep everything snappy.

### 7.3 CSS Transitions

```
/* Standard hover transitions */
transition: all 300ms cubic-bezier(0.25, 0.1, 0.25, 1);

/* Quick interactions (buttons) */
transition: all 150ms ease;

/* Page transitions */
Handled by Framer Motion AnimatePresence — opacity fade 200ms.
```

---

## 8. Glassmorphism Specification

Used sparingly for premium accents, not as the base style.

### Where to Apply
- ✅ Navbar (on scroll)
- ✅ Featured project cards (optional variant)
- ✅ Floating CTA section
- ❌ Regular text content areas
- ❌ Footer
- ❌ All cards (only featured ones)

### Implementation

```css
.glass {
  background: hsl(var(--glass-bg));
  border: 1px solid hsl(var(--glass-border));
  backdrop-filter: blur(var(--glass-blur));
  -webkit-backdrop-filter: blur(var(--glass-blur));
}
```

---

## 9. Tailwind Configuration Outline

```typescript
// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['var(--font-heading)', 'system-ui', 'sans-serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
        code: ['var(--font-code)', 'monospace'],
      },
      fontSize: {
        display: ['3.5rem', { lineHeight: '1.1', fontWeight: '700' }],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out forwards',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;
```

> [!NOTE]
> This is an outline. shadcn's `init` command will generate the base config. These extensions should be **merged** into the generated config, not replace it.

---

## 10. Accessibility Rules

| Concern | Rule |
|---|---|
| **Contrast** | Minimum 4.5:1 for body text, 3:1 for large text (WCAG AA) |
| **Focus** | Visible focus ring (`ring-2 ring-ring ring-offset-2`) on all interactive elements |
| **Motion** | Respect `prefers-reduced-motion` — disable Framer Motion animations |
| **ARIA** | Use shadcn components — they include built-in ARIA attributes |
| **Semantic HTML** | Use `<main>`, `<nav>`, `<section>`, `<article>`, `<footer>` |
| **Alt text** | All `<Image>` components must have descriptive `alt` text |
| **Skip link** | Include "Skip to main content" link as first focusable element |

---

## 11. Dark Mode Implementation

### Strategy: `next-themes` + CSS Variables + `.dark` class

```tsx
// app/layout.tsx
import { ThemeProvider } from 'next-themes';

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
```

### Toggle Component

```tsx
// components/layout/theme-toggle.tsx
'use client';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { Sun, Moon } from 'lucide-react';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
```

### Rules
1. **Default to dark theme.** Engineering portfolios look more premium in dark mode.
2. **System preference respected** via `enableSystem`.
3. **No FOUC** — `suppressHydrationWarning` + `disableTransitionOnChange` on initial load.
4. **All custom components must use CSS variable tokens.** Never hardcode colors.

---

## 12. Page Layout Specifications

### 12.1 Landing Page (`/`)

```
┌────────────────────────────────────┐
│            Navbar (glass)          │
├────────────────────────────────────┤
│                                    │
│           Hero Section             │
│    Name + Title + CTAs + Visual    │
│                                    │
├────────────────────────────────────┤
│        Featured Projects (3)       │
│     [Card]  [Card]  [Card]         │
├────────────────────────────────────┤
│         Skills / Tech Grid         │
│   Categorized tech stack display   │
├────────────────────────────────────┤
│          About Preview             │
│   Short bio + "Learn More" link    │
├────────────────────────────────────┤
│     CTA — "Let's Work Together"    │
├────────────────────────────────────┤
│             Footer                 │
└────────────────────────────────────┘
```

### 12.2 Projects Page (`/projects`)

```
┌────────────────────────────────────┐
│            Navbar                  │
├────────────────────────────────────┤
│   Page Title + Filter Tabs         │
│   [All] [Web] [Mobile] [Data] ... │
├────────────────────────────────────┤
│         Project Grid               │
│   [Card]  [Card]  [Card]           │
│   [Card]  [Card]  [Card]           │
├────────────────────────────────────┤
│             Footer                 │
└────────────────────────────────────┘
```

Filter uses shadcn `Tabs` or `ToggleGroup` — no page reload, client-side filter.

### 12.3 Project Detail (`/projects/[slug]`)

```
┌────────────────────────────────────┐
│            Navbar                  │
├────────────────────────────────────┤
│   ← Back to Projects              │
│   Project Title                    │
│   Tech Stack Badges                │
│   [Live Demo]  [GitHub]            │
├────────────────────────────────────┤
│         Hero Screenshot            │
│   (full-width, aspect-video)       │
├────────────────────────────────────┤
│   Overview / Problem Statement     │
├────────────────────────────────────┤
│   Key Highlights (bullet points)   │
├────────────────────────────────────┤
│   Architecture / Tech Decisions    │
├────────────────────────────────────┤
│   Screenshot Gallery               │
├────────────────────────────────────┤
│   ← Prev Project | Next Project → │
├────────────────────────────────────┤
│             Footer                 │
└────────────────────────────────────┘
```

### 12.4 About Page (`/about`)

```
┌────────────────────────────────────┐
│            Navbar                  │
├────────────────────────────────────┤
│   Photo + Name + Bio               │
├────────────────────────────────────┤
│   Skills Deep-Dive (categorized)   │
├────────────────────────────────────┤
│   Experience Timeline              │
├────────────────────────────────────┤
│   Education                        │
├────────────────────────────────────┤
│   [Download Resume] CTA            │
├────────────────────────────────────┤
│             Footer                 │
└────────────────────────────────────┘
```

### 12.5 Contact Page (`/contact`)

```
┌────────────────────────────────────┐
│            Navbar                  │
├────────────────────────────────────┤
│   Contact Info + Social Links      │
├────────────────────────────────────┤
│   Contact Form (shadcn Form)       │
│   Name / Email / Message / Submit  │
├────────────────────────────────────┤
│             Footer                 │
└────────────────────────────────────┘
```

---

## 13. Image & Asset Guidelines

| Asset Type | Format | Size Constraint |
|---|---|---|
| Project thumbnails | WebP | 800×450px (16:9), < 100KB |
| Project screenshots | WebP | 1920×1080px max, < 300KB |
| Profile photo | WebP | 400×400px, < 50KB |
| OG images | PNG | 1200×630px |
| Favicon | SVG + ICO | Standard sizes |

### Rules
1. All images via `next/image` with explicit `width`/`height` or `fill`.
2. Hero images marked `priority`.
3. Project images use `placeholder="blur"` with generated blur data URLs.
4. Use WebP format for all raster images.

---

> [!IMPORTANT]
> This spec is the **single source of truth** for all design decisions. Any deviation must be documented and justified. See [ARCHITECTURE.md](./docs/ARCHITECTURE.md) for technical implementation details.
