'use client';

import type React from 'react';
import Link from 'next/link';
import BreastPlasticCard from '../../components/BreastPlasticCard/BreastPlasticCard';
import styles from './BoditPlastic.module.css';

interface BoditPlasticProps {
  backgroundColor?: string;
}

const bodiPlasticData = [
  {
    id: 'abdominoplastic',
    imageUrl: '/images/abdominoplasty/abdominoplastic.jpg',
    title: 'Абдомінопластика: результати до та після',
    likes: 180,
    albumLink: '/albums/abdominoplastic',
    size: 'medium' as const,
  },
  {
    id: 'liposuction',
    imageUrl: '/images/liposuction/liposuction.jpg',
    title: 'Ліпосакція: результати до та після',
    likes: 120,
    albumLink: '/albums/liposuction',
    size: 'medium' as const,
  },
  {
    id: 'leg-plastic',
    imageUrl: '/images/leg-plastic/leg-plastic1.jpg',
    title: 'Пластика ніг: результати до та після',
    likes: 95,
    albumLink: '/albums/leg-plastic',
    size: 'medium' as const,
  },
  {
    id: 'neck-hump-removal',
    imageUrl: '/images/cervical-hump/hump1.jpg',
    title: 'Видалення шийного горба: результати до та після',
    likes: 150,
    albumLink: '/albums/neck-hump-removal',
    size: 'medium' as const,
  },
];

const BoditPlastic: React.FC<BoditPlasticProps> = ({
  backgroundColor = '#f0f4f8',
}) => {
  return (
    <div className={styles.boditPlastic} style={{ backgroundColor }}>
      <div className={styles.container}>
        <h2 className={styles.title}>Приклади робіт до та після</h2>
        <div className={styles.cardGrid}>
          {bodiPlasticData.map((item) => (
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
          Наша клініка спеціалізується на різних видах пластики тіла. Це і різні
          види абдомінопластики, ліпосакція, також пластика ніг та видалення
          шийного горба. Кожна процедура виконується з урахуванням
          індивідуальних особливостей та побажань пацієнта. Ми використовуємо
          найсучасніші методики та технології, щоб забезпечити найкращі
          результати та мінімальний період відновлення. Перегляньте наші
          альбоми, щоб побачити реальні результати та переконатися в
          професіоналізмі наших фахівців.
        </p>
      </div>
    </div>
  );
};

export default BoditPlastic;
