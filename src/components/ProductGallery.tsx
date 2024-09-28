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
      className="rounded-lg h-full mx-6">
      <CarouselContent className="h-full">
        {images.map((image, i) => (
          <CarouselItem
            key={i}
            className="flex h-full overflow-hidden items-center">
            <img
              src={image}
              width={600}
              height={600}
              alt="Product Image"
              className="object-cover shadow-lg rounded"
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
