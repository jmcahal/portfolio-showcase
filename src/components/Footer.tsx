import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/profile";

const footerLinks = [
  { href: profile.githubUrl, icon: Github, label: "GitHub" },
  { href: profile.linkedinUrl, icon: Linkedin, label: "LinkedIn" },
  { href: profile.email.includes("@") ? `mailto:${profile.email}` : profile.email, icon: Mail, label: "Email" },
];

const Footer = () => (
  <footer className="border-t border-border py-10">
    <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
      <p className="text-sm text-muted-foreground">
        Designed and developed by Michael Cahal. © {new Date().getFullYear()}
      </p>
      <div className="flex gap-4">
        {footerLinks.map(({ href, icon: Icon, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <Icon size={18} />
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
