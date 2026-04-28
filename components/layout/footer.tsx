import Link from 'next/link';
import { Github, Linkedin, Mail, Code2 } from 'lucide-react';
import { CopyEmail } from '@/components/shared/copy-email';
import { SecureLink } from '@/components/shared/secure-link';

const socialLinks = [
	{ 
		href: process.env.NEXT_PUBLIC_GITHUB_URL || 'https://github.com', 
		icon: Github, 
		label: 'GitHub' 
	},
	{
		href: process.env.NEXT_PUBLIC_LINKEDIN_URL || 'https://linkedin.com',
		icon: Linkedin,
		label: 'LinkedIn',
	},
];

const footerLinks = [
	{ href: '/projects', label: 'Projects' },
	{ href: '/about', label: 'About' },
	{ href: '/contact', label: 'Contact' },
];

export function Footer() {
	return (
		<footer className="border-t border-border bg-muted/30">
			<div className="mx-auto max-w-7xl px-4 md:px-6 py-12">
				<div className="flex flex-col md:flex-row items-center justify-between gap-6">
					{/* Logo */}
					<Link
						href="/"
						className="flex items-center gap-2 font-heading font-bold text-lg">
						<Code2 className="h-5 w-5 text-accent" />
						<span className="gradient-text">Portfolio</span>
					</Link>

					{/* Nav links */}
					<div className="flex items-center gap-6">
						{footerLinks.map((link) => (
							<Link
								key={link.href}
								href={link.href}
								className="text-sm text-muted-foreground hover:text-foreground transition-colors">
								{link.label}
							</Link>
						))}
					</div>

					{/* Social icons */}
					<div className="flex items-center gap-3">
						{socialLinks.map(({ href, icon: Icon, label }) => (
							<SecureLink
								key={label}
								hrefParts={[href]}
								labelParts={[label]}
								className="text-muted-foreground hover:text-accent transition-colors"
							>
								<Icon className="h-5 w-5" />
							</SecureLink>
						))}
						<CopyEmail
							variant="ghost"
							hideText
							className="p-0 h-auto text-muted-foreground hover:text-accent hover:bg-transparent"
						/>
					</div>
				</div>

				<div className="mt-8 border-t border-border pt-6 text-center text-sm text-muted-foreground">
					<p>
						© {new Date().getFullYear()} Portfolio. Built with
						Next.js & shadcn/ui.
					</p>
				</div>
			</div>
		</footer>
	);
}
