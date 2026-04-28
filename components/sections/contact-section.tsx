"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, ArrowRight, Github, Linkedin, Twitter } from "lucide-react";
import { CopyEmail } from "@/components/shared/copy-email";

export function ContactSection() {
  return (
    <section className="py-24 border-t border-border/50 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,var(--color-accent)_0%,transparent_100%)] opacity-[0.03]" />

      <div className="container px-4 mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
            Let&apos;s Build Something <span className="gradient-text">Exceptional</span> Together.
          </h2>
          <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
            I&apos;m currently open to intern or junior roles in web development, 
            data automation, and AI integrations. Whether you have a specific project in mind 
            or just want to chat about tech, I&apos;d love to hear from you.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <CopyEmail 
              variant="default" 
              className="btn-gradient border-0 px-8 h-12 w-full sm:w-auto" 
            />
            
            <div className="flex items-center gap-4">
               <a 
                 href={process.env.NEXT_PUBLIC_GITHUB_URL || "https://github.com"} 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="p-3 rounded-full glass border-border/50 hover:text-accent transition-all hover:scale-110"
               >
                 <Github className="h-5 w-5" />
               </a>
               <a 
                 href={process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://linkedin.com"} 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="p-3 rounded-full glass border-border/50 hover:text-accent transition-all hover:scale-110"
               >
                 <Linkedin className="h-5 w-5" />
               </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
