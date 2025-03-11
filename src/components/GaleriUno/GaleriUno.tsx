'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './GaleriUno.module.css';

type GaleriUnoProps = {
  images: string[];
};

export default function GaleriUno({ images }: GaleriUnoProps) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isZoomed, setIsZoomed] = useState<boolean>(false);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className={styles.gallery}>
      <div className={styles.imageContainer}>
        <Image
          src={images[currentIndex]}
          alt="Gallery Image"
          width={500}
          height={500}
        />
        <button className={styles.prev} onClick={prevImage}>
          &lt;
        </button>
        <button className={styles.next} onClick={nextImage}>
          &gt;
        </button>
      </div>
      <div className={styles.controls}>
        <span>❤️ 120</span>
        <button onClick={() => setIsZoomed(true)}>+</button>
      </div>
      {isZoomed && (
        <div className={styles.modal} onClick={() => setIsZoomed(false)}>
          <div className={styles.zoomControls}>
            <span>
              {currentIndex + 1}/{images.length}
            </span>
            <button onClick={() => setIsZoomed(false)}>X</button>
          </div>
          <Image
            src={images[currentIndex]}
            alt="Zoomed"
            width={800}
            height={800}
            className={styles.zoomed}
          />
        </div>
      )}
    </div>
  );
}
