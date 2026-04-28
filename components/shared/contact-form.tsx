"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Send, Loader2, CheckCircle2 } from 'lucide-react';
import { toast } from 'sonner';

export function ContactForm() {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSuccess, setIsSuccess] = useState(false);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsSubmitting(true);

		const formData = new FormData(e.currentTarget);
		const data = Object.fromEntries(formData.entries());

		try {
			const response = await fetch(`https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_KEY}`, {
				method: 'POST',
				body: JSON.stringify(data),
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				}
			});

			if (response.ok) {
				setIsSuccess(true);
				toast.success("Message sent successfully!");
				(e.target as HTMLFormElement).reset();
			} else {
				toast.error("Failed to send message. Please try again.");
			}
		} catch (error) {
			toast.error("An error occurred. Please try again later.");
		} finally {
			setIsSubmitting(false);
		}
	};

	if (isSuccess) {
		return (
			<div className="flex flex-col items-center justify-center py-12 text-center animate-in fade-in zoom-in duration-500">
				<div className="h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center mb-6">
					<CheckCircle2 className="h-8 w-8 text-accent" />
				</div>
				<h3 className="text-2xl font-heading font-bold mb-2">Message Sent!</h3>
				<p className="text-muted-foreground mb-8">
					Thanks for reaching out. I&apos;ll get back to you as soon as possible.
				</p>
				<Button 
					variant="outline" 
					onClick={() => setIsSuccess(false)}
					className="glass border-border/50"
				>
					Send another message
				</Button>
			</div>
		);
	}

	return (
		<form onSubmit={handleSubmit} className="space-y-6">
			<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
				<div className="space-y-2">
					<label htmlFor="name" className="text-sm font-medium">
						Name
					</label>
					<Input
						id="name"
						name="name"
						required
						placeholder="John Doe"
						className="glass border-border/40"
					/>
				</div>
				<div className="space-y-2">
					<label htmlFor="email" className="text-sm font-medium">
						Email
					</label>
					<Input
						id="email"
						name="email"
						type="email"
						required
						placeholder="email@example.com"
						className="glass border-border/40"
					/>
				</div>
			</div>
			<div className="space-y-2">
				<label htmlFor="subject" className="text-sm font-medium">
					Subject
				</label>
				<Input
					id="subject"
					name="subject"
					required
					placeholder="Inquiry about project"
					className="glass border-border/40"
				/>
			</div>
			<div className="space-y-2">
				<label htmlFor="message" className="text-sm font-medium">
					Message
				</label>
				<Textarea
					id="message"
					name="message"
					required
					placeholder="How can I help you?"
					className="glass border-border/40"
					rows={5}
				/>
			</div>
			<Button
				className="w-full btn-gradient border-0 h-12"
				type="submit"
				disabled={isSubmitting}>
				{isSubmitting ? (
					<>
						Sending...
						<Loader2 className="ml-2 h-4 w-4 animate-spin" />
					</>
				) : (
					<>
						Send Message
						<Send className="ml-2 h-4 w-4" />
					</>
				)}
			</Button>
		</form>
	);
}
