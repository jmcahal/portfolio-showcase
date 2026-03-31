

# Fix Resume Page Content

## Problem
The current `Resume.tsx` contains inaccurate information that doesn't match the actual resume. Key discrepancies include wrong contact info, incorrect job titles, wrong skills, wrong projects, wrong education, and more.

## Changes (single file: `src/pages/Resume.tsx`)

### Header
- Email: `jmcahal@gmail.com` → `michael.cahal@gmail.com`
- Phone: `(770) 856-2365` → `(678) 575-7916`
- LinkedIn: `linkedin.com/in/michaelcahal` → `linkedin.com/in/jmcahal`

### Summary
Replace entire paragraph with the correct one about "early-stage AI solutions and digital transformation initiatives."

### Core Capabilities
Update all four groups to match:
- **AI Strategy & Prototyping** (not "Implementation"): OpenAI/GPT-4, RAG, embeddings, vector databases (Zilliz/Milvus), Copilot Studio
- **Product & Consulting**: AI Use Case Discovery, Rapid Prototyping (0→1), Stakeholder Alignment, Workflow Automation, Digital Transformation
- **Technical Execution**: React, Node.js, Express, REST APIs, JWT, MySQL, Firestore, Docker, AWS, CI/CD
- **Leadership & Influence** (not just "Leadership"): Cross-functional Collaboration, Change Management, Technical Communication, Team Leadership

### Professional Experience
- Title: "Web Developer / AI Solutions Lead (0→1 AI Initiatives)" (not "AI Product Manager & Solutions Architect")
- Dates: "Aug 2021 – Present" (not "2022 – Present")
- Replace all bullet points with the correct ones (6 main bullets + 2 leadership bullets)

### Selected AI Projects
Replace all three projects:
1. **AI Intake Automation for Nonprofit (BuildWithChrist.ai Hackathon)** — multimodal AI intake system with ElevenLabs voice, Lovable.dev interface, 6 bullets
2. **AI Knowledge Retrieval Chatbot (RAG System)** — 2 bullets
3. **AI Workflow Automation (Copilot Studio)** — 2 bullets

### Previous Experience
- "Software Engineering Fellow — Springboard" (not "Data Science Fellow")
- "Director of Bands — Marietta City Schools" (not "Director of Bands & Music Technology, K-12 Education")
- Add description about 300+ member organization

### Education & Certifications
Replace with correct 4 items:
- Generative AI Leadership & Strategy Specialization — Vanderbilt University
- Software Engineering Certificate — Springboard
- Master of Music Education — University of Georgia
- Bachelor of Music Education — University of Georgia

