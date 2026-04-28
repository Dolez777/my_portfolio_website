import { projects } from "@/lib/projects";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Github, 
  ExternalLink, 
  ArrowLeft, 
  Code, 
  Zap, 
  ShieldCheck, 
  Lightbulb 
} from "lucide-react";
import { Separator } from "@/components/ui/separator";

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <div className="pt-24 pb-24">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          {/* Navigation */}
          <Link 
            href="/projects" 
            className="inline-flex items-center text-sm text-muted-foreground hover:text-accent transition-colors mb-12 group"
          >
            <ArrowLeft className="mr-2 h-4 w-4 transform group-hover:-translate-x-1 transition-transform" />
            Back to Projects
          </Link>

          {/* Hero Section */}
          <header className="mb-16">
            <div className="flex flex-wrap gap-2 mb-6">
              {project.categories.map((cat) => (
                <Badge key={cat} variant={cat} className="capitalize">
                  {cat}
                </Badge>
              ))}
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              {project.title}
            </h1>
            <p className="text-xl text-muted-foreground italic leading-relaxed">
              {project.description}
            </p>
          </header>

          {/* Main Preview Image */}
          <div className="relative aspect-video w-full rounded-3xl overflow-hidden glass border-border/50 mb-16 shadow-2xl">
             <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                priority
             />
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
             {/* Main Column */}
             <div className="md:col-span-2 space-y-16">
                {/* Long Description */}
                <section>
                   <h2 className="text-2xl font-heading font-bold mb-6 flex items-center gap-3">
                      <Code className="h-6 w-6 text-accent" />
                      Project Overview
                   </h2>
                   <div className="text-lg text-muted-foreground leading-relaxed space-y-4">
                      {project.longDescription}
                   </div>
                </section>

                {/* Challenges & Solution */}
                {(project.challenges || project.solution) && (
                   <div className="grid grid-cols-1 gap-8">
                      {project.challenges && (
                         <div className="glass rounded-2xl p-8 border-border/20 bg-destructive/5">
                            <h3 className="font-heading font-bold text-lg mb-4 flex items-center gap-2">
                               <Zap className="h-5 w-5 text-destructive" />
                               The Challenge
                            </h3>
                            <p className="text-muted-foreground italic">
                               {project.challenges}
                            </p>
                         </div>
                      )}
                      {project.solution && (
                         <div className="glass rounded-2xl p-8 border-border/20 bg-accent/5">
                            <h3 className="font-heading font-bold text-lg mb-4 flex items-center gap-2">
                               <Lightbulb className="h-5 w-5 text-accent" />
                               The Solution
                            </h3>
                            <p className="text-muted-foreground italic">
                               {project.solution}
                            </p>
                         </div>
                      )}
                   </div>
                )}

                {/* Key Features */}
                {project.keyFeatures && (
                   <section>
                      <h2 className="text-2xl font-heading font-bold mb-8 flex items-center gap-3">
                         <ShieldCheck className="h-6 w-6 text-accent" />
                         Key Highlights
                      </h2>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                         {project.keyFeatures.map((feature) => (
                            <li key={feature} className="flex items-start gap-3 p-4 rounded-xl glass border-border/10">
                               <div className="mt-1 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                               <span className="text-sm font-medium">{feature}</span>
                            </li>
                         ))}
                      </ul>
                   </section>
                )}
             </div>

             {/* Sidebar */}
             <div className="space-y-12">
                {/* Actions */}
                <div className="space-y-4">
                   {project.liveUrl && (
                      <Button className="w-full btn-gradient border-0 h-12" asChild>
                         <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            Live Demo
                            <ExternalLink className="ml-2 h-4 w-4" />
                         </a>
                      </Button>
                   )}
                   {project.githubUrl && (
                      <Button variant="outline" className="w-full glass border-border/50 h-12" asChild>
                         <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            View Code
                            <Github className="ml-2 h-4 w-4" />
                         </a>
                      </Button>
                   )}
                </div>

                <Separator className="bg-border/30" />

                {/* Tech Stack List */}
                <div>
                   <h3 className="text-xs font-code uppercase tracking-[0.2em] text-muted-foreground mb-6">Tech Stack</h3>
                   <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                         <Badge key={tech} variant="secondary" className="bg-muted/50 text-muted-foreground font-code text-[10px] uppercase">
                            {tech}
                         </Badge>
                      ))}
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
