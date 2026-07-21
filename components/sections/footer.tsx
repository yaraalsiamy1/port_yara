import { profile, socialIcons } from '@/lib/data';
import { IconButton } from '@/components/link-buttons';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border">
      <div className="container-portfolio flex flex-col items-center gap-6 py-12 text-center">
        <a
          href="#home"
          className="flex h-9 w-9 items-center justify-center rounded-lg bg-foreground text-background"
          aria-label="Back to top"
        >
          Y
        </a>
        <div className="flex items-center gap-2">
          <IconButton icon={socialIcons.linkedin} href={profile.linkedin} label="LinkedIn" />
          <IconButton icon={socialIcons.github} href={profile.github} label="GitHub" />
          <IconButton icon={socialIcons.email} href={`mailto:${profile.email}`} label="Email" />
        </div>
        <p className="text-sm text-muted-foreground">
          © {year} {profile.name}. All rights reserved.
        </p>
        <p className="text-xs text-muted-foreground/70">
          Designed and built with care.
        </p>
      </div>
    </footer>
  );
}
