'use client';

import { ArrowRight } from 'lucide-react';
import PrimmaGallery from '../PrimmaGallery/PrimmaGallery';
import styles from './BreastSurgeryCotraindications.module.css';
import type React from 'react';

interface BreastSurgeryCotraindicationsProps {
  backgroundColor?: string;
}

const BreastSurgeryCotraindications: React.FC<
  BreastSurgeryCotraindicationsProps
> = ({ backgroundColor = '#f0f4f8' }) => {
  const galleryImages = [
    '/placeholder.svg?height=300&width=300',
    '/placeholder.svg?height=300&width=300',
    '/placeholder.svg?height=300&width=300',
    '/placeholder.svg?height=300&width=300',
  ];

  const contraindications = [
    'вік до 18 років;',
    'гострі інфекційні захворювання;',
    'патології серцево-судинної та дихальної систем;',
    'важкі судинні порушення та інші;',
    'хвороби нирок або ниркова недостатність;',
    'цукровий діабет;',
    'вагітність, лактація;',
    'новоутворення в молочних залозах без завершеного лікування.',
  ];

  return (
    <div
      className={styles.breastSurgeryCotraindications}
      style={{ backgroundColor }}
    >
      <div className={styles.container}>
        <h2 className={styles.mainTitle}>Протипоказиі</h2>

        <h4 className={styles.subtitle}>
          Мамопластика, як і інші наркозні хірургічні втручання, має низку
          протипоказань:
        </h4>

        <div className={styles.content}>
          <div className={styles.textContent}>
            <h4 className={styles.sectionTitle}>
              Хронічні хвороби в стадії декомпенсації:
            </h4>
            <ul className={styles.contraindicationsList}>
              {contraindications.map((item, index) => (
                <li key={index}>
                  <ArrowRight size={20} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.galleryContent}>
            <PrimmaGallery
              images={galleryImages}
              galleryId="breast-contraindications-gallery"
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

export default BreastSurgeryCotraindications;
