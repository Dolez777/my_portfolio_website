import type { Metadata } from 'next';
import { Badge } from '@/components/ui/badge';
import { Github, Linkedin, Mail } from 'lucide-react';
import { CopyEmail } from '@/components/shared/copy-email';
import { ContactForm } from '@/components/shared/contact-form';
import { SecureLink } from '@/components/shared/secure-link';

export const metadata: Metadata = {
	title: 'Contact',
	description:
		'Get in touch for internships, collaborations, or just to say hi.',
};

export default function ContactPage() {
	return (
		<div className="pt-24 pb-24">
			<div className="container px-4 mx-auto">
				<div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-16">
					{/* Left Column: Info */}
					<div className="flex-1">
						<Badge
							variant="outline"
							className="mb-4">
							Get in Touch
						</Badge>
						<h1 className="text-4xl md:text-6xl font-heading font-bold mb-8">
							Let&apos;s Build the{' '}
							<span className="gradient-text">
								Next Big Thing
							</span>
							.
						</h1>
						<p className="text-lg text-muted-foreground mb-12 leading-relaxed max-w-lg">
							Whether you have a junior developer opportunity, a
							project idea, or just want to discuss the latest in
							AI and automation, my inbox is always open.
						</p>

						<div className="space-y-6">
							<div className="flex items-center gap-4 group">
								<div className="p-3 rounded-xl glass border-border/50 group-hover:text-accent transition-all">
									<Mail className="h-6 w-6" />
								</div>
								<div>
									<p className="text-sm text-muted-foreground">
										Email
									</p>
									<CopyEmail
										variant="link"
										showIcon={false}
										className="text-foreground font-medium p-0 h-auto"
									/>
								</div>
							</div>
							<div className="flex items-center gap-4 group">
								<div className="p-3 rounded-xl glass border-border/50 group-hover:text-accent transition-all">
									<Linkedin className="h-6 w-6" />
								</div>
								<div className="flex flex-col">
									<p className="text-sm text-muted-foreground">
										LinkedIn
									</p>
									<SecureLink 
										hrefParts={[process.env.NEXT_PUBLIC_LINKEDIN_URL || ""]} 
										labelParts={[process.env.NEXT_PUBLIC_LINKEDIN_USERNAME || ""]}
										className="font-medium"
									/>
								</div>
							</div>
							<div className="flex items-center gap-4 group">
								<div className="p-3 rounded-xl glass border-border/50 group-hover:text-accent transition-all">
									<Github className="h-6 w-6" />
								</div>
								<div className="flex flex-col">
									<p className="text-sm text-muted-foreground">
										GitHub
									</p>
									<SecureLink 
										hrefParts={[process.env.NEXT_PUBLIC_GITHUB_URL || ""]} 
										labelParts={[process.env.NEXT_PUBLIC_GITHUB_USERNAME || ""]}
										className="font-medium"
									/>
								</div>
							</div>
						</div>
					</div>

					{/* Right Column: Form */}
					<div className="flex-1">
						<div className="glass rounded-3xl p-8 border-border/50 shadow-sm relative overflow-hidden">
							<div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 blur-[80px] -z-10" />
							<ContactForm />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
