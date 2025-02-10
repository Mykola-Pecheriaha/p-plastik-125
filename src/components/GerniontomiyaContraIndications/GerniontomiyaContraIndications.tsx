'use client';

import type React from 'react';
import PrimmaGallery from '../PrimmaGallery/PrimmaGallery';
import styles from './GerniontomiyaContraIndications.module.css';

interface GerniontomiyaContraIndicationsProps {
  backgroundColor?: string;
}

const GerniontomiyaContraIndications: React.FC<
  GerniontomiyaContraIndicationsProps
> = ({ backgroundColor = '#f0f4f8' }) => {
  const galleryImages = [
    '/placeholder.svg?height=300&width=300',
    '/placeholder.svg?height=300&width=300',
    '/placeholder.svg?height=300&width=300',
    '/placeholder.svg?height=300&width=300',
  ];

  return (
    <div
      className={styles.gerniontomiyaContraIndications}
      style={{ backgroundColor }}
    >
      <div className={styles.container}>
        <h1 className={styles.mainTitle}>
          Протипокази до операції грижесіченні (gerniotomiya)
        </h1>

        <div className={styles.contentWrapper}>
          <div className={styles.textContent}>
            <div className={styles.section}>
              <h2>Протипокази до планової операції</h2>
              <p>Всі зронічні захворювання в стадії декомпернсації - це</p>
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

            <div className={styles.section}>
              <h2>Протипокази до планової операції</h2>
              <ul>
                <li>Агонуючий стан хворого</li>
                <li>
                  Категорична відмова дієздатного хворого з розпискою в
                  присутності лікарів і родичів
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.galleryContent}>
            <PrimmaGallery
              images={galleryImages}
              galleryId="hernias-contraindications-gallery"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GerniontomiyaContraIndications;
