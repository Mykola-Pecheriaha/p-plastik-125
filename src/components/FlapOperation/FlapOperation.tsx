'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import GalleryFlapOperation from '../GalleryFlapOperation/GalleryFlapOperation';
import styles from './FlapOperation.module.css';
import type React from 'react';
import type { ImageType } from '../GalleryFlapOperation/GalleryFlapOperation';

interface FlapOperationProps {
  backgroundColor?: string;
}

interface SectionType {
  id: string;
  title: string;
  content: string;
  images: ImageType[];
}

const FlapOperation: React.FC<FlapOperationProps> = ({
  backgroundColor = '#f0f4f8',
}) => {
  const [expandedSections, setExpandedSections] = useState<string[]>([]);

  const sections: SectionType[] = [
    {
      id: 'consultation',
      title: 'Пластика вух: консультація',
      content:
        'Перший крок на шляху вирішення проблеми – консультація у пластичного хірурга Миколи Печеряги у Чернівцях. Фахівець приймає пацієнтів також   з  інших міст України. У клініці  на індивідуальній зустрічі пацієнт та пластичний хірург обговорюють побажання щодо корекції вушної раковини',
      images: [
        {
          src: '/images/flapConsultation/ottoplastic10.jpg',
          width: 400,
          height: 280,
        },
        {
          src: '/images/flapConsultation/ottoplastic11.jpg',
          width: 400,
          height: 340,
        },
        {
          src: '/images/flapConsultation/ottoplastic12.jpg',
          width: 400,
          height: 450,
        },
        {
          src: '/images/flapConsultation/ottoplastic13.jpg',
          width: 400,
          height: 325,
        },
      ],
    },
    {
      id: 'preparation',
      title: 'Отопластика (пластика вух): підготовка до операції',
      content: `Для зручності пацієнтів та економії їх часу у  клініці передбачена «хірургія одного дня» – консультація, обстеження та операція проводяться за 1 день! За таким форматом також проходять: блефаропластика (пластика повік), ліпосакція.

      Отопластика не потребує ретельної підготовки. Перед оперативним втручанням рекомендується припинити прийом гормональних та аспірин-вмісних препаратів, а також повідомити спеціаліста про прийом усіх препаратів. Варто відмовитись від тютюнопаління або зменшити кількість сигарет. Виключити алкоголь.`,
      images: [
        {
          src: '/images/flapConsultation/ottoplastic15.jpg',
          width: 400,
          height: 258,
        },

        {
          src: '/images/flapConsultation/ottoplastic17.jpg',
          width: 450,
          height: 550,
        },

        {
          src: '/images/flapConsultation/ottoplastic18.jpg',
          width: 450,
          height: 585,
        },

        {
          src: '/images/flapConsultation/ottoplastic19.jpg',
          width: 400,
          height: 550,
        },
      ],
    },

    {
      id: 'rehabilitation',
      title: 'Реабілітація після отопластики',
      content: `Перші три дні можуть супроводжуватися дискомфортними відчуттями – набряклістю, онімінням, появою синців. Все це легко усувається знеболюючими і з часом сходить нанівець. У післяопераційний період для стабілізації результату та захисту оперованого вуха необхідно носити спеціальну фіксуючу пов'язку протягом 14 днів постійно. А в наступні 14 днів пов'язка накладається лише на ніч. Її можна замінити на цупку бандану.

      Шви після корекції  знімаються не раніше 10 днів після операці. Використовується нитка монофіламентна, на яку не виникає реакція тканини. Нитки що розсмоктуються потрібно використовувати глибше від поверхні шкіри,так як процес розсмоктування в окремих ділянках тіла людини може приводити 

      Людині не треба відмовлятися від соціального життя. Одне з найчастіших питань про реабілітаційний період – чи можна мити голову? Так, це не протипоказано. Пацієнт активний і веде звичний спосіб життя. Контрольний огляд за 1 місяць.

      Отопластика не становить будь-якої небезпеки для здоров'я та життя пацієнта, а також не впливає на функцію слуху.`,
      images: [
        {
          src: '/images/flapConsultation/ottoplastic20.jpg',
          width: 400,
          height: 585,
        },
        {
          src: '/images/flapConsultation/ottoplastic21.jpg',
          width: 400,
          height: 655,
        },
        {
          src: '/images/flapConsultation/ottoplastic22.jpg',
          width: 400,
          height: 530,
        },
        {
          src: '/images/flapConsultation/ottoplastic23.jpg',
          width: 400,
          height: 470,
        },
      ],
    },
  ];

  const toggleSection = (sectionId: string) => {
    setExpandedSections((prev) =>
      prev.includes(sectionId)
        ? prev.filter((id) => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const formatContent = (content: string, isExpanded: boolean) => {
    if (!isExpanded) {
      return content.slice(0, 100) + '...';
    }
    return content
      .split('\n\n')
      .map((paragraph, index) => <p key={index}>{paragraph}</p>);
  };

  return (
    <div className={styles.flapOperation} style={{ backgroundColor }}>
      <div className={styles.container}>
        <h1 className={styles.mainTitle}>Пластика вух: консультація</h1>

        {sections.map((section) => {
          const isExpanded = expandedSections.includes(section.id);

          return (
            <div key={section.id} className={styles.section}>
              <h2 className={styles.sectionTitle}>{section.title}</h2>

              <div className={styles.sectionContent}>
                <div className={styles.textContent}>
                  <div className={styles.text}>
                    {formatContent(section.content, isExpanded)}
                  </div>
                  <button
                    onClick={() => toggleSection(section.id)}
                    className={styles.toggleButton}
                    aria-expanded={isExpanded}
                  >
                    {isExpanded ? 'Показати менше' : 'Показати більше'}
                    <ChevronDown
                      className={`${styles.arrow} ${isExpanded ? styles.rotated : ''}`}
                    />
                  </button>
                </div>
                <div className={styles.galleryContent}>
                  <GalleryFlapOperation
                    images={section.images}
                    galleryId={`flap-operation-${section.id}`}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FlapOperation;
