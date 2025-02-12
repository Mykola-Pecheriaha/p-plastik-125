'use client';

import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import styles from './BreastSurgeryIndications.module.css';
import type React from 'react';

interface BreastSurgeryIndicationsProps {
  backgroundColor?: string;
}

const BreastSurgeryIndications: React.FC<BreastSurgeryIndicationsProps> = ({
  backgroundColor = '#f0f4f8',
}) => {
  const images = [
    '/placeholder.svg?height=300&width=400&text=Image1',
    '/placeholder.svg?height=300&width=400&text=Image2',
    '/placeholder.svg?height=300&width=400&text=Image3',
    '/placeholder.svg?height=300&width=400&text=Image4',
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
            {images.map((src, index) => (
              <div key={index} className={styles.imageWrapper}>
                <Image
                  src={src || '/placeholder.svg'}
                  alt={`Breast surgery indication ${index + 1}`}
                  width={400}
                  height={300}
                  className={styles.image}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreastSurgeryIndications;
