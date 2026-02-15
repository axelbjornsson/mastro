# Copilot Instructions for This Repository

Use `ai/AI_CONTEXT.md` as the source of truth for project goals, scope, and coding preferences.

## High-priority behavior
- Build for a personal portfolio + blog.
- Use TypeScript only for application code.
- Keep solutions simple and maintainable.
- Make focused, minimal diffs.
- Prefer semantic HTML and accessibility.
- Match existing file structure and naming patterns.

## Project conventions
- Routes: `routes/*.server.ts`
- Shared layout: `components/Layout.ts`
- Global styles: `routes/styles.css`
- Framework imports should stay consistent with existing Mastro usage.

## Guardrails
- Do not introduce unnecessary dependencies.
- Do not perform broad refactors unless asked.
- Do not add unrelated features.
- Preserve readability over cleverness.

## If requirements are unclear
- Default to the simplest implementation that satisfies the request.
- Leave concise notes in the handoff message about assumptions.
