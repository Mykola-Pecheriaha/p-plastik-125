'use client';

import PrimmaGallery from '../PrimmaGallery/PrimmaGallery';
import styles from './BreastSurgeryRecovery.module.css';
import type React from 'react';

interface BreastSurgeryRecoveryProps {
  backgroundColor?: string;
}

const BreastSurgeryRecovery: React.FC<BreastSurgeryRecoveryProps> = ({
  backgroundColor = '#f0f4f8',
}) => {
  // Окремі масиви зображень для кожної галереї
  const compressionGalleryImages = [
    '/images/breast-recovery/compression1.jpg',
    '/images/breast-recovery/compression2.jpg',
    '/images/breast-recovery/compression3.jpg',
    '/images/breast-recovery/compression4.jpg',
  ];

  const showerGalleryImages = [
    '/images/breast-recovery/shower1.jpg',
    '/images/breast-recovery/shower2.jpg',
    '/images/breast-recovery/shower3.jpg',
    '/images/breast-recovery/shower4.jpg',
  ];

  const sportGalleryImages = [
    '/images/breast-recovery/sport1.jpg',
    '/images/breast-recovery/sport2.jpg',
    '/images/breast-recovery/sport3.jpg',
    '/images/breast-recovery/sport4.jpg',
  ];

  const beachGalleryImages = [
    '/images/breast-recovery/beach1.jpg',
    '/images/breast-recovery/beach2.jpg',
    '/images/breast-recovery/beach3.jpg',
    '/images/breast-recovery/beach4.jpg',
  ];

  // Функція для створення плейсхолдерів, якщо зображення ще не доступні
  const getPlaceholders = (count = 4) => {
    return Array(count)
      .fill(0)
      .map(
        (_, i) => `/placeholder.svg?height=300&width=300&text=Image${i + 1}`
      );
  };

  return (
    <div className={styles.breastSurgeryRecovery} style={{ backgroundColor }}>
      <div className={styles.container}>
        <h2 className={styles.mainTitle}>Реабілітація після мамопластики</h2>

        <p className={styles.fullWidthText}>
          Першу добу після операції пацієнтки перебувають у стаціонарі під
          наглядом лікарів та контролем медсестри.
        </p>

        <p className={styles.fullWidthText}>
          На період реабілітації в домашніх умовах пацієнтка отримує
          рекомендації для зменшення больових відчуттів
        </p>

        <div className={styles.contentSection}>
          <div className={styles.textContent}>
            <h4 className={styles.subTitle}>Компресійна білизна</h4>
            <p>
              На домашньому відновленні орієнтовно 2-4 тижні потрібно буде
              носити компресійний бандаж. Його завдання – стабілізувати форму
              грудей або зафіксувати імплант, якщо була операція зі збільшення
              грудей. Якщо була операція з підтяжки або зменшення грудей,
              завдання бандажу – підтримання молочної залози та зменшення
              навантаження на шви.
            </p>
          </div>
          <div className={styles.galleryContent}>
            <PrimmaGallery
              images={
                compressionGalleryImages.length
                  ? compressionGalleryImages
                  : getPlaceholders()
              }
              galleryId="compression-gallery"
            />
          </div>
        </div>

        <div className={styles.contentSection}>
          <div className={styles.textContent}>
            <h4 className={styles.subTitle}>Душ та миття голови</h4>
            <p>
              Повноцінний душ можна прийняти на третю добу після операції.
              Важливо, душ, а не гарячу ванну! Так, як грудний імплант
              розташовується зазвичай під грудним мязом, не рекомендується
              напружувати мязи грудей та піднімати руки вище плечового поясу,
              тому для миттям голови заручіться допомогою рідних чи близьких.
            </p>
          </div>
          <div className={styles.galleryContent}>
            <PrimmaGallery
              images={
                showerGalleryImages.length
                  ? showerGalleryImages
                  : getPlaceholders()
              }
              galleryId="shower-gallery"
            />
          </div>
        </div>

        <div className={styles.contentSection}>
          <div className={styles.textContent}>
            <h4 className={styles.subTitle}>Водіння авто</h4>
            <p>
              До 10-ти днів не рекомендується сідати за кермо, щоб не
              напружувати мязи грудного відділу.
            </p>
            <h4 className={styles.subTitle}>Спорт та фізичні навантаження</h4>
            <p>
              Після мамопластики є обмеження по підняттю ваги перед собою. Також
              на один місяць часу треба відкласти всі спортивні навантаження.
              Згодом можна буде розпочати тренування з легких кардіотренувань,
              але із носінням компресійної білизни.
            </p>
            <p>
              Поступово, через три місяці після операції можна займатись у
              спортзалі, але без навантаження на грудну групу мязів.
            </p>
          </div>
          <div className={styles.galleryContent}>
            <PrimmaGallery
              images={
                sportGalleryImages.length
                  ? sportGalleryImages
                  : getPlaceholders()
              }
              galleryId="sport-gallery"
            />
          </div>
        </div>

        <div className={styles.contentSection}>
          <div className={styles.textContent}>
            <h4 className={styles.subTitle}>Сонце, море, пляж</h4>
            <p>
              Звісно, що нові, ефектні форми дуже захочеться показати у
              красивому купальнику. Проте не варто поспішати. Засмагати можна
              лише через півтора місяця після операції. Це важливо врахувати, бо
              ультрафіолет провокує пігментацію та потемніння рубця.
            </p>
          </div>
          <div className={styles.galleryContent}>
            <PrimmaGallery
              images={
                beachGalleryImages.length
                  ? beachGalleryImages
                  : getPlaceholders()
              }
              galleryId="beach-gallery"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreastSurgeryRecovery;
