import { FileText, Linkedin, Github, Mail } from "lucide-react";
import { profile } from "@/data/profile";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";

const ctaLinks = [
  { href: profile.resumeUrl, icon: FileText, label: "Resume" },
  { href: profile.linkedinUrl, icon: Linkedin, label: "LinkedIn" },
  { href: profile.githubUrl, icon: Github, label: "GitHub" },
  { href: profile.email.includes("@") ? `mailto:${profile.email}` : profile.email, icon: Mail, label: "Email" },
];

const Contact = () => (
  <section className="py-24">
    <div className="mx-auto max-w-5xl px-6">
      <ScrollReveal>
        <SectionHeading>Let's Connect</SectionHeading>
        <p className="mb-10 max-w-xl text-lg leading-relaxed text-muted-foreground">
          If you're looking for someone who can build, think strategically, and bring clarity to digital products, I'd love to connect.
        </p>
        <div className="flex flex-wrap gap-3">
          {ctaLinks.map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90"
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

export default Contact;
