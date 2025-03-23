'use client';

import { ChevronRight } from 'lucide-react';
import PrimmaGallery from '../PrimmaGallery/PrimmaGallery';
import CardsPrimma from '../../components/CardsPrima/CardsPrima';
import styles from './FlapCorrection.module.css';
import type React from 'react';
import Image from 'next/image';

interface FlapCorrectionProps {
  backgroundColor?: string;
}

const FlapCorrection: React.FC<FlapCorrectionProps> = ({
  backgroundColor = '#f0f4f8',
}) => {
  const features = [
    'Бажана форма вух',
    'Корекція асиметрії',
    'Без гематом та рубців',
    'Корекція дольки вух',
    'Видалення новоутворень вух',
  ];

  const benefits = [
    'Корекція розміру та форми вух',
    'Авторські методики операції',
    'Амбулаторне проведення',
    'Місцева анестезія або легкий наркоз',
    'Консультація+обстеження+операція в 1 день',
  ];

  const galleryImages = [
    '/images/FlapCorrection/ottoplastic2.jpg',
    '/images/FlapCorrection/ottoplastic3.jpg',
    '/images/FlapCorrection/ottoplastic4.jpg',
  ];

  return (
    <div className={styles.flapCorrection} style={{ backgroundColor }}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.leftContent}>
            <h1>Корекція клаповухості</h1>
            <ul>
              {features.map((feature, index) => (
                <li key={index}>
                  <ChevronRight size={20} />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.rightContent}>
            <div className={styles.singleImage}>
              <Image
                src="/images/FlapCorrection/otto-removebg-preview.png"
                alt="Ear correction example"
                width={500}
                height={600}
                className={styles.exampleImage}
              />
            </div>
          </div>
        </div>

        <div className={styles.cardsSection}>
          <CardsPrimma />
        </div>

        <div className={styles.textSection}>
          <p>
            Надмірна клаповухість вушної раковини – одна з деформацій, що
            трапляються найчастіше. За статистикою, «родзинка» є у 5% людей. Це
            не лише естетична проблема, а й психологічна. Вона викликає
            психологічний дискомфорт, а також стає причиною зниженої самооцінки.
          </p>
          <p>
            Назавжди прибрати клаповухість допомагає нескладна хірургічна
            корекція вух. Вона проводиться за показаннями як дорослим, так і
            дітям.
          </p>
        </div>

        <div className={styles.bottomSection}>
          <div className={styles.leftContent}>
            <h2>Приклади робіт До-Після</h2>
            <ul>
              {benefits.map((benefit, index) => (
                <li key={index}>
                  <ChevronRight size={20} />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.rightContent}>
            <div className={styles.galleryWrapper}>
              <h4 className={styles.galleryTitle}>Отопластика</h4>
              <PrimmaGallery
                images={galleryImages}
                galleryId="otoplasty-gallery"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlapCorrection;
