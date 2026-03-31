import { skillGroups } from "@/data/skills";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";

const Skills = () => (
  <section className="py-24">
    <div className="mx-auto max-w-5xl px-6">
      <ScrollReveal>
        <SectionHeading>What I Bring</SectionHeading>
      </ScrollReveal>
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((group) => (
          <ScrollReveal key={group.category}>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              {group.category}
            </p>
            <ul className="space-y-2.5">
              {group.items.map((item) => (
                <li key={item} className="text-sm text-muted-foreground">
                  {item}
                </li>
              ))}
            </ul>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
