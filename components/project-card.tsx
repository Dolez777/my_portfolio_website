"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Project } from "@/lib/projects";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative h-full flex flex-col glass rounded-2xl overflow-hidden border-border/50 hover:border-accent/40 transition-all duration-500"
    >
      {/* Visual Header / Image Placeholder */}
      <div className="relative h-48 w-full overflow-hidden bg-muted/20">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 group-hover:from-accent/10 group-hover:to-primary/10 transition-colors" />
        {/* If we had images we'd use Next/Image here. For now a stylistic placeholder */}
        <div className="flex items-center justify-center h-full">
           <div className="text-accent/20 group-hover:text-accent/40 transition-colors">
              <span className="font-heading font-bold text-4xl opacity-10">{project.title[0]}</span>
           </div>
        </div>

        {/* Categories */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          {project.categories.map((cat) => (
            <Badge key={cat} variant={cat} className="capitalize">
              {cat}
            </Badge>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 flex flex-col">
        <h3 className="text-xl font-heading font-bold mb-3 group-hover:text-accent transition-colors flex items-center justify-between">
          {project.title}
          <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
        </h3>
        <p className="text-sm text-muted-foreground mb-6 flex-1 italic leading-relaxed">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.techStack.slice(0, 4).map((tech) => (
            <span 
              key={tech} 
              className="text-[10px] font-code uppercase tracking-wider px-2 py-0.5 rounded bg-muted text-muted-foreground"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className="text-[10px] text-muted-foreground">+{project.techStack.length - 4} more</span>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {project.githubUrl && (
            <Button variant="ghost" size="sm" className="h-9 px-3 gap-2" asChild>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
                Code
              </a>
            </Button>
          )}
          {project.liveUrl && (
            <Button variant="ghost" size="sm" className="h-9 px-3 gap-2" asChild>
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
                Demo
              </a>
            </Button>
          )}
          <Button variant="secondary" size="sm" className="h-9 px-3 ml-auto text-xs" asChild>
             <Link href={`/projects/${project.id}`}>Details</Link>
          </Button>
        </div>
      </div>

      {/* Hover background glow */}
      <div className="absolute -z-10 inset-0 bg-accent/0 group-hover:bg-accent/5 blur-3xl transition-all duration-500 rounded-2xl pointer-events-none" />
    </motion.div>
  );
}
