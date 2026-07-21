import {
  Award,
  Briefcase,
  Cpu,
  Database,
  Eye,
  GitBranch,
  Github,
  Layers,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Sprout,
  Workflow,
  type LucideIcon,
} from 'lucide-react';

export const profile = {
  name: 'Yara Ismail Alsiamy',
  roles: [
    'Artificial Intelligence Graduate',
    'Machine Learning Engineer',
    'Business Analyst',
  ],
  statement: 'Building intelligent systems that solve real-world problems.',
  email: 'yara.alsiamy@example.com',
  phone: '+966 50 000 0000',
  location: 'Makkah, Saudi Arabia',
  linkedin: 'https://www.linkedin.com/in/yara-alsiamy',
  github: 'https://github.com/yara-alsiamy',
  cvUrl: '/Yara_Alsiamy_CV.pdf',
};

export const stats: { value: string; label: string }[] = [
  { value: '2×', label: 'First Place Awards' },
  { value: 'First Class', label: 'Honors Graduate' },
  { value: 'Real-World', label: 'AI Deployment' },
];

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Recommendations', href: '#recommendations' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
];

export const about = {
  summary:
    'Yara is part of the first graduating cohort in Artificial Intelligence at Umm Al-Qura University, graduating with First Class Honors. Her work spans applied machine learning research and end-to-end deployment, with hands-on experience turning research prototypes into production systems that operate in the real world.',
  focus:
    'She works across the full ML lifecycle — from framing the problem and curating data to engineering models, deploying them, and measuring their impact. Her research interests sit at the intersection of computer vision, generative AI, and systems that reason about the physical world.',
  expertise: [
    { label: 'Machine Learning', icon: Cpu },
    { label: 'Computer Vision', icon: Eye },
    { label: 'Natural Language Processing', icon: Layers },
    { label: 'Generative AI', icon: Workflow },
    { label: 'Digital Twin Systems', icon: GitBranch },
    { label: 'Internet of Things', icon: Database },
    { label: 'Business Analysis', icon: Briefcase },
    { label: 'Real-World Deployment', icon: Sprout },
  ],
};

export const education = {
  degree: 'Bachelor of Science in Artificial Intelligence',
  institution: 'Umm Al-Qura University',
  gpa: '3.84 / 4',
  honors: 'First Class Honors',
  cohort: 'First graduating cohort in Artificial Intelligence',
  period: '2021 — 2026',
};

export const experience = [
  {
    role: 'Business Analyst Intern',
    company: 'Experts Vision Consulting',
    period: 'Internship',
    summary:
      'Contributed to the Nusuk Card Platform, supporting requirements analysis and delivery for a national-scale digital product.',
    responsibilities: [
      'Collaborated with product and engineering teams to translate business requirements into structured technical specifications for the Nusuk Card Platform.',
      'Mapped and documented end-to-end user journeys, surfacing friction points and proposing data-informed improvements.',
      'Supported backlog grooming and acceptance criteria definition, improving clarity for engineering and reducing rework.',
      'Analyzed platform metrics to identify opportunities for optimization across onboarding and card issuance flows.',
    ],
  },
];

export const featuredProject = {
  name: 'Warif',
  tagline: 'AI Digital Twin for Smart Farms',
  overview:
    'Warif is an AI-powered digital twin for greenhouse agriculture. It mirrors a real cucumber greenhouse in software, fusing IoT sensor data with machine learning models to optimize irrigation and energy use — reducing waste while improving crop conditions.',
  problem:
    'Greenhouse farming in arid climates consumes significant water and energy, and operators lack real-time, predictive insight into how resources flow through the system. Decisions are reactive, and waste is discovered only after it has already happened.',
  solution:
    'Warif builds a live digital twin of the greenhouse: IoT sensors stream environmental readings, ML models forecast water and energy demand, and a control loop recommends precise irrigation schedules. Operators see the current state and the predicted state of the farm in one view.',
  architecture:
    'A layered architecture — an IoT ingestion layer, a feature and model serving layer, a digital twin state store, and a decision and visualization interface. Models are served independently so they can be retrained without disrupting the live twin.',
  stack: [
    'Python',
    'TensorFlow',
    'Scikit-learn',
    'IoT Sensors',
    'MQTT',
    'Time-Series Forecasting',
    'FastAPI',
    'React',
    'Digital Twin Engine',
  ],
  workflow: [
    {
      step: 'Sense',
      detail:
        'IoT sensors capture soil moisture, temperature, humidity, and energy draw at fixed intervals.',
    },
    {
      step: 'Model',
      detail:
        'Forecasting models predict near-term water and energy demand from the live sensor stream.',
    },
    {
      step: 'Twin',
      detail:
        'The digital twin reconciles predictions with observed state to keep an accurate mirror of the greenhouse.',
    },
    {
      step: 'Act',
      detail:
        'A control loop recommends precise irrigation schedules, reducing waste while maintaining crop health.',
    },
  ],
  metrics: [
    { value: '29.81%', label: 'Water Reduction' },
    { value: '35%', label: 'Energy Reduction' },
    { value: '41%', label: 'Irrigation Efficiency Improvement' },
  ],
  deployment:
    'Successfully deployed in a real cucumber greenhouse, where the system ran against live sensor data and delivered measurable reductions in water and energy consumption.',
  gallery: [
    {
      src: 'https://images.pexels.com/photos/1112080/pexels-photo-1112080.jpeg',
      alt: 'Greenhouse interior with rows of cucumber plants',
    },
    {
      src: 'https://images.pexels.com/photos/2286776/pexels-photo-2286776.jpeg',
      alt: 'Close-up of cucumber plant leaves in sunlight',
    },
    {
      src: 'https://images.pexels.com/photos/4503273/pexels-photo-4503273.jpeg',
      alt: 'IoT sensor monitoring in an agricultural setting',
    },
    {
      src: 'https://images.pexels.com/photos/2933245/pexels-photo-2933245.jpeg',
      alt: 'Smart farming dashboard and analytics view',
    },
  ],
  demoUrl: '#',
  githubUrl: '#',
};

