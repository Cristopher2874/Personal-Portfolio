'use client'
import {useState} from 'react';
import {useEffect} from 'react';
import { cn } from '@/lib/utils';

export default function NavBar(){
  const[scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 48);
    }
    //action, function, options
    window.addEventListener('scroll', handleScroll, {passive: true});

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 z-50 w-full flex items-center justify-between px-8 py-4 transition-all duration-300",
      scrolled ? 'bg-bg/80 backdrop-blur-md border-b border-border' : 'bg-transparent'
    )}>
      <p className="font-syne text-xl font-bold text-portfolio-amber">
        Cris.main
      </p>
      <div className='flex items-center gap-6'>
        <a href="#home" className="font-mono text-sm text-muted-foreground hover:text-foreground transition-colors uppercase tracking-widest">
          Home
        </a>
        <a href="#about" className="font-mono text-sm text-muted-foreground hover:text-foreground transition-colors uppercase tracking-widest">
          About
        </a>
        <a href="#contact" className="font-mono text-sm text-muted-foreground hover:text-foreground transition-colors uppercase tracking-widest">
          Contact
        </a>
      </div>
    </nav>
  );
};