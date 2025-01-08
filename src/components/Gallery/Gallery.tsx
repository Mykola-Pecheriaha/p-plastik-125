'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './Gallery.module.css';

interface GalleryProps {
  images: string[]; // Масив URL зображень
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [likes, setLikes] = useState(0);

  // Отримуємо лайки з локальної пам'яті при завантаженні компонента
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedLikes = localStorage.getItem('likes');
      setLikes(savedLikes ? parseInt(savedLikes, 10) : 0);
    }
  }, []);

  // Записуємо лайки у локальну пам'ять при зміні стану
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('likes', likes.toString());
    }
  }, [likes]);

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const toggleFullscreen = () => {
    setIsFullscreen((prevState) => !prevState);
  };

  const handleLike = () => {
    setLikes((prevLikes) => prevLikes + 1);
  };

  return (
    <div className={styles.galleryWrapper}>
      <div
        className={`${styles.gallery} ${isFullscreen ? styles.fullscreen : ''}`}
      >
        {isFullscreen && (
          <button onClick={toggleFullscreen} className={styles.closeButton}>
            ✕
          </button>
        )}
        <div className={styles.mainContent}>
          <button onClick={handlePrev} className={styles.navButton}>
            {'<'}
          </button>
          <div className={styles.imageContainer}>
            <Image
              src={images[currentImageIndex]}
              alt={`Gallery Image ${currentImageIndex + 1}`}
              width={isFullscreen ? 900 : 450}
              height={isFullscreen ? 860 : 430}
              priority={true}
            />
          </div>
          <button onClick={handleNext} className={styles.navButton}>
            {'>'}
          </button>
        </div>
        <div className={styles.footer}>
          <div className={styles.likeSection}>
            <span className={styles.likes}>{likes}</span>
            <button onClick={handleLike} className={styles.likeButton}>
              ❤️
            </button>
          </div>
          <div className={styles.footerContent}>
            <div className={styles.dots}>
              {images.map((_, index) => (
                <span
                  key={index}
                  className={`${styles.dot} ${
                    index === currentImageIndex ? styles.active : ''
                  }`}
                  onClick={() => setCurrentImageIndex(index)}
                ></span>
              ))}
            </div>
            {!isFullscreen && (
              <button
                onClick={toggleFullscreen}
                className={styles.fullscreenButton}
              >
                +
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
