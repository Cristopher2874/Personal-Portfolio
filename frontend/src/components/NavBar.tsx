'use client'
import {useState} from 'react';
import {useEffect} from 'react';
import { Button } from '@/components/ui/button';

export default function NavBar(){
  const[position, setPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setPosition(window.scrollY);

    }
  }, []);

  return (
    <nav className="flex w-full flex-row items-center justify-between fixed top-0">
      <p className="font-syne text-xl font-bold text-portfolio-amber p-3">logo</p>
      <div>
        <Button>
          <a href="#home" className="font-syne text-xl font-bold text-portfolio-amber p-3">Home</a>
        </Button>
        <Button>
          <a href="#about" className="font-syne text-xl font-bold text-portfolio-amber p-3">About</a>
        </Button>
        <Button>
          <a href="#contact" className="font-syne text-xl font-bold text-portfolio-amber p-3">Contact</a>
        </Button>
      </div>
    </nav>
  );
};