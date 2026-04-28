import { Space_Grotesk, Inter, JetBrains_Mono, Russo_One } from "next/font/google";

export const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading-var",
  weight: ["300", "400", "500", "600", "700"],
  display: 'swap',
});

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body-var",
  display: 'swap',
});

export const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-code-var",
  weight: ["400", "500"],
  display: 'swap',
});

export const russoOne = Russo_One({
  subsets: ["latin"],
  variable: "--font-logo-var",
  weight: "400",
  display: 'swap',
});
