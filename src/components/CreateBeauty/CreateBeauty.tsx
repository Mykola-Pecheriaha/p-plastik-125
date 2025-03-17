import type React from 'react';
import Link from 'next/link';

import BreastGallery from '../BreastGallery/BreastGallery';
import styles from './CreateBeauty.module.css';
import createBeautyImages from '../../data/createBeauty';

// Перетворюємо масив рядків у масив об'єктів з src та alt
const formattedImages = createBeautyImages.map((src, index) => ({
  src,
  alt: `Пластика грудей зображення ${index + 1}`,
}));

const CreateBeauty: React.FC = () => {
  return (
    <div className={styles.createBeauty}>
      <h2 className={styles.createBeautyTitle}>
        Створюю красу з турботою про Вас
      </h2>
      <div className={styles.containerCreateBeauty}>
        <div className={styles.createBeautyText}>
          <h4>Пластика грудей</h4>
          <div className={styles.subTitle}>
            <ul>
              <li>Різні методики по збільшуванні молочних залоз</li>
              <li>Корекція асиметрії</li>
              <li>
                Підтяжка грудей з імплантами або без них (тільки власні тканини)
              </li>
              <li>Індивідуальний підбір імплантів для бажаного обʼєму</li>
              <li>
                Сучасні імплантати від світових виробників, що не потребують
                заміни
              </li>
              <li>Комплект білизни для реабілітації у подарунок</li>
            </ul>
            <Link href="/services/breast-surgery/breast-augmentation">
              <button className={styles.contactButton}>
                Докладніше про послугу
              </button>
            </Link>
          </div>
        </div>
        <div className={styles.createBeautyImage}>
          {/* Використовуємо спеціалізовану обгортку замість UnifiedGallery */}
          <BreastGallery
            images={formattedImages}
            albumId="breast-beauty"
            initialLikes={0}
          />
        </div>
      </div>
    </div>
  );
};

export default CreateBeauty;
