'use client';

import { Download, ExternalLink } from 'lucide-react';
import { Section, SectionHeading } from '@/components/section-heading';
import { FadeIn } from '@/components/motion/fade';
import { profile } from '@/lib/data';

export function Resume() {
  return (
    <Section id="resume">
      <SectionHeading
        eyebrow="Resume"
        title="A complete picture, on paper."
        description="View the full CV inline, or download a PDF copy for your records."
      />

      <FadeIn delay={0.08} className="mt-12">
        <div className="card-soft overflow-hidden rounded-2xl">
          <div className="flex flex-col gap-4 border-b border-border bg-secondary/40 p-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-medium text-foreground">
                {profile.name} — Curriculum Vitae
              </p>
              <p className="text-xs text-muted-foreground">PDF · Updated 2026</p>
            </div>
            <div className="flex items-center gap-3">
              <a
                href={profile.cvUrl}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
              >
                <ExternalLink className="h-4 w-4" strokeWidth={1.75} />
                Open
              </a>
              <a
                href={profile.cvUrl}
                download
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-all duration-300 hover:-translate-y-0.5 hover:bg-foreground/90"
              >
                <Download className="h-4 w-4" strokeWidth={1.75} />
                Download CV
              </a>
            </div>
          </div>

          <div className="relative aspect-[1/1.414] w-full bg-secondary/30 sm:aspect-[16/10]">
            <object
              data={profile.cvUrl}
              type="application/pdf"
              className="absolute inset-0 h-full w-full"
              aria-label={`${profile.name} CV PDF preview`}
            >
              <div className="flex h-full w-full flex-col items-center justify-center gap-3 p-8 text-center">
                <p className="text-sm text-muted-foreground">
                  The PDF preview is not available in this browser.
                </p>
                <a
                  href={profile.cvUrl}
                  download
                  className="text-sm font-medium text-accent hover:text-accent-hover"
                >
                  Download the CV instead
                </a>
              </div>
            </object>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}
