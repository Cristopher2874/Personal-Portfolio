'use client'
import {useState} from 'react';
import { Card, CardContent } from '@/components/ui/card'
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';

export default function HeroSection(){
  const[activeSlide, setActiveSlide] = useState(0);

  return (
    <section className='min-h-4/6 w-screen top-0'>
      <Carousel
        className='w-full'
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem>
              <div className='p-1'>
                <Card className='bg-black'>
                  <CardContent className='flex aspect-square items-center justify-center p-6 flex-col'>
                    <div key={index}>
                      <div className='w-h'>
                        <img src="sample" alt="sample_image" />
                      </div>
                      <div>
                          <h1 className='font-syne text-6xl font-bold text-portfolio-amber'>Text over the image {index + 1}</h1>
                          <h3 className='font-syne text-2xl font-bold text-white'>Image subtitle</h3>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))};
        </CarouselContent>
      </Carousel>
    </section>
  );
};