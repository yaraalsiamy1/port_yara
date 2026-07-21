'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Network, Play } from 'lucide-react';
import { Section } from '@/components/section-heading';
import { FadeIn } from '@/components/motion/fade';
import { LinkButton } from '@/components/link-buttons';
import { Gallery } from '@/components/sections/gallery';
import { featuredProject } from '@/lib/data';

const ease = [0.22, 1, 0.36, 1] as const;

function MetricCard({
  value,
  label,
  delay,
}: {
  value: string;
  label: string;
  delay: number;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={{
        hidden: { opacity: 0, y: 18 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease, delay } },
      }}
      className="card-soft card-soft-hover rounded-2xl p-6"
    >
      <div className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        {value}
      </div>
      <div className="mt-2 text-sm text-muted-foreground">{label}</div>
    </motion.div>
  );
}

export function FeaturedProject() {
  return (
    <Section id="projects">
      <FadeIn className="mb-12 flex flex-col gap-4">
        <span className="eyebrow">Featured Project</span>
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="heading-lg text-balance text-foreground">
              {featuredProject.name} — {featuredProject.tagline}
            </h2>
            <p className="mt-3 max-w-2xl text-pretty text-body">
              {featuredProject.overview}
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-3">
            <LinkButton href={featuredProject.demoUrl} icon={Play}>
              Live Demo
            </LinkButton>
            <LinkButton href={featuredProject.githubUrl} variant="ghost" icon={Github}>
              GitHub
            </LinkButton>
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={0.05}>
        <Gallery images={featuredProject.gallery} />
      </FadeIn>

      <div className="mt-16 grid gap-10 lg:grid-cols-12">
        <div className="flex flex-col gap-10 lg:col-span-7">
          <FadeIn delay={0.05}>
            <div className="flex flex-col gap-3">
              <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">
                Problem
              </h3>
              <p className="text-pretty text-body">{featuredProject.problem}</p>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="flex flex-col gap-3">
              <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">
                Solution
              </h3>
              <p className="text-pretty text-body">{featuredProject.solution}</p>
            </div>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="flex flex-col gap-3">
              <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">
                Deployment
              </h3>
              <p className="text-pretty text-body">{featuredProject.deployment}</p>
            </div>
          </FadeIn>
        </div>

        <div className="flex flex-col gap-10 lg:col-span-5">
          <FadeIn delay={0.08}>
            <div className="card-soft rounded-2xl p-6">
              <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-accent">
                <Network className="h-4 w-4" strokeWidth={1.75} />
                Architecture
              </div>
              <p className="mt-3 text-pretty text-body">{featuredProject.architecture}</p>
              <div className="mt-6 flex h-48 items-center justify-center rounded-xl border border-dashed border-border bg-secondary/40">
                <span className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                  Architecture Diagram
                </span>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.12}>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">
                Technology Stack
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {featuredProject.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      <FadeIn delay={0.1} className="mt-16">
        <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">
          System Workflow
        </h3>
        <div className="mt-6 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {featuredProject.workflow.map((w, idx) => (
            <div key={w.step} className="bg-card p-6">
              <div className="flex items-center justify-between">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-secondary text-sm font-semibold text-accent">
                  {idx + 1}
                </span>
                <span className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
                  {w.step}
                </span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-foreground/80">{w.detail}</p>
            </div>
          ))}
        </div>
      </FadeIn>

      <div className="mt-16">
        <FadeIn>
          <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">
            Performance Metrics
          </h3>
        </FadeIn>
        <div className="mt-6 grid gap-5 sm:grid-cols-3">
          {featuredProject.metrics.map((metric, idx) => (
            <MetricCard
              key={metric.label}
              value={metric.value}
              label={metric.label}
              delay={idx * 0.08}
            />
          ))}
        </div>
      </div>

      <FadeIn delay={0.1} className="mt-12">
        <div className="card-soft flex flex-col items-start justify-between gap-5 rounded-2xl p-6 sm:flex-row sm:items-center">
          <div className="flex items-start gap-4">
            <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-success/15 text-success">
              <Play className="h-4 w-4" strokeWidth={2} />
            </span>
            <div>
              <p className="text-sm font-medium text-foreground">
                Deployed in a real cucumber greenhouse
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                {featuredProject.deployment}
              </p>
            </div>
          </div>
          <a
            href={featuredProject.demoUrl}
            className="group inline-flex items-center gap-1 text-sm font-medium text-accent transition-colors hover:text-accent-hover"
          >
            Explore the demo
            <ArrowUpRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              strokeWidth={2}
            />
          </a>
        </div>
      </FadeIn>
    </Section>
  );
}
