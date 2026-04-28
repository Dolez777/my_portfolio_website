import type { Metadata } from 'next';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { GraduationCap, Briefcase, Code } from 'lucide-react';
import { CopyEmail } from '@/components/shared/copy-email';

export const metadata: Metadata = {
	title: 'About',
	description:
		'Learn more about my background, technical focus, and journey as a software engineer.',
};

const skills = {
	frontend: [
		'React',
		'Next.js',
		'TypeScript',
		'Tailwind CSS',
		'Framer Motion',
	],
	backend: ['Node.js', 'Python', 'PostgreSQL', 'REST APIs'],
	data: ['Pandas', 'Matplotlib', 'API Integration', 'Oura Data'],
	ai: [
		'Autonomous Agents',
		'Model Context Protocol (MCP)',
		'Workflow Automation',
		'Intelligent Data Pipelines',
	],
};

export default function AboutPage() {
	return (
		<div className="pt-24 pb-24">
			<div className="container px-4 mx-auto">
				<div className="max-w-4xl mx-auto">
					{/* Header Section */}
					<header className="mb-16">
						<Badge
							variant="outline"
							className="mb-4">
							Engineer & Problem Solver
						</Badge>
						<h1 className="text-4xl md:text-6xl font-heading font-bold mb-8">
							Automating the <span className="gradient-text">Future</span>, One Workflow at a Time.
						</h1>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
							<div className="text-lg text-muted-foreground space-y-4">
								<p>
									I&apos;m a software engineer with a primary passion for Automation. 
									I believe that any repetitive task is a candidate for optimization, 
									and I view Data Science and Artificial Intelligence not as ends in 
									themselves, but as powerful tools to build smarter, autonomous systems.
								</p>
								<p>
									My journey started with building web applications, but it quickly 
									evolved into a quest to eliminate friction through intelligent 
									tooling. Whether it&apos;s processing health data from my Oura ring 
									or architecting multi-agent AI systems, the goal is always the same: 
									Efficiency.
								</p>
							</div>
							<div className="glass rounded-2xl p-8 border-border/50">
								<h3 className="font-heading font-bold text-xl mb-4 flex items-center gap-2">
									<Briefcase className="h-5 w-5 text-accent" />
									Status
								</h3>
								<p className="text-sm text-muted-foreground mb-6">
									Actively seeking Internship or Junior
									Developer roles where I can contribute to
									meaningful projects while accelerating my
									technical growth.
								</p>
								<div className="flex flex-col gap-3">
									<Button
										className="w-full btn-gradient border-0"
										asChild>
										<a
											href={
												process.env
													.NEXT_PUBLIC_LINKEDIN_URL ||
												'#'
											}
											target="_blank"
											rel="noopener noreferrer">
											Connect on LinkedIn
										</a>
									</Button>
									<CopyEmail
										variant="outline"
										className="w-full glass border-border/50"
									/>
								</div>
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
								<div
									key={category}
									className="p-6 rounded-xl glass border-border/20">
									<h3 className="text-xs font-code uppercase tracking-widest text-accent mb-4">
										{category}
									</h3>
									<ul className="space-y-2">
										{items.map((item) => (
											<li
												key={item}
												className="text-sm font-medium">
												{item}
											</li>
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
								<h3 className="text-xl font-heading font-bold">
									Independent Software Development
								</h3>
								<p className="text-sm text-accent mb-2">
									2024 — Present
								</p>
								<p className="text-muted-foreground max-w-2xl">
									Focusing on full-stack React/Next.js
									development with a specialized focus on 
									Autonomous Automation. Currently architecting systems 
									using the Model Context Protocol (MCP) to bridge the gap 
									between data sources and intelligent agents.
								</p>
							</div>
							<div className="relative pl-8 border-l-2 border-border/50">
								<div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-muted border-4 border-background" />
								<h3 className="text-xl font-heading font-bold">
									University Degree in Computer Science
								</h3>
								<p className="text-sm text-muted-foreground mb-2">
									Sep 2019 — 2026 (Expected)
								</p>
								<p className="text-muted-foreground max-w-2xl">
									Building a strong foundation in computer
									science principles and software architecture. 
									Focusing my final year on how autonomous systems 
									can revolutionize data integration and personal 
									productivity.
								</p>
							</div>
						</div>
					</section>
				</div>
			</div>
		</div>
	);
}
