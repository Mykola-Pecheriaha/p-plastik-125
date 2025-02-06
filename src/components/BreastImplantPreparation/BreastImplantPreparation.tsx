'use client';

import type React from 'react';
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import PrimmaGallery from '../PrimmaGallery/PrimmaGallery';
import styles from './BreastImplantPreparation.module.css';

interface BreastImplantPreparationProps {
  backgroundColor?: string;
}

const BreastImplantPreparation: React.FC<BreastImplantPreparationProps> = ({
  backgroundColor = '#f5f5f5',
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const stages = [
    '1 етап – вилучення раніше встановлених імплантів. Пластичний хірург робить розріз по лінії рубця, що залишився після попередньої мамопластики. Через нього відбувається видалення;',
    '2 етап – видалення контрактурної капсули в повному обсязі або частково (капсулотомія);',
    '3 етап – встановлення нових. Найчастіше нові ендопротези встановлюються в раніше сформовану кишеню.',
  ];

  const galleryImages1 = [
    '/images/breast-implant-preparation/Replacement.jpg',
    '/images/breast-implant-preparation/Replacement2.jpg',
    '/images/breast-implant-preparation/Replacement4.jpg',
  ];

  const galleryImages2 = [
    '/images/breast-implant-preparation/Replacement4.jpg',
    '/images/breast-implant-preparation/Replacement2.jpg',
    '/images/breast-implant-preparation/Replacement.jpg',
  ];

  const rehabilitationText = `Наступного дня після хірургічного втручання дівчина їде додому, отримавши рекомендації.

Перші кілька днів спостерігаються слабкість, набряклість, відчуття тиску на грудну клітку, з'являються синці. Усі ці відчуття швидко проходять за допомогою прийому знеболювальних.

Шви після хірургічного втручання не знімаються. Ми працюємо із сучасними нитками, які розсмоктуються самі. Також використовуємо спеціальний медичний клей для шкіри.

Необхідно носити компресійну білизну 2 тижні цілодобово, а потім ще 2 тижні вдягати на ніч. Рекомендується відмовитися від занять спортом, відвідувань саун та лазень на 2 місяці.

Повний реабілітаційний період 2-3 тижні. Результат оцінюється через 1 місяць.`;

  return (
    <div className={styles.wrapper} style={{ backgroundColor }}>
      <div className={styles.container}>
        <h2 className={styles.title}>Проведення операції</h2>
        <p className={styles.subtitle}>
          Реендопротезування молочної залози можна розділити на 3 етапи:
        </p>

        <div className={styles.content}>
          <div className={styles.textContent}>
            <ul className={styles.stagesList}>
              {stages.map((stage, index) => (
                <li key={index} className={styles.stageItem}>
                  <ArrowRight size={16} className={styles.arrow} />
                  {stage}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.galleryContent}>
            <PrimmaGallery
              images={galleryImages1}
              galleryId="breast-implant-preparation-gallery-1"
            />
          </div>
        </div>

        <h2 className={styles.title}>
          Реабілітаційний період після заміни імплантів молочних залоз
        </h2>

        <div className={styles.content}>
          <div className={styles.textContent}>
            <p className={styles.rehabilitationText}>
              {isExpanded
                ? rehabilitationText
                : `${rehabilitationText.slice(0, 100)}...`}
            </p>
            <button
              className={styles.expandButton}
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? 'Показати менше' : 'Показати більше'}
            </button>
          </div>
          <div className={styles.galleryContent}>
            <PrimmaGallery
              images={galleryImages2}
              galleryId="breast-implant-preparation-gallery-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreastImplantPreparation;
