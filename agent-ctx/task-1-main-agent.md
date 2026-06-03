# Task: Build ИИ-Монолит Single-Page Website

## Summary
Built a complete single-page website for "ИИ-Монолит" (AI services company) using Next.js 16, TypeScript, Tailwind CSS 4, shadcn/ui, framer-motion, and qrcode.react.

## Files Created/Modified

### Modified Files
1. **`src/app/globals.css`** - Updated color variables to teal/cyan brand theme (#0f8ec2)
2. **`src/app/layout.tsx`** - Changed metadata to Russian, set lang="ru", added scroll-smooth class
3. **`src/app/page.tsx`** - Rewrote to compose all 6 sections + header + footer

### New Component Files
1. **`src/components/header.tsx`** - Sticky header with desktop nav + mobile hamburger (Sheet)
2. **`src/components/footer.tsx`** - Footer with brand info, navigation, contact + QR code
3. **`src/components/contact-block.tsx`** - Reusable contact CTA with Max link + QR code (3 variants)
4. **`src/components/faq-section.tsx`** - Reusable FAQ accordion component
5. **`src/components/hero-section.tsx`** - Full-viewport hero with ai_tutor.jpg background
6. **`src/components/datasets-section.tsx`** - Datasets commercial section with process, benefits, FAQ
7. **`src/components/deployment-section.tsx`** - Deployment commercial section
8. **`src/components/fine-tuning-section.tsx`** - Fine-tuning commercial section
9. **`src/components/portfolio-section.tsx`** - Portfolio/expertise section with 6 case cards
10. **`src/components/legal-section.tsx`** - Legal section with 6 accordion items

## Key Features
- 6 sections as single-page with anchor-based navigation
- Smooth scroll behavior
- Responsive design (mobile-first with hamburger menu)
- Brand color #0f8ec2 applied via CSS variables
- QR code generated from Max messenger URL using qrcode.react
- FAQ accordions with all specified questions/answers
- Professional Russian content (150+ words per section)
- Framer Motion animations (fade-in-up on scroll)
- Sticky header with scroll-aware transparency
- Footer with mt-auto for sticky footer pattern
- Legal section per ФЗ-152 with NPD tax regime info

## Lint Status
✅ All lint checks pass with no errors or warnings.
