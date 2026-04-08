"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectCard } from "@/components/project-card";
import { projects, ProjectCategory } from "@/lib/projects";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const categories: { value: "all" | ProjectCategory; label: string }[] = [
  { value: "all", label: "All Projects" },
  { value: "web", label: "Web Apps" },
  { value: "mobile", label: "Mobile" },
  { value: "data", label: "Data Science" },
  { value: "ai", label: "AI & ML" },
  { value: "automation", label: "Automation" },
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<"all" | ProjectCategory>("all");

  const filteredProjects = projects.filter(
    (p) => activeCategory === "all" || p.categories.includes(activeCategory)
  );

  return (
    <div className="pt-24 pb-24">
      <div className="container px-4 mx-auto">
        <header className="max-w-3xl mb-16">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
            Project <span className="gradient-text">Archive</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A comprehensive list of my software engineering projects, research 
            experiments, and technical deep dives across multiple domains.
          </p>
        </header>

        {/* Filter Tabs */}
        <div className="mb-12">
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="bg-muted/30 p-1 flex flex-wrap h-auto w-fit">
              {categories.map((cat) => (
                <TabsTrigger
                  key={cat.value}
                  value={cat.value}
                  onClick={() => setActiveCategory(cat.value)}
                  className="px-6 py-2 transition-all data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  {cat.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard project={project} index={index} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredProjects.length === 0 && (
          <div className="py-24 text-center">
            <p className="text-muted-foreground">No projects found in this category yet. Check back soon!</p>
          </div>
        )}
      </div>
    </div>
  );
}
