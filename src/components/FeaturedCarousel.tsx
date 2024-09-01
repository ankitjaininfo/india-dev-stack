import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@components/ui/carousel";
import { ArrowRightIcon } from "lucide-react";
import { Card, CardContent } from "@components/ui/card";
import { Button } from "./ui/button";

const FeaturedCarousel = ({ entries }: any) => {
  const duplicatedEntries = Array(5).fill(entries).flat();
  return (
    <Carousel opts={{ align: "start", loop: true }} className="mt-12 mb-2 p-1">
      <CarouselContent className="py-5">
        {
          duplicatedEntries.map((entry: any) => {
            return (
              <CarouselItem key={entry.id} className="lg:basis-1/3 sm:basis-1/2">
                <Card className="h-full hover:shadow-md group shadow transition-all duration-300 mb-1 overflow-hidden">
                  <img
                    src={"https://magicui.design/showcase/infisical.png"}
                    width={400}
                    height={500}
                    alt={entry.data.Name}
                    className="object-cover h-56 group-hover:scale-105 duration-500 transition-all w-full rounded-lg"
                  />
                  <CardContent className="p-6 space-y-5">
                    <div>
                      <h3 className="text-xl font-bold">{entry.data.Name}</h3>
                      <p className="text-muted-foreground">
                        {entry.data.Description}
                      </p>
                    </div>
                    <Button asChild variant={"outline"}>
                      <a
                        href={"/software/" + entry.id}
                      >
                        View Details
                        <ArrowRightIcon className="size-4 ml-2 group-hover:ml-4 transition-all" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </CarouselItem>
            );
          })
        }
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

export default FeaturedCarousel