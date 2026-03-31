

# Portfolio Build Plan — Michael Cahal

## Content Status

All content is ready. The featured project is now **Vaccine Game** — a multiplayer outbreak strategy game built with React, TypeScript, Firebase, and Framer Motion. Live links and GitHub repo are provided.

**Still placeholder:** Resume URL, LinkedIn URL, GitHub profile URL, Email address. These can be swapped in `profile.ts` later.

---

## Page Structure

```text
HERO          → Name, headline, tagline, 4 CTA buttons
ABOUT         → Short bio + location
FEATURED      → Vaccine Game — full case-study layout
SKILLS        → "What I Bring" — 4 grouped categories
CONTACT       → "Let's Connect" + CTA buttons
FOOTER        → Attribution line + icon links
```

---

## Visual Direction

- **Dark theme:** Near-black background (~`hsl(220, 15%, 7%)`), off-white text, muted teal accent
- **Typography:** Space Grotesk (headings) + Inter (body) via Google Fonts
- **Layout:** Left-aligned hero, asymmetric featured project section, max-width ~1100px
- **Motion:** Fade-in-up on scroll via IntersectionObserver, respects `prefers-reduced-motion`

---

## File Plan

### New files

| File | Purpose |
|------|---------|
| `src/types/portfolio.ts` | `Project` and `SiteProfile` interfaces per foundation contract |
| `src/data/profile.ts` | Name, headline, tagline, bio, CTA links |
| `src/data/projects.ts` | Vaccine Game project data |
| `src/data/skills.ts` | 4 skill groups with items |
| `src/components/Hero.tsx` | Name (5xl–7xl), headline, tagline, 4 icon CTAs |
| `src/components/About.tsx` | `shortAbout` + location badge |
| `src/components/FeaturedProject.tsx` | Two-column case study: left = descriptions + "why it matters"; right = tech stack pills + contributions list + links |
| `src/components/Skills.tsx` | 4 category columns with pill tags |
| `src/components/Contact.tsx` | Heading + copy + CTA buttons |
| `src/components/Footer.tsx` | Attribution + year + icon links |
| `src/components/SectionHeading.tsx` | Reusable section title with accent underline |
| `src/components/ScrollReveal.tsx` | IntersectionObserver fade-in wrapper |

### Modified files

| File | Changes |
|------|---------|
| `src/pages/Index.tsx` | Compose all sections in order |
| `src/index.css` | Dark theme CSS variables, Google Font imports |
| `tailwind.config.ts` | Add `fontFamily` for Space Grotesk, fade-in keyframe/animation |
| `index.html` | Title → "Michael Cahal — Web Developer", update meta/OG tags |

---

## Key Decisions

- **Data-driven:** All content in `src/data/`. Adding future projects = adding to `projects.ts` only.
- **Featured project centerpiece:** Full-width section with generous vertical space; expanded description, "why it matters," tech stack, contributions, outcomes, and live/GitHub links all visible.
- **Vaccine Game links:** GitHub → `https://github.com/jmcahal/v`, Live → `https://vaccinegame-c0029.firebaseapp.com/`
- **CTAs:** Hero uses compact icon buttons; Contact section uses full-size buttons. All external links get `target="_blank" rel="noopener noreferrer"`.
- **No screenshot:** Design handles missing `imageUrl` gracefully — no broken image placeholder.
- **Accessibility:** Semantic HTML, keyboard nav, visible focus states, contrast-compliant colors, `prefers-reduced-motion` support.

