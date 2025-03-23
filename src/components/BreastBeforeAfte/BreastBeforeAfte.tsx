'use client';

import { ChevronRight } from 'lucide-react';
import BreastZoomGallery, {
  type ImageType,
} from '../BreastZoomGallery/BreastZoomGallery';
import styles from './BreastBeforeAfte.module.css';
import type React from 'react';

interface BreastBeforeAfteProps {
  backgroundColor?: string;
}

const BreastBeforeAfte: React.FC<BreastBeforeAfteProps> = ({
  backgroundColor = '#A3C9F0FF',
}) => {
  const features = [
    'Підхід з пахви без шрамів за італійським протоколом',
    'Корекція асиметрії',
    'Індивідуальний підбір імплантів для бажаного обʼєму',
    'Сучасні імплантати від світових виробників, що не потребують заміни',
    'Комплект білизни для реабілітації у подарунок',
  ];

  // Зображення галереї з індивідуальними розмірами
  const galleryImages: ImageType[] = [
    {
      src: '/images/breastSizeProblem/implant6.jpg',
      width: 700,
      height: 400,
    },
    {
      src: '/images/breastSizeProblem/sizeProblem1.jpg',
      width: 680,
      height: 500,
    },
    {
      src: '/images/breastSizeProblem/sizeProblem2.jpg',
      width: 900,
      height: 500,
    },
    {
      src: '/images/breastSizeProblem/sizeProblem3.jpg',
      width: 800,
      height: 426,
    },
    {
      src: '/images/FlapIndications/flap1.bmp',
      width: 300,
      height: 345,
    },
  ];

  return (
    <div className={styles.breastBeforeAfte} style={{ backgroundColor }}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.leftContent}>
            <h2 className={styles.title}>Приклади робіт До-Після</h2>
            <ul className={styles.featuresList}>
              {features.map((feature, index) => (
                <li key={index}>
                  <ChevronRight size={20} />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.rightContent}>
            {/* Використовуємо нашу нову галерею з масштабуванням та індивідуальними розмірами зображень */}
            <BreastZoomGallery
              images={galleryImages}
              galleryId="breast-before-after-gallery"
              initialZoom={1}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreastBeforeAfte;
