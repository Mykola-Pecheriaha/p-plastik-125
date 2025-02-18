'use client';

import React from 'react';
import Link from 'next/link';
import BreastPlasticCard from '../../components/BreastPlasticCard/BreastPlasticCard';
import styles from './BreastPlasticPage.module.css';

const breastPlasticData = [
  {
    id: 'breast-augmentation',
    imageUrl: '/images/breast-plastic/augmentatio.jpg',
    title: 'Збільшення грудей: результати до та після',
    likes: 180,
    albumLink: '/albums/breast-augmentation',
    size: 'medium' as const,
  },

  {
    id: 'breast-lift',
    imageUrl: '/images/breast-plastic/augmentatio1-removebg-preview.png',
    title: 'Підтяжка грудей: результати до та після',
    likes: 120,
    albumLink: '/albums/breast-lift',
    size: 'small' as const,
  },
  {
    id: 'breast-reduction',
    imageUrl: '/images/breast-plastic/implant21.jpg',
    title: 'Заміна іплантів з корекцією форми: результати до та після',
    likes: 95,
    albumLink: '/albums/breast-reduction',
    size: 'medium' as const,
  },
  {
    id: 'ginecomastiya',
    imageUrl: '/images/ginecomastiya/ginecomastiya.jpg',
    title: 'Гінекомастія: результати до та після',
    likes: 150,
    albumLink: '/albums/breast-plastic',
    size: 'medium' as const,
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
