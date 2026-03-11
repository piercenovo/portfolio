# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev       # Start development server
pnpm build     # Build for production
pnpm start     # Run production build
pnpm lint      # Run ESLint
pnpm comm      # Create a conventional commit via commitizen (cz)
```

Package manager is **pnpm**. There are no tests configured.

## Architecture

Single-page Next.js 14 portfolio with TypeScript and Tailwind CSS. The page renders five sections in order: Hero → Projects → Skills → About → Contact.

### Data flow

All content lives in **`src/data/sections.ts`** — this is the primary file to edit when updating portfolio content (nav links, hero text, projects, skills, about paragraphs, contact info, socials). SVG paths for technology icons are in `src/data/svg.ts`.

### Key directories

- `src/sections/` — Full-page section components (Hero, Projects, Skills, About, Contact)
- `src/components/` — Reusable UI primitives (Navbar, Header, Footer, ProjectCard, SlideUp, etc.)
- `src/types/` — TypeScript type definitions (`global.d.ts` for base types, `data.d.ts` for section-specific types)
- `src/hooks/` — Custom hooks (`useNavbarCollapsed`, `useReference`)
- `src/utils/helper.ts` — Utility functions (e.g., `hideNavWhileScrolling`)

### Tailwind theme

Custom colors for every technology brand (e.g., `fill-nextjs`, `text-tailwindcss`) are defined in `tailwind.config.js`. Custom animation utilities (`animation-delay-*`, `animation-duration-*`) are generated via a plugin in steps of 250ms up to 2000ms. The color palette uses `primary` (slate-based dark theme) and `secondary` (sky blue) semantic tokens.

### Content updates

- **Portfolio content** → `src/data/sections.ts`
- **CV/Resume** → replace `public/curriculum.pdf` (filename must stay `curriculum.pdf`)
- **About photo** → `public/images/about.webp`
- **Theme colors** → `tailwind.config.js`
- **Custom fonts** → `src/app/fonts/` + `src/app/font.tsx` (Calibre and SFMono families)

### Commit convention

Uses commitizen with `cz-conventional-changelog`. Run `pnpm comm` instead of `git commit` for guided conventional commits. Husky and lint-staged are configured for pre-commit hooks.
