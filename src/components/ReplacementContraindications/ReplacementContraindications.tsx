'use client';

import type React from 'react';
import { ArrowRight } from 'lucide-react';
import PrimmaGallery from '../PrimmaGallery/PrimmaGallery';
import styles from './ReplacementContraindications.module.css';

interface ReplacementContraindicationsProps {
  backgroundColor?: string;
}

const ReplacementContraindications: React.FC<
  ReplacementContraindicationsProps
> = ({ backgroundColor = '#f5f5f5' }) => {
  const contraindications = [
    'тяжкі хронічні захворювання серцево-судинної та легеневої систем, особливо на стадії загострення;',
    'вагітність, період грудного вигодовування;',
    'порушення згортання крові.',
  ];

  const galleryImages = [
    '/images/replacement-contraindications/replacementContraindicatio1.jpg',
    '/images/replacement-contraindications/gallery2.jpg',
    '/images/replacement-contraindications/gallery3.jpg',
  ];

  return (
    <div className={styles.wrapper} style={{ backgroundColor }}>
      <div className={styles.container}>
        <h2 className={styles.title}>Протипоказання</h2>
        <p className={styles.subtitle}>
          Операція із заміни імплантів, як будь-яке хірургічне втручання, має
          низку певних протипоказань:
        </p>

        <div className={styles.content}>
          <div className={styles.textContent}>
            <ul className={styles.contraindicationsList}>
              {contraindications.map((item, index) => (
                <li key={index} className={styles.contraindicationItem}>
                  <ArrowRight size={16} className={styles.arrow} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.galleryContent}>
            <PrimmaGallery
              images={galleryImages}
              galleryId="replacement-contraindications-gallery"
            />
          </div>
        </div>

        <p className={styles.conclusion}>
          У клініці перед реендопротезуванням молочних залоз пацієнтка проходить
          обстеження та здає аналізи. На підставі отриманих результатів
          пластичний хірург приймає рішення про проведення операції.
        </p>
      </div>
    </div>
  );
};

export default ReplacementContraindications;
