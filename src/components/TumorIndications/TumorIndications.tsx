'use client';
import { ChevronRight } from 'lucide-react';
import PrimmaGallery from '../PrimmaGallery/PrimmaGallery';
import styles from './TumorIndications.module.css';
import type React from 'react';

interface TumorIndicationsProps {
  backgroundColor?: string;
}

const TumorIndications: React.FC<TumorIndicationsProps> = ({
  backgroundColor = '#f0f4f8',
}) => {
  const symptoms = [
    'збільшуються',
    'почали випадати волоски з її поверхні',
    'змінюють колір, кровоточать, змінюють консистенцію',
    'зменшуються, змінюють форму, його контур став розмитим',
    'приєдналося запалення, свербіж, на його поверхні утворилися тріщини',
  ];

  const preventiveMeasures = [
    'Уникайте перебування на сонці',
    'Своєчасно звертайтеся до лікаря',
    'Проходьте регулярну діагностику за допомогою ДЕРМАТОСКОПА',
  ];

  const galleryImages = [
    '/placeholder.svg?height=300&width=300',
    '/placeholder.svg?height=300&width=300',
    '/placeholder.svg?height=300&width=300',
    '/placeholder.svg?height=300&width=300',
  ];

  return (
    <div className={styles.tumorIndications} style={{ backgroundColor }}>
      <div className={styles.container}>
        <h1 className={styles.mainTitle}>Покази до оперативного лікування</h1>

        <p className={styles.fullWidthText}>
          При наявності будь яких утворень на шкірі або в підшкірні клітковині
          потрібно звернутися на консультацію до фахового лікаря для вирішення
          питання про подальші дії. Тільки фахівець може надати відповідь, на
          основі ретельного обстеження, що робити з утворенням.
        </p>

        <div className={styles.splitSection}>
          <div className={styles.textContent}>
            <h3>
              HАСТОРОЖЕННЯ які показують що потрібно негайно звернутися до
              лікаря, якщо новоутворення:
            </h3>
            <ul>
              {symptoms.map((symptom, index) => (
                <li key={index}>
                  <ChevronRight size={20} />
                  {symptom}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.galleryContent}>
            <PrimmaGallery images={galleryImages} galleryId="tumor-gallery-1" />
          </div>
        </div>

        <h2 className={styles.centerTitle}>ПРОФІЛАКТИЧНІ ЗАХОДИ</h2>

        <div className={styles.splitSection}>
          <div className={styles.textContent}>
            <ul>
              {preventiveMeasures.map((measure, index) => (
                <li key={index}>
                  <ChevronRight size={20} />
                  {measure}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.galleryContent}>
            <PrimmaGallery images={galleryImages} galleryId="tumor-gallery-2" />
          </div>
        </div>

        <div className={styles.fullWidthText}>
          <p>
            Цифрова дерматоскопія – дозволяє розглядати утворення шкіри під
            значним збільшенням, таким чином, що стають видно пігментація і
            будова епідермісу, межа дерми і епідермісу, сосочковий шар і
            виводить зображення на монітор компютера, що дає можливість уточнити
            діагноз
          </p>
        </div>
      </div>
    </div>
  );
};

export default TumorIndications;
