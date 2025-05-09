'use client';

import type React from 'react';
import PrimmaGallery from '../PrimmaGallery/PrimmaGallery';
import styles from './BlefaroContraindications.module.css';
import ConsultationButton from '../ConsultationButton/ConsultationButton';

interface BlefaroContraindicationsProps {
  backgroundColor?: string;
}

const BlefaroContraindications: React.FC<BlefaroContraindicationsProps> = ({
  backgroundColor = '#f5f5f5',
}) => {
  const galleryImages = [
    '/images/BlefaroContraindications/blefaroContraindicatio1.jpg',
    '/images/BlefaroContraindications/contraindication2.jpg',
    '/images/BlefaroContraindications/contraindication3.jpg',
  ];

  return (
    <div className={styles.wrapper} style={{ backgroundColor }}>
      <div className={styles.container}>
        <h2 className={styles.title}>Протипоказання</h2>

        <p className={styles.subtitle}>
          Пластична операція повік протипоказана у таких випадках: Рекомендуємо
          ознайомитися з їхнім списком:
        </p>

        <div className={styles.content}>
          <div className={styles.listSection}>
            <ul className={styles.contraindicationsList}>
              <li>
                офтальмологічні недуги - катаракта, глаукома, запалення слізних
                проток, конюнктиви, синдром сухого ока, блефароспазм,
                блефарохалязис (набряклість навколоочної ділянки та ін.);
              </li>
              <li>
                за наявності хронічних захворювань серцево-судинної системи та
                інших захворювань внутрішніх органів;
              </li>
              <li>при хронічній недостатності нирок та печінки;</li>
              <li>при гострих інфекційних захворюваннях;</li>
              <li>вагітності та годуванні грудьми;</li>
              <li>цукровий діабет у стадії компенсації;</li>
              <li>онкологічні захворювання;</li>
              <li>порушення згортання крові;</li>
              <li>наявність в анамнезі інфаркту або інсульту.</li>
            </ul>
          </div>

          <div className={styles.gallerySection}>
            <PrimmaGallery
              images={galleryImages}
              galleryId="blefaro-contraindications"
            />
          </div>
        </div>
        <ConsultationButton />
      </div>
    </div>
  );
};

export default BlefaroContraindications;
