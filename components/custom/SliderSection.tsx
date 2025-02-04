import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Link from "next/link"

export function SliderSection() {
  return (
    <div className="mb-4 max-w-6xl w-full">
      <Carousel>
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div>
                <Card className="rounded-md border-none">
                  <CardContent className="relative flex flex-grow items-center justify-center flex-col p-0">
                    <section className="flex items-center justify-center absolute top-0 left-0 w-full p-4 bg-transparent z-10">
                      <h1>Information + {index}</h1>
                    </section>
                    <div className="relative w-full h-auto overflow-hidden rounded-md max-w-6xl max-h-96">
                      <img src="https://th.bing.com/th/id/OIP.EgRNfDtWNui_MWFkeVDDpgHaEJ?w=329&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt={`Image ${index + 1}`} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-sm"></div>
                    </div>
                    <section className="flex items-center justify-center absolute bottom-0 left-0 w-full p-4 bg-transparent z-10">
                      <Link href={`/project/${index + 1}`}>
                        <h1>Button</h1>
                      </Link>
                    </section>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}
