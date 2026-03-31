import { Link } from "react-router-dom";
import { ArrowLeft, Download } from "lucide-react";

const SectionTitle = ({ children }: { children: string }) => (
  <div className="mt-12 mb-4">
    <h2 className="font-display text-xl font-bold tracking-tight text-foreground">
      {children}
    </h2>
    <div className="mt-2 h-0.5 w-10 rounded-full bg-primary" />
  </div>
);

const Resume = () => (
  <div className="min-h-screen bg-background px-6 py-16">
    <div className="mx-auto w-full max-w-3xl">
      {/* Nav */}
      <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft size={14} />
          Back to Portfolio
        </Link>
        <a
          href="/resume.pdf"
          download
          className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90"
        >
          <Download size={14} />
          Download PDF
        </a>
      </div>

      {/* Header */}
      <h1 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        James Michael Cahal
      </h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Atlanta, GA &nbsp;·&nbsp; jmcahal@gmail.com &nbsp;·&nbsp; (770) 856-2365 &nbsp;·&nbsp;{" "}
        <a href="https://linkedin.com/in/michaelcahal" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">LinkedIn</a> &nbsp;·&nbsp;{" "}
        <a href="https://github.com/jmcahal" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">GitHub</a>
      </p>

      {/* Summary */}
      <SectionTitle>Summary</SectionTitle>
      <p className="text-sm leading-relaxed text-muted-foreground">
        AI-focused product and technology professional with a unique blend of technical execution, strategic consulting, and cross-functional leadership. Currently building AI solutions in higher education while leading product-oriented consulting engagements. Passionate about translating complex AI capabilities into practical, user-centered products that drive measurable outcomes.
      </p>

      {/* Core Capabilities */}
      <SectionTitle>Core Capabilities</SectionTitle>
      <div className="grid gap-4 sm:grid-cols-2">
        {[
          { title: "AI Strategy & Implementation", items: ["Generative AI (GPT, Claude, Gemini)", "RAG Architecture & Vector Search", "Prompt Engineering & LLM Evaluation", "AI Agent Design & Orchestration"] },
          { title: "Product & Consulting", items: ["Product Strategy & Roadmapping", "Stakeholder Management", "Requirements Gathering & Analysis", "Go-to-Market Planning"] },
          { title: "Technical Execution", items: ["React / TypeScript / Python", "Firebase / Supabase / SQL", "API Integration & Design", "Agile / Scrum Methodologies"] },
          { title: "Leadership", items: ["Cross-Functional Team Leadership", "Executive Communication", "Change Management", "Mentoring & Talent Development"] },
        ].map((group) => (
          <div key={group.title}>
            <h3 className="mb-1.5 text-sm font-semibold text-foreground">{group.title}</h3>
            <ul className="space-y-0.5 text-sm text-muted-foreground">
              {group.items.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Professional Experience */}
      <SectionTitle>Professional Experience</SectionTitle>
      <div>
        <h3 className="text-base font-semibold text-foreground">
          AI Product Manager &amp; Solutions Architect
        </h3>
        <p className="text-sm text-muted-foreground">
          Kennesaw State University · 2022 – Present
        </p>
        <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground">
          {[
            "Lead AI strategy and implementation across university technology services, partnering with academic and administrative units to identify high-impact automation opportunities.",
            "Architect and deploy RAG-based AI systems using Azure OpenAI, LangChain, and vector databases to provide context-aware responses from institutional knowledge bases.",
            "Design and build AI-powered chatbots and virtual assistants using Microsoft Copilot Studio, reducing support ticket volume by 35% in pilot departments.",
            "Develop custom AI applications using React, TypeScript, and Python, integrating with university APIs and databases to streamline workflows.",
            "Create AI governance frameworks and usage policies, establishing responsible AI practices adopted across multiple departments.",
            "Lead cross-functional teams of developers, designers, and subject matter experts through agile development cycles.",
          ].map((bullet) => (
            <li key={bullet.slice(0, 30)} className="flex items-start gap-2">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
              {bullet}
            </li>
          ))}
        </ul>

        <h4 className="mt-6 text-sm font-semibold text-foreground">Leadership &amp; Collaboration</h4>
        <ul className="mt-2 space-y-2 text-sm leading-relaxed text-muted-foreground">
          {[
            "Serve as primary AI advisor to senior IT leadership, translating technical capabilities into strategic recommendations.",
            "Facilitate AI literacy workshops and training sessions for faculty and staff, building organizational capacity for AI adoption.",
            "Manage vendor relationships and evaluate emerging AI tools and platforms for institutional fit.",
          ].map((bullet) => (
            <li key={bullet.slice(0, 30)} className="flex items-start gap-2">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
              {bullet}
            </li>
          ))}
        </ul>
      </div>

      {/* Selected AI Projects */}
      <SectionTitle>Selected AI Projects</SectionTitle>
      <div className="space-y-6">
        {[
          {
            name: "Nonprofit AI Hackathon Platform",
            desc: "Designed and led a 48-hour AI hackathon connecting student developers with local nonprofits. Built the event platform in React and coordinated cross-functional teams to deliver working AI prototypes for real organizations.",
          },
          {
            name: "RAG-Powered Knowledge Chatbot",
            desc: "Architected a retrieval-augmented generation system using Azure OpenAI and LangChain to provide accurate, citation-backed answers from 10,000+ institutional documents. Reduced average query resolution time by 60%.",
          },
          {
            name: "Copilot Studio Virtual Assistant",
            desc: "Designed and deployed a Microsoft Copilot Studio-based assistant for IT service management, handling 500+ monthly interactions with 85% resolution rate without human escalation.",
          },
        ].map((project) => (
          <div key={project.name}>
            <h3 className="text-sm font-semibold text-foreground">{project.name}</h3>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{project.desc}</p>
          </div>
        ))}
      </div>

      {/* Previous Experience */}
      <SectionTitle>Previous Experience</SectionTitle>
      <div className="space-y-4">
        <div>
          <h3 className="text-sm font-semibold text-foreground">Data Science Fellow</h3>
          <p className="text-sm text-muted-foreground">Springboard · 2021 – 2022</p>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-foreground">Director of Bands &amp; Music Technology</h3>
          <p className="text-sm text-muted-foreground">K-12 Education · 2008 – 2021</p>
        </div>
      </div>

      {/* Education & Certifications */}
      <SectionTitle>Education &amp; Certifications</SectionTitle>
      <ul className="space-y-2 text-sm text-muted-foreground">
        <li>M.Ed. in Music Education — University of Georgia</li>
        <li>B.M. in Music Performance — Kennesaw State University</li>
        <li>Springboard Data Science Career Track Certificate</li>
        <li>Microsoft Certified: Azure AI Fundamentals (AI-900)</li>
      </ul>

      {/* Bottom spacer */}
      <div className="h-16" />
    </div>
  </div>
);

export default Resume;
