'use client';

import { useState } from 'react';
import { toast } from 'sonner';
import { Mail, Check, Copy } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface CopyEmailProps {
	variant?: 'button' | 'link' | 'ghost' | 'outline' | 'default';
	className?: string;
	showIcon?: boolean;
	hideText?: boolean;
}

/**
 * A client component that copies the email address to clipboard instead of using mailto.
 * Uses string splitting to prevent basic bot scraping.
 */
export function CopyEmail({
	variant = 'default',
	className,
	showIcon = true,
	hideText = false,
}: CopyEmailProps) {
	const [copied, setCopied] = useState(false);

	// Email obfuscation - Uses .env.local for privacy
	const user = process.env.NEXT_PUBLIC_EMAIL_USER || 'hello';
	const domain = process.env.NEXT_PUBLIC_EMAIL_DOMAIN || 'example.com';
	const email = user + '@' + domain;

	const handleCopy = async (e: React.MouseEvent) => {
		e.preventDefault();
		e.stopPropagation();

		try {
			await navigator.clipboard.writeText(email);
			setCopied(true);
			toast.success('Email copied to clipboard');
			setTimeout(() => setCopied(false), 2000);
		} catch (err) {
			console.error('Clipboard error:', err);
			toast.error('Failed to copy email');
		}
	};

	if (variant === 'link') {
		return (
			<button
				onClick={handleCopy}
				className={cn(
					'text-muted-foreground hover:text-accent transition-colors flex items-center gap-2 group',
					className,
				)}
				aria-label="Copy email address">
				{showIcon && (
					<div className="relative h-4 w-4">
						<Mail
							className={cn(
								'h-4 w-4 absolute transition-all duration-300',
								copied
									? 'scale-0 opacity-0'
									: 'scale-100 opacity-100',
							)}
						/>
						<Check
							className={cn(
								'h-4 w-4 absolute transition-all duration-300 text-green-500',
								copied
									? 'scale-100 opacity-100'
									: 'scale-0 opacity-0',
							)}
						/>
					</div>
				)}
				{!hideText && (
					<span className="border-b border-transparent group-hover:border-accent transition-all">
						{email}
					</span>
				)}
			</button>
		);
	}

	return (
		<Button
			variant={variant === 'button' ? 'default' : (variant as any)}
			onClick={handleCopy}
			className={cn(
				'gap-2 min-w-[140px] transition-all duration-300',
				className,
			)}
			aria-label="Copy email address">
			{showIcon && (
				<div className="relative h-4 w-4">
					<Copy
						className={cn(
							'h-4 w-4 absolute transition-all duration-300',
							copied
								? 'scale-0 opacity-0'
								: 'scale-100 opacity-100',
						)}
					/>
					<Check
						className={cn(
							'h-4 w-4 absolute transition-all duration-300',
							copied
								? 'scale-100 opacity-100'
								: 'scale-0 opacity-0',
						)}
					/>
				</div>
			)}
			{!hideText && (copied ? 'Copied!' : 'Email Me')}
		</Button>
	);
}
