'use client';

import type React from 'react';
import Image from "next/legacy/image";
import { ArrowRight } from 'lucide-react';
import CardsPrimma from '../../components/CardsPrima/CardsPrima';
import PrimmaGallery from '../PrimmaGallery/PrimmaGallery';
import styles from './BreastImplantReplacement.module.css';

interface BreastImplantReplacementProps {
  backgroundColor?: string;
}

const BreastImplantReplacement: React.FC<BreastImplantReplacementProps> = ({
  backgroundColor = '#f5f5f5',
}) => {
  const benefits = [
    'Бажаний обʼєм',
    'Ідеальна форма',
    'Реабілітація до 30 днів',
  ];

  const examples = [
    'Вибір імплантів правильної форми та розміру',
    'Виправлення асиметрії',
    'Створення бажаних грудей',
  ];

  const galleryImages = [
    '/images/BreastImplantReplacementPage/Replacement.jpg',
    '/images/BreastImplantReplacementPage/Replacement7.jpg',
    '/images/BreastImplantReplacementPage/Replacement3.jpg',
  ];

  return (
    <div className={styles.wrapper} style={{ backgroundColor }}>
      <div className={styles.container}>
        <div className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.title}>Заміна грудних імплантів</h1>
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
              src="/images/BreastImplantReplacementPage/liposuction23-removebg-preview.png"
              alt="Заміна грудних імплантів"
              width={500}
              height={300}
              layout="responsive"
            />
          </div>
        </div>

        <CardsPrimma />

        <p className={styles.description}>
          Збільшення грудей – одна з найпопулярніших пластичних операцій, яка
          дарує ідеальні форми. Але, в деяких випадках, дівчину може не
          влаштувати естетичний вид залози після першої мамопластики, також є
          можливість появи обєктивних косметичних недоліків – усунення
          імплантату, розвиток капсулярної контрактури. Все це легко вирішити за
          допомогою реендопротезування – заміни старих імплантів на нові.
        </p>

        <div className={styles.examples}>
          <div className={styles.examplesContent}>
            <h2 className={styles.examplesTitle}>Приклади робіт До-Після</h2>
            <ul className={styles.examplesList}>
              {examples.map((example, index) => (
                <li key={index}>{example}</li>
              ))}
            </ul>
          </div>
          <div className={styles.examplesGallery}>
            <h4 className={styles.galleryTitle}>Заміна грудних імплантів</h4>
            <PrimmaGallery
              images={galleryImages}
              galleryId="breast-implant-replacement-gallery"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreastImplantReplacement;
