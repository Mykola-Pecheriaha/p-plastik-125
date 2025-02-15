'use client';

import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import CardsPrimma from '../../components/CardsPrima/CardsPrima';
import styles from './BreastImplantRemoval.module.css';
import type React from 'react';

interface BreastImplantRemovalProps {
  backgroundColor?: string;
}

const BreastImplantRemoval: React.FC<BreastImplantRemovalProps> = ({
  backgroundColor = '#f0f4f8',
}) => {
  const features = [
    'Бажаний обʼєм',
    'Ідеальна форма',
    'Реабілітація до 30 днів',
  ];

  return (
    <div className={styles.breastImplantRemoval} style={{ backgroundColor }}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.leftContent}>
            <h1>ВИДАЛЕННЯ ГРУДНИХ ІМПЛАНТІВ</h1>
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
            <div className={styles.imageWrapper}>
              <Image
                src="/images/BreastImplantRemoval/removalInfo46-removebg-preview.png"
                alt="Breast implant removal"
                width={500}
                height={600}
                className={styles.mainImage}
              />
            </div>
          </div>
        </div>

        <div className={styles.cardsSection}>
          <CardsPrimma />
        </div>

        <div className={styles.textSection}>
          <p>
            Видалення імплантів грудей – тип повторного хірургічного втручання,
            яке передбачає вилучення раніше встановлених силіконових
            імплантатів. Причини проведення можуть бути різними: від естетичних
            уподобань дівчини до необхідності усунути ускладнення після
            первинної мамопластики.
          </p>
          <p>
            Вилучення може припускати одночасну заміну ендопротезу на інший вид
            або супроводжуватися підтяжкою грудей.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BreastImplantRemoval;
