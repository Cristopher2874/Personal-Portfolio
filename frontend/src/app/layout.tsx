import type { Metadata } from "next";
import { Syne, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Initialize a custom font from the global css
const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

// Keep Geist for clean body text if you want to mix fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Personal portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Inject the font variables into the HTML tag
    <html lang="en" className={`${syne.variable} ${geistSans.variable} ${geistMono.variable}`}>
      {/* Apply your dark background and default text color to the body */}
      <body className="antialiased bg-portfolio-bg text-foreground">
        {children}
      </body>
    </html>
  );
}