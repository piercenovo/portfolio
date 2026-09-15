# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev       # Start development server
pnpm build     # Static export to out/ (output: 'export')
pnpm lint      # ESLint 9 (eslint.config.mjs)
pnpm images    # Convert .images/*.{png,jpg,jpeg} to src/assets/projects/*.webp
pnpm comm      # Guided conventional commit (commitizen)
```

Package manager is **pnpm** — never `npm` or `yarn`. There are no tests configured.

## Architecture

Single-page Next.js 16 portfolio (App Router, React 19, TypeScript, Tailwind CSS 4) built as a **fully static site** — no server, no middleware, no API routes. Preview the build with `python3 -m http.server --directory out`.

### Routes and languages

- `src/app/(es)/` → `/` (Spanish), `src/app/(en)/en/` → `/en/` (English). Each group has its own root layout so `<html lang>` and metadata are correct in the static HTML.
- Both pages render `<Home lang />` from `src/components/home/Home.tsx`.
- Language detection is only a client-side suggestion (`LanguageSuggestion`); never redirect automatically.
- `src/i18n/config.ts` — `Locale`, `Localized<T>`, `localePath`, `otherLocale`
- `src/i18n/dictionaries/` — UI strings (`types.ts` defines `Dictionary`; `es.ts`/`en.ts` must satisfy it)
- `src/i18n/metadata.ts` — per-language metadata, hreflang alternates, Open Graph (`public/og.png`)

### Content

Entity data lives in **`src/content/`** (typed in `src/types/content.ts`). Localized fields use `{ es, en }`; a missing language is a TypeScript error.

- **Add a project** → add an object to `src/content/projects.ts` (array order = display order) and its image (see Images)
- **Add a technology** → one line in `src/content/techs.ts` (`simple-icons` icon + hover `color`); use its id in projects/skills
- **Experience** → `src/content/experience.ts` (`start`/`end` as `'YYYY-MM'`, no `end` = current)
- **Skills groups** → `src/content/skills.ts`
- **Name, email, CV paths, socials** → `src/content/profile.ts`
- **About text and photo** → `src/content/about.ts` (photo at `src/assets/about.webp`)
- **Section order / navigation** → `src/components/home/sections.ts`
- **CV/Resume** → replace `public/pierce-novoa-cv-es.pdf` (ES) or `public/pierce-novoa-cv-en.pdf` (EN)

### Images

Put originals in `.images/` (gitignored), run `pnpm images`, and import the resulting `src/assets/projects/<name>.webp` statically. `next/image` runs with `images.unoptimized: true`, so images must be optimized before committing. `pnpm images` only reads files at the top of `.images/`; unedited originals kept for reference go in `.images/originals/` (for example the blurred TransWat screenshot's source and the about photo cutout).

The about photo (`src/assets/about.webp`) is a 4:5 WebP (1200×1500): the transparent cutout composited onto the site's graphite ground with a cyan glow. Nothing in `public/` is processed, and everything in it ships, so never leave source images there.

### Server / client boundary

Sections and content rendering are Server Components. Only interactive pieces are `'use client'`: `Header`, `MobileMenu`, `LanguageSwitcher`, `LanguageSuggestion`, `BackToTop`, `ProjectsFilter`, `SkillsTabs`, `CopyEmailButton`, `Expandable`, `PowerOn`, `PlantLive`, `WeightReadout`. `Segmented` has no directive but is only rendered inside client components. Client components must not import `@/content/*` or `simple-icons`; pass data or pre-rendered elements as props (e.g. `Projects` renders each `ProjectCard` on the server and passes it to `ProjectsFilter`).

### Key directories

- `src/sections/` — page sections (Hero, Projects + ProjectsFilter, Experience, Skills + SkillsTabs, About, Contact)
- `src/components/hero/` — hero process diagram: PlantDiagram (server), PlantLive (plays the signal only while visible), WeightReadout (simulated scale reading)
- `src/components/layout/` — document shell (RootDocument, Header, MobileMenu, Footer, BackToTop, language components)
- `src/components/ui/` — primitives (Section, PowerOn, Segmented, Expandable, SvgIcon, TechIcon, ButtonLink, SocialLinks, CopyEmailButton)
- `src/components/projects/` — ProjectCard
- `src/hooks/` — `useIsClient`, `useActiveSection`

### Tailwind theme and motion

Tailwind v4 — no `tailwind.config.js`. Theme tokens live in the `@theme` block of `src/app/globals.css`: surfaces `ground` / `panel` / `raised`, hairlines `line` / `line-strong`, text `ink` / `ink-muted` / `ink-faint`, `live` (cyan: live state or primary action only), `unstable` (amber: only an unstable reading), plus `--ease-out-expo`. Brand colors are not tokens: `TechIcon` sets `--brand` inline and uses `group-hover:text-(--brand)`.

Motion is a "power-on" grammar, never slide-ins. `PowerOn` sets `data-power='off'` once JavaScript runs and switches it to `on` when the element enters the viewport; CSS then animates descendants (or the element itself) with `.boot` (blur to sharp, stagger with `--i` and `--step`), `.boot-led`, `.boot-rail` and `.boot-screen` (image scan). Without JavaScript or with `prefers-reduced-motion` content stays visible. Do not nest a `PowerOn` inside another one whose `.boot` children would match both. The hero uses its own `.plant` rules and `.power-rule` draws the section heading rule.

### Fonts

`src/app/fonts/` + `src/app/font.tsx` (Calibre and SFMono families).

### Tooling

ESLint 9 flat config (`eslint-config-next` core-web-vitals + typescript), commitlint (`@commitlint/config-conventional`), lint-staged (`eslint --fix` on `ts/tsx`) and Husky 9 hooks (`pre-commit`, `commit-msg`).

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
