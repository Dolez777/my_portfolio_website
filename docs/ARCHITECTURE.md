# Architecture — Personal Engineering Portfolio

> **Status:** Draft v1 · **Tech Stack:** Next.js 15 (App Router) · Tailwind CSS v4 · shadcn/ui · TypeScript
> **Last updated:** 2026-04-08

---

## 1. Overview

A personal engineering portfolio designed to land an intern/junior developer role. The site showcases projects across **web apps, mobile apps, data work, automation, and AI tooling**. It is optimized for two audiences:

1. **Recruiters** — scanning quickly (~30 sec). Clean layout, strong first impression, visible tech stack badges, and easy contact.
2. **Hiring Managers** — doing a technical deep-dive. Project detail pages with architecture decisions, problem-solving narrative, and code/demo links.

---

## 2. Tech Stack

| Layer | Technology | Rationale |
|---|---|---|
| **Framework** | Next.js 15 (App Router) | SSG + ISR, file-based routing, Server Components by default |
| **Language** | TypeScript | Type safety, better DX, industry standard |
| **Styling** | Tailwind CSS v4 | Utility-first, works natively with shadcn |
| **UI Components** | shadcn/ui | Copy-paste components, fully customizable, accessible |
| **Animations** | Framer Motion | Scroll-triggered reveals, page transitions, micro-interactions |
| **Icons** | Lucide React | Default icon set for shadcn, consistent style |
| **Fonts** | `next/font/google` | Self-hosted, zero layout shift (see [[SPEC.md]]) |
| **Dark Mode** | `next-themes` | Toggle between light/dark via CSS variables + `.dark` class |
| **Deployment** | Vercel | Zero-config for Next.js, preview deployments, analytics |
| **Content** | Local MDX or JSON | Project data stored as structured content files |

---

## 3. Directory Structure

```
omat_sivut/
├── app/
│   ├── (marketing)/           # Route group — public-facing pages
│   │   ├── layout.tsx         # Shared layout (Navbar + Footer)
│   │   ├── page.tsx           # Landing / Hero page
│   │   ├── projects/
│   │   │   ├── page.tsx       # Project gallery (filterable grid)
│   │   │   └── [slug]/
│   │   │       └── page.tsx   # Individual project detail (case study)
│   │   ├── about/
│   │   │   └── page.tsx       # About me / Skills / Experience
│   │   └── contact/
│   │       └── page.tsx       # Contact form
│   ├── layout.tsx             # Root layout (ThemeProvider, fonts, Toaster)
│   ├── globals.css            # CSS variables, shadcn theme, custom styles
│   ├── not-found.tsx          # Custom 404 page
│   └── loading.tsx            # Global loading skeleton
├── components/
│   ├── ui/                    # shadcn/ui components (Button, Card, etc.)
│   ├── layout/
│   │   ├── navbar.tsx         # Main navigation bar
│   │   ├── footer.tsx         # Site footer
│   │   ├── mobile-nav.tsx     # Mobile navigation (Sheet-based)
│   │   └── theme-toggle.tsx   # Dark/light mode toggle
│   ├── sections/
│   │   ├── hero.tsx           # Landing page hero section
│   │   ├── featured-projects.tsx  # Highlighted project cards
│   │   ├── skills-grid.tsx    # Tech stack / skills display
│   │   ├── about-preview.tsx  # Short about section for landing
│   │   └── cta.tsx            # Call-to-action (contact prompt)
│   └── shared/
│       ├── project-card.tsx   # Reusable project card component
│       ├── tech-badge.tsx     # Technology tag/badge
│       ├── section-header.tsx # Consistent section title component
│       ├── animated-container.tsx # Framer Motion scroll reveal wrapper
│       └── external-link.tsx  # External link with icon
├── content/
│   └── projects/              # Project data files
│       ├── project-1.mdx      # (or .json / .ts)
│       ├── project-2.mdx
│       └── ...
├── lib/
│   ├── utils.ts               # cn() utility, shared helpers
│   ├── fonts.ts               # next/font configuration
│   └── content.ts             # Content loading/parsing utilities
├── hooks/
│   └── use-scroll-reveal.ts   # Intersection observer hook (Framer Motion)
├── types/
│   └── project.ts             # TypeScript interfaces for project data
├── public/
│   ├── images/                # Project screenshots, hero assets
│   ├── og/                    # Open Graph images
│   └── resume.pdf             # Downloadable resume
├── docs/
│   ├── ARCHITECTURE.md        # This file
│   └── ...
├── SPEC.md                    # Design system specification
├── components.json            # shadcn/ui configuration
├── tailwind.config.ts         # Tailwind CSS configuration
├── next.config.ts             # Next.js configuration
├── tsconfig.json              # TypeScript configuration
└── package.json
```

