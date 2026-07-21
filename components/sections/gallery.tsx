'use client';

import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

type GalleryProps = {
  images: { src: string; alt: string }[];
};

export function Gallery({ images }: GalleryProps) {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true, align: 'center' });
  const [selected, setSelected] = useState(0);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelected(embla.selectedScrollSnap());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    embla.on('select', onSelect);
    return () => {
      embla.off('select', onSelect);
    };
  }, [embla, onSelect]);

  const scrollPrev = () => embla?.scrollPrev();
  const scrollNext = () => embla?.scrollNext();

  return (
    <div className="flex flex-col gap-4">
      <div className="relative overflow-hidden rounded-2xl border border-border">
        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex">
            {images.map((image) => (
              <div
                key={image.src}
                className="relative min-w-0 shrink-0 grow-0 basis-full"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={image.src}
                  alt={image.alt}
                  className="aspect-[16/10] w-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        <button
          aria-label="Previous image"
          onClick={scrollPrev}
          className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card/90 text-foreground backdrop-blur transition-colors hover:border-accent hover:text-accent"
        >
          <ArrowLeft className="h-5 w-5" strokeWidth={1.75} />
        </button>
        <button
          aria-label="Next image"
          onClick={scrollNext}
          className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card/90 text-foreground backdrop-blur transition-colors hover:border-accent hover:text-accent"
        >
          <ArrowRight className="h-5 w-5" strokeWidth={1.75} />
        </button>
      </div>

      <div className="flex items-center justify-center gap-2">
        {images.map((image, idx) => (
          <button
            key={image.src}
            aria-label={`Go to image ${idx + 1}`}
            onClick={() => embla?.scrollTo(idx)}
            className={cn(
              'h-1.5 rounded-full transition-all duration-300',
              idx === selected ? 'w-7 bg-accent' : 'w-1.5 bg-border hover:bg-muted-foreground/50',
            )}
          />
        ))}
      </div>
    </div>
  );
}
