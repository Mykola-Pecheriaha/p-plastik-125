'use client';

import type React from 'react';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import CardsPrimma from '../../components/CardsPrima/CardsPrima';
import PrimmaGallery from '../PrimmaGallery/PrimmaGallery';
import styles from './CarpalSyndrome.module.css';

interface CarpalSyndromeProps {
  backgroundColor?: string;
}

const CarpalSyndrome: React.FC<CarpalSyndromeProps> = ({
  backgroundColor = '#f0f4f8',
}) => {
  const symptoms = [
    'Зникнення болі в кисті',
    'Зникнення відчуття заніміння в кінчиках пальців',
    "Набуття сили в м'язах кисті",
  ];

  const galleryImages = [
    '/placeholder.svg?height=300&width=300',
    '/placeholder.svg?height=300&width=300',
    '/placeholder.svg?height=300&width=300',
    '/placeholder.svg?height=300&width=300',
  ];

  return (
    <div className={styles.carpalSyndrome} style={{ backgroundColor }}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.textContent}>
            <h1>Карпальний синдром</h1>
            <ul>
              {symptoms.map((symptom, index) => (
                <li key={index}>
                  <ChevronRight size={20} />
                  {symptom}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.imageContent}>
            <Image
              src="/images/carpalSyndrome/carp53-removebg-preview.png"
              alt="Карпальний синдром"
              width={400}
              height={400}
            />
          </div>
        </div>

        <div className={styles.cardsSection}>
          <CardsPrimma />
        </div>

        <div className={styles.textSection}>
          <p>
            Попри його багато назв (cиндро́м запя́стного кана́лу, синдром друкарки,
            хвороба офісних працівників…) є там захворюванням яке виникає в
            людей, чия професія повязана з одноманітними рухами запястя та
            незручним положенням рук при виконанні роботи.
          </p>
          <p>
            Суть захворювання зводиться до того, що в процесі цих рухів кисті
            поступово виникає потовщення і ущільнення оболонок сухожилків
            згиначів, які проходять з передпліччя на кисть через вузький канал
            на запястку. Цей канал називається карпальним, є досить обмежений і
            в звязку з тим що він утворений з трьох сторін кістками запястка. А
            з однієї сторони досить щільною карпальною звязкою, яка не в змозі
            розтягуватися. Тому місця в цьому каналі досить обмежено і через ці
            потовщення оболонок сухожилок приводить до стискання нерва
            (серединного) який також там проходить.
          </p>
        </div>

        <div className={styles.bottomSection}>
          <div className={styles.examplesContent}>
            <h2>Приклади робіт До-Після</h2>
          </div>
          <div className={styles.galleryContent}>
            <h4>Тунельний карпальний синдром</h4>
            <PrimmaGallery
              images={galleryImages}
              galleryId="carpal-syndrome-gallery"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarpalSyndrome;
