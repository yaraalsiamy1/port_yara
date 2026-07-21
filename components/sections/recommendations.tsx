'use client';

import { motion } from 'framer-motion';
import { Download, ExternalLink, Quote } from 'lucide-react';
import { Section, SectionHeading } from '@/components/section-heading';
import { recommendations } from '@/lib/data';

const ease = [0.22, 1, 0.36, 1] as const;

export function Recommendations() {
  return (
    <Section id="recommendations">
      <SectionHeading
        eyebrow="Recommendations"
        title="What mentors and collaborators say."
        description="Recommendations from faculty and industry mentors who supervised my work directly."
      />

      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {recommendations.map((rec, idx) => (
          <motion.article
            key={rec.name}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={{
              hidden: { opacity: 0, y: 18 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.55, ease, delay: idx * 0.08 },
              },
            }}
            className="card-soft card-soft-hover flex flex-col gap-5 rounded-2xl p-6"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-secondary text-sm font-semibold text-accent">
                {rec.name
                  .replace(/[\[\]]/g, '')
                  .split(' ')
                  .slice(0, 2)
                  .map((w) => w[0])
                  .join('')}
              </div>
              <div>
                <h3 className="text-base font-semibold tracking-tight text-foreground">
                  {rec.name}
                </h3>
                <p className="text-xs text-muted-foreground">{rec.position}</p>
                <p className="text-xs text-muted-foreground">{rec.university}</p>
              </div>
            </div>

            <Quote className="h-5 w-5 text-accent/40" strokeWidth={1.5} />

            <p className="text-pretty text-sm leading-relaxed text-foreground/80">
              {rec.summary}
            </p>

            <div className="mt-auto flex items-center gap-4 pt-2">
              <a
                href="#"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground/80 transition-colors hover:text-accent"
              >
                <ExternalLink className="h-4 w-4" strokeWidth={1.75} />
                View
              </a>
              <span className="h-3 w-px bg-border" />
              <a
                href={rec.pdfUrl}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground/80 transition-colors hover:text-accent"
              >
                <Download className="h-4 w-4" strokeWidth={1.75} />
                PDF
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
