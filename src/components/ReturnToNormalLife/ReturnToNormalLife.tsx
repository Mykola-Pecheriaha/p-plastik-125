'use client';

import { ChevronRight } from 'lucide-react';
import PrimmaGallery from '../PrimmaGallery/PrimmaGallery';
import styles from './ReturnToNormalLife.module.css';
import type React from 'react';

interface ReturnToNormalLifeProps {
  backgroundColor?: string;
}

const ReturnToNormalLife: React.FC<ReturnToNormalLifeProps> = ({
  backgroundColor = '#f0f4f8',
}) => {
  // Окремі масиви зображень для кожної галереї
  const returnToLifeGalleryImages = [
    '/images/return-to-life/return1.jpg',
    '/images/return-to-life/return2.jpg',
    '/images/return-to-life/return3.jpg',
    '/images/return-to-life/return4.jpg',
  ];

  const symptomsGalleryImages = [
    '/images/return-to-life/symptoms1.jpg',
    '/images/return-to-life/symptoms2.jpg',
    '/images/return-to-life/symptoms3.jpg',
    '/images/return-to-life/symptoms4.jpg',
  ];

  // Функція для створення плейсхолдерів, якщо зображення ще не доступні
  const getPlaceholders = (count = 4) => {
    return Array(count)
      .fill(0)
      .map(
        (_, i) => `/placeholder.svg?height=300&width=300&text=Image${i + 1}`
      );
  };

  const symptoms = [
    'надмірний біль або неприємні відчуття',
    'набряки, затвердіння',
    'постійно підвищена температура тіла',
    'виділення з-під рубців, загноєння',
    'зміни кольору шкіри',
    'запаморочення, втрата чутливості',
  ];

  return (
    <div className={styles.returnToNormalLife} style={{ backgroundColor }}>
      <div className={styles.container}>
        <h2 className={styles.mainTitle}>
          Коли можна повертатись до звичного ритму життя?
        </h2>

        <div className={styles.contentSection}>
          <div className={styles.textContent}>
            <h4 className={styles.subTitle}>Повернення до звичного життя</h4>
            <p>
              Час, необхідний для повернення до звиклого ритму життя після
              оперативного втручання, може значно варіюватися в залежності від
              різних факторів, таких як тип операції, обсяг втручання,
              індивідуальні особливості пацієнта та інші чинники. Насамперед
              варто орієнтуватись на власні відчуття.
            </p>
            <p>
              Зазвичай пацієнтам рекомендується взяти тиждень або більше
              відпустки. Деякі люди можуть потребувати більше часу.
            </p>
            <p>
              Пацієнт може повертатися до робочих обовязків через тиждень чи
              більше. Однак, якщо робота повязана з важкими фізичними
              навантаженнями, це може зайняти додатковий час.
            </p>
            <p>
              Пацієнти можуть потребувати різного часу для психологічного
              відновлення, особливо якщо пластична операція має великий вплив на
              зовнішній вигляд та самопочуття.
            </p>
          </div>
          <div className={styles.galleryContent}>
            <PrimmaGallery
              images={
                returnToLifeGalleryImages.length
                  ? returnToLifeGalleryImages
                  : getPlaceholders()
              }
              galleryId="return-to-life-gallery"
            />
          </div>
        </div>

        <h2 className={styles.mainTitle}>
          Симптоми, про які треба повідомити лікаря
        </h2>

        <p className={styles.fullWidthText}>
          Після будь-якого хірургічного втручання важливо уважно спостерігати за
          своїм станом і вчасно повідомляти лікаря про будь-які зміни або
          симптоми, які можуть виникнути. Нижче наведено деякі загальні
          симптоми, про які важливо повідомити лікаря:
        </p>

        <div className={styles.contentSection}>
          <div className={styles.textContent}>
            <h4 className={styles.subTitle}>Важливі симптоми</h4>
            <ul className={styles.symptomsList}>
              {symptoms.map((symptom, index) => (
                <li key={index}>
                  <ChevronRight className={styles.icon} />
                  <span>{symptom}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.galleryContent}>
            <PrimmaGallery
              images={
                symptomsGalleryImages.length
                  ? symptomsGalleryImages
                  : getPlaceholders()
              }
              galleryId="symptoms-gallery"
            />
          </div>
        </div>

        <p className={styles.fullWidthText}>
          Важливо дотримуватися рекомендацій лікаря та ретельно слідкувати за
          процесом відновлення для досягнення оптимальних результатів та
          уникнення ускладнень.
        </p>
      </div>
    </div>
  );
};

export default ReturnToNormalLife;
