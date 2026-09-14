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

Tailwind v4 — no `tailwind.config.js`. All theme tokens live in the `@theme` block at the top of `src/app/globals.css`:
- **Colors**: `--color-primary-*`, `--color-secondary-*`, and one token per tech brand (e.g., `--color-nextjs`, `--color-tailwindcss`)
- **Animations/keyframes**: `--animate-fade-in`, `--animate-profile`, `--animate-arrow`, etc. Keyframes are defined right after the `@theme` block
- **Custom utilities**: `animation-delay-{250,500,1000}` and `animation-duration-{1000,1500}` are defined with `@utility` directives
- **Shadows/sizes**: `--shadow-image`, `--drop-shadow-white`, `--max-width-8xl`, `--max-width-prose-lg`

### Content updates

- **Portfolio content** → `src/data/sections.ts`
- **CV/Resume** → replace `public/curriculum.pdf` (filename must stay `curriculum.pdf`)
- **About photo** → `public/images/about.webp`
- **Theme colors / animations** → `src/app/globals.css` (`@theme` block)
- **Custom fonts** → `src/app/fonts/` + `src/app/font.tsx` (Calibre and SFMono families)

## Git

- **Ramas:** `main` (producción), `develop` (integración), `feature/*`, `fix/*`
- **No hacer `git push` al terminar una tarea** — solo commitear localmente; el push lo decide el usuario
- **No hacer `git commit` hasta que el usuario confirme que la tarea está concluida**
- **No incluir la línea `Co-Authored-By` en los mensajes de commit**
- **Merge de `feature/*` o `fix/*` hacia `develop`**, y **merge de `develop` hacia `main`**: hacerlo sin generar un commit de merge adicional (fast-forward, ej. `git merge --ff-only`; si no es posible, hacer rebase primero)
- **Mensajes de commit:** seguir la convención de [Conventional Commits](https://www.conventionalcommits.org/) (`tipo(scope): descripción`, tipos como `feat`, `fix`, `chore`, `refactor`, `docs`, `style`, `test`) — el mensaje se escribe en **inglés**
- `pnpm comm` (commitizen) sigue disponible para commits guiados; Husky valida el mensaje en `commit-msg` y corre lint-staged en `pre-commit`
- `docs/` está en `.gitignore`: los specs y planes (`docs/superpowers/`) son solo locales

## Cuándo correr lint y build

- **No correr lint ni build después de cada cambio.** Solo cuando el usuario lo pida explícitamente, o justo antes de hacer un commit.

## Antes de hacer commit

```bash
pnpm lint
pnpm build
```
