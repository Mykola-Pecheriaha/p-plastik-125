'use client';

import { ChevronRight } from 'lucide-react';
import PrimmaGallery from '../PrimmaGallery/PrimmaGallery';
import styles from './BreastImplantRemovalIndications.module.css';
import type React from 'react';

interface BreastImplantRemovalIndicationsProps {
  backgroundColor?: string;
}

const BreastImplantRemovalIndications: React.FC<
  BreastImplantRemovalIndicationsProps
> = ({ backgroundColor = '#f0f4f8' }) => {
  const indications = [
    "незадоволеність зовнішнім виглядом грудей після першої операції. До цього наводять об'єктивні причини. Коли неправильно підібрані розмір та форма ендопротезу, що не відповідає естетичним перевагам пацієнтки",
    'при обертанні або зміщенні імплантату, зміні форми погруддя, викликані різкими коливаннями ваги, вагітністю, грудним вигодовуванням',
    'для усунення ускладнень після первинної корекції. Наприклад, у разі розвитку капсулярної контрактури – розростання фіброзної тканини навколо ендопротезу. Це індивідуальна реакція організму на чужорідний матеріал, від якого не застрахована жодна пацієнтка. Пластичний хірург прибирає капсулу і найчастіше проводить повторну установку',
    "при пошкодженні імплантату. Сучасні ендопротези наповнені висококогезивним гелем, що має «пам'ять». При порушенні цілісності оболонки гель не випливає, але імплантат потребує заміни",
    'при виявленні анапластичної крупноклітинної лімфоми (ALCL)',
  ];

  const galleryImages = [
    '/placeholder.svg?height=300&width=300',
    '/placeholder.svg?height=300&width=300',
    '/placeholder.svg?height=300&width=300',
    '/placeholder.svg?height=300&width=300',
  ];

  return (
    <div
      className={styles.breastImplantRemovalIndications}
      style={{ backgroundColor }}
    >
      <div className={styles.container}>
        <h2 className={styles.mainTitle}>
          Показання для видалення імплантів молочних залоз
        </h2>

        <p className={styles.subtitle}>
          Видалити грудні імпланти рекомендовано у таких випадках:
        </p>

        <div className={styles.contentSection}>
          <div className={styles.textContent}>
            <ul>
              {indications.map((indication, index) => (
                <li key={index}>
                  <ChevronRight size={20} />
                  {indication}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.galleryContent}>
            <PrimmaGallery
              images={galleryImages}
              galleryId="implant-removal-gallery"
            />
          </div>
        </div>

        <div className={styles.bottomText}>
          <p>
            До речі, один із міфів – необхідність видалення імплантатів молочних
            залоз до певного часу носіння, наприклад, через 15-20 років після
            встановлення. Насправді якщо дівчата з ними комфортно, то заміна не
            потрібна
          </p>
          <p>
            Крок до вирішення проблем та змін – консультація у пластичного
            хірурга Миколи Печеряги у нашій клініці в Чернівцях.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BreastImplantRemovalIndications;
