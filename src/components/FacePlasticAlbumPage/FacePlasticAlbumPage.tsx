'use client';

import React from 'react';

import UnifiedGallery from '../../components/UnifiedGallery/UnifiedGallery';
import facePlasticAlbum from '../../data/facePlasticAlbum';
import styles from './FacePlasticAlbumPage.module.css';

const FacePlasticAlbumPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{facePlasticAlbum.title}</h1>
      <p className={styles.description}>{facePlasticAlbum.description}</p>
      <UnifiedGallery
        images={facePlasticAlbum.images}
        albumId={facePlasticAlbum.id}
        initialLikes={facePlasticAlbum.initialLikes}
      />
    </div>
  );
};

export default FacePlasticAlbumPage;
