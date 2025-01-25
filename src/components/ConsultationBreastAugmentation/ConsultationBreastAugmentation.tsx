'use client';

import type React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import { ChevronDown, ChevronUp } from 'lucide-react';
import styles from './ConsultationBreastAugmentation.module.css';
import ConsultationButton from '../../components/ConsultationButton/ConsultationButton';

interface Section {
  title: string;
  content: string;
}

const sections: Section[] = [
  {
    title: 'Перша зустріч з пацієнтом',
    content:
      'На першій консультації ми обговорюємо ваші побажання та очікування від операції. Я уважно вислуховую ваші думки, проводжу огляд та вимірювання, щоб визначити оптимальний розмір та форму імплантів. Ми також обговорюємо можливі ризики та процес реабілітації.',
  },
  {
    title: 'Підготовка до операції',
    content:
      'Перед операцією ви отримаєте детальні інструкції щодо підготовки. Це включає рекомендації щодо харчування, прийому медикаментів та інших важливих аспектів. Ми також проведемо необхідні аналізи та обстеження, щоб переконатися, що ви готові до операції.',
  },
  {
    title: 'Процес операції',
    content:
      'Операція зі збільшення грудей зазвичай триває 1-2 години. Вона проводиться під загальним наркозом. Я використовую найсучасніші техніки та імпланти високої якості, щоб забезпечити найкращий результат та мінімізувати ризики.',
  },
  {
    title: 'Післяопераційний період',
    content:
      'Після операції ви отримаєте детальні інструкції щодо догляду за грудьми та загального режиму. Ми регулярно проводимо контрольні огляди, щоб переконатися, що ваше відновлення проходить добре. Повне відновлення зазвичай займає кілька тижнів, але ви зможете повернутися до більшості повсякденних активностей вже через 1-2 тижні.',
  },
];

const images = [
  '/images/consultati/consultati1-removebg-preview.png',
  '/images/consultati/consultati2-removebg-preview.png',
  '/images/consultati/consultati3-removebg-preview.png',
];

const ConsultationBreastAugmentation: React.FC = () => {
  const [openSections, setOpenSections] = useState<boolean[]>(
    new Array(sections.length).fill(false)
  );

  const toggleSection = (index: number) => {
    const newOpenSections = [...openSections];
    newOpenSections[index] = !newOpenSections[index];
    setOpenSections(newOpenSections);
  };

  return (
    <div className={styles.consultationBreastAugmentation}>
      <div className={styles.textSection}>
        <h2 className={styles.mainTitle}>
          Консультація щодо збільшення грудей
        </h2>
        {sections.map((section, index) => (
          <div key={index} className={styles.section}>
            <h3 className={styles.sectionTitle}>{section.title}</h3>
            <p className={styles.sectionContent}>
              {openSections[index]
                ? section.content
                : `${section.content.slice(0, 100)}...`}
            </p>
            <button
              className={styles.toggleButton}
              onClick={() => toggleSection(index)}
            >
              {openSections[index] ? (
                <>
                  <ChevronUp size={20} />
                  <span>Згорнути</span>
                </>
              ) : (
                <>
                  <ChevronDown size={20} />
                  <span>Подивитися все</span>
                </>
              )}
            </button>
          </div>
        ))}
      </div>
      <div className={styles.imageSection}>
        {images.map((image, index) => (
          <div key={index} className={styles.imageWrapper}>
            <Image
              src={image || '/placeholder.svg'}
              alt={`Консультація з пластичним хірургом ${index + 1}`}
              width={400}
              height={300}
              layout="responsive"
              objectFit="cover"
            />
          </div>
        ))}
        <ConsultationButton />
      </div>
    </div>
  );
};

export default ConsultationBreastAugmentation;
