export type ProjectCategory = "web" | "mobile" | "data" | "automation" | "ai";

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  categories: ProjectCategory[];
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "oura-data-analysis",
    title: "Oura Health Data Analysis",
    description: "Deep dive into sleep patterns and physiological trends using Oura API data and Python.",
    longDescription: "A comprehensive data analysis project that retrieves metrics via the Oura v2 API, processes them using Pandas, and visualizes health trends to optimize sleep and recovery. Focuses on correlation between activity levels and deep sleep duration.",
    image: "/projects/oura-preview.jpg", // Placeholder until we generate/add real image
    categories: ["data", "ai"],
    techStack: ["Python", "Pandas", "Oura API", "Matplotlib", "Jupyter"],
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    id: "ai-auto-agent",
    title: "Autonomous AI Task Agent",
    description: "Multi-agent system that automates repetitive web tasks using LLMs and browser automation.",
    longDescription: "An experimental project exploring autonomous task execution using GPT-4 and Playwright. The agent can take high-level natural language instructions and decompose them into actionable steps to perform data scraping and form filling.",
    image: "/projects/ai-agent.jpg",
    categories: ["ai", "automation", "web"],
    techStack: ["Next.js", "LangChain", "OpenAI", "Playwright"],
    featured: true,
  },
  {
    id: "smart-home-automator",
    title: "Local-First IoT Hub",
    description: "A centralized dashboard for cross-brand smart home devices with voice control integration.",
    longDescription: "Built to solve the fragmented ecosystem of IoT devices, this hub utilizes local discovery protocols to manage lights, thermostatic valves, and sensors without relying on external cloud services.",
    image: "/projects/iot-hub.jpg",
    categories: ["automation", "mobile"],
    techStack: ["React Native", "Node.js", "MQTT", "Docker"],
    featured: false,
  },
];
