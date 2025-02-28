'use client';

import { ChevronRight } from 'lucide-react';
import PrimmaGallery from '../PrimmaGallery/PrimmaGallery';
import styles from './FlapCotraindications.module.css';
import type React from 'react';

interface FlapCotraindicationsProps {
  backgroundColor?: string;
}

const FlapCotraindications: React.FC<FlapCotraindicationsProps> = ({
  backgroundColor = '#f0f4f8',
}) => {
  const chronicDiseases = [
    'серцева недостатність та інші патологічні захворювання серцево-судинної системи',
    'хронічні захворювання печінки та нирок',
    'цукровий діабет',
    'порушення згортання крові',
    'онкологічні захворювання',
  ];

  const additionalContraindications = [
    `у віці до 6 років`,
    `при деяких захворюваннях шкіри`,
    `під  час гострої стадії вірусних захворювань`,
    `під час вагітності та грудному вигодовуванні`,
    `нереальні очікування кінцевого результату — змінити форму вух цілком неможливо, важливо, щоб пацієнт мав реалістичні очікування операції.`,
  ];

  const galleryImages = [
    '/images/FlapCotraindications/ginecomas12.jpg',
    '/images/FlapCotraindications/preparation5-removebg-preview.png',
  ];

  return (
    <div className={styles.flapCotraindications} style={{ backgroundColor }}>
      <div className={styles.container}>
        <h2 className={styles.mainTitle}>
          Оттопластика та корекція клаповухості
        </h2>

        <h4 className={styles.subtitle}>
          Протипокази до оперативного лікування
        </h4>

        <div className={styles.splitSection}>
          <div className={styles.textContent}>
            <div className={styles.listSection}>
              <h4>Хронічні хвороби в стадії декомпенсації:</h4>
              <ul>
                {chronicDiseases.map((disease, index) => (
                  <li key={index}>
                    <ChevronRight size={20} />
                    {disease}
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.listSection}>
              <h4>А також:</h4>
              <ul>
                {additionalContraindications.map((item, index) => (
                  <li key={index}>
                    <ChevronRight size={20} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className={styles.galleryContent}>
            <PrimmaGallery
              images={galleryImages}
              galleryId="contraindications-gallery"
            />
          </div>
        </div>

        <div className={styles.bottomText}>
          <p>
            До відносних протипоказань відносяться гострі вірусні захворювання.
            Перед пластикою пацієнт має бути здоровим.
          </p>
          <p>
            У день операції він здає аналізи у власній лабораторії клініки.
            Виходячи з отриманих результатів, фахівець приймає рішення щодо її
            проведення.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FlapCotraindications;
