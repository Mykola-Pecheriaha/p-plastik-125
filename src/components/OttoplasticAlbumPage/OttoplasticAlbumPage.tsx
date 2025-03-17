import type React from 'react';
import OttoplasticGallery from '../OttoplasticGallery/OttoplasticGallery';
import ottoplasticAlbum from '../../data/ottoplasticAlbum';
import styles from './OttoplasticAlbumPage.module.css';

interface OttoplasticAlbumPageProps {
  backgroundColor?: string;
  // Додаємо нові пропси для галереї
  galleryAspectRatio?: string;
  galleryObjectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  galleryImageHeight?: string | number;
}

const OttoplasticAlbumPage: React.FC<OttoplasticAlbumPageProps> = ({
  backgroundColor = '#ffffff',
  galleryAspectRatio,
  galleryObjectFit,
  galleryImageHeight,
}) => {
  return (
    <div className={styles.container} style={{ backgroundColor }}>
      <h1 className={styles.mainTitle}>
        Корекція вушних раковин: результати до та після
      </h1>
      <p className={styles.mainDescription}>
        Перегляньте наші галереї, щоб побачити результати операцій з корекцією
        вушних раковин.
      </p>
      {ottoplasticAlbum.map((album, index) => (
        <div
          key={album.id}
          className={`${styles.gallerySection} ${index % 2 !== 0 ? styles.reversed : ''}`}
        >
          <div className={styles.galleryInfo}>
            <h2 className={styles.galleryTitle}>{album.title}</h2>
            <p className={styles.galleryDescription}>{album.description}</p>
          </div>
          <div className={styles.galleryContainer}>
            {/* Передаємо пропси до OttoplasticGallery */}
            <OttoplasticGallery
              images={album.images}
              albumId={album.id}
              initialLikes={album.initialLikes}
              aspectRatio={galleryAspectRatio}
              objectFit={galleryObjectFit}
              imageHeight={galleryImageHeight}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default OttoplasticAlbumPage;
