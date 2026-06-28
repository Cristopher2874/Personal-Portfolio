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
import AutoPlay from "embla-carousel-autoplay"

export default function HeroSection(){
  const[activeSlide, setActiveSlide] = useState(0);

  return (
    <section className='min-h-1/3 w-screen top-0 max-h-1/3'>
      <Carousel
        className='w-full'
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          AutoPlay({
            delay: 5000,
          }),
        ]}
      >
        <CarouselContent className='p-0'>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className=''>
              <div className='p-0'>
                <Card className='bg-black'>
                  <CardContent className='flex aspect-square items-center justify-center p-6 flex-col'>
                    <div className='bg-linear-to-t'>
                      <div className='w-h'>
                        <img 
                          src="sample"
                          alt="sample_image"
                          className='absolute inset-0 object-cover'
                        />
                      </div>
                      <div className='absolute z-10'>
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