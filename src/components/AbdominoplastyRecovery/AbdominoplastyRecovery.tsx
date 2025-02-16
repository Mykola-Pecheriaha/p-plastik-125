'use client';

import PrimmaGallery from '../PrimmaGallery/PrimmaGallery';
import styles from './AbdominoplastyRecovery.module.css';
import type React from 'react';

interface AbdominoplastyRecoveryProps {
  backgroundColor?: string;
}

const AbdominoplastyRecovery: React.FC<AbdominoplastyRecoveryProps> = ({
  backgroundColor = '#f0f4f8',
}) => {
  const galleryImages = [
    '/placeholder.svg?height=300&width=300',
    '/placeholder.svg?height=300&width=300',
    '/placeholder.svg?height=300&width=300',
    '/placeholder.svg?height=300&width=300',
  ];

  return (
    <div className={styles.abdominoplastyRecovery} style={{ backgroundColor }}>
      <div className={styles.container}>
        <h2 className={styles.mainTitle}>
          Реабілітація після абдомінопластики
        </h2>

        <p className={styles.fullWidthText}>
          Період на реабілітацію після абдомінопластики (пластика живота)
          залежить від обсягу проведеної операції. Якщо абдомінопластика
          проводилась у комплексі з іншими операціями, наприклад, ліпосакцією,
          час реабілітації буде довшим.
        </p>

        <div className={styles.contentSection}>
          <div className={styles.textContent}>
            <h4 className={styles.subTitle}>Компресійна білизна</h4>
            <p>
              Вже з першої доби після абдомінопластики пацієнтам дозволяють
              ходити, немає потреби в тривалому лежанні. Потрібно буде впродовж
              6-8 тижнів носити післяопераційний, компресійний бандаж, знімати
              його лише для прийому душу.
            </p>
            <p>
              Другий період реабілітації починається від виписки зі стаціонару.
              Пацієнту потрібно буде в домашніх умовах обробляти шви розчином
              антисептиків.
            </p>
            <p>
              Займатись спортом можна через 1,5- 2 місяці, проте уникати
              навантаження на мязи черевного преса. Усі дії, що провокують натяг
              черевної стінки, зокрема качання преса, можуть негативно
              позначитись на процесі реабілітації.
            </p>
            <p>
              Загалом, лікарі рекомендують взяти 10-14 днів паузи для
              відновлення.
            </p>
          </div>
          <div className={styles.galleryContent}>
            <PrimmaGallery
              images={galleryImages}
              galleryId="abdominoplasty-recovery-gallery"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AbdominoplastyRecovery;
