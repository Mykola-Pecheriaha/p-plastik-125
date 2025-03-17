import type React from 'react';
import Link from 'next/link';
import BlefaroGallery from '../BlefaroGallery/BlefaroGallery-configurable';
import styles from './BigBlefaro.module.css';
import bigBlefaroImages from '../../data/bigBlefaro';

// Transform the image strings into the required format
const formattedImages = bigBlefaroImages.map((src, index) => ({
  src,
  alt: `Блефаропластика зображення ${index + 1}`,
}));

const BigBlefaro: React.FC = () => {
  return (
    <div className={styles.bigBlefaro}>
      <h2 className={styles.bigBlefaroTitle}>
        Блефаропластика – пластика повік
      </h2>
      <div className={styles.containerBigBlefaro}>
        <div className={styles.bigBlefaroImage}>
          {/* Використовуємо спеціалізовану обгортку замість UnifiedGallery */}
          <BlefaroGallery
            images={formattedImages}
            albumId="blefaro-main"
            initialLikes={0}
          />
        </div>

        <div className={styles.bigBlefaroText}>
          <h4>Пластика повік</h4>
          <div className={styles.subTitle}>
            <ul>
              <li>
                Без шрамів (можлива трансконʼюктивальна блефаропластика за
                показаннями)
              </li>
              <li>Мінімальний термін реабілітації до 30 днів</li>
              <li>Усунення «мішків» під очима</li>
              <li>Корекція зморшок та вікових змін</li>
              <li>Корекція жирових надлишків (псевдогриж)</li>
            </ul>
            <Link href="/services/face-surgery/blefaro-plastic">
              <button className={styles.contactButton}>
                Докладніше про послугу
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigBlefaro;
