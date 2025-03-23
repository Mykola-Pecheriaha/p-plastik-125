'use client';

import { ArrowRight } from 'lucide-react';
import BreastZoomGallery, {
  type ImageType,
} from '../BreastZoomGallery/BreastZoomGallery';
import styles from './BreastSurgeryIndications.module.css';
import type React from 'react';

interface BreastSurgeryIndicationsProps {
  backgroundColor?: string;
}

const BreastSurgeryIndications: React.FC<BreastSurgeryIndicationsProps> = ({
  backgroundColor = '#f0f4f8',
}) => {
  // Зображення галереї з індивідуальними розмірами
  const galleryImages: ImageType[] = [
    {
      src: '/images/BreastSurgery/breast_surgery_1.jpg',
      width: 800,
      height: 600,
    },
    {
      src: '/images/BreastSurgery/breast_surgery_2.jpg',
      width: 800,
      height: 600,
    },
    {
      src: '/images/BreastSurgery/breast_surgery_3.jpg',
      width: 800,
      height: 600,
    },
    {
      src: '/images/BreastSurgery/breast_surgery_4.jpg',
      width: 800,
      height: 600,
    },
  ];

  return (
    <div
      className={styles.breastSurgeryIndications}
      style={{ backgroundColor }}
    >
      <div className={styles.container}>
        <h2 className={styles.mainTitle}>
          Показання до пластики грудей
          <span className={styles.subtitle}>(мамопластика)</span>
        </h2>

        <p className={styles.introText}>
          Корекція жіночих форм має психологічні та медичні показання.
        </p>

        <div className={styles.content}>
          <div className={styles.textContent}>
            <div className={styles.section}>
              <h3>До першого типу належать:</h3>
              <ul>
                <li>
                  <ArrowRight size={20} />
                  <span>
                    незадоволення власними формами та психологічний дискомфорт,
                    повязаний із цим.
                  </span>
                </li>
                <li>
                  <ArrowRight size={20} />
                  <span>
                    Крім цього, дівчина може хотіти зробити заміну імплантів на
                    великі за розміром.
                  </span>
                </li>
              </ul>
            </div>

            <div className={styles.section}>
              <h3>До медичних показань належать:</h3>
              <ul>
                <li>
                  <ArrowRight size={20} />
                  <span>
                    Вроджений недостатньо розвинений обєм грудей (аплазія)
                  </span>
                </li>
                <li>
                  <ArrowRight size={20} />
                  <span>Виражена асиметрія: синдром Полланда тощо</span>
                </li>
                <li>
                  <ArrowRight size={20} />
                  <span>
                    Птоз молочної залози після вагітності та годування, різкого
                    схуднення
                  </span>
                </li>
                <li>
                  <ArrowRight size={20} />
                  <span>Вікова деструкція тканин</span>
                </li>
                <li>
                  <ArrowRight size={20} />
                  <span>Гіпертрофії молочної залози</span>
                </li>
                <li>
                  <ArrowRight size={20} />
                  <span>Вроджена або набута деформація сосків та ареоли</span>
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.imageContent}>
            {/* Використовуємо нашу нову галерею з масштабуванням */}
            <BreastZoomGallery
              images={galleryImages}
              galleryId="breast-surgery-indications-gallery"
              initialZoom={1}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreastSurgeryIndications;
