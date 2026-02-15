# AI Context: Portfolio + Blog (Mastro)

## Project Goal

Build a personal website with two core areas:

- Portfolio: selected projects, case studies, and contact CTA.
- Blog: posts about development, learning notes, and experiments.

This repo starts from the Mastro basic template and should stay simple, fast, and content-focused.

## Current Stack

- Framework: `@mastrojs/mastro`
- Runtime: Bun
- Language: TypeScript-only for application code
- Server routes in `routes/*.server.ts`
- Components in `components/*.ts`
- Global styles in `routes/styles.css`

## Existing Structure

- `components/Layout.ts`: base HTML shell and page title.
- `routes/index.server.ts`: homepage route.
- `routes/styles.css`: global typography/layout defaults.

## Coding Preferences

- Keep implementations minimal and readable.
- Prefer server-rendered pages unless client JS is clearly needed.
- Reuse `Layout` for all routes unless a route requires a special shell.
- Avoid adding dependencies unless they provide clear value.
- Preserve simple semantic HTML first, then style.

## Content/UX Direction

- Tone: clean, professional, approachable.
- Portfolio pages should prioritize clarity and outcomes.
- Blog pages should optimize readability (comfortable line length, spacing, headings).
- Navigation should stay small and obvious.

## Planned Site Sections

- `/` Home (intro + featured work + latest posts)
- `/portfolio` Project list
- `/portfolio/[slug]` Project detail
- `/blog` Post list
- `/blog/[slug]` Post detail
- `/about` Short bio
- `/contact` Contact options

## Reusable AI Task Checklist

When making changes, prefer this order:

1. Update route/component structure.
2. Keep content semantic and accessible.
3. Add or refine styles with small, focused changes.
4. Verify no unnecessary complexity was introduced.

## Definition of Done (for AI tasks)

- Works with existing Mastro conventions.
- Keeps files small and easy to scan.
- No unrelated refactors.
- Clear page title and semantic heading structure.
