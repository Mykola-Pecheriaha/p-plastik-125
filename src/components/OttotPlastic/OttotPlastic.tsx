'use client';
import type React from 'react';
import Link from 'next/link';
import BreastPlasticCard from '../../components/BreastPlasticCard/BreastPlasticCard';
import styles from './OttotPlastic.module.css';
interface OttoPlasticProps {
  backgroundColor?: string;
}
const ottoPlasticData = [
  {
    id: 'flapcorrection',
    imageUrl: '/images/abdominoplasty/abdominoplastic.jpg',
    title: 'Корекція клаповухості : результати до та після',
    likes: 180,
    albumLink: '/albums/ottoplastic-albums',
    size: 'medium' as const,
  },
  {
    id: 'ear-lobe-plastic',
    imageUrl: '/images/liposuction/liposuction.jpg',
    title: 'Корекці дольки вуха: результати до та після',
    likes: 120,
    albumLink: '/albums/ottoplastic-albums',
    size: 'medium' as const,
  },
];
const OttoPlastic: React.FC<OttoPlasticProps> = ({
  backgroundColor = '#f0f4f8',
}) => {
  return (
    <div className={styles.ottoPlastic} style={{ backgroundColor }}>
      <div className={styles.container}>
        <h2 className={styles.title}>Приклади робіт до та після</h2>
        <div className={styles.cardGrid}>
          {ottoPlasticData.map((item) => (
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
export default OttoPlastic;
