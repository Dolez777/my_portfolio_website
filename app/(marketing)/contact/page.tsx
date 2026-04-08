import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Twitter, Send } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch for internships, collaborations, or just to say hi.",
};

export default function ContactPage() {
  return (
    <div className="pt-24 pb-24">
      <div className="container px-4 mx-auto">
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-16">
          {/* Left Column: Info */}
          <div className="flex-1">
            <Badge variant="outline" className="mb-4">Get in Touch</Badge>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-8">
               Let&apos;s Build the <span className="gradient-text">Next Big Thing</span>.
            </h1>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed max-w-lg">
              Whether you have a junior developer opportunity, a project idea, 
              or just want to discuss the latest in AI and data, my inbox is always open.
            </p>

            <div className="space-y-6">
               <a 
                 href="mailto:your-email@example.com" 
                 className="flex items-center gap-4 group"
               >
                 <div className="p-3 rounded-xl glass border-border/50 group-hover:text-accent transition-all">
                    <Mail className="h-6 w-6" />
                 </div>
                 <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium">your-email@example.com</p>
                 </div>
               </a>
               <a 
                 href="https://linkedin.com" 
                 target="_blank" 
                 className="flex items-center gap-4 group"
               >
                 <div className="p-3 rounded-xl glass border-border/50 group-hover:text-accent transition-all">
                    <Linkedin className="h-6 w-6" />
                 </div>
                 <div>
                    <p className="text-sm text-muted-foreground">LinkedIn</p>
                    <p className="font-medium">linkedin.com/in/yourname</p>
                 </div>
               </a>
               <a 
                 href="https://github.com" 
                 target="_blank" 
                 className="flex items-center gap-4 group"
               >
                 <div className="p-3 rounded-xl glass border-border/50 group-hover:text-accent transition-all">
                    <Github className="h-6 w-6" />
                 </div>
                 <div>
                    <p className="text-sm text-muted-foreground">GitHub</p>
                    <p className="font-medium">github.com/yourname</p>
                 </div>
               </a>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="flex-1">
             <div className="glass rounded-3xl p-8 border-border/50 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 blur-[80px] -z-10" />
                
                <form className="space-y-6">
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Name</label>
                        <Input placeholder="John Doe" className="glass border-border/40" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Email</label>
                        <Input type="email" placeholder="email@example.com" className="glass border-border/40" />
                      </div>
                   </div>
                   <div className="space-y-2">
                      <label className="text-sm font-medium">Subject</label>
                      <Input placeholder="Inquiry about project" className="glass border-border/40" />
                   </div>
                   <div className="space-y-2">
                      <label className="text-sm font-medium">Message</label>
                      <Textarea placeholder="How can I help you?" className="glass border-border/40" />
                   </div>
                   <Button className="w-full btn-gradient border-0 h-12" type="submit">
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                   </Button>
                </form>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
