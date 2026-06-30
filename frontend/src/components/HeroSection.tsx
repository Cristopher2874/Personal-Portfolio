'use client'
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import AutoPlay from "embla-carousel-autoplay"
import { slides } from '@/data/slides';

export default function HeroSection(){
  return (
    <section className='w-screen top-0 h-screen'>
      <Carousel
        className='w-full h-full'
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
        <CarouselContent className='p-0 m-0 h-screen'>
          {slides.map((slide) => (
            <CarouselItem key={slide.id} className='bg-transparent pl-0'>
              <div className='flex items-center justify-center p-0 h-full w-full relative border-b-4'>
                {slide.type === "video" ? (
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    src={slide.src}
                    className='absolute inset-0 object-cover w-full h-full'
                  />
                ):(
                  <img 
                    src={slide.src}
                    alt={slide.title}
                    className='absolute inset-0 object-cover w-full h-full z-1'
                  />
                )}
                <div className='w-full h-full absolute inset-0 bg-linear-to-t from-black to-transparent z-2'></div>
                <div className='w-full h-full flex flex-col items-start justify-end gap-2 p-14 z-10'>
                  <h1 className='font-syne text-6xl font-bold text-portfolio-amber leading-tight'>
                    {slide.title}
                  </h1>
                  <h3 className='font-syne text-2xl font-bold text-white leading-snug'>
                    {slide.subtitle}
                  </h3>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};