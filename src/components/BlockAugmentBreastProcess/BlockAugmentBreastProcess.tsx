'use client';

import type React from 'react';
import { useState } from 'react';
import PrimmaGallery from '../PrimmaGallery/PrimmaGallery';
import styles from './BlockAugmentBreastProcess.module.css';

interface Method {
  title: string;
  description: string;
}

const methods: Method[] = [
  {
    title: 'Розріз через підгрудну складку (субмамарний)',
    description:
      "Найбільш популярний спосіб, що дозволяє встановити імплантат будь-якого об'єму. Рубець розташовуватиметься у підгрудній складці.",
  },
  {
    title: 'Розріз нижнього краю ареоли (періареолярний)',
    description:
      'Зручний метод корекції форми залози. Шов після операції розташовуватиметься на межі темної та світлої шкіри ареоли.',
  },
  {
    title: 'Розріз у пахвовій западині (аксиллярний)',
    description:
      'Метод часто називають "безшовним", тому що на молочній залозі не залишається видимих ​​слідів. Післяопераційний рубець захований від сторонніх очей у пахвовій западині.',
  },
];

const galleryImages = [
  '/images/BlockAugmentBreastProcess/access1.jpg',
  '/images/BlockAugmentBreastProcess/access2.jpg',
  '/images/BlockAugmentBreastProcess/access3.jpg',
];

const BlockAugmentBreastProcess: React.FC = () => {
  const [expandedMethod, setExpandedMethod] = useState<number | null>(null);

  const toggleMethod = (index: number) => {
    setExpandedMethod(expandedMethod === index ? null : index);
  };

  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <h2 className={styles.mainTitle}>Збільшення грудей: проведення</h2>
        <p className={styles.subtitle}>
          Виходячи з особливостей статури, доступ до грудей з метою їх
          збільшення здійснюється одним із трьох методів:
        </p>
        <div className={styles.content}>
          <div className={styles.methodsSection}>
            {methods.map((method, index) => (
              <div key={index} className={styles.method}>
                <h3 className={styles.methodTitle}>{method.title}</h3>
                <p className={styles.methodDescription}>
                  {expandedMethod === index
                    ? method.description
                    : `${method.description.slice(0, 100)}...`}
                </p>
                <button
                  className={styles.toggleButton}
                  onClick={() => toggleMethod(index)}
                >
                  {expandedMethod === index ? 'Згорнути' : 'Подивитися все'}
                </button>
              </div>
            ))}
          </div>
          <div className={styles.gallerySection}>
            <PrimmaGallery
              images={galleryImages}
              galleryId="breast-augmentation-process"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockAugmentBreastProcess;
