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
        Atlanta, GA &nbsp;·&nbsp; michael.cahal@gmail.com &nbsp;·&nbsp; (678) 575-7916 &nbsp;·&nbsp;{" "}
        <a href="https://linkedin.com/in/jmcahal" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">LinkedIn</a> &nbsp;·&nbsp;{" "}
        <a href="https://github.com/jmcahal" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">GitHub</a>
      </p>

      {/* Summary */}
      <SectionTitle>Summary</SectionTitle>
      <p className="text-sm leading-relaxed text-muted-foreground">
        AI-focused product and technology professional specializing in the design and implementation of early-stage AI solutions and digital transformation initiatives. Experienced in identifying high-impact use cases, building functional prototypes, and enabling organizational adoption of emerging technologies. Combines full-stack engineering expertise with strategic insight to translate AI capabilities into practical, scalable solutions.
      </p>

      {/* Core Capabilities */}
      <SectionTitle>Core Capabilities</SectionTitle>
      <div className="grid gap-4 sm:grid-cols-2">
        {[
          { title: "AI Strategy & Prototyping", items: ["Generative AI (OpenAI, GPT-4)", "Retrieval-Augmented Generation (RAG)", "Embeddings & Vector Databases (Zilliz/Milvus)", "Copilot Studio"] },
          { title: "Product & Consulting", items: ["AI Use Case Discovery", "Rapid Prototyping (0→1)", "Stakeholder Alignment", "Workflow Automation", "Digital Transformation"] },
          { title: "Technical Execution", items: ["React, Node.js, Express", "REST APIs, Authentication (JWT)", "MySQL, Firestore", "Docker, AWS, CI/CD"] },
          { title: "Leadership & Influence", items: ["Cross-functional Collaboration", "Change Management", "Technical Communication", "Team Leadership"] },
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
          Web Developer / AI Solutions Lead (0→1 AI Initiatives)
        </h3>
        <p className="text-sm text-muted-foreground">
          Kennesaw State University — Kennesaw, GA · Aug 2021 – Present
        </p>
        <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground">
          {[
            "Designed and implemented AI-powered knowledge retrieval systems using OpenAI (GPT-4) and vector databases (Zilliz/Milvus), improving access to institutional information through natural language interfaces",
            "Led early-stage AI prototyping efforts (0→1), rapidly building and testing solutions to evaluate feasibility, usability, and organizational fit",
            "Developed and deployed chatbot workflows using Microsoft Copilot Studio, integrating custom logic to automate information access and support interactions",
            "Identified and prioritized AI use cases across business processes, translating emerging capabilities into actionable solutions despite evolving organizational readiness",
            "Acted as a bridge between technical teams and stakeholders, aligning AI initiatives with institutional goals and guiding adoption conversations",
            "Spearheaded a university-wide web modernization effort, building reusable CMS components and scalable design systems",
            "Built and deployed a Software Inventory platform (React, Node.js, MySQL) to modernize asset tracking and improve operational visibility",
          ].map((bullet) => (
            <li key={bullet.slice(0, 40)} className="flex items-start gap-2">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
              {bullet}
            </li>
          ))}
        </ul>

        <h4 className="mt-6 text-sm font-semibold text-foreground">Leadership &amp; Organizational Impact</h4>
        <ul className="mt-2 space-y-2 text-sm leading-relaxed text-muted-foreground">
          {[
            "IT Workforce Engagement Captain: Collaborated with leadership to design and implement initiatives improving employee engagement and internal communication",
            "Contributed to shaping innovation culture and AI readiness, helping introduce new technologies into a traditionally risk-averse environment",
          ].map((bullet) => (
            <li key={bullet.slice(0, 40)} className="flex items-start gap-2">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
              {bullet}
            </li>
          ))}
        </ul>
      </div>

      {/* Selected AI Projects */}
      <SectionTitle>Selected AI Projects</SectionTitle>
      <div className="space-y-6">
        <div>
          <h3 className="text-sm font-semibold text-foreground">AI Intake Automation for Nonprofit (BuildWithChrist.ai Hackathon)</h3>
          <ul className="mt-2 space-y-2 text-sm leading-relaxed text-muted-foreground">
            {[
              "Designed and built a multimodal AI intake system for a Catholic Charities Adopt-a-Family program, enabling volunteers to collect and structure family data more efficiently",
              "Implemented voice-based intake workflows using ElevenLabs, allowing real-time conversation with families in English and Spanish to reduce language barriers",
              "Developed an intake interface using Lovable.dev that supports three input methods: live conversation, AI-assisted voice agent, and document/image uploads (PDF scanning)",
              "Leveraged AI to extract, structure, and populate form data automatically, reducing manual entry and improving consistency of collected information",
              "Applied rapid 0→1 product development in a constrained timeframe, iterating on user experience, intake flows, and AI interactions",
              "Presented a live demo to peers and organizers, communicating technical implementation and real-world impact",
            ].map((bullet) => (
              <li key={bullet.slice(0, 40)} className="flex items-start gap-2">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                {bullet}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-foreground">AI Knowledge Retrieval Chatbot (RAG System)</h3>
          <ul className="mt-2 space-y-1.5 text-sm leading-relaxed text-muted-foreground">
            <li className="flex items-start gap-2"><span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />Built a chatbot leveraging OpenAI and vector embeddings to retrieve and summarize domain-specific content</li>
            <li className="flex items-start gap-2"><span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />Enabled natural language querying of structured and unstructured data sources</li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-foreground">AI Workflow Automation (Copilot Studio)</h3>
          <ul className="mt-2 space-y-1.5 text-sm leading-relaxed text-muted-foreground">
            <li className="flex items-start gap-2"><span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />Designed conversational workflows to automate internal support interactions</li>
            <li className="flex items-start gap-2"><span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />Integrated custom logic to guide users through processes and reduce friction in information access</li>
          </ul>
        </div>
      </div>

      {/* Previous Experience */}
      <SectionTitle>Previous Experience</SectionTitle>
      <div className="space-y-4">
        <div>
          <h3 className="text-sm font-semibold text-foreground">Software Engineering Fellow</h3>
          <p className="text-sm text-muted-foreground">Springboard</p>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-foreground">Director of Bands</h3>
          <p className="text-sm text-muted-foreground">Marietta City Schools</p>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
            Led a 300+ member organization and team of instructors, developing leadership, communication, and operational management skills transferable to technical and product environments.
          </p>
        </div>
      </div>

      {/* Education & Certifications */}
      <SectionTitle>Education &amp; Certifications</SectionTitle>
      <ul className="space-y-2 text-sm text-muted-foreground">
        <li>Generative AI Leadership &amp; Strategy Specialization — Vanderbilt University</li>
        <li>Software Engineering Certificate — Springboard</li>
        <li>Master of Music Education — University of Georgia</li>
        <li>Bachelor of Music Education — University of Georgia</li>
      </ul>

      <div className="h-16" />
    </div>
  </div>
);

export default Resume;
