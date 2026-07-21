import type { LucideIcon } from 'lucide-react';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

type IconButtonProps = {
  icon: LucideIcon;
  href: string;
  label: string;
  className?: string;
};

export function IconButton({ icon: Icon, href, label, className }: IconButtonProps) {
  return (
    <a
      href={href}
      aria-label={label}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      className={cn(
        'flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent',
        className,
      )}
    >
      <Icon className="h-[18px] w-[18px]" strokeWidth={1.75} />
    </a>
  );
}

type LinkButtonProps = {
  href: string;
  children: React.ReactNode;
  icon?: LucideIcon;
  variant?: 'primary' | 'ghost';
  className?: string;
};

export function LinkButton({
  href,
  children,
  icon: Icon,
  variant = 'primary',
  className,
}: LinkButtonProps) {
  const base =
    'group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300';
  const variants = {
    primary:
      'bg-foreground text-background hover:bg-foreground/90 hover:-translate-y-0.5 shadow-[0_8px_24px_-12px_rgba(17,24,39,0.4)]',
    ghost:
      'border border-border bg-card text-foreground hover:border-accent hover:text-accent hover:-translate-y-0.5',
  };
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      className={cn(base, variants[variant], className)}
    >
      {children}
      {Icon ? (
        <Icon
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
          strokeWidth={2}
        />
      ) : null}
    </a>
  );
}

export function ArrowLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      className="group inline-flex items-center gap-1 text-sm font-medium text-accent transition-colors hover:text-accent-hover"
    >
      {children}
      <ArrowUpRight
        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        strokeWidth={2}
      />
    </a>
  );
}
