'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';
import { FadeIn } from '@/components/motion/fade';
import { projects } from '@/lib/data';

const ease = [0.22, 1, 0.36, 1] as const;

export function OtherProjects() {
  return (
    <section id="other-projects" className="section-pad">
      <div className="container-portfolio">
        <FadeIn className="mb-12 flex flex-col gap-4">
          <span className="eyebrow">Selected Work</span>
          <h2 className="heading-lg text-balance text-foreground">
            Other projects, briefly.
          </h2>
          <p className="max-w-2xl text-pretty text-body">
            A selection of applied ML and CV work — each one a focused study in a different
            subfield of Artificial Intelligence.
          </p>
        </FadeIn>

        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project, idx) => (
            <motion.article
              key={project.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={{
                hidden: { opacity: 0, y: 18 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.55, ease, delay: idx * 0.06 },
                },
              }}
              className="card-soft card-soft-hover group flex flex-col gap-5 rounded-2xl p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-accent">
                  <Github className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <a
                  href={project.detailsUrl}
                  aria-label={`Details for ${project.title}`}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-all duration-300 group-hover:border-accent group-hover:text-accent"
                >
                  <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
                </a>
              </div>

              <div className="flex flex-col gap-3">
                <h3 className="text-lg font-semibold tracking-tight text-foreground">
                  {project.title}
                </h3>
                <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
              </div>

              <div className="mt-1 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-border bg-secondary/60 px-2.5 py-1 text-xs font-medium text-foreground/70"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex items-center gap-4 pt-2">
                <a
                  href={project.githubUrl}
                  target={project.githubUrl.startsWith('http') ? '_blank' : undefined}
                  rel={project.githubUrl.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground/80 transition-colors hover:text-accent"
                >
                  <Github className="h-4 w-4" strokeWidth={1.75} />
                  GitHub
                </a>
                <span className="h-3 w-px bg-border" />
                <a
                  href={project.detailsUrl}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground/80 transition-colors hover:text-accent"
                >
                  Details
                  <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
