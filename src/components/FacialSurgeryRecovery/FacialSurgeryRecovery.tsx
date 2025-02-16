'use client';

import { ChevronRight } from 'lucide-react';
import PrimmaGallery from '../PrimmaGallery/PrimmaGallery';
import styles from './FacialSurgeryRecovery.module.css';
import type React from 'react';

interface FacialSurgeryRecoveryProps {
  backgroundColor?: string;
}

const FacialSurgeryRecovery: React.FC<FacialSurgeryRecoveryProps> = ({
  backgroundColor = '#f0f4f8',
}) => {
  const galleryImages = [
    '/placeholder.svg?height=300&width=300',
    '/placeholder.svg?height=300&width=300',
    '/placeholder.svg?height=300&width=300',
    '/placeholder.svg?height=300&width=300',
  ];

  const recoverySteps = [
    'У перші години та дні після оперативного втручання може спостерігатись набряклість та почервоніння.',
    'На час періоду реабілітації може бути обмежено фізичні навантаження та інтенсивні тренування для запобігання травмам та сприяння швидшому загоєнню.',
    'Після пластичної операції рекомендується утримуватися від прямого впливу сонця на операційну область. Може бути рекомендовано використання кремів із високим рівнем SPF.',
  ];

  return (
    <div className={styles.facialSurgeryRecovery} style={{ backgroundColor }}>
      <div className={styles.container}>
        <h2 className={styles.mainTitle}>
          Реабілітація після пластики обличчя
        </h2>

        <p className={styles.fullWidthText}>
          Процес реабілітації після пластики обличчя може відрізнятись. Тип
          хірургічного втручання, обсяг роботи, а також індивідуальні
          особливості пацієнта впливають на час відновлення. Основні етапи
          реабілітації можуть включати:
        </p>

        <div className={styles.contentSection}>
          <div className={styles.textContent}>
            <h4 className={styles.subTitle}>Етапи реабілітації</h4>
            <ul className={styles.recoveryList}>
              {recoverySteps.map((step, index) => (
                <li key={index}>
                  <ChevronRight className={styles.icon} />
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.galleryContent}>
            <PrimmaGallery
              images={galleryImages}
              galleryId="facial-surgery-recovery-gallery"
            />
          </div>
        </div>

        <p className={styles.fullWidthText}>
          Реабілітація є важливим етапом в пластичній хірургії, спрямованим на
          повне та якісне відновлення пацієнта. Особливість програми
          реабілітації може варіюватися в залежно від типу операції та
          індивідуальних особливостей пацієнта.
        </p>
      </div>
    </div>
  );
};

export default FacialSurgeryRecovery;
