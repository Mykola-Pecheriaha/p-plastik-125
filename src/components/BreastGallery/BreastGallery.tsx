'use client';

import type React from 'react';
import UnifiedGallery from '../UnifiedGallery/UnifiedGallery';

interface GalleryImage {
  src: string;
  alt: string;
}

interface BreastGalleryProps {
  images: GalleryImage[];
  albumId: string;
  initialLikes?: number;
}

const BreastGallery: React.FC<BreastGalleryProps> = ({
  images,
  albumId,
  initialLikes = 0,
}) => {
  // Тут ми встановлюємо специфічні налаштування для галереї в CreateBeauty
  return (
    <UnifiedGallery
      images={images}
      albumId={albumId}
      initialLikes={initialLikes}
      aspectRatio="1/1" // Квадратне співвідношення для галереї грудей
      imageHeight="400px" // Фіксована висота
      objectFit="contain" // Зображення повністю видно
      // Можна додати інші специфічні налаштування
    />
  );
};

export default BreastGallery;
