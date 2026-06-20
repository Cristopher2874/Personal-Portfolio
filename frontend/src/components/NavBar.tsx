'use client'
import {useState} from 'react';
import {useEffect} from 'react';

export default function NavBar(){
  const[position, setPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setPosition(window.scrollY);

    }
  }, []);

  return (
    <nav className="flex w-full flex-row items-center justify-between">
      <div>
        <a href="#home" className="font-syne text-xl font-bold text-portfolio-amber p-3">Home</a>
        <a href="#about" className="font-syne text-xl font-bold text-portfolio-amber p-3">About</a>
        <a href="#contact" className="font-syne text-xl font-bold text-portfolio-amber p-3">Contact</a>
      </div>
      <p className="font-syne text-xl font-bold text-portfolio-amber p-3">logo</p>
    </nav>
  );
};