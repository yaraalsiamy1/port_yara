import { Section, SectionHeading } from '@/components/section-heading';
import { FadeIn } from '@/components/motion/fade';
import { about, education } from '@/lib/data';

export function About() {
  return (
    <Section id="about">
      <div className="grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHeading
            eyebrow="About"
            title="A first-cohort AI graduate focused on real-world systems."
          />
        </div>

        <div className="flex flex-col gap-8 lg:col-span-7">
          <FadeIn delay={0.05}>
            <p className="text-pretty text-lg leading-relaxed text-foreground/85">
              {about.summary}
            </p>
          </FadeIn>
          <FadeIn delay={0.12}>
            <p className="text-pretty text-body">{about.focus}</p>
          </FadeIn>

          <FadeIn delay={0.18}>
            <ul className="mt-2 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {about.expertise.map(({ label, icon: Icon }) => (
                <li
                  key={label}
                  className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary text-accent">
                    <Icon className="h-[18px] w-[18px]" strokeWidth={1.75} />
                  </span>
                  <span className="text-sm font-medium text-foreground">{label}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </div>

      <FadeIn delay={0.1} className="mt-16">
        <div className="card-soft overflow-hidden rounded-2xl">
          <div className="grid gap-px bg-border md:grid-cols-4">
            <div className="bg-card p-6 md:col-span-2">
              <span className="eyebrow">Education</span>
              <h3 className="mt-3 text-xl font-semibold tracking-tight text-foreground">
                {education.degree}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">{education.institution}</p>
              <p className="mt-3 text-sm text-muted-foreground">{education.period}</p>
            </div>
            <div className="bg-card p-6">
              <span className="eyebrow">GPA</span>
              <div className="mt-3 text-2xl font-semibold text-foreground">{education.gpa}</div>
              <div className="mt-1 text-sm text-muted-foreground">{education.honors}</div>
            </div>
            <div className="bg-card p-6">
              <span className="eyebrow">Cohort</span>
              <div className="mt-3 text-sm leading-relaxed text-foreground">
                {education.cohort}
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}
