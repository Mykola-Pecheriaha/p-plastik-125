'use client';

import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import PrimmaGallery from '../PrimmaGallery/PrimmaGallery';
import CardsPrimma from '../../components/CardsPrima/CardsPrima';
import styles from './LegPlastic.module.css';
import type React from 'react';

interface LegPlasticProps {
  backgroundColor?: string;
}

const LegPlastic: React.FC<LegPlasticProps> = ({
  backgroundColor = '#f0f4f8',
}) => {
  const features = [
    'Модельні ніжки, немов з подіуму',
    'Корекція асиметрії',
    'Швидка реабілітація',
  ];

  const benefits = [
    'Корекція форми ніг',
    'Видалення жирових відкладень',
    'Ліпофілінг проблемних ділянок',
    'Регіонарна анастезія',
  ];

  const galleryImages = [
    '/placeholder.svg?height=300&width=300',
    '/placeholder.svg?height=300&width=300',
    '/placeholder.svg?height=300&width=300',
    '/placeholder.svg?height=300&width=300',
  ];

  return (
    <div className={styles.legPlastic} style={{ backgroundColor }}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.leftContent}>
            <h1>
              Круропластика
              <span className={styles.subtitle}>ПЛАСТИКА НІГ</span>
            </h1>
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
                src="/images/LedPlastic/LedPlastic-removebg-preview.png"
                alt="Leg plastic surgery example"
                width={800}
                height={900}
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
            Красиві ноги з ідеальною довжиною та правильними пропорціями
            привертають увагу. Якщо від природи вони надто худі, позбавлені
            гарного рельєфу або присутні вроджена або набута асиметрія на
            допомогу приходить пластична хірургія.
          </p>
          <p>
            Пластика ніг (круропластика) – новий, але дуже потрібний напрямок
            для естетичного поліпшення зовнішнього вигляду нижніх кінцівок.
            Операція коригує форму та обсяг гомілок за рахунок спеціальних
            силіконових імплантатів. Виконується як жінкам, так і чоловікам у
            різному віці.
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
              <h4 className={styles.galleryTitle}>Круропластика</h4>
              <PrimmaGallery images={galleryImages} galleryId="leg-gallery" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegPlastic;
