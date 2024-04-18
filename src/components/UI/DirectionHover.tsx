"use client";

import { ImageSectionProps } from '@/interfaces/ImagesProps';
import { DirectionAwareHover } from '../UI/Direction-away-hover'

export function DirectionAwayHover({ SectionImageProduct: { src, alt, price } }: { SectionImageProduct: ImageSectionProps }) {
  return (
    <div className="h-full w-full flex items-center justify-center">
      <DirectionAwareHover imageUrl={src || '/ProductMainImage/image1.webp'}>
        <p className="font-bold text-xl">{ alt || 'Lenovo Xt80 Bluetooth 5.3' }</p>
        <p className="font-normal text-sm">$ { price || 89.690 }</p>
      </DirectionAwareHover>
    </div>
  );
}
