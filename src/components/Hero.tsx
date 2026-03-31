import { FileText, Linkedin, Github, Mail } from "lucide-react";
import { profile } from "@/data/profile";
import ScrollReveal from "@/components/ScrollReveal";

const ctaLinks = [
  { href: profile.resumeUrl, icon: FileText, label: "Resume" },
  { href: profile.linkedinUrl, icon: Linkedin, label: "LinkedIn" },
  { href: profile.githubUrl, icon: Github, label: "GitHub" },
  { href: profile.email.includes("@") ? `mailto:${profile.email}` : profile.email, icon: Mail, label: "Email" },
];

const Hero = () => (
  <section className="relative flex min-h-[85vh] items-end pb-24 pt-32">
    <div className="mx-auto w-full max-w-5xl px-6">
      <ScrollReveal>
        <p className="mb-4 font-display text-sm font-medium uppercase tracking-[0.25em] text-primary">
          {profile.tagline}
        </p>
        <h1 className="font-display text-5xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
          {profile.name}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
          {profile.headline}
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          {ctaLinks.map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 rounded-lg border border-border bg-secondary px-4 py-2.5 text-sm font-medium text-foreground transition-all hover:border-primary hover:text-primary"
            >
              <Icon size={16} />
              {label}
            </a>
          ))}
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default Hero;
