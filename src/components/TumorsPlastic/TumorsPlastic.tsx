'use client';
import type React from 'react';
import Link from 'next/link';
import BreastPlasticCard from '../BreastPlasticCard/BreastPlasticCard';
import styles from './tumorsPlastic.module.css';
interface tumorsPlasticProps {
  backgroundColor?: string;
}
const tumorsPlasticData = [
  {
    id: 'nevus',
    imageUrl: '/images/tumor/nevus.jpg',
    title: 'Видалення невуса : результати до та після',
    likes: 180,
    albumLink: '/albums/ottoplastic-albums',
    size: 'medium' as const,
  },
  {
    id: 'papiloma',
    imageUrl: '/images/tumor/papiloma.jpg',
    title: 'Видаленнч папіломи: результати до та після',
    likes: 120,
    albumLink: '/albums/ottoplastic-albums',
    size: 'medium' as const,
  },
  {
    id: 'ateroma',
    imageUrl: '/images/tumor/ateroma.jpg',
    title: 'Видалення атероми: результати до та після',
    likes: 120,
    albumLink: '/albums/ottoplastic-albums',
    size: 'medium' as const,
  },

  {
    id: 'gemangioma',
    imageUrl: '/images/tumor/gemangioma.jpg',
    title: 'Видалення гемангіоми: результати до та після',
    likes: 120,
    albumLink: '/albums/ottoplastic-albums',
    size: 'medium' as const,
  },

  {
    id: 'lipoma',
    imageUrl: '/images/tumor/lipoma.jpg',
    title: 'Видалення лшпоми: результати до та після',
    likes: 120,
    albumLink: '/albums/ottoplastic-albums',
    size: 'medium' as const,
  },

  {
    id: 'fibroma',
    imageUrl: '/images/tumor/fibroma.jpg',
    title: 'Видалення фіброми: результати до та після',
    likes: 120,
    albumLink: '/albums/ottoplastic-albums',
    size: 'medium' as const,
  },
];
const TumorsPlastic: React.FC<tumorsPlasticProps> = ({
  backgroundColor = '#f0f4f8',
}) => {
  return (
    <div className={styles.tumorsPlastic} style={{ backgroundColor }}>
      <div className={styles.container}>
        <h2 className={styles.title}>Приклади робіт до та після</h2>
        <div className={styles.cardGrid}>
          {tumorsPlasticData.map((item) => (
            <div key={item.id} className={styles.cardWrapper}>
              <BreastPlasticCard
                imageUrl={item.imageUrl}
                initialLikes={item.likes}
                id={item.id}
                size={item.size}
              />
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <Link href={item.albumLink} className={styles.albumButton}>
                Переглянути альбом
              </Link>
            </div>
          ))}
        </div>
        <p className={styles.description}>
          Наша клініка спеціалізується на різних видах пластики тіла. Враховуючи
          те що наші фахівці володіють прицензійною оперативною технікою і мають
          сертифікати з онкології до нас часьо звертаються пацієнти з проблемами
          утворення пухлин на різних частинах шкіри. Перегляньте наші альбоми,
          щоб побачити реальні результати та переконатися в професіоналізмі
          наших фахівців.
        </p>
      </div>
    </div>
  );
};
export default TumorsPlastic;
