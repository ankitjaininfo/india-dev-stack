import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const ProductGallery = ({ images }: { images: string[] }) => {
  return (
    <Carousel
      opts={{ align: "start", loop: true }}
      plugins={[
        Autoplay({
          delay: 6000,
        }),
      ]}
      className="rounded-lg mx-8">
      <CarouselContent>
        {images.map((image, i) => (
          <CarouselItem key={i} className="flex items-center">
            <img
              src={image}
              width={600}
              height={600}
              alt="Product Image"
              className="object-cover shadow aspect-[3/2] rounded"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default ProductGallery;
