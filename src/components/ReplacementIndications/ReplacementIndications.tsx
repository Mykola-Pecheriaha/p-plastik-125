'use client';

import type React from 'react';
import { ArrowRight } from 'lucide-react';
import PrimmaGallery from '../PrimmaGallery/PrimmaGallery';
import styles from './ReplacementIndications.module.css';

interface ReplacementIndicationsProps {
  backgroundColor?: string;
}

const ReplacementIndications: React.FC<ReplacementIndicationsProps> = ({
  backgroundColor = '#f5f5f5',
}) => {
  const indications = [
    {
      title: 'За естетичними показами:',
      items: [
        'незадоволеність розміром, формою, контурами грудей. Наприклад, збільшивши груди на 1-2 розміри, жінка хоче ще більшого розміру. Трапляються й протилежні ситуації, коли необхідна заміна грудних імплантів на менші;',
        'неправильно підібрані імпланти при первинній мамопластиці;',
        'видима асиметрія грудей;',
        'зміна форми грудей після різкого схуднення або різкого набору ваги, вагітності, грудного вигодовування, а також внаслідок вікових змін.',
      ],
    },
    {
      title: 'Медичні показання:',
      items: [
        'розрив, порушення цілісності силіконового ендопротезу;',
        'формування капсулярної контрактури. Поява фіброзної оболонки (капсули), яка стає щільною, промацується та викликає хворобливі відчуття;',
        'деформація та асиметрія грудей внаслідок усунення імпланту;',
        'явне контурування ендопротезу на поверхні шкіри.',
      ],
    },
  ];

  const galleryImages = [
    '/images/replacement-indications/Replacement.jpg',
    '/images/replacement-indications/Replacement5.jpg',
    '/images/replacement-indications/Replacement2.jpg',
    '/images/replacement-indications/gallery4.jpg',
    '/images/replacement-indications/gallery5.jpg',
    '/images/replacement-indications/gallery6.jpg',
  ];

  return (
    <div className={styles.wrapper} style={{ backgroundColor }}>
      <div className={styles.container}>
        <h2 className={styles.title}>Показання для заміни імплантів грудей</h2>
        <p className={styles.subtitle}>
          Реендопротезування проводиться як за естетичними показаннями, так і за
          медичними:
        </p>

        <div className={styles.content}>
          <div className={styles.textContent}>
            {indications.map((section, index) => (
              <div key={index} className={styles.section}>
                <h3 className={styles.sectionTitle}>{section.title}</h3>
                <ul className={styles.indicationsList}>
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className={styles.indicationItem}>
                      <ArrowRight size={16} className={styles.arrow} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className={styles.galleryContent}>
            <PrimmaGallery
              images={galleryImages}
              galleryId="replacement-indications-gallery"
            />
          </div>
        </div>

        <p className={styles.conclusion}>
          Всі особливості та нюанси майбутнього хірургічного втручання
          обговорюються на індивідуальній консультації з пластичним хірургом
          Світланою Работенком. Фахівець більше 15 років займається питаннями
          естетики, допомагаючи жінкам набути гармонійних форм, а також
          вирішувати проблеми, що виникли.
        </p>
      </div>
    </div>
  );
};

export default ReplacementIndications;
