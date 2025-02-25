'use client';

import type React from 'react';
import Image from 'next/legacy/image';
import { ArrowRight } from 'lucide-react';
import styles from './Facelift.module.css';
import CardsPrimma from '../../components/CardsPrima/CardsPrima';
import PrimmaGallery from '../PrimmaGallery/PrimmaGallery';
import ConsultationButton from '../../components/ConsultationButton/ConsultationButton';

interface FaceliftProps {
  backgroundColor?: string;
}

const Facelift: React.FC<FaceliftProps> = ({ backgroundColor = '#f0f0f0' }) => {
  const galleryImages = [
    '/images/FaceLift/face-lifting.jpg',
    '/images/FaceLift/face-lifting1.jpg',
    '/images/FaceLift/face-lifting2.jpg',
  ];

  return (
    <div className={styles.background} style={{ backgroundColor }}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.textContent}>
            <h2>Фейсліфтинг</h2>
            <h1>Підтяжка обличчя та шиї</h1>
            <ul className={styles.arrowList}>
              <li>
                <ArrowRight size={16} /> Поверніть молодість за 1 місяць
              </li>
              <li>
                <ArrowRight size={16} /> Формування чіткого контуру обличчя
              </li>
              <li>
                <ArrowRight size={16} /> Результат зберігається 10-15 років
              </li>
            </ul>
          </div>
          <div className={styles.imageContent}>
            <Image
              src="/images/FaceLift/face-lift1-removebg-preview.png"
              alt="Фейсліфтинг"
              width={350}
              height={300}
              layout="responsive"
            />
          </div>
        </div>

        <CardsPrimma />

        <div className={styles.descriptionSection}>
          <p>
            Підтяжка обличчя та шиї (фейсліфтинг) – можливість позбутися вікових
            змін та кардинально омолодити зовнішність, зберігши при цьому
            індивідуальність та природну міміку. Хірургічна операція відновлює
            природний контур обличчя, робить його більш пружним та чітким,
            прибирає зморшки та заломи на шкірі.
          </p>
          <p>
            Сьогодні фейсліфтинг має великий попит у пацієнтів за 50 через малу
            травматичність і хороший результат омолодження.
          </p>
        </div>

        <div className={styles.bottomSection}>
          <div className={styles.leftContent}>
            <h2>Приклади робіт До-Після</h2>
            <ul className={styles.dotList}>
              <li>Підтяжка шкіри обличчя та SMAS (глибоких структур)</li>
              <li>Італійські протоколи проведення операції</li>
              <li>Сучасний інгаляційний наркоз</li>
              <li>Чіткий контур обличчя</li>
              <li>Відсутність видимих рубців</li>
            </ul>
          </div>
          <div className={styles.rightContent}>
            <div className={styles.galleryTitle}>
              <h4>Пластика тіла</h4>
            </div>
            <PrimmaGallery
              images={galleryImages}
              galleryId="facelift-gallery"
            />
          </div>
        </div>
        <ConsultationButton />
      </div>
    </div>
  );
};

export default Facelift;
