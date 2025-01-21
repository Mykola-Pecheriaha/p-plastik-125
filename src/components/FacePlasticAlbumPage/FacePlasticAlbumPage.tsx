'use client';

import type React from 'react';
import UnifiedGallery from '../UnifiedGallery/UnifiedGallery';
import faceLiftAugmentationAlbums from '../../data/faceLiftAugmentationAlbums';
import styles from './FacePlasticAlbumPage.module.css';

const FacePlasticAlbumPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.mainTitle}>
        Підтяжка обличчя: результати до та після
      </h1>
      <p className={styles.mainDescription}>
        Перегляньте наші галереї, щоб побачити результати операцій з підтяжки
        обличчя та шиї.
      </p>
      {faceLiftAugmentationAlbums.map((album, index) => (
        <div
          key={album.id}
          className={`${styles.gallerySection} ${index % 2 !== 0 ? styles.reversed : ''}`}
        >
          <div className={styles.galleryInfo}>
            <h2 className={styles.galleryTitle}>{album.title}</h2>
            <p className={styles.galleryDescription}>{album.description}</p>
          </div>
          <div className={styles.galleryContainer}>
            <UnifiedGallery
              images={album.images}
              albumId={album.id}
              initialLikes={album.initialLikes}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default FacePlasticAlbumPage;
