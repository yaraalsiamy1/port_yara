'use client';

import { useState } from 'react';
import { Send } from 'lucide-react';
import { Section, SectionHeading } from '@/components/section-heading';
import { FadeIn } from '@/components/motion/fade';
import { contactItems, profile } from '@/lib/data';

export function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const subject = encodeURIComponent(`Portfolio enquiry from ${data.get('name') || 'someone'}`);
    const body = encodeURIComponent(String(data.get('message') || ''));
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <Section id="contact">
      <div className="grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHeading
            eyebrow="Contact"
            title="Let's build something intelligent."
            description="Whether you're a committee, a recruiter, or a researcher — I'd be glad to talk. Reach out through any channel below."
          />

          <FadeIn delay={0.1} className="mt-8">
            <ul className="flex flex-col gap-3">
              {contactItems.map(({ label, value, icon: Icon, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="group flex items-center gap-4 rounded-xl border border-border bg-card px-4 py-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-accent">
                      <Icon className="h-[18px] w-[18px]" strokeWidth={1.75} />
                    </span>
                    <div className="flex flex-col">
                      <span className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                        {label}
                      </span>
                      <span className="text-sm font-medium text-foreground">{value}</span>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>

        <div className="lg:col-span-7">
          <FadeIn delay={0.12}>
            <form
              onSubmit={onSubmit}
              className="card-soft flex flex-col gap-5 rounded-2xl p-6 sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className="rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-accent"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@university.edu"
                    className="rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-accent"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="text-sm font-medium text-foreground">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="What is this about?"
                  className="rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-accent"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me a little about why you're reaching out."
                  className="resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-accent"
                />
              </div>

              <button
                type="submit"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-all duration-300 hover:-translate-y-0.5 hover:bg-foreground/90"
              >
                <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" strokeWidth={2} />
                {sent ? 'Opening your email…' : 'Send message'}
              </button>

              {sent ? (
                <p className="text-xs text-muted-foreground">
                  Your email client should now be open with the message pre-filled.
                </p>
              ) : null}
            </form>
          </FadeIn>
        </div>
      </div>
    </Section>
  );
}
