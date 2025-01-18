'use client';

import React from 'react';

import UnifiedGallery from '../../components/UnifiedGallery/UnifiedGallery';
import breastAugmentationAlbum from '../../data/breastAugmentationAlbum';
import styles from './BreastAugmentationAlbumPage.module.css';

const BreastAugmentationAlbumPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{breastAugmentationAlbum.title}</h1>
      <p className={styles.description}>
        {breastAugmentationAlbum.description}
      </p>
      <UnifiedGallery
        images={breastAugmentationAlbum.images}
        albumId={breastAugmentationAlbum.id}
        initialLikes={breastAugmentationAlbum.initialLikes}
      />
    </div>
  );
};

export default BreastAugmentationAlbumPage;
