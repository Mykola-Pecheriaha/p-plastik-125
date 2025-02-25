'use client';

import type React from 'react';
import PrimmaGallery from '../PrimmaGallery/PrimmaGallery';

import styles from './ModifiableClinicInfo.module.css';

interface ModifiableClinicInfoProps {
  backgroundColor?: string;
  images?: string[];
}

const defaultImages = [
  '/images/faceliftClinic/surgical50.jpg',
  '/images/faceliftClinic/clinicface1.jpg',
  '/images/clinic/clinic_info3.jpg',
];

console.log('ModifiableClinicInfo: defaultImages', defaultImages);

const ModifiableClinicInfo: React.FC<ModifiableClinicInfoProps> = ({
  backgroundColor = '#e6f3ff',
  images = defaultImages,
}) => {
  return (
    <div className={styles.backgroundWrapper}>
      <div className={styles.background} style={{ backgroundColor }}>
        <div className={styles.container}>
          <h2 className={styles.mainTitle}>Інформація про нашу клініку</h2>
          <div className={styles.content}>
            <div className={styles.textSection}>
              <p className={styles.paragraph}>
                Наша клініка - це сучасний медичний заклад, оснащений найновішим
                обладнанням та укомплектований висококваліфікованим персоналом.
                Ми прагнемо забезпечити найвищий рівень медичної допомоги та
                комфорту для наших пацієнтів.
              </p>
              <p className={styles.paragraph}>
                У нашій клініці ви знайдете широкий спектр медичних послуг,
                включаючи консультації провідних спеціалістів, діагностику за
                допомогою сучасного обладнання та проведення складних
                хірургічних втручань.
              </p>
              <h2 className={styles.subTitle}>Наші переваги</h2>
              <p className={styles.paragraph}>
                Ми пишаємося нашим індивідуальним підходом до кожного пацієнта,
                використанням інноваційних методик лікування та постійним
                підвищенням кваліфікації нашого персоналу. Наша мета -
                забезпечити вам найкращий досвід лікування та догляду.
              </p>
            </div>
            <div className={styles.gallerySection}>
              <PrimmaGallery images={images} galleryId="clinic-info" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModifiableClinicInfo;