export const projects: {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  detailsUrl: string;
}[] = [
  {
    title: 'Arabic Sign Language Recognition',
    description:
      'A computer vision system that recognizes Arabic sign language gestures from video input and translates them into text, improving accessibility for Arabic-speaking deaf communities.',
    technologies: ['OpenCV', 'MediaPipe', 'CNN', 'TensorFlow'],
    githubUrl: '#',
    detailsUrl: '#',
  },
  {
    title: 'Traffic Vehicle Detection',
    description:
      'A real-time object detection pipeline for traffic monitoring, identifying and counting vehicles from live video streams with bounding-box tracking.',
    technologies: ['YOLOv8', 'OpenCV', 'PyTorch', 'DeepSORT'],
    githubUrl: '#',
    detailsUrl: '#',
  },
  {
    title: 'Email Intent Classification',
    description:
      'An NLP system that classifies inbound emails by intent, routing them to the right workflow and reducing manual triage time for support teams.',
    technologies: ['Transformers', 'BERT', 'Scikit-learn', 'FastAPI'],
    githubUrl: '#',
    detailsUrl: '#',
  },
  {
    title: 'Generative Image Modeling',
    description:
      'A generative model that synthesizes novel images conditioned on class labels, exploring latent-space structure and image fidelity trade-offs.',
    technologies: ['GANs', 'DCGAN', 'PyTorch', 'NumPy'],
    githubUrl: '#',
    detailsUrl: '#',
  },
  {
    title: 'Human Segmentation',
    description:
      'A semantic segmentation model that isolates humans from the background in arbitrary images, enabling portrait effects and privacy-preserving video pipelines.',
    technologies: ['U-Net', 'PyTorch', 'OpenCV', 'Albumentations'],
    githubUrl: '#',
    detailsUrl: '#',
  },
];

export const awards: {
  title: string;
  event: string;
  year: string;
  description: string;
}[] = [
  {
    title: '1st Place — Best Artificial Intelligence Graduation Project',
    event: 'Injaz 2026',
    year: '2026',
    description:
      'Awarded first place for Warif, an AI digital twin for smart farms, recognized for technical depth and real-world deployment impact.',
  },
  {
    title: '1st Place — Health and Security Hackathon for Hajj',
    event: 'Hajj Hackathon',
    year: '2025',
    description:
      'Led a winning solution addressing health and security challenges during the Hajj season, combining computer vision and predictive modeling.',
  },
];

export const recommendations: {
  name: string;
  position: string;
  university: string;
  summary: string;
  pdfUrl: string;
}[] = [
  {
    name: 'Dr. [Supervisor Name]',
    position: 'Assistant Professor, Artificial Intelligence',
    university: 'Umm Al-Qura University',
    summary:
      'Yara distinguished herself through rare technical maturity — moving comfortably from research framing to production deployment. Her work on the Warif digital twin demonstrated both scientific rigor and a clear sense of real-world impact.',
    pdfUrl: '#',
  },
  {
    name: 'Dr. [Faculty Name]',
    position: 'Lecturer, Machine Learning',
    university: 'Umm Al-Qura University',
    summary:
      'Among the strongest students in the first AI cohort. Yara pairs a deep curiosity for the field with disciplined engineering, and she raises the standard for everyone she works with.',
    pdfUrl: '#',
  },
  {
    name: 'Dr. [Industry Mentor]',
    position: 'Lead Data Scientist',
    university: 'Experts Vision Consulting',
    summary:
      'During her internship, Yara translated ambiguous business problems into clear, testable specifications. She is unusually good at bridging research and product.',
    pdfUrl: '#',
  },
];

export const contactItems: { label: string; value: string; icon: LucideIcon; href: string }[] = [
  { label: 'Email', value: profile.email, icon: Mail, href: `mailto:${profile.email}` },
  { label: 'Phone', value: profile.phone, icon: Phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
  { label: 'LinkedIn', value: 'in/yara-alsiamy', icon: Linkedin, href: profile.linkedin },
  { label: 'GitHub', value: 'yara-alsiamy', icon: Github, href: profile.github },
  { label: 'Location', value: profile.location, icon: MapPin, href: '#' },
];

export const socialIcons = {
  linkedin: Linkedin,
  github: Github,
  email: Mail,
};

export type SectionId =
  | 'home'
  | 'about'
  | 'experience'
  | 'projects'
  | 'recommendations'
  | 'resume'
  | 'contact';
