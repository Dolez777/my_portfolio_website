export type ProjectCategory = "web" | "mobile" | "data" | "automation" | "ai";

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  challenges?: string;
  solution?: string;
  keyFeatures?: string[];
  image: string;
  categories: ProjectCategory[];
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "portfolio-v1",
    title: "Modern Engineering Portfolio",
    description: "A high-end, motion-driven portfolio built with Next.js 15 and Tailwind v4.",
    longDescription: "This very website! Built to demonstrate modern frontend architecture, featuring zero-runtime CSS (Tailwind v4), privacy-first email obfuscation, and smooth Framer Motion orchestrations. Optimized for Lighthouse scores and developer experience.",
    challenges: "Balancing high-end motion design with performance and security. Specifically, creating a way to share contact information without exposing it to automated scrapers while maintaining a smooth user experience.",
    solution: "Developed a custom obfuscation system for emails and social links that joins strings only on the client side, paired with a modern glassmorphism UI built on Next.js 15.",
    keyFeatures: ["Zero-runtime Tailwind CSS v4", "Privacy-first obfuscation system", "Motion-driven UI with Framer Motion", "Server Components for speed"],
    image: "/projects/portfolio-preview.png",
    categories: ["web", "ai"],
    techStack: ["Next.js 15", "Tailwind v4", "Framer Motion", "shadcn/ui", "TypeScript"],
    githubUrl: process.env.NEXT_PUBLIC_GITHUB_URL || "https://github.com",
    featured: true,
  },
  {
    id: "oura-data-analysis",
    title: "Oura Health Data Analysis",
    description: "Deep dive into sleep patterns and physiological trends using Oura API data and Python.",
    longDescription: "A comprehensive data analysis project that retrieves metrics via the Oura v2 API, processes them using Pandas, and visualizes health trends to optimize sleep and recovery. Focuses on correlation between activity levels and deep sleep duration.",
    challenges: "Handling time-series data with gaps and integrating with the Oura API's rate limits and pagination. Extracting meaningful correlations between daily activity scores and sleep architecture.",
    solution: "Created a modular Python pipeline that automates data fetching, normalization, and visualization. Used Pandas for data manipulation and Matplotlib for generating physiological trend reports.",
    keyFeatures: ["Automated Oura API v2 integration", "Time-series sleep architecture analysis", "Correlation heatmaps for activity vs recovery", "Interactive Jupyter notebooks"],
    image: "/projects/oura-preview.png",
    categories: ["data", "ai"],
    techStack: ["Python", "Pandas", "Oura API", "Matplotlib", "Jupyter"],
    githubUrl: process.env.NEXT_PUBLIC_GITHUB_URL || "https://github.com",
    featured: true,
  },
  {
    id: "video-automation-ai",
    title: "AI Video Editing Pipeline",
    description: "Automated video cutting based on audio transcripts and visual change detection.",
    longDescription: "A sophisticated automation pipeline that streamlines video editing by identifying high-value moments using AI. It leverages OpenAI Whisper for audio transcription and silence detection, while computer vision models analyze pixel-level changes to ensure visually consistent cuts.",
    challenges: "Synchronizing high-frequency audio data with visual scene changes to avoid 'jump cuts'. Optimizing processing time for long-form video content.",
    solution: "Developed a multi-threaded Python system that processes audio and video in parallel, using FFmpeg for frame-accurate extraction and custom logic to weigh audio cues against visual transitions.",
    keyFeatures: ["Transcript-based automated cutting", "Visual scene change detection", "FFmpeg-powered parallel processing", "OpenAI Whisper integration"],
    image: "/projects/video-automation.png",
    categories: ["automation", "ai"],
    techStack: ["Python", "Whisper", "FFmpeg", "OpenCV", "AI Agents"],
    githubUrl: process.env.NEXT_PUBLIC_GITHUB_URL || "https://github.com",
    featured: true,
  },
];
