'use client';

import React from 'react';
import Link from 'next/link';
import BreastPlasticCard from '../../components/BreastPlasticCard/BreastPlasticCard';
import styles from './BreastPlasticPage.module.css';

const breastPlasticData = [
  {
    id: 'breast-augmentation',
    imageUrl: '/images/breast-augmento/augmento1.jpg',
    title: 'Збільшення грудей: результати до та після',
    likes: 180,
    albumLink: '/albums/breast-augmentation',
  },

  {
    id: 'breast-lift',
    imageUrl: '/images/breast-plastic/lift.jpg',
    title: 'Підтяжка грудей: результати до та після',
    likes: 120,
    albumLink: '/albums/breast-lift',
  },
  {
    id: 'breast-reduction',
    imageUrl: '/images/breast-plastic/reduction.jpg',
    title: 'Зменшення грудей: результати до та після',
    likes: 95,
    albumLink: '/albums/breast-reduction',
  },
];

const BreastPlasticPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Приклади робіт до та після</h1>
      <div className={styles.cardGrid}>
        {breastPlasticData.map((item) => (
          <div key={item.id} className={styles.cardWrapper}>
            <BreastPlasticCard
              imageUrl={item.imageUrl}
              initialLikes={item.likes}
              id={item.id}
            />
            <h3 className={styles.cardTitle}>{item.title}</h3>
            <Link href={item.albumLink} className={styles.albumButton}>
              Переглянути альбом
            </Link>
          </div>
        ))}
      </div>
      <p className={styles.description}>
        Наша клініка спеціалізується на різних видах пластики грудей, включаючи
        підтяжку, зменшення, збільшення та загальну пластику. Кожна процедура
        виконується з урахуванням індивідуальних особливостей та побажань
        пацієнта. Наші хірурги використовують найсучасніші методики та
        технології, щоб забезпечити найкращі результати та мінімальний період
        відновлення. Перегляньте наші альбоми, щоб побачити реальні результати
        та переконатися в професіоналізмі наших фахівців.
      </p>
    </div>
  );
};

export default BreastPlasticPage;
