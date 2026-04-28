"use client";

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface SecureTextProps {
	textParts: string[];
	className?: string;
}

export function SecureText({ textParts, className }: SecureTextProps) {
	const [text, setText] = useState("");
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
		setText(textParts.join(""));
	}, [textParts]);

	if (!isMounted) return <span className={cn("animate-pulse bg-muted rounded w-32 h-6 inline-block", className)} />;

	return <span className={className}>{text}</span>;
}
