import React from 'react';
import Link from 'next/link';
import Image from "next/legacy/image";
import styles from './AlbumList.module.css';

interface Album {
  id: string;
  title: string;
  imageUrl: string;
}

const albums: Album[] = [
  {
    id: 'faceplastic-albums',
    title: 'Пластика обличчя',
    imageUrl: '/images/albums/facelift1.jpg',
  },
  {
    id: 'otto-plastic',
    title: 'Пластика вушних раковин',
    imageUrl: '/images/albums/otto-plastic1.jpg',
  },
  {
    id: 'breast-augmentation',
    title: 'Збільшення грудей',
    imageUrl: '/images/albums/augmentatio.jpg',
  },
  {
    id: 'breast-lift',
    title: 'Підтяжка грудей',
    imageUrl: '/images/albums/breast-augment.jpg',
  },
  {
    id: 'breast-reduction',
    title: 'Заміна імплантів',
    imageUrl: '/images/albums/dreast-rebrend.jpg',
  },

  {
    id: 'body-plastic',
    title: 'Пластика тіла',
    imageUrl: '/images/albums/abdominoplasty.jpg',
  },
  {
    id: 'tumors-skin',
    title: 'Пухлини шкіри',
    imageUrl: '/images/albums/tumors-skin.jpg',
  },
  {
    id: 'breast-augmentation',
    title: 'Збільшення грудей',
    imageUrl: '/images/albums/breast-plastic.jpg',
  },
];

const AlbumList: React.FC = () => {
  return (
    <div className={styles.albumList}>
      <h1 className={styles.title}>Наші альбоми</h1>
      <div className={styles.grid}>
        {albums.map((album) => (
          <Link
            href={`/albums/${album.id}`}
            key={album.id}
            className={styles.albumLink}
          >
            <div className={styles.albumCard}>
              <Image
                src={album.imageUrl || '/placeholder.svg'}
                alt={album.title}
                width={300}
                height={200}
                className={styles.albumImage}
              />
              <h2 className={styles.albumTitle}>{album.title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AlbumList;
