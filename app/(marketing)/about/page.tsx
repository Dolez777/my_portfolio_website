import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, GraduationCap, Briefcase, Code } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about my background, technical focus, and journey as a software engineer.",
};

const skills = {
  frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  backend: ["Node.js", "Python", "PostgreSQL", "REST APIs"],
  data: ["Pandas", "Matplotlib", "API Integration", "Oura Data"],
  ai: ["OpenAI API", "LangChain", "Automation Agents", "Prompt Engineering"],
};

export default function AboutPage() {
  return (
    <div className="pt-24 pb-24">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <header className="mb-16">
            <Badge variant="outline" className="mb-4">Engineer & Problem Solver</Badge>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-8">
              Turning <span className="gradient-text">Complexity</span> Into 
              Elegant Solutions.
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
              <div className="text-lg text-muted-foreground space-y-4">
                <p>
                  I&apos;m a software engineer with a deep fascination for how data and 
                  AI can automate the mundane and enhance human capability. 
                  My journey started with a curiosity for web apps and quickly 
                  expanded into the realm of data analysis and autonomous tooling.
                </p>
                <p>
                  Currently, I&apos;m focused on building highly interactive, 
                  motion-driven user interfaces that don&apos;t just look good but 
                  feel alive.
                </p>
              </div>
              <div className="glass rounded-2xl p-8 border-border/50">
                 <h3 className="font-heading font-bold text-xl mb-4 flex items-center gap-2">
                   <Briefcase className="h-5 w-5 text-accent" />
                   Status
                 </h3>
                 <p className="text-sm text-muted-foreground mb-6">
                   Actively seeking **Internship** or **Junior Developer** roles 
                   where I can contribute to meaningful projects while 
                   accelerating my technical growth.
                 </p>
                 <Button className="w-full btn-gradient border-0" asChild>
                   <Link href="/contact">Let&apos;s Connect</Link>
                 </Button>
              </div>
            </div>
          </header>

          {/* Skillset Section */}
          <section className="mb-24">
            <h2 className="text-2xl font-heading font-bold mb-12 flex items-center gap-3">
              <Code className="h-6 w-6 text-accent" />
              Technical Arsenal
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
               {Object.entries(skills).map(([category, items]) => (
                 <div key={category} className="p-6 rounded-xl glass border-border/20">
                    <h3 className="text-xs font-code uppercase tracking-widest text-accent mb-4">{category}</h3>
                    <ul className="space-y-2">
                      {items.map(item => (
                        <li key={item} className="text-sm font-medium">{item}</li>
                      ))}
                    </ul>
                 </div>
               ))}
            </div>
          </section>

          {/* Experience/Education stylistic section */}
          <section>
            <h2 className="text-2xl font-heading font-bold mb-12 flex items-center gap-3">
              <GraduationCap className="h-6 w-6 text-accent" />
              The Journey
            </h2>
            <div className="space-y-8">
              <div className="relative pl-8 border-l-2 border-border/50">
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-accent border-4 border-background" />
                <h3 className="text-xl font-heading font-bold">Independent Software Development</h3>
                <p className="text-sm text-accent mb-2">2024 — Present</p>
                <p className="text-muted-foreground max-w-2xl">
                  Focusing on full-stack React/Next.js development, exploring 
                  the OpenAI ecosystem, and building personal health data tools 
                  like the Oura API analyzer.
                </p>
              </div>
              <div className="relative pl-8 border-l-2 border-border/50">
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-muted border-4 border-background" />
                <h3 className="text-xl font-heading font-bold">University / Boot Camp</h3>
                <p className="text-sm text-muted-foreground mb-2">Completion Pending</p>
                <p className="text-muted-foreground max-w-2xl">
                  Building a strong foundation in computer science principles, 
                  data structures, and modern software architectures.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
