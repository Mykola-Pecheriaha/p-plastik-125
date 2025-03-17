'use client';

import type React from 'react';
import UnifiedGallery from '../UnifiedGallery/UnifiedGallery';

interface GalleryImage {
  src: string;
  alt: string;
}

interface OttoplasticGalleryProps {
  images: GalleryImage[];
  albumId: string;
  initialLikes?: number;
  // Додаємо нові пропси
  aspectRatio?: string;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  imageHeight?: string | number;
  imageWidth?: string | number;
}

const OttoplasticGallery: React.FC<OttoplasticGalleryProps> = ({
  images,
  albumId,
  initialLikes = 0,
  // Додаємо значення за замовчуванням для нових пропсів
  aspectRatio = '16/9',
  objectFit = 'cover',
  imageHeight,
  imageWidth,
}) => {
  // Передаємо всі пропси до UnifiedGallery
  return (
    <UnifiedGallery
      images={images}
      albumId={albumId}
      initialLikes={initialLikes}
      aspectRatio={aspectRatio}
      objectFit={objectFit}
      imageHeight={imageHeight}
      imageWidth={imageWidth}
    />
  );
};

export default OttoplasticGallery;
