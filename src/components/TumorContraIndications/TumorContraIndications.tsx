'use client';

import { ChevronRight } from 'lucide-react';
import PrimmaGallery from '../PrimmaGallery/PrimmaGallery';
import styles from './TumorContraIndications.module.css';
import type React from 'react';

interface TumorContraIndicationsProps {
  backgroundColor?: string;
}

const TumorContraIndications: React.FC<TumorContraIndicationsProps> = ({
  backgroundColor = '#f0f4f8',
}) => {
  const contraindications = [
    'Це хронічні захворювання в стадії декомпенсації',
    ' - серцева недостатність та інші патологічні захворювання серцево-судинної системи ',
    ' - хронічні захворювання печінки та нирок',
    ' - цукровий діабет',
    'порушення згортання крові',
    'онкологічні захворювання в термінальні стадії',
  ];

  const galleryImages = [
    '/placeholder.svg?height=300&width=300',
    '/placeholder.svg?height=300&width=300',
    '/placeholder.svg?height=300&width=300',
    '/placeholder.svg?height=300&width=300',
  ];

  return (
    <div className={styles.tumorContraIndications} style={{ backgroundColor }}>
      <div className={styles.container}>
        <h2 className={styles.mainTitle}>
          Доброякісні новоутворення шкіри і підшкірної клітковини
        </h2>

        <h4 className={styles.subtitle}>
          Протипокази до оперативного лікування
        </h4>

        <div className={styles.splitSection}>
          <div className={styles.textContent}>
            {/* <h2 className={styles.sectionTitle}>
              Протипокази до планової операції
            </h2> */}
            <ul>
              {contraindications.map((item, index) => (
                <li key={index}>
                  <ChevronRight size={20} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.galleryContent}>
            <PrimmaGallery images={galleryImages} galleryId="contra-gallery" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TumorContraIndications;
