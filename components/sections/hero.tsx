'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import { CopyEmail } from '@/components/shared/copy-email';

export function Hero() {
	return (
		<section className="relative pt-32 pb-20 overflow-hidden">
			{/* Dynamic Background Elements */}
			<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
				<motion.div 
					animate={{ 
						y: [0, 20, 0],
						opacity: [0.2, 0.3, 0.2] 
					}}
					transition={{ 
						duration: 8, 
						repeat: Infinity, 
						ease: "easeInOut" 
					}}
					className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-accent/20 blur-[120px]" 
				/>
				<motion.div 
					animate={{ 
						y: [0, -30, 0],
						opacity: [0.2, 0.4, 0.2] 
					}}
					transition={{ 
						duration: 10, 
						repeat: Infinity, 
						ease: "easeInOut" 
					}}
					className="absolute bottom-[10%] right-[-5%] w-[35%] h-[35%] rounded-full bg-primary/20 blur-[100px]" 
				/>
			</div>

			<div className="container px-4 mx-auto text-center relative z-10">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}>
					<Badge
						variant="secondary"
						className="mb-6 py-1 px-4 text-sm font-medium border-accent/20">
						<Sparkles className="h-3 w-3 mr-2 text-accent" />
						Available for new opportunities
					</Badge>
				</motion.div>

				<motion.h1
					initial={{ opacity: 1, y: 10 }}
					animate={{ y: 0 }}
					transition={{ duration: 0.4, delay: 0 }}
					className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold tracking-tight mb-8 leading-tight">
					Hi, I&apos;m{' '}
					<span className="gradient-text">
						{process.env.NEXT_PUBLIC_NAME || 'Teemu Välimäki'}
					</span>.
					<br />I build the <span className="italic">
						future
					</span>{' '}
					with code.
				</motion.h1>

				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.2 }}
					className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-12">
					Architecting autonomous systems and intelligent automation. 
					Leveraging Data and AI as tools to turn complex manual 
					workflows into seamless, high-performance experiences.
				</motion.p>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.3 }}
					className="flex flex-col sm:flex-row items-center justify-center gap-4">
					<Button
						asChild
						size="lg"
						className="btn-gradient border-0 px-8 text-md h-12">
						<Link href="/projects">
							View My Work
							<ArrowRight className="ml-2 h-4 w-4" />
						</Link>
					</Button>
					<CopyEmail
						variant="outline"
						className="px-8 text-md h-12 glass border-border/50 hover:bg-muted/50"
					/>
				</motion.div>
			</div>
		</section>
	);
}
