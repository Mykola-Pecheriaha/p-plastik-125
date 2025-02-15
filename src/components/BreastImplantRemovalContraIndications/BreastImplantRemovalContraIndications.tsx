'use client';

import { ChevronRight } from 'lucide-react';
import PrimmaGallery from '../PrimmaGallery/PrimmaGallery';
import styles from './BreastImplantRemovalContraIndications.module.css';
import type React from 'react';

interface BreastImplantRemovalContraIndicationsProps {
  backgroundColor?: string;
}

const BreastImplantRemovalContraIndications: React.FC<
  BreastImplantRemovalContraIndicationsProps
> = ({ backgroundColor = '#f0f4f8' }) => {
  const contraindications = [
    'загострення хронічних захворювань серцево-легеневих систем',
    'вагітності, грудному вигодовуванні',
    'онкологічні захворювання',
    'порушення згортання крові',
  ];

  const galleryImages = [
    '/placeholder.svg?height=300&width=300',
    '/placeholder.svg?height=300&width=300',
    '/placeholder.svg?height=300&width=300',
    '/placeholder.svg?height=300&width=300',
  ];

  return (
    <div
      className={styles.breastImplantRemovalContraIndications}
      style={{ backgroundColor }}
    >
      <div className={styles.container}>
        <h2 className={styles.mainTitle}>Протипоказання</h2>

        <div className={styles.contentSection}>
          <div className={styles.textContent}>
            <p className={styles.introText}>
              Оперативне втручання не рекомендується при:
            </p>
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
            <PrimmaGallery
              images={galleryImages}
              galleryId="implant-removal-contraindications-gallery"
            />
          </div>
        </div>

        <div className={styles.bottomText}>
          <p>
            Операція вимагає ретельної підготовки. Перед нею пацієнтка проходить
            обовязкове обстеження та здає аналізи у клініці. Виходячи з
            отриманих результатів, лікар приймає рішення про повторне втручання.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BreastImplantRemovalContraIndications;
