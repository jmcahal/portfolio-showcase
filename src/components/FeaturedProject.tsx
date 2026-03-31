import { ExternalLink, Github } from "lucide-react";
import { featuredProject } from "@/data/projects";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import { Badge } from "@/components/ui/badge";
import vaccineGameImg from "@/assets/vaccine-game.png";

const FeaturedProject = () => {
  const project = featuredProject;

  return (
    <section className="py-24">
      <div className="mx-auto max-w-5xl px-6">
        <ScrollReveal>
          <SectionHeading>Featured Project</SectionHeading>
        </ScrollReveal>

        <div className="grid gap-12 lg:grid-cols-5">
          {/* Left column — 3/5 */}
          <div className="lg:col-span-3">
            <ScrollReveal>
              <img
                src={vaccineGameImg}
                alt={`${project.title} screenshot`}
                className="mb-6 w-full rounded-lg border border-border shadow-md"
              />
              <div className="mb-4 flex flex-wrap items-center gap-3">
                <h3 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
                  {project.title}
                </h3>
                <Badge variant="outline" className="border-primary/40 text-primary text-xs">
                  {project.status}
                </Badge>
              </div>
              <p className="mb-2 text-sm font-medium text-primary">{project.role}</p>
              <p className="mb-6 text-base leading-relaxed text-muted-foreground">
                {project.expandedDescription}
              </p>
              <div className="rounded-lg border border-border bg-secondary/50 p-5">
                <p className="text-sm font-medium text-foreground">Why it matters</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {project.whyItMatters}
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Right column — 2/5 */}
          <div className="lg:col-span-2">
            <ScrollReveal>
              <div className="mb-8">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  Tech Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-border bg-secondary px-2.5 py-1 text-xs text-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  Key Contributions
                </p>
                <ul className="space-y-3">
                  {project.contributions.map((item, i) => (
                    <li key={i} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-lg border border-border bg-secondary px-4 py-2 text-sm font-medium text-foreground transition-all hover:border-primary hover:text-primary"
                  >
                    <ExternalLink size={14} />
                    Live Demo
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-lg border border-border bg-secondary px-4 py-2 text-sm font-medium text-foreground transition-all hover:border-primary hover:text-primary"
                  >
                    <Github size={14} />
                    Source Code
                  </a>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;
