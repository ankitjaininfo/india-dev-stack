import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { ArrowRightIcon } from "lucide-react";
import { Card, CardContent } from "@components/ui/card";
import { Button } from "./ui/button";

const FeaturedCarousel = ({ entries }: any) => {
  return (
    <Carousel
      opts={{ align: "start", loop: true }}
      plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}
      className="mt-12 mb-2">
      <CarouselContent className="py-5">
        {entries.map((entry: any) => {
          return (
            <CarouselItem key={entry.id} className="lg:basis-1/3 sm:basis-1/2">
              <Card className="h-full hover:shadow-md group shadow transition-all duration-300 mb-1 overflow-hidden">
                <img
                  src={entry.data.Images[0]}
                  width={400}
                  height={500}
                  alt={entry.data.Name}
                  className="object-cover h-56 group-hover:scale-105 duration-500 transition-all w-full rounded-lg"
                />
                <CardContent className="p-6 space-y-5">
                  <div>
                    <h3 className="text-xl font-bold">{entry.data.Name}</h3>
                    <p className="text-muted-foreground line-clamp-3">
                      {entry.data.Description}
                    </p>
                  </div>
                  <Button asChild variant={"outline"}>
                    <a href={"/software/" + entry.id + "/"}>
                      View Details
                      <ArrowRightIcon className="size-4 ml-2 group-hover:ml-4 transition-all" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default FeaturedCarousel;
