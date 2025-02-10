'use client';

import type React from 'react';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import CardsPrimma from '../../components/CardsPrima/CardsPrima';
import PrimmaGallery from '../PrimmaGallery/PrimmaGallery';
import styles from './Gerniotomiya.module.css';

interface GerniotomiyaProps {
  backgroundColor?: string;
}

const Gerniotomiya: React.FC<GerniotomiyaProps> = ({
  backgroundColor = '#f0f4f8',
}) => {
  const benefits = [
    'Зникнення Випинань',
    'Зникнення загрози защемлення',
    'Зникнення естетичного дефекту',
  ];

  const galleryImages = [
    '/placeholder.svg?height=300&width=300',
    '/placeholder.svg?height=300&width=300',
    '/placeholder.svg?height=300&width=300',
    '/placeholder.svg?height=300&width=300',
  ];

  return (
    <div className={styles.gerniotomiya} style={{ backgroundColor }}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.textContent}>
            <h1>Грижі</h1>
            <ul>
              {benefits.map((benefit, index) => (
                <li key={index}>
                  <ChevronRight size={20} />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.imageContent}>
            <Image
              src="/images/gernia/gerniaі-removebg-preview.png"
              alt="Грижі"
              width={400}
              height={300}
            />
          </div>
        </div>

        <div className={styles.cardsSection}>
          <CardsPrimma />
        </div>

        <div className={styles.textSection}>
          <p>
            Грижі передньої черевної стінки – патологічні стани, які повязані з
            випинанням органів під шкіру через пупкове кільце, паховий канал та
            інші природні отвори.
          </p>
          <p>
            Також грижа може виникнути як ускладнення після оперативного
            втручання. Це поширене захворювання, яке у дорослої людини можна
            усунути тільки оперативним шляхом. Грижа ніколи не проходить
            самостійно і доставляє пацієнтові багато болісних відчуттів. Тому
            найкращий спосіб швидко повернутися до повноцінного життя і забути
            про болі в животі – лапароскопічна операція.
          </p>
        </div>

        <div className={styles.bottomSection}>
          <div className={styles.examplesContent}>
            <h2>Приклади робіт До-Після</h2>
            <ul>
              <li>вибір методу операції</li>
            </ul>
          </div>
          <div className={styles.galleryContent}>
            <h3>Грижі</h3>

            <PrimmaGallery images={galleryImages} galleryId="hernias-gallery" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gerniotomiya;
