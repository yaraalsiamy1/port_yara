import { Navbar } from '@/components/sections/navbar';
import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { Experience } from '@/components/sections/experience';
import { FeaturedProject } from '@/components/sections/featured-project';
import { OtherProjects } from '@/components/sections/other-projects';
import { Awards } from '@/components/sections/awards';
import { Recommendations } from '@/components/sections/recommendations';
import { Resume } from '@/components/sections/resume';
import { Contact } from '@/components/sections/contact';
import { Footer } from '@/components/sections/footer';

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Yara Ismail Alsiamy',
  jobTitle: 'Artificial Intelligence Graduate',
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'Umm Al-Qura University',
  },
  knowsAbout: [
    'Machine Learning',
    'Computer Vision',
    'Natural Language Processing',
    'Generative AI',
    'Digital Twin Systems',
    'Internet of Things',
    'Business Analysis',
  ],
  url: 'https://yara-alsiamy.dev',
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <FeaturedProject />
        <OtherProjects />
        <Awards />
        <Recommendations />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
