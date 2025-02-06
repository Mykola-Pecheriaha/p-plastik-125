'use client';

import type React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import CardsPrimma from '../../components/CardsPrima/CardsPrima';
import PrimmaGallery from '../PrimmaGallery/PrimmaGallery';
import styles from './Ginecomastiya.module.css';

interface GinecomastiyaProps {
  backgroundColor?: string;
}

const Ginecomastiya: React.FC<GinecomastiyaProps> = ({
  backgroundColor = '#f5f5f5',
}) => {
  const benefits = [
    'Бажана фігура',
    'Швидка реабілітація',
    'Упевненість в собі',
  ];

  const galleryImages = [
    '/images/ginecomastiya/before-after-1.jpg',
    '/images/ginecomastiya/before-after-2.jpg',
    '/images/ginecomastiya/before-after-3.jpg',
  ];

  return (
    <div className={styles.wrapper} style={{ backgroundColor }}>
      <div className={styles.container}>
        <div className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.title}>Гінекомастія</h1>
            <ul className={styles.benefits}>
              {benefits.map((benefit, index) => (
                <li key={index}>
                  <ArrowRight size={16} />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.heroImage}>
            <Image
              src="/images/ginecomastiya/hero.jpg"
              alt="Гінекомастія"
              width={500}
              height={300}
              layout="responsive"
            />
          </div>
        </div>

        <CardsPrimma />

        <p className={styles.description}>
          Гінекомастія у чоловіків – аномальне збільшення грудних залоз
          доброякісного характеру. Порушення часто буває спричинене гормональним
          дисбалансом, а також може стати наслідком набору зайвої ваги. Чоловічі
          груди стають схожими на жіночі молочні залози. Патологія викликає масу
          комплексів та дискомфорт. Видалення гінекомастії передбачає пластичну
          операцію, яка повертає чоловічому торсу його природні контури.
        </p>

        <div className={styles.examples}>
          <div className={styles.examplesContent}>
            <h2 className={styles.examplesTitle}>Приклади робіт До-Після</h2>
          </div>
          <div className={styles.examplesGallery}>
            <h4 className={styles.galleryTitle}>Гінекомастія</h4>
            <PrimmaGallery
              images={galleryImages}
              galleryId="ginecomastiya-gallery"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ginecomastiya;
