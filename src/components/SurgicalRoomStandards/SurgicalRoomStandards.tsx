'use client';

import PrimmaGallery from '../PrimmaGallery/PrimmaGallery';
import styles from './SurgicalRoomStandards.module.css';
import type React from 'react';

interface SurgicalRoomStandardsProps {
  backgroundColor?: string;
}

const SurgicalRoomStandards: React.FC<SurgicalRoomStandardsProps> = ({
  backgroundColor = '#708090',
}) => {
  const standards = [
    {
      id: 'sterility',
      title: 'Стерильність – вимога №1',
      content:
        'Операційна де проводяться пластичні операції знаходиться в операційному блоку  ЦМКЛ  використовується виключно для планових асептичних  операцій. Вона також відділенна від остальних операційних.  Щоденне планування операцій в операційному болі проводить до того що, щляхи  пацієнтів  практично не пересікаються між собо. В операцфйну мають право заходити тільки медичний персонал, який причепний до забезпечення її роботи , а також операційні і анестезіологічні бригадю і то в спеціальному одязі.  Для виконання ургентних та септичних операцій планові операційні не використовуються, так як для цього є окремі операційні.',
    },
    {
      id: 'equipment',
      title: 'Сучасне обладнання – вимога №2',
      content:
        'Операційні ЦМКЛ оснащені обладнанням відповідно до європейських протоколів. У розпорядженні пластичного хірурга найновіший інструментарій від провідних виробників Німеччини, Франції, Туреччини.',
    },
  ];

  const sterilityImages = [
    '/images/Operative/steroper6.jpg',
    '/images/Operative/steroper7.jpg',
    '/images/Operative/oprerster2.jpg',
    '/images/Operative/steroper1.jpg',
  ];

  const equipmentImages = [
    '/images/Operative/oprerster3.jpg',
    '/images/Operative/surgical16.jpg',
    '/images/Operative/operromm10.jpg',
    '/images/Operative/operromm5.jpg',
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
                images={
                  standard.id === 'sterility'
                    ? sterilityImages
                    : equipmentImages
                }
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
