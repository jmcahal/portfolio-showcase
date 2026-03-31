import { MapPin } from "lucide-react";
import { profile } from "@/data/profile";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";

const About = () => (
  <section className="py-24">
    <div className="mx-auto max-w-5xl px-6">
      <ScrollReveal>
        <SectionHeading>About</SectionHeading>
        <div className="max-w-2xl">
          <p className="text-lg leading-relaxed text-muted-foreground">
            {profile.shortAbout}
          </p>
          <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin size={14} className="text-primary" />
            {profile.location}
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default About;
