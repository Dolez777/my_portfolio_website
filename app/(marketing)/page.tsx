import { Hero } from "@/components/sections/hero";
import { ProjectCard } from "@/components/project-card";
import { ContactSection } from "@/components/sections/contact-section";
import { projects } from "@/lib/projects";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  // Only show featured projects on the home page
  const featuredProjects = projects.filter(p => p.featured).slice(0, 3);

  return (
    <div className="flex flex-col w-full">
      <Hero />

      {/* Featured Projects Section */}
      <section className="py-24 bg-muted/20">
        <div className="container px-4 mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
                Selected <span className="gradient-text">Works</span>
              </h2>
              <p className="text-muted-foreground italic">
                A showcase of my recent engineering experiments and deep dives into data.
              </p>
            </div>
            <Button variant="ghost" className="hidden md:flex group gap-2" asChild>
              <Link href="/projects">
                All Projects
                <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          <div className="mt-12 text-center md:hidden">
            <Button variant="outline" className="w-full glass border-border/50" asChild>
              <Link href="/projects">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Brief Skills Highlight (Optional but good) */}
      <section className="py-24 relative overflow-hidden">
        <div className="container px-4 mx-auto text-center">
           <h3 className="text-sm font-code uppercase tracking-[0.2em] text-accent mb-12">Core Technical Toolbox</h3>
           <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
              <span className="text-2xl md:text-4xl font-bold">Next.js</span>
              <span className="text-2xl md:text-4xl font-bold">React</span>
              <span className="text-2xl md:text-4xl font-bold">Python</span>
              <span className="text-2xl md:text-4xl font-bold">TypeScript</span>
              <span className="text-2xl md:text-4xl font-bold">Docker</span>
              <span className="text-2xl md:text-4xl font-bold">SQL</span>
           </div>
        </div>
      </section>

      <ContactSection />
    </div>
  );
}
