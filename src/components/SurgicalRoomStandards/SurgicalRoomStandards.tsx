'use client';

import PrimmaGallery from '../PrimmaGallery/PrimmaGallery';
import styles from './SurgicalRoomStandards.module.css';
import type React from 'react';

interface SurgicalRoomStandardsProps {
  backgroundColor?: string;
}

const SurgicalRoomStandards: React.FC<SurgicalRoomStandardsProps> = ({
  backgroundColor = '#f0f4f8',
}) => {
  const standards = [
    {
      id: 'sterility',
      title: 'Стерильність – вимога №1',
      content:
        'Операційна Vidnova Clinic використовується виключно для пластичних естетичних операцій. Це важливо, оскільки наші пацієнти не перетинаються з пацієнтами, які мають різні типи захворювань та підлягають ургентним операціям (позапланові термінові операції). Різні типи зараження виключені.',
    },
    {
      id: 'equipment',
      title: 'Сучасне обладнання – вимога №2',
      content:
        'Операційна Vidnova Clinic оснащена обладнанням відповідно до європейських протоколів. У розпорядженні пластичного хірурга найновіший інструментарій від провідних виробників Німеччини, Франції, Туреччини.',
    },
  ];

  const galleryImages = [
    '/placeholder.svg?height=300&width=300',
    '/placeholder.svg?height=300&width=300',
    '/placeholder.svg?height=300&width=300',
    '/placeholder.svg?height=300&width=300',
  ];

  return (
    <div className={styles.surgicalRoomStandards} style={{ backgroundColor }}>
      <div className={styles.container}>
        {standards.map((standard) => (
          <div key={standard.id} className={styles.section}>
            <div className={styles.textContent}>
              <h2>{standard.title}</h2>
              <p>{standard.content}</p>
            </div>
            <div className={styles.galleryContent}>
              <PrimmaGallery
                images={galleryImages}
                galleryId={`standards-gallery-${standard.id}`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SurgicalRoomStandards;
