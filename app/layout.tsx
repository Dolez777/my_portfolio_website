import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
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
          {children}
          <Toaster />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
