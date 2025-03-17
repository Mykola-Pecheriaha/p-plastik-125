'use client';

import type React from 'react';
import Link from 'next/link';
import AbdominoGallery from '../../components/AbdominoGallery/AbdominoGallery';
import styles from './BigAbdomino.module.css';

interface BigAbdominoProps {
  backgroundColor?: string;
}

// Масив зображень для галереї
const galleryImages = [
  '/images/abdominoplasty/abdominoplastic1.jpg',
  '/images/abdominoplasty/abdominoplastic2.jpg',
  '/images/abdominoplasty/abdominoplastic3.jpg',
  // Додайте більше зображень за потреби
];

const BigAbdomino: React.FC<BigAbdominoProps> = ({
  backgroundColor = '#f5f5f5', // Значення за замовчуванням
}) => {
  return (
    <div className={styles.wrapper} style={{ backgroundColor }}>
      <div className={styles.container}>
        <h2 className={styles.mainTitle}>
          Гарне тіло - позитив щоденного настрою.
        </h2>

        <div className={styles.content}>
          <div className={styles.textSection}>
            <h4 className={styles.subtitle}>
              Абдомінопластика (пластика живота)
            </h4>

            <ul className={styles.featuresList}>
              <li>Повернення животу плоскої форми</li>
              <li>Усунення розтяжок</li>
              <li>Надання привабливості формі тіла</li>
              <li>Мінімальний термін реабілітації до 40 днів</li>
              <li>Усунення гриж живота</li>
              <li>Корекція рубцевих змін тулуба</li>
              <li>Видалення доброякісних пухлина різних</li>
            </ul>

            <Link
              href="/services/body-surgery/abdominoplasty"
              className={styles.link}
            >
              <button className={styles.button}>Докладніше про послугу</button>
            </Link>
          </div>

          <div className={styles.gallerySection}>
            <AbdominoGallery images={galleryImages} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigAbdomino;
