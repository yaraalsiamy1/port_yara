import type { ReactNode } from 'react';
import { FadeIn } from '@/components/motion/fade';

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
}: SectionHeadingProps) {
  const alignment = align === 'center' ? 'items-center text-center' : 'items-start text-left';
  return (
    <FadeIn className={`flex flex-col ${alignment} gap-4`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="heading-lg text-balance text-foreground">{title}</h2>
      {description ? (
        <p className="max-w-2xl text-pretty text-body">{description}</p>
      ) : null}
    </FadeIn>
  );
}

type SectionProps = {
  id: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`section-pad ${className}`}>
      <div className="container-portfolio">{children}</div>
    </section>
  );
}
