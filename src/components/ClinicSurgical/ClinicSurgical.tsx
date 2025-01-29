'use client';

import type React from 'react';
import PrimmaGallery from '../PrimmaGallery/PrimmaGallery';
import styles from './ClinicSurgical.module.css';

const galleryImages = [
  '/images/clinic/clinic1.jpg',
  '/images/clinic/clinic2.jpg',
  '/images/clinic/clinic3.jpeg',
  '/images/clinic/clinic4.jpeg',
];

const ClinicSurgical: React.FC = () => {
  return (
    <div className={styles.backgroundWrapper}>
      <div className={styles.background}>
        <div className={styles.container}>
          <h2 className={styles.mainTitle}>Про клініку, в якій я оперую</h2>
          <div className={styles.content}>
            <div className={styles.textSection}>
              <p className={styles.paragraph}>
                Як часто ми говоримо про красу та удосконалення зовнішності, не
                зосереджуючи увагу на тому, в яких умовах це відбувається. Без
                сучасного обладнання, операційної та дотримання норм
                стерильності безпечно створити бездоганний образ просто
                неможливо. Усі операції я проводжу в Центральні міські клінічні
                лікарні. Операційний блок відповідає найвищим стандартам якості
                та безпеки GMP.
              </p>
              <p className={styles.paragraph}>
                Окрім хірургічної діяльності, я регулярно виступаю доповідачкою
                на міжнародних конференціях з пластичної хірургії, де ділюся
                своїм досвідом та унікальними напрацюваннями.
              </p>
              <h2 className={styles.subTitle}>
                Удосконалюємо свою майстерність
              </h2>
              <p className={styles.paragraph}>
                Кожного року наша команда відвідує різні конгреси по пластичні
                хірургії, де ми удосконалюємо своє мистецтво у найвидатніших
                хірургів світу. ???
              </p>
            </div>
            <div className={styles.gallerySection}>
              <PrimmaGallery
                images={galleryImages}
                galleryId="clinic-surgical"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClinicSurgical;
