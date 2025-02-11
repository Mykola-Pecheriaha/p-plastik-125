'use client';

import { ChevronRight } from 'lucide-react';
import PrimmaGallery from '../PrimmaGallery/PrimmaGallery';
import styles from './TumorOperations.module.css';
import type React from 'react';

interface TumorOperationsProps {
  backgroundColor?: string;
}

const TumorOperations: React.FC<TumorOperationsProps> = ({
  backgroundColor = '#f0f4f8',
}) => {
  const diagnosticSteps = [
    'огляд пухлини і регіонарних лімфовузлів',
    'при потребі дермоскопія',
    'при потребі УЗД діагностика пухлини і регіонарних вузлів',
    'КТ (МРТ) діагностика при потребі',
    'лабораторна діагностика',
  ];

  const operationSteps = [
    'знеболення частіше місцеве',
    'пухлина висікається а межах здорових тканин врахочуючи естетичні норми',
    'якщо це пухлина підшкірної клітковини, то висічення виконується поза межами капсули пухлини',
    'після висічення пухлини проводиться її макроскопічна оцінка',
    'пухлина передається на патгістологічне дослідження',
  ];

  const galleryImages = [
    '/placeholder.svg?height=300&width=300',
    '/placeholder.svg?height=300&width=300',
    '/placeholder.svg?height=300&width=300',
    '/placeholder.svg?height=300&width=300',
  ];

  return (
    <div className={styles.tumorOperations} style={{ backgroundColor }}>
      <div className={styles.container}>
        <h1 className={styles.mainTitle}>
          Доброякісні новоутворення шкіри і підшкірної
        </h1>

        <p className={styles.fullWidthText}>
          Оперативне лікування пухлин шкіри і підшкірної клітковини є єдиним
          правельним методом.
        </p>

        <div className={styles.splitSection}>
          <div className={styles.textContent}>
            <div className={styles.section}>
              <h4>Проводиться передопераційна діагностика і підготовка</h4>
              <ul>
                {diagnosticSteps.map((step, index) => (
                  <li key={index}>
                    <ChevronRight size={20} />
                    {step}
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.section}>
              <h4>Операція</h4>
              <ul>
                {operationSteps.map((step, index) => (
                  <li key={index}>
                    <ChevronRight size={20} />
                    {step}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className={styles.galleryContent}>
            <PrimmaGallery
              images={galleryImages}
              galleryId="operation-gallery"
            />
          </div>
        </div>

        <div className={styles.bottomText}>
          <p>
            Всі пухлини до проведення патгістологічного дослідження слід
            рахувати такі як потенціально недоброякисними. Макроскопічне
            дослідження (огляд пухлини на зовні її та після розсічення) може
            бути тільки як попереднє!
          </p>
          <p>
            Передопераційне обстеження утворення повинно бути максимальним і
            мають бути виконані всі необхідні неінвазивні методи обстеження для
            створення повної картини утворення для її повного видалення з
            найменшими негативними наслідками.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TumorOperations;
