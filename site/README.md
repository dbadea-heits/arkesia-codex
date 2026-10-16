# Arkesia Codex

Astro site that renders the roster notes in the parent folder. The Markdown files (`../*.md`), the
stand-alone cheat sheets (`../*.html`) and the skill icons (`../assets/icons/`) are read in place;
nothing is copied, so editing a note updates the site.

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # static site in dist/
npm run preview  # serve dist/
```

- Grouping, card labels and card icons: `src/catalog.ts`. A new note that is not listed there still
  gets a page and shows up under "More notes".
- Links such as `[x](guides.md)` or `` `guides.md` `` inside notes are rewritten to site routes by
  `src/lib/doc-links-plugin.mjs`.
- 128-character code blocks are shown as skill codes with a copy button.
- Task checkboxes (`- [ ]`) are clickable under `npm run dev`: ticking one writes `[x]` / `[ ]` back
  to that line of the Markdown file (`src/lib/task-toggle-server.mjs`). The static build has no
  server, so there they stay read-only.
