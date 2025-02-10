'use client';

import type React from 'react';
import PrimmaGallery from '../PrimmaGallery/PrimmaGallery';
import styles from './GerniontomiyaIndications.module.css';

interface GerniontomiyaIndicationsProps {
  backgroundColor?: string;
}

const GerniontomiyaIndications: React.FC<GerniontomiyaIndicationsProps> = ({
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
      className={styles.gerniontomiyaIndications}
      style={{ backgroundColor }}
    >
      <div className={styles.container}>
        <h1 className={styles.mainTitle}>
          Покази до операції грижесіченні (gerniotomiya)
        </h1>

        <p className={styles.fullWidthText}>
          Наявність грижі у хворого є абсолютним показом до операції
        </p>

        <div className={styles.contentWrapper}>
          <div className={styles.textContent}>
            <div className={styles.section}>
              <h3>Покази до планової операції</h3>
              <ul>
                <li>наявність грижі є показом до планової операції</li>
              </ul>
            </div>

            <div className={styles.section}>
              <h3>Покази до ургентної (невідкладної) операції</h3>
              <ul>
                <li>наявність защемленої грижі</li>
              </ul>
            </div>

            <div className={styles.section}>
              <h2>Ознаки защемленної грижі</h2>
              <p>
                Грижеве випинання, про яке хворий знає що в нього воно є,
                перстало вправлятися і почало дуже боліти. Біль чаще досить
                сильна. Цей стан може супроводжуватися нудотою і блювото.
              </p>
            </div>
          </div>

          <div className={styles.galleryContent}>
            <PrimmaGallery
              images={galleryImages}
              galleryId="hernias-indications-gallery"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GerniontomiyaIndications;
