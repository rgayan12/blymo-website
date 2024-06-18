"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import HomePageServiceCard from "../app/partials/home-page-service-card";
import { services } from "../app/data/services";

export default function CarouselComponent({ selectMember }: any) {
  const companyServices = services;

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent>
        {companyServices.map((service, index) => (
          <CarouselItem
            key={index}
            className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4 cursor-pointer"
          >
            <div className="p-1" onClick={() => selectMember(service.id)}>
              <HomePageServiceCard
                title={service.name}
                description={service.description}
                image={service.image}
                customStyle={service.customStyle}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex items-center justify-center mt-10">
        <div className="relative cursor-pointer">
          <CarouselPrevious />
        </div>
        <div className="relative cursor-pointer">
          <CarouselNext />
        </div>
      </div>
    </Carousel>
  );
}
