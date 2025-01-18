import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from '@/components/theme-provider';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { Button } from '@/components/ui/button';
import "./globals.css";
import { ModeToggle } from "@/components/custom/ModeButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My portfolio",
  description: "My personal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <header className="
          flex justify-between items-center 
          p-4 
          w-full
          bg-brilliant text-baseBG
          dark:bg-baseBG dark:text-brilliant
          ">
            <div className="flex flex-row space-x-4">
              <Link href="/">
                <figure className="flex justify-center items-center mr-5 rounded">
                  <img src="image.jpg" alt="Logo" className="w-8 h-auto" />
                </figure>
              </Link>
              <NavigationMenu>
                <NavigationMenuList className="space-x-5">
                  <NavigationMenuItem>
                    <Button variant="ghost">About</Button>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Button variant="ghost">Projects</Button>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Button variant="ghost">Skills</Button>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Button variant="ghost">Contact</Button>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
            <NavigationMenu>
              <NavigationMenuList className="flex justify-around items-center space-x-5">
                <NavigationMenuItem className="flex justify-center items-center space-x-5">
                  <Link href="#"><i className="fab fa-twitter"></i></Link>
                  <Link href="#"><i className="fab fa-facebook-f"></i></Link>
                  <Link href="#"><i className="fab fa-instagram"></i></Link>
                  <Link href="#"><i className="fab fa-youtube"></i></Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </header>

          <main className="flex-grow flex flex-col justify-center items-center w-full h-full 
          bg-brilliant dark:bg-baseBG text-baseBG dark:text-brilliant">
            {children}
          </main>

          <footer className="flex justify-around items-center p-4 mt-auto 
          bg-brilliant dark:bg-baseBG text-baseBG dark:text-brilliant">
            <div className="space-x-2">
              <Link href="#" className="p-3">Cirstopher Hernández</Link>
              <span>Última actualización: 17/01/2025</span>
            </div>
            <ModeToggle />
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
