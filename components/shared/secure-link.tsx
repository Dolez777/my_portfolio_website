"use client";

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface SecureLinkProps {
	hrefParts: string[];
	labelParts: string[];
	className?: string;
	children?: React.ReactNode;
}

export function SecureLink({ hrefParts, labelParts, className, children }: SecureLinkProps) {
	const [href, setHref] = useState("");
	const [label, setLabel] = useState("");
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
		// Only join on the client
		setHref(hrefParts.join(""));
		setLabel(labelParts.join(""));
	}, [hrefParts, labelParts]);

	const handleClick = (e: React.MouseEvent) => {
		if (!href) {
			e.preventDefault();
			return;
		}
		window.open(href, '_blank', 'noopener,noreferrer');
	};

	if (!isMounted) return <span className={cn("animate-pulse bg-muted rounded w-24 h-4 inline-block", className)} />;

	return (
		<button
			onClick={handleClick}
			className={cn(
				"text-left hover:text-accent transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent/50 rounded",
				className
			)}
			title={`Visit ${label}`}
		>
			{children || label}
		</button>
	);
}
