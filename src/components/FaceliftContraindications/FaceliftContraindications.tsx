'use client';

import type React from 'react';
import PrimmaGallery from '../PrimmaGallery/PrimmaGallery';
import styles from './FaceliftContraindications.module.css';
import ConsultationButton from '../../components/ConsultationButton/ConsultationButton';

interface FaceliftContraindicationsProps {
  backgroundColor?: string;
}

const FaceliftContraindications: React.FC<FaceliftContraindicationsProps> = ({
  backgroundColor = '#f5f5f5',
}) => {
  const galleryImages = [
    '/images/FaceliftContraindications/facfliftContraindicatio1.jpg',
    '/images/FaceliftContraindications/surgical5.jpg',
    '/images/FaceliftContraindications/contraindication3.jpg',
  ];

  return (
    <div className={styles.wrapper} style={{ backgroundColor }}>
      <div className={styles.container}>
        <h2 className={styles.title}>Протипоказання</h2>

        <p className={styles.subtitle}>
          Зробити підтяжку обличчя можна за умови відсутності протипоказань.
          Рекомендуємо ознайомитися з їхнім списком:
        </p>

        <div className={styles.content}>
          <div className={styles.listSection}>
            <ul className={styles.contraindicationsList}>
              <li>онкологічні захворювання;</li>
              <li>серцево-судинні патології та захворювання;</li>
              <li>ендокринологічні захворювання на стадії загострення;</li>
              <li>захворювання та інфекційні ураження шкіри;</li>
              <li>вагітність та лактація;</li>
              <li>алергічні реакції;</li>
              <li>психічні розлади.</li>
            </ul>
          </div>

          <div className={styles.gallerySection}>
            <PrimmaGallery
              images={galleryImages}
              galleryId="facelift-contraindications"
            />
          </div>
        </div>

        <p className={styles.bottomText}>
          Рішення про хірургічне втручання приймає спеціаліст, виходячи із стану
          здоровя пацієнта згідно з даними клінічних досліджень.
        </p>
        <ConsultationButton />
      </div>
    </div>
  );
};

export default FaceliftContraindications;
