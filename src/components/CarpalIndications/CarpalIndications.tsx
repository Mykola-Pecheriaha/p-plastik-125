'use client';

import type React from 'react';
import PrimmaGallery from '../PrimmaGallery/PrimmaGallery';
import styles from './CarpalIndications.module.css';

interface CarpalIndicationsProps {
  backgroundColor?: string;
}

const CarpalIndications: React.FC<CarpalIndicationsProps> = ({
  backgroundColor = '#f0f4f8',
}) => {
  const galleryImages = [
    '/placeholder.svg?height=300&width=300',
    '/placeholder.svg?height=300&width=300',
    '/placeholder.svg?height=300&width=300',
    '/placeholder.svg?height=300&width=300',
  ];

  return (
    <div className={styles.carpalIndications} style={{ backgroundColor }}>
      <div className={styles.container}>
        <h1 className={styles.mainTitle}>Симптоми карпального синдрому</h1>

        <div className={styles.contentWrapper}>
          <div className={styles.textContent}>
            <p className={styles.leadText}>
              Першою зазвичай захворює провідна рука (рука яка більше бере на
              себе навантаження)
            </p>

            <ul className={styles.symptomsList}>
              <li>прогресуючого оніміння і болю у руках, особливо вночі;</li>
              <li>виникає набряклость, нечутливості пальців вранці;</li>
            </ul>

            <div className={styles.section}>
              <p>
                Якщо захворювання не ліковане то згодом до них додаються такі
                симптоми як:
              </p>
              <ul>
                <li>порушення рухів долонь, слабкість рук;</li>
                <li>нездатність брати та утримувати дрібні предмети.</li>
              </ul>
            </div>

            <div className={styles.section}>
              <p>
                Якщо довго не лікувати затискання нерва, це може призвести до
                незворотнього пошкодження нерва та радикально погіршити якість
                життя
              </p>
              <ul>
                <li>
                  порушення чутливості пальців стають дедалі більше вираженими
                </li>
                <li>з часом зношуються мязи долоні</li>
                <li>
                  долоня втрачає свою силу і зникає здатність виконувати навіть
                  прості повсякденні дії.
                </li>
              </ul>
            </div>

            <p className={styles.warning}>
              При неефективності консервативного лікування потрібне оперативне
              лікування
            </p>
          </div>

          <div className={styles.galleryContent}>
            <PrimmaGallery
              images={galleryImages}
              galleryId="carpal-symptoms-gallery"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarpalIndications;
