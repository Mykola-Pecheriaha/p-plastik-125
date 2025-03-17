'use client';

import type React from 'react';
import UnifiedGallery from '../UnifiedGallery/UnifiedGallery';

interface GalleryImage {
  src: string;
  alt: string;
}

interface BlefaroGalleryProps {
  images: GalleryImage[]; // Масив зображень
  albumId: string; // ID альбому
  initialLikes?: number; // Початкова кількість лайків (необов’язковий)
  customAspectRatio?: string; // Співвідношення сторін (наприклад, '16/9')
  customImageHeight?: number | string; // Висота зображення
  customImageWidth?: number | string; // Ширина зображення
  customObjectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down'; // Як вписувати зображення
}

const BlefaroGallery: React.FC<BlefaroGalleryProps> = ({
  images,
  albumId,
  initialLikes = 10,
  customAspectRatio,
  customImageHeight,
  customImageWidth,
  customObjectFit,
}) => {
  // Використовуємо налаштування за замовчуванням або користувацькі налаштування
  return (
    <UnifiedGallery
      images={images}
      albumId={albumId}
      initialLikes={initialLikes}
      aspectRatio={customAspectRatio || '4/3'} // Якщо не передано, використовується '4/3'
      imageHeight={customImageHeight} // Використовує передане значення
      imageWidth={customImageWidth} // Використовує передане значення
      objectFit={customObjectFit || 'cover'} // Якщо не передано, використовується 'cover'
    />
  );
};

export default BlefaroGallery;
