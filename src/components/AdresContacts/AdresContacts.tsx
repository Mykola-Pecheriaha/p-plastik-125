'use client';

import type React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import PrimmaGallery from '../PrimmaGallery/PrimmaGallery';
import styles from './AdresContacts.module.css';

interface AdresContactsProps {
  backgroundColor?: string;
}

const AdresContacts: React.FC<AdresContactsProps> = ({
  backgroundColor = '#ffffff',
}) => {
  // Масив зображень зберігається в компоненті
  const adresImages = [
    '/images/clinic/clinic1.jpg',
    '/images/clinic/clinic3.jpeg',
    '/images/clinic/surgical5.jpg',
    // Додайте більше зображень за потреби
  ];

  return (
    <div className={styles.contactsContainer} style={{ backgroundColor }}>
      <div className={styles.contentWrapper}>
        <h1 className={styles.title}>Контактна інформація</h1>

        <div className={styles.content}>
          <div className={styles.gallerySection}>
            <PrimmaGallery images={adresImages} galleryId="adres-gallery" />
          </div>

          <div className={styles.contactSection}>
            <h2 className={styles.cityTitle}>Чернівці</h2>
            <div className={styles.contactInfo}>
              <p className={styles.contactItem}>
                <MapPin className={styles.icon} />
                м. Чернівці, вул. Героїв Майдану 226, (вхід з вул.Рівенська)
              </p>
              <p className={styles.contactItem}>
                <Phone className={styles.icon} />
                <a href="tel:+380962140333" className={styles.link}>
                  +38 (096)-214-03-33
                </a>
              </p>
              <p className={styles.contactItem}>
                <Mail className={styles.icon} />
                <a href="mailto:Pecheryag@gmail.com" className={styles.link}>
                  Pecheryag@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdresContacts;
