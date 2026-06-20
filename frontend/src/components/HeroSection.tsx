'use client'
import {useState} from 'react';

export default function HeroSection(){
  const[activeSlide, setActiveSlide] = useState(0);

  return (
    <section className='min-h-4/6'>
        <div>
            <img src="sample" alt="sample_image" />
        </div>
        <div>
            <h1 className='font-syne text-6xl font-bold text-portfolio-amber'>Text over the image</h1>
            <h3 className='font-syne text-2xl font-bold text-white'>Image subtitle</h3>
        </div>
    </section>
  );
};