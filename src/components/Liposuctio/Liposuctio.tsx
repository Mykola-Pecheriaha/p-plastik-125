'use client';

import type React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import PrimmaGallery from '../PrimmaGallery/PrimmaGallery';
import CardsPrimma from '../../components/CardsPrima/CardsPrima';
import styles from './Liposuctio.module.css';

interface LiposuctionProps {
  backgroundColor?: string;
}

const Liposuction: React.FC<LiposuctionProps> = ({
  backgroundColor = '#f5f5f5',
}) => {
  const galleryImages = [
    '/images/liposuction/liposuction1.jpg',
    '/images/liposuction/liposuction2.jpg',
    '/images/liposuction/liposuction23.jpg',
  ];

  return (
    <div className={styles.wrapper} style={{ backgroundColor }}>
      <div className={styles.container}>
        <div className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.title}>Ліпосакція</h1>
            <ul className={styles.benefits}>
              <li>
                <ArrowRight size={16} /> Плоский живіт та підтягнута шкіра
              </li>
              <li>
                <ArrowRight size={16} /> Спокусливі сідниці
              </li>
              <li>
                <ArrowRight size={16} /> Зменшення обсягів на 2-3 розміри
              </li>
              <li>
                <ArrowRight size={16} /> Виправлення проблемних ділянок фігури
                (видалення шийного `вдовинного` горба).
              </li>
            </ul>
          </div>
          <div className={styles.heroImage}>
            <Image
              src="/images/liposuction/liposuction-removebg-preview.png"
              alt="Ліпосакція"
              width={500}
              height={300}
              layout="responsive"
            />
          </div>
        </div>

        <CardsPrimma />

        <p className={styles.description}>
          Підтягнутий живіт, чітко окреслена талія, стрункі стегна – сьогодні це
          доступна реальність для кожної дівчини! Сучасна пластична хірургія
          гарантує отримання нових ідеальних контурів тіла без жорстких дієт та
          виснажливих занять у спортзалі.
        </p>
        <p className={styles.description}>
          Ліпосакція – одна з найпопулярніших операцій з естетичної корекції
          фігури у світі. Її переваги — малотравматичність та висока
          ефективність. Вона має на увазі хірургічне усунення локальних жирових
          відкладень, у так званих, зонах «депо» – область живота, талії,
          стегон, спини.
        </p>

        <p className={styles.description}>
          Видалення шийного гомрба методом ліпосакції є не тільки усуненням
          косметичного дефекту, а і ліквальною процедурою. Клімактеричний бугор
          (вдовиний, «бізоновий бугор») – косметичний дефект, який знайомий
          багатьом зрілим жінкам. Це локальне жирове відкладення (ліпома) з
          чіткими межами в області 7-го шийного хребця. Його поява пов’язана з
          віковими та гормональними змінами в період менопаузи, а також
          генетичною схильністю. Бугор не є захворюванням, але створює значний
          естетичний дискомфорт, а також негативно впливає на повсякденне життя.
          Люди з цією проблемою часто страждають від головного болю, підвищеного
          тиску, болю в спині, безсоння, «хрустки» в області шиї.
        </p>

        <div className={styles.examples}>
          <div className={styles.examplesContent}>
            <h2 className={styles.examplesTitle}>Приклади робіт До-Після</h2>
            <ul className={styles.examplesList}>
              <li>Безпечне видалення жирових відкладень з проблемних зон</li>
              <li>Природні контури фігури</li>
              <li>Проведення операції через мікропроколи</li>
              <li>Без розрізів та швів</li>
              <li>Поєднання з іншими операціями на тілі</li>
            </ul>
          </div>
          <div className={styles.examplesGallery}>
            <h4 className={styles.galleryTitle}>Ліпосакція</h4>
            <PrimmaGallery
              images={galleryImages}
              galleryId="liposuction-gallery"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Liposuction;
