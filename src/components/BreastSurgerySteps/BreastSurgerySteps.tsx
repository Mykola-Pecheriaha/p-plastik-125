'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import PrimmaGallery from '../PrimmaGallery/PrimmaGallery';
import styles from './BreastSurgerySteps.module.css';
import type React from 'react';

interface BreastSurgeryStepsProps {
  backgroundColor?: string;
  collapsedColor?: string;
  expandedColor?: string;
  hoverColor?: string;
}

interface StepBlock {
  id: string;
  title: string;
  content: string;
}

const BreastSurgerySteps: React.FC<BreastSurgeryStepsProps> = ({
  backgroundColor = '#f0f4f8',
  collapsedColor = '#ffffff',
  expandedColor = '#f8f9fa',
  hoverColor = '#f3f4f6',
}) => {
  const [openBlockId, setOpenBlockId] = useState<string | null>(null);

  const steps: StepBlock[] = [
    {
      id: 'preparation',
      title: 'блок №1 - підготовка ло операції',
      content:
        'Попередня підготовка. На цьому етапі пацієнтка проходить обстеження та здає аналізи, консультується у лікаря-мамолога.',
    },
    {
      id: 'surgery',
      title: 'блок №2 - Операція',
      content: `Безпосереднє проведення корекції форм: встановлення імплантатів, підтяжка або зменшення молочної залози. Наприкінці операції накладаються нитки, що саморозсмоктуються, а потім проводиться проклеювання шва.

Мамопластика за часом займає від 50 хвилин до 2,5 години. Це залежить від вибраного типу та об'єму втручання. Операція проводиться під загальним наркозом. У клініці Vidnova застосовується інгаляційний наркоз. Це найбільш делікатний та безпечний наркоз, який використовується у всіх європейських клініках. Він забезпечує планомірне занурення у медикаментозний сон та комфортний вихід без галюцинацій.`,
    },
    {
      id: 'rehabilitation',
      title: 'блок №3 - реабілітація',
      content: `У стаціонарі пацієнтка проводить 1 добу після операції під наглядом пластичного хірурга та медичного персоналу. Наступного дня вона їде додому із рекомендаціями. Завдяки використанню ниток, що саморозсмоктуються, шви знімати не потрібно!

Протягом 14-ти днів сходять можливі синці та набряки. На той час пацієнтки можуть виходити працювати.

Для стабілізації результату пацієнтка має носити компресійну білизну впродовж 4-6 тижнів.

Результат оцінюється через місяць після операції. Відвідувати басейни, сауни, займатися активним спортом рекомендується через 2 місяці.`,
    },
  ];

  const galleryImages = [
    '/placeholder.svg?height=300&width=300',
    '/placeholder.svg?height=300&width=300',
    '/placeholder.svg?height=300&width=300',
    '/placeholder.svg?height=300&width=300',
  ];

  const toggleBlock = (blockId: string) => {
    setOpenBlockId(openBlockId === blockId ? null : blockId);
  };

  return (
    <div className={styles.breastSurgerySteps} style={{ backgroundColor }}>
      <div className={styles.container}>
        <p className={styles.mainTitle}>
          Етапи проведення пластики грудей (мамопластики)
        </p>

        <h4 className={styles.subtitle}>
          Хід мамопластики передбачає 3 основні етапи:
        </h4>

        <div className={styles.stepsContainer}>
          {steps.map((step) => {
            const isOpen = openBlockId === step.id;

            return (
              <div
                key={step.id}
                className={styles.stepBlock}
                style={
                  {
                    backgroundColor: isOpen ? expandedColor : collapsedColor,
                    '--hover-color': hoverColor,
                  } as React.CSSProperties
                }
              >
                <button
                  className={`${styles.stepButton} ${isOpen ? styles.expanded : ''}`}
                  onClick={() => toggleBlock(step.id)}
                  aria-expanded={isOpen}
                >
                  <h4 className={styles.stepTitle}>{step.title}</h4>
                  <ChevronDown
                    className={`${styles.arrow} ${isOpen ? styles.rotated : ''}`}
                  />
                </button>

                {isOpen && (
                  <div className={styles.stepContent}>
                    <div className={styles.textContent}>
                      {step.content.split('\n\n').map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                      ))}
                    </div>
                    <div className={styles.galleryContent}>
                      <PrimmaGallery
                        images={galleryImages}
                        galleryId={`surgery-step-${step.id}`}
                      />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BreastSurgerySteps;
