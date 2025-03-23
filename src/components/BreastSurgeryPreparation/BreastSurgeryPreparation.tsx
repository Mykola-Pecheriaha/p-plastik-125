'use client';

import PrimmaGallery from '../PrimmaGallery/PrimmaGallery';
import styles from './BreastSurgeryPreparation.module.css';
import type React from 'react';

interface BreastSurgeryPreparationProps {
  backgroundColor?: string;
}

const BreastSurgeryPreparation: React.FC<BreastSurgeryPreparationProps> = ({
  backgroundColor = '#f0f4f8',
}) => {
  const galleryImages = [
    '/images/breast-prepfrftion/breast.jpg',
    '/images/breast-prepfrftion/breast2.bmp',
    '/images/breast-prepfrftion/breast3.bmp',
    '/images/breast-prepfrftion/breast7.bmp',
  ];

  return (
    <div
      className={styles.breastSurgeryPreparation}
      style={{ backgroundColor }}
    >
      <div className={styles.container}>
        <h2 className={styles.title}>
          Пластика грудей (мамопластика):
          <span className={styles.subtitle}>підготовка до операції</span>
        </h2>

        <div className={styles.content}>
          <div className={styles.textContent}>
            <p>
              Операція на грудях потребує ретельної підготовки від пацієнта.
              Варто враховувати, що проводити мамопластику рекомендується не
              раніше ніж через 4-6 місяців після завершення грудного
              вигодовування. Молочна залоза повинна остаточно набути форми.
            </p>
            <p>
              Утримуватись від куріння слід не менше, ніж за 14 днів до
              втручання, та протягом усього реабілітаційного періоду. За 10 днів
              до процедури необхідно припинити прийом препаратів, що розріджують
              кров. Якщо ви приймаєте якісь медикаменти постійно, повідомте про
              це пластичного хірурга!
            </p>
            <p>
              Протягом 2 днів перед операцією необхідно обмежити калорійність
              їжі. За день до оперативного втручання пацієнтка проходить
              комплексне обстеження: УЗД, мамографію, огляд профільних фахівців
              та здає аналізи. Комплексне обстеження в наші клініці у Чернівцях
              можна пройти за 1 день у власній лабораторії!
            </p>
          </div>
          <div className={styles.galleryContent}>
            <PrimmaGallery
              images={galleryImages}
              galleryId="breast-surgery-preparation-gallery"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreastSurgeryPreparation;
