'use client';

import type React from 'react';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import PrimmaGallery from '../PrimmaGallery/PrimmaGallery';
import ConsultationButton from '../../components/ConsultationButton/ConsultationButton';
import styles from './AbdominoplastyContraindications.module.css';

interface Contraindication {
  title: string;
  content: string[];
  images: string[];
}

const contraindications: Contraindication[] = [
  {
    title: 'Абсолютні протипоказання',
    content: [
      'Вагітність',
      'Період лактації',
      'Онкологічні захворювання',
      'Цукровий діабет у стадії декомпенсації',
      'Порушення згортання крові',
      'Тяжкі хронічні захворювання внутрішніх органів у стадії загострення',
      'Психічні розлади',
    ],
    images: [
      '/images/AbdominoplastyContraindications/abdomino125-24.jpg',
      '/images/AbdominoplastyContraindications/abdomino125-26.jpg',
      '/images/AbdominoplastyContraindications/preparation5.jpg',
    ],
  },
  {
    title: 'Відносні протипоказання',
    content: [
      'Ожиріння',
      'Варикозне розширення вен нижніх кінцівок',
      'Куріння',
      'Прийом гормональних препаратів',
      'Наявність свіжих рубців у зоні операції',
      'Запальні захворювання шкіри',
    ],
    images: [
      '/images/AbdominoplastyContraindications/contraindication2_1.jpg',
      '/images/AbdominoplastyContraindications/contraindication2_2.jpg',
      '/images/AbdominoplastyContraindications/contraindication2_3.jpg',
    ],
  },
  {
    title: 'Тимчасові протипоказання',
    content: [
      'Гострі інфекційні захворювання',
      'Загострення хронічних захворювань',
      'Менструація',
      'Період реабілітації після інших операцій чи травм',
    ],
    images: [
      '/images/AbdominoplastyContraindications/contraindication3_1.jpg',
      '/images/AbdominoplastyContraindications/contraindication3_2.jpg',
      '/images/AbdominoplastyContraindications/contraindication3_3.jpg',
    ],
  },
  {
    title: 'Вікові обмеження',
    content: [
      'Абдомінопластика не рекомендується пацієнтам молодше 18 років',
      "Верхньої вікової межі немає, але важливий загальний стан здоров'я пацієнта",
      "У пацієнтів старшого віку можуть бути додаткові ризики, пов'язані з супутніми захворюваннями",
    ],
    images: [
      '/images/AbdominoplastyContraindications/contraindication4_1.jpg',
      '/images/AbdominoplastyContraindications/contraindication4_2.jpg',
      '/images/AbdominoplastyContraindications/contraindication4_3.jpg',
    ],
  },
];

interface AbdominoplastyContraindicationsProps {
  backgroundColor?: string;
}

const AbdominoplastyContraindications: React.FC<
  AbdominoplastyContraindicationsProps
> = ({ backgroundColor = '#f0f0f0' }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleContraindication = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.fullWidthBackground} style={{ backgroundColor }}>
      <div className={styles.container}>
        <h2 className={styles.mainTitle}>Абдомінопластика: протипоказання</h2>
        {contraindications.map((contraindication, index) => (
          <div key={index} className={styles.contraindicationContainer}>
            <div
              className={`${styles.contraindicationTitle} ${openIndex === index ? styles.open : ''}`}
              onClick={() => toggleContraindication(index)}
            >
              {contraindication.title}
              {openIndex === index ? <ChevronUp /> : <ChevronDown />}
            </div>
            {openIndex === index && (
              <div className={styles.contraindicationContent}>
                <div className={styles.textContent}>
                  <ul>
                    {contraindication.content.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className={styles.galleryContent}>
                  <PrimmaGallery
                    images={contraindication.images}
                    galleryId={`contraindication-${index}`}
                  />
                </div>
              </div>
            )}
          </div>
        ))}
        <ConsultationButton />
      </div>
    </div>
  );
};

export default AbdominoplastyContraindications;
