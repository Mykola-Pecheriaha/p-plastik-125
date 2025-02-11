'use client';

import PrimmaGallery from '../PrimmaGallery/PrimmaGallery';
import styles from './LegPlasticCotraindications.module.css';
import type React from 'react';

interface LegPlasticCotraindicationsProps {
  backgroundColor?: string;
}

const LegPlasticCotraindications: React.FC<LegPlasticCotraindicationsProps> = ({
  backgroundColor = '#f0f4f8',
}) => {
  const galleryImages = [
    '/placeholder.svg?height=300&width=300',
    '/placeholder.svg?height=300&width=300',
    '/placeholder.svg?height=300&width=300',
    '/placeholder.svg?height=300&width=300',
  ];

  return (
    <div
      className={styles.legPlasticCotraindications}
      style={{ backgroundColor }}
    >
      <div className={styles.container}>
        <h2 className={styles.mainTitle}>
          Круропластика
          <span className={styles.subtitle}>ПЛАСТИКА НІГ</span>
        </h2>

        <h4 className={styles.sectionTitle}>
          Протипокази до оперативного лікування
        </h4>

        <div className={styles.contentSection}>
          <div className={styles.textContent}>
            <div className={styles.listSection}>
              <h4>Хронічні хвороби в стадії декомпенсації:</h4>
              <ul>
                <li>
                  серцева недостатність та інші патологічні захворювання
                  серцево-судинної системи;
                </li>
                <li>хронічні захворювання печінки та нирок</li>
                <li>цукровий діабет</li>
                <li>порушення згортання крові;</li>
                <li>онкологічні захворювання.</li>
              </ul>
            </div>

            <div className={styles.listSection}>
              <h4>А також:</h4>
              <ul>
                <li>У віці до 20 років</li>
                <li>деяких захворюваннях шкіри;</li>
                <li>гострій стадії вірусних захворювань;</li>
                <li>вагітності та грудному вигодовуванні.</li>
              </ul>
            </div>
          </div>

          <div className={styles.galleryContent}>
            <PrimmaGallery
              images={galleryImages}
              galleryId="leg-contraindications-gallery"
            />
          </div>
        </div>

        <div className={styles.bottomSection}>
          <p>Перед пластикою пацієнт має бути здоровим.</p>
          <p>
            За день до операції він здає аналізи у власній лабораторії клініки.
            Виходячи з отриманих результатів, фахівець приймає рішення щодо її
            проведення.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LegPlasticCotraindications;
