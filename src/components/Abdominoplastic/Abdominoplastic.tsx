'use client';
import React from 'react';

import Image from 'next/legacy/image';
import { ArrowRight } from 'lucide-react';
import styles from './Abdominoplastic.module.css';
import CardsPrimma from '../../components/CardsPrima/CardsPrima';
import PrimmaGallery from '../../components/PrimmaGallery/PrimmaGallery';

interface AbdominoplasticProps {
  backgroundColor?: string;
}

const Abdominoplastic: React.FC<AbdominoplasticProps> = ({
  backgroundColor = '#d3e29d',
}) => {
  const galleryImages = [
    '/images/abdominoplasty/abdominoplastic1.jpg',
    '/images/abdominoplasty/abdominoplastic2.jpg',
    '/images/abdominoplasty/abdominoplastic3.jpg',
  ];

  React.useEffect(() => {
    const backgroundElement = document.querySelector(`.${styles.background}`);
    if (backgroundElement) {
      (backgroundElement as HTMLElement).style.backgroundColor =
        backgroundColor;
    }
  }, [backgroundColor]);

  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.textContent}>
            <h2>Абдомінопластика</h2>
            <h1>Пластика живота</h1>
            <ul className={styles.arrowList}>
              <li>
                <ArrowRight size={16} /> Видалення зайвої шкіри
              </li>
              <li>
                <ArrowRight size={16} /> Корекція мязів черевної стінки
              </li>
              <li>
                <ArrowRight size={16} /> Формування нового пупка
              </li>
              <li>
                <ArrowRight size={16} /> Ліпосакція живота та боків
              </li>
            </ul>
          </div>
          <div className={styles.imageContent}>
            <Image
              src="/images/abdominoplasty/abdominoplastic-removebg-preview.png"
              alt="Абдомінопластика"
              width={400}
              height={300}
              layout="responsive"
            />
          </div>
        </div>

        <CardsPrimma />

        <div className={styles.descriptionSection}>
          <p>
            Пластика живота (абдомінопластика) – затребувана пластична операція,
            яка дозволяє отримати ідеально рівний животик і гарну талію після
            пологів та різкого схуднення. Це стає можливим за рахунок
            позбавлення від надлишків шкіри та підшкірного жиру (так званий
            «фартух»). а також повертиє упругий мязевий корсет для вашої талії.
            Абдомінопластика повертає фігурі стрункість і пропорційність,
            гармонійні контури.
          </p>
        </div>

        <div className={styles.bottomSection}>
          <div className={styles.leftContent}>
            <h2>Приклади робіт До-Після</h2>
            <ul className={styles.dotList}>
              <li>Поверну животу плоску форму</li>
              <li>Приберу розтяжки</li>
              <li>Зроблю форму тіла привабливою</li>
              <li>Мінімальний термін реабілітації до 40 днів</li>
            </ul>
          </div>
          <div className={styles.rightContent}>
            <div className={styles.galleryTitle}>
              <h4>Пластика тіла</h4>
            </div>
            <PrimmaGallery
              images={galleryImages}
              galleryId="abdominoplasty-gallery"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Abdominoplastic;
