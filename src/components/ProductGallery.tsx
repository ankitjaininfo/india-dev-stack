import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const PLACEHOLDER_IMAGES = ["/thumbnails/placeholder-1.png", "/thumbnails/placeholder-2.png"];

const ProductGallery = ({ images }: { images: string[] }) => {
  const displayImages = (images && images.length > 0) ? images : [PLACEHOLDER_IMAGES[Math.floor(Math.random() * PLACEHOLDER_IMAGES.length)]];

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
        {displayImages.map((image, i) => (
          <CarouselItem
            key={i}
            className="flex h-full overflow-hidden items-center">
            <img
              src={image}
              width={600}
              max-height={600}
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
