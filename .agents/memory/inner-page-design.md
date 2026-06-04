---
name: ИИ-Монолит inner-page design system
description: How the dark theme is applied to the 5 inner pages and key quirks to be aware of.
---

## CSS
- All shared styles (dark theme vars, nav, footer, a11y) live in `css/custom.css`.
- Inner pages link to `/css/custom.css` (NOT `/custom.css` — that path doesn't exist in root).
- `legal.html` has an inline `<style>` block for `.doc-card`, `.doc-header`, etc. — must use CSS vars, not `#fff`, to match dark theme.
- Bootstrap CSS/JS kept for grid and collapse functionality in inner pages.

## Nav/Footer pattern (all 5 inner pages)
- Nav: `<nav class="site-nav scrolled" id="siteNav">` with `.nav-inner` (max-width 1200px).
- A11y panel `<div class="a11y-panel" id="a11yPanel">` placed before `<nav>` in body.
- Footer: `.site-footer > .footer-inner > .footer-top + .footer-bottom` (no Bootstrap grid).
- Active nav link: `class="active"` on the matching `<a>` per page.

## JS (inline in each page)
- Theme toggle, burger menu, a11y panel: shared minified IIFE blocks in the `<script>` tag.
- Page-specific JS (QR codes, FAQ toggles, doc-header toggles) appended after shared JS.
- QR element IDs: datasets=`qr-ds`, deployment=`qr-dep`, finetuning=`qr-ft`, portfolio=`qr-port`.
- legal.html has no QR code and no qrcodejs script tag.

**Why:** index.html had all styles inline; inner pages needed shared CSS extracted to custom.css.
**How to apply:** Any future inner page should link `/css/custom.css`, use the scrolled nav pattern, and include the shared JS IIFEs.
