import React from 'react';
import UnifiedGallery from '../UnifiedGallery/UnifiedGallery';
import generalAlbums from '../../data/generalAlbums';
import styles from './GeneralAlbumPage.module.css';

const GeneralAlbumPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.mainTitle}>
        Збільшення грудей: результати до та після
      </h1>
      <p className={styles.mainDescription}>
        Перегляньте наші галереї, щоб побачити результати операцій зі збільшення
        грудей.
      </p>
      {generalAlbums.map((album, index) => (
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
export default GeneralAlbumPage;
