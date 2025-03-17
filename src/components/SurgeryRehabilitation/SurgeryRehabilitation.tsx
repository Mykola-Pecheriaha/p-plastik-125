'use client';

import { ChevronRight } from 'lucide-react';
import PrimmaGallery from '../PrimmaGallery/PrimmaGallery';
import styles from './SurgeryRehabilitation.module.css';
import type React from 'react';

interface SurgeryRehabilitationProps {
  backgroundColor?: string;
}

const SurgeryRehabilitation: React.FC<SurgeryRehabilitationProps> = ({
  backgroundColor = '#f0f4f8',
}) => {
  // Окремий масив зображень для першої галереї
  const rehabGallery1Images = [
    '/images/rehabilitation/rehab1.jpg',
    '/images/rehabilitation/rehab2.jpg',
    '/images/rehabilitation/rehab3.jpg',
    '/images/rehabilitation/rehab4.jpg',
  ];

  // Окремий масив зображень для другої галереї
  const rehabGallery2Images = [
    '/images/rehabilitation/recommendations1.jpg',
    '/images/rehabilitation/recommendations2.jpg',
    '/images/rehabilitation/recommendations3.jpg',
    '/images/rehabilitation/recommendations4.jpg',
  ];

  // Функція для створення плейсхолдерів, якщо зображення ще не доступні
  const getPlaceholders = (count = 4) => {
    return Array(count)
      .fill(0)
      .map(
        (_, i) => `/placeholder.svg?height=300&width=300&text=Image${i + 1}`
      );
  };

  const recommendations = [
    'слідкуйте за гігієною',
    'використовуйте ліки ЛИШЕ за рекомендацією лікаря',
    'утримайтеся від фізичних навантажень',
    "за потреби носіть компресійні пов'язки",
    'уникайте надмірного сонячного випромінювання',
    'харчуйтесь здоровою їжею',
    'уникайте стресів',
    "будьте на зв'язку з лікарем та дотримуйтесь його рекомендацій",
  ];

  return (
    <div className={styles.surgeryRehabilitation} style={{ backgroundColor }}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>
          Реабілітація після пластичної операції
        </h2>

        <div className={styles.splitSection}>
          <div className={styles.textContent}>
            <p>
              Реабілітація – це важливий етап у відновленні пацієнта після
              операції. Цей процес включає в себе комплекс заходів і
              рекомендацій лікаря для швидкого та безпечного відновлення функцій
              тіла. Можливий певний дискомфорт, тому треба набратись терпіння,
              щоб потім вражати результатом.
            </p>
            <p>
              Завдання реабілітації – допомогти пацієнту якнайшвидше повернутися
              до звичного способу життя та щоденних справ.
            </p>
          </div>
          <div className={styles.galleryContent}>
            <PrimmaGallery
              images={
                rehabGallery1Images.length
                  ? rehabGallery1Images
                  : getPlaceholders()
              }
              galleryId="rehab-gallery-1"
            />
          </div>
        </div>

        <h2 className={styles.sectionTitle}>
          Загальні рекомендації після пластичної операції
        </h2>

        <p className={styles.fullWidthText}>
          Після пластичної операції важливо дотримуватися загальних рекомендацій
          для швидкого та успішного відновлення. Ці кроки спрямовані на
          забезпечення максимального комфорту, мінімізацію ризику ускладнень та
          досягнення оптимальних результатів. Рекомендації прості та зрозумілі:
        </p>

        <div className={styles.splitSection}>
          <div className={styles.textContent}>
            <ul className={styles.arrowList}>
              {recommendations.map((recommendation, index) => (
                <li key={index}>
                  <ChevronRight size={20} />
                  <span>{recommendation}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.galleryContent}>
            <PrimmaGallery
              images={
                rehabGallery2Images.length
                  ? rehabGallery2Images
                  : getPlaceholders()
              }
              galleryId="rehab-gallery-2"
            />
          </div>
        </div>

        <p className={styles.fullWidthText}>
          Якщо у вас виникають будь-які питання, звертайтеся до лікаря. Він
          зможе надати інформацію та допомогти в будь-який час. Дотримуйтесь
          усіх рекомендації свого лікаря, щоб якомога швидше побачити досконалий
          результат.
        </p>
      </div>
    </div>
  );
};

export default SurgeryRehabilitation;
