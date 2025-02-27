'use client';

import type React from 'react';
import { useState, useCallback } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './FlapPrimmaGallery.module.css';

interface ImageType {
  src: string;
  width: number;
  height: number;
}

interface FlapPrimmaGalleryProps {
  images: ImageType[];
  galleryId: string;
}

const FlapPrimmaGallery: React.FC<FlapPrimmaGalleryProps> = ({
  images,
  galleryId,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNext = useCallback(() => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const handlePrev = useCallback(() => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }, [images.length]);

  if (images.length === 0) {
    return <div className={styles.noImages}>Немає доступних зображень</div>;
  }

  const currentImage = images[currentImageIndex];

  return (
    <div
      className={styles.flapGalleryWrapper}
      style={{
        width: `${currentImage.width}px`,
        height: `${currentImage.height}px`,
      }}
      id={galleryId}
    >
      <div className={styles.imageContainer}>
        <Image
          src={currentImage.src || '/placeholder.svg'}
          alt={`Зображення галереї ${currentImageIndex + 1}`}
          width={currentImage.width}
          height={currentImage.height}
          layout="responsive"
          objectFit="cover"
          quality={75}
          priority={true}
        />
      </div>
      <button
        onClick={handlePrev}
        className={`${styles.navButton} ${styles.prevButton}`}
        aria-label="Попереднє зображення"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={handleNext}
        className={`${styles.navButton} ${styles.nextButton}`}
        aria-label="Наступне зображення"
      >
        <ChevronRight size={24} />
      </button>
      <div className={styles.indicators}>
        {images.map((_, index) => (
          <button
            key={index}
            className={`${styles.indicator} ${index === currentImageIndex ? styles.active : ''}`}
            onClick={() => setCurrentImageIndex(index)}
            aria-label={`Перейти до зображення ${index + 1}`}
            aria-current={index === currentImageIndex}
          />
        ))}
      </div>
    </div>
  );
};

export default FlapPrimmaGallery;
