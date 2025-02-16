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
  const galleryImages = [
    '/placeholder.svg?height=300&width=300',
    '/placeholder.svg?height=300&width=300',
    '/placeholder.svg?height=300&width=300',
    '/placeholder.svg?height=300&width=300',
  ];

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
            <PrimmaGallery images={galleryImages} galleryId="rehab-gallery-1" />
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
            <PrimmaGallery images={galleryImages} galleryId="rehab-gallery-2" />
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
