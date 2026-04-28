import type { Metadata } from "next";
import { spaceGrotesk, inter, jetbrainsMono } from "@/lib/fonts";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Portfolio — Full-Stack Developer",
    template: "%s | Portfolio",
  },
  description:
    "Personal portfolio of a full-stack developer specializing in web apps, mobile apps, data & automation, and AI tooling.",
  keywords: ["developer", "portfolio", "web", "mobile", "react", "flutter", "next.js"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Portfolio — Full-Stack Developer",
    description:
      "Personal portfolio of a full-stack developer specializing in web apps, mobile apps, data & automation, and AI tooling.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen bg-background text-foreground antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <a 
            href="#main-content" 
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-primary-foreground p-4 rounded-md z-[100]"
          >
            Skip to content
          </a>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
