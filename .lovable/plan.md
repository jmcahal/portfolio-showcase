

# Resume Page — Inline Content Display

## What
Replace the current minimal Resume page with a full readable resume layout, styled to match the dark portfolio theme. Keep the download button and back link.

## Content to Render
Extracted from the PDF:

- **Header**: James Michael Cahal, Atlanta GA, email, phone, LinkedIn, GitHub
- **Summary**: AI-focused product and technology professional paragraph
- **Core Capabilities**: 4 grouped categories (AI Strategy, Product & Consulting, Technical Execution, Leadership)
- **Professional Experience**: KSU role with bullet points + Leadership subsection
- **Selected AI Projects**: 3 projects (Nonprofit Hackathon, RAG Chatbot, Copilot Studio)
- **Previous Experience**: Springboard Fellow, Director of Bands
- **Education & Certifications**: 4 items

## Layout
Single-column, max-width ~768px, left-aligned text. Each section gets a heading with the accent underline style. Download button and back link at the top. Lightweight semantic HTML — no cards or heavy components.

## Implementation
One file change: rewrite `src/pages/Resume.tsx` with all resume content hardcoded as JSX, using Tailwind classes consistent with the site theme (`font-display`, `text-foreground`, `text-muted-foreground`, `border-primary/30`, etc.).

