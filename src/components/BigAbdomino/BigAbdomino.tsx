import React from 'react';
import Link from 'next/link';

import GalleryAbdomino from '../GalleryAbdomino/GalleryAbdomino';
import styles from './BigAbdomino.module.css';
import bigAbdominoImages from '../../data/bigAbdomino';
import ConsultationButton from '../../components/ConsultationButton/ConsultationButton';

const BigAbdomino: React.FC = () => {
  return (
    <div className={styles.bigAbdomino}>
      <h2 className={styles.bigAbdominoTitle}>
        Гарне тіло - позитив щоденного настрою.
      </h2>
      <div className={styles.containerBigAbdomino}>
        <div className={styles.bigAbdominoText}>
          <h4>Абдомінопластика (пластика живота)</h4>
          <div className={styles.subTitle}>
            <ul>
              <li>Повернення животу плоскої форми</li>
              <li>Усунення розтяжок</li>
              <li>Надання привабливості формі тіла</li>
              <li>Мінімальний термін реабілітації до 40 днів</li>
              <li>Усунення гриж живота.</li>
              <li>Корекція рубцевих змін тулуба</li>
              <li>Видалення доброякісних пухлина різних</li>
            </ul>
            <Link href="/services/blefaro-plastic">
              <button className={styles.contactButton}>
                Докладніше про послугу
              </button>
            </Link>
          </div>
        </div>

        <div className={styles.bigAbdominoImage}>
          <GalleryAbdomino images={bigAbdominoImages} />
        </div>
      </div>

      {/* Додаємо нову секцію */}
      <div className={styles.containerBigAbdomino}>
        <h2 className={styles.bigAbdominoText}>
          Тільки високі стандарти — тільки той результат, який задовольнить Вас.
        </h2>
        <div className={styles.finalSectionButtons}>
          <Link href="/services" className={styles.linkButton}>
            Всі Послуги
          </Link>
          <div className={styles.consultationButtonWrapper}>
            <ConsultationButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigAbdomino;
