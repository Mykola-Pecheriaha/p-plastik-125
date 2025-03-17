'use client';

import type React from 'react';
import UnifiedGallery from '../UnifiedGallery/UnifiedGallery';

interface GalleryImage {
  src: string;
  alt: string;
}

interface BlefaroGalleryProps {
  images: GalleryImage[];
  albumId: string;
  initialLikes?: number;
}

const BlefaroGallery: React.FC<BlefaroGalleryProps> = ({
  images,
  albumId,
  initialLikes = 0,
}) => {
  // Тут ми встановлюємо специфічні налаштування для галереї в BigBlefaro
  return (
    <UnifiedGallery
      images={images}
      albumId={albumId}
      initialLikes={initialLikes}
      aspectRatio="4/3" // Специфічне співвідношення сторін для блефаропластики
      objectFit="cover" // Специфічний режим відображення
      // Можна додати інші специфічні налаштування
    />
  );
};

export default BlefaroGallery;
