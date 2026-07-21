import { Award as AwardIcon } from 'lucide-react';
import { Section, SectionHeading } from '@/components/section-heading';
import { FadeIn } from '@/components/motion/fade';
import { awards } from '@/lib/data';

export function Awards() {
  return (
    <Section id="awards">
      <SectionHeading
        eyebrow="Awards"
        title="Recognition for work that shipped."
        description="Project and hackathon awards judged on technical depth, originality, and real-world impact."
      />

      <div className="mt-14 flex flex-col">
        {awards.map((award, idx) => (
          <FadeIn key={award.title} delay={idx * 0.08}>
            <div className="relative grid gap-8 border-l border-border pb-12 pl-8 last:pb-0 md:grid-cols-12 md:pl-12">
              <span className="absolute left-0 top-1.5 flex h-3 w-3 -translate-x-1/2 items-center justify-center md:left-3">
                <span className="flex h-9 w-9 -translate-x-3 items-center justify-center rounded-full border border-border bg-card text-accent">
                  <AwardIcon className="h-4 w-4" strokeWidth={1.75} />
                </span>
              </span>

              <div className="md:col-span-4">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
                  {award.year}
                </p>
                <h3 className="mt-3 text-lg font-semibold tracking-tight text-foreground">
                  {award.event}
                </h3>
              </div>

              <div className="md:col-span-8">
                <p className="text-base font-medium text-foreground">{award.title}</p>
                <p className="mt-3 text-pretty text-body">{award.description}</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
