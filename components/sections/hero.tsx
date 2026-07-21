'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { profile, socialIcons, stats } from '@/lib/data';
import { FadeInImmediate } from '@/components/motion/fade';
import { IconButton, LinkButton } from '@/components/link-buttons';

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 md:pt-44">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid-soft opacity-60" />
      <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(123,154,204,0.14),transparent_70%)]" />

      <div className="container-portfolio">
        <div className="flex flex-col items-start gap-10">
          <FadeInImmediate delay={0.05}>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-medium text-muted-foreground">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
              </span>
              Available for opportunities
            </span>
          </FadeInImmediate>

          <div className="max-w-4xl">
            <FadeInImmediate delay={0.12}>
              <p className="eyebrow mb-5">Artificial Intelligence · Machine Learning</p>
            </FadeInImmediate>

            <motion.h1
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.7, ease, delay: 0.18 },
                },
              }}
              className="heading-xl text-balance text-foreground"
            >
              {profile.name}
            </motion.h1>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.12, delayChildren: 0.34 },
                },
              }}
              className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-lg font-medium text-muted-foreground"
            >
              {profile.roles.map((role) => (
                <motion.span
                  key={role}
                  variants={{
                    hidden: { opacity: 0, y: 8 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
                  }}
                  className="flex items-center gap-3"
                >
                  <span>{role}</span>
                  <span className="h-1 w-1 rounded-full bg-border" aria-hidden />
                </motion.span>
              ))}
            </motion.div>

            <FadeInImmediate delay={0.6} className="mt-7">
              <p className="max-w-xl text-pretty text-lg leading-relaxed text-foreground/80">
                {profile.statement}
              </p>
            </FadeInImmediate>
          </div>

          <FadeInImmediate delay={0.72}>
            <div className="flex flex-wrap items-center gap-3">
              <LinkButton href="#projects" icon={ArrowRight}>
                View Projects
              </LinkButton>
              <LinkButton href={profile.cvUrl} variant="ghost" icon={Download}>
                Download CV
              </LinkButton>
              <div className="ml-1 flex items-center gap-2">
                <IconButton icon={socialIcons.linkedin} href={profile.linkedin} label="LinkedIn" />
                <IconButton icon={socialIcons.github} href={profile.github} label="GitHub" />
                <IconButton icon={socialIcons.email} href={`mailto:${profile.email}`} label="Email" />
              </div>
            </div>
          </FadeInImmediate>

          <FadeInImmediate delay={0.86} className="w-full">
            <div className="mt-6 grid w-full grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-card px-6 py-7">
                  <div className="text-3xl font-semibold tracking-tight text-foreground">
                    {stat.value}
                  </div>
                  <div className="mt-1.5 text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </FadeInImmediate>
        </div>
      </div>
    </section>
  );
}
