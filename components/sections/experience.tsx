import { Section, SectionHeading } from '@/components/section-heading';
import { FadeIn } from '@/components/motion/fade';
import { experience } from '@/lib/data';

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeading
        eyebrow="Experience"
        title="Where I've applied research to practice."
        description="A timeline of roles where I turned ML research and analysis into shipped, measurable outcomes."
      />

      <div className="mt-14 flex flex-col">
        {experience.map((item, idx) => (
          <FadeIn key={item.role} delay={idx * 0.08}>
            <div className="relative grid gap-8 border-l border-border pl-8 pb-14 last:pb-0 md:grid-cols-12 md:pl-12">
              <span className="absolute left-0 top-1.5 flex h-3 w-3 -translate-x-1/2 items-center justify-center md:left-3">
                <span className="h-3 w-3 rounded-full border-2 border-accent bg-card" />
              </span>

              <div className="md:col-span-4">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
                  {item.period}
                </p>
                <h3 className="mt-3 text-xl font-semibold tracking-tight text-foreground">
                  {item.role}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">{item.company}</p>
              </div>

              <div className="md:col-span-8">
                <p className="text-pretty text-body">{item.summary}</p>
                <ul className="mt-5 flex flex-col gap-3">
                  {item.responsibilities.map((r) => (
                    <li key={r} className="flex gap-3 text-sm leading-relaxed text-foreground/80">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/70" />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
