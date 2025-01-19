import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function SliderSection() {
  return (
    <div className="aspect-video w-full min-w-xs">
      <Carousel>
        <section className="bg-white dark:bg-black">
          <h1>Information</h1>
        </section>
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div>
                <Card className="flex flex-grow w-full h-full rounded-none border-none">
                  <CardContent className="flex flex-grow items-center justify-center aspect-video">
                    <span className="text-4xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <section className="bg-white dark:bg-black">
          <h1>Buttons</h1>
        </section>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}