---

## 4. Routing Map

| Route | File | Purpose | Rendering |
|---|---|---|---|
| `/` | `app/(marketing)/page.tsx` | Landing page with hero, featured projects, skills, CTA | SSG |
| `/projects` | `app/(marketing)/projects/page.tsx` | Filterable project gallery | SSG |
| `/projects/[slug]` | `app/(marketing)/projects/[slug]/page.tsx` | Project case study detail | SSG (`generateStaticParams`) |
| `/about` | `app/(marketing)/about/page.tsx` | About me, experience, skills deep-dive | SSG |
| `/contact` | `app/(marketing)/contact/page.tsx` | Contact form with Server Action | SSG + Server Action |
| `404` | `app/not-found.tsx` | Custom 404 page | SSG |

> [!NOTE]
> All pages are **statically generated** at build time. The contact form uses a **Server Action** for form submission. No client-side data fetching needed.

---

## 5. Component Architecture

### 5.1 Component Hierarchy

```
RootLayout
├── ThemeProvider (next-themes)
├── TooltipProvider (shadcn)
├── Toaster (sonner)
└── MarketingLayout
    ├── Navbar
    │   ├── Logo
    │   ├── NavLinks
    │   ├── ThemeToggle (Button)
    │   └── MobileNav (Sheet)
    ├── <Page Content>
    │   ├── Hero
    │   │   ├── AnimatedContainer
    │   │   ├── Heading + Subheading
    │   │   ├── CTAButtons (Button)
    │   │   └── HeroVisual
    │   ├── FeaturedProjects
    │   │   └── ProjectCard[] (Card)
    │   │       ├── CardHeader (Image)
    │   │       ├── CardContent (Title + Description)
    │   │       └── CardFooter (TechBadge[])
    │   ├── SkillsGrid
    │   │   └── SkillCategory[] (Card)
    │   ├── AboutPreview
    │   └── CTA
    └── Footer
        ├── SocialLinks
        └── Copyright
```

### 5.2 Component Rules

1. **Server Components by default.** Only add `'use client'` when the component needs interactivity (hooks, event handlers, browser APIs).
2. **Push client boundaries down.** Keep `page.tsx` as Server Components. Wrap interactive parts in small Client Components.
3. **Use shadcn compound components.** Follow `Card > CardHeader > CardTitle > CardContent > CardFooter` pattern.
4. **Use `cn()` for conditional classes.** Import from `@/lib/utils`.
5. **Use `asChild` for composition.** Example: `<Button asChild><Link href="/projects">View All</Link></Button>`.
6. **Animate with `AnimatedContainer`.** Wrap sections in a reusable Framer Motion scroll-reveal component.

### 5.3 Client Components (marked `'use client'`)

| Component | Reason |
|---|---|
| `theme-toggle.tsx` | Uses `useTheme()` from `next-themes` |
| `mobile-nav.tsx` | Uses Sheet open/close state |
| `animated-container.tsx` | Uses Framer Motion `useInView` |
| `contact-form.tsx` | Uses `react-hook-form` + `useFormStatus` |
| `project-filter.tsx` | Uses `useState` for category filtering |

---

## 6. Data Model

### 6.1 Project Interface

```typescript
interface Project {
  slug: string;
  title: string;
  description: string;       // Short description for card
  longDescription: string;   // Full case study content
  category: 'web' | 'mobile' | 'data' | 'automation' | 'ai';
  techStack: string[];        // ["Next.js", "Python", "Flutter"]
  featured: boolean;          // Show on landing page
  image: string;              // Card thumbnail path
  screenshots: string[];      // Detail page gallery
  liveUrl?: string;           // Deployed project link
  githubUrl?: string;         // Source code link
  date: string;               // Project completion date
  highlights: string[];       // Key achievements / bullet points
}
```

### 6.2 Content Strategy

Projects stored as **TypeScript data files** in `content/projects/`:

```typescript
// content/projects/daily-highlight.ts
import { Project } from '@/types/project';

export const dailyHighlight: Project = {
  slug: 'daily-highlight',
  title: 'DailyHighlight',
  description: 'A Flutter mobile app for daily journaling with...',
  category: 'mobile',
  techStack: ['Flutter', 'Dart', 'SQLite', 'Provider'],
  featured: true,
  // ...
};
```

An `index.ts` barrel file exports all projects for easy consumption:

```typescript
// content/projects/index.ts
export const allProjects: Project[] = [dailyHighlight, ...];
export const featuredProjects = allProjects.filter(p => p.featured);
export const getProjectBySlug = (slug: string) => allProjects.find(p => p.slug === slug);
```

---

## 7. SEO Strategy

| Feature | Implementation |
|---|---|
| **Metadata** | `generateMetadata()` per page with dynamic title, description |
| **Open Graph** | OG images in `/public/og/`, configured per page |
| **Sitemap** | Auto-generated via `app/sitemap.ts` |
| **Robots** | `app/robots.ts` with crawl rules |
| **Structured Data** | JSON-LD `Person` schema on homepage |
| **Semantic HTML** | Single `<h1>` per page, proper heading hierarchy |
| **Accessibility** | shadcn built-in ARIA + semantic elements |

---

## 8. Performance Targets

| Metric | Target |
|---|---|
| **Lighthouse Performance** | ≥ 95 |
| **First Contentful Paint** | < 1.5s |
| **Largest Contentful Paint** | < 2.5s |
| **Cumulative Layout Shift** | < 0.1 |
| **Total Bundle Size** | < 200KB (gzipped) |

### Performance Rules

1. Use `next/image` with `priority` on hero images, `width`/`height` on all others.
2. Use `next/font` for zero layout shift font loading.
3. Dynamic import heavy components (e.g., `Framer Motion` animations, contact form).
4. All pages SSG — no client-side data fetching.
5. Lazy load below-fold images and sections.

---

## 9. Key Conventions

### 9.1 File Naming
- **Components:** `kebab-case.tsx` (e.g., `project-card.tsx`)
- **Pages:** `page.tsx` (Next.js convention)
- **Types:** `kebab-case.ts` (e.g., `project.ts`)
- **Utilities:** `kebab-case.ts` (e.g., `utils.ts`)

### 9.2 Import Order
```typescript
// 1. React / Next.js
import Link from 'next/link';
import Image from 'next/image';

// 2. Third-party
import { motion } from 'framer-motion';

// 3. shadcn/ui
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

// 4. Local components
import { ProjectCard } from '@/components/shared/project-card';

// 5. Utilities / types
import { cn } from '@/lib/utils';
import type { Project } from '@/types/project';
```

### 9.3 shadcn/ui Usage Rules
1. Install via CLI: `npx shadcn@latest add <component>`.
2. Use CSS variables for theming — never hardcode colors like `bg-blue-500`.
3. Use semantic tokens: `bg-primary`, `text-muted-foreground`, `border-border`.
4. Extend variants with `cva` when needed — don't override component source.
5. Use `cn()` for all conditional classNames.

---

## 10. Deployment & CI

| Concern | Solution |
|---|---|
| **Hosting** | Vercel (auto-deploy from `main` branch) |
| **Preview** | Vercel preview deployments on PRs |
| **Lint** | ESLint + Prettier on commit (Husky + lint-staged) |
| **Type Check** | `tsc --noEmit` in CI |
| **Build Check** | `next build` must pass before merge |

---

> [!IMPORTANT]
> **Next Step:** See [[SPEC.md]] for the complete design system specification including colors, typography, spacing, and component styling rules.
