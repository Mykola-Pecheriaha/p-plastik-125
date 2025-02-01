'use client';

import type React from 'react';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import PrimmaGallery from '../PrimmaGallery/PrimmaGallery';
import styles from './AbdominoplastyIndications.module.css';

interface Indication {
  title: string;
  content: string[];
  images: string[];
}

const indications: Indication[] = [
  {
    title: 'Відвислий шкірно-жировий «фартух»',
    content: [
      "З'являється внаслідок зниження ваги (більше 10 кг)",
      'Виникає при вікових чи гормональних змінах в організмі',
      "Часто з'являється після вагітності та пологів",
      "Операція жінкам найчастіше проводиться після вагітності та пологів, коли сім'я сформована остаточно",
      'Є ймовірність, що отриманий результат після повторних пологів буде втрачено',
      'Залежить від індивідуальних особливостей організму, якості шкіри та схильності до набору ваги',
    ],
    images: [
      '/images/AbdominoplastyIndications/abdomino125-10.JPG',
      '/images/AbdominoplastyIndications/abdomino125-2.jpg',
      '/images/AbdominoplastyIndications/abdomino125-11.jpg',
    ],
  },
  {
    title: "Зменшення еластичності м'язів живота",
    content: [
      "Птоз, складки, в'ялість м'язів живота",
      "Розбіжність м'язів (діастаз)",
      'Пластика живота після пологів успішно поєднується з збільшенням і/або підтяжкою грудей',
      'Поєднані операції показані молодим мамам, які хочуть відновити допологові форми',
      'Також підходить дівчатам після різкого схуднення',
    ],
    images: [
      '/images/AbdominoplastyIndications/abdomino125-4.JPG',
      '/images/AbdominoplastyIndications/abdomino125-15.jpg',
      '/images/AbdominoplastyIndications/abdomino125-3.JPG',
    ],
  },
  {
    title: 'Неестетичний зовнішній вигляд тіла',
    content: [
      'Наявність післяопераційних рубців (наприклад, втягнутий рубець після кесаревого розтину)',
      'Пластика живота затребувана й серед чоловіків',
      'Допомагає надати тілу кращу підтягнутість після серйозної втрати ваги',
      'Особливо актуально після фізичних навантажень',
    ],
    images: [
      '/images/AbdominoplastyIndications/abdomino125-16.jpg',
      '/images/AbdominoplastyIndications/abdomino125-15.jpg',
      '/images/AbdominoplastyIndications/abdomino125-18.jpg',
    ],
  },
  {
    title: "Розбіжність прямих м'язів",
    content: [
      'Сильне розтягування шкіри',
      'Грижа білої лінії живота',
      'Важливо враховувати стабільну вагу пацієнта',
      'При схудненні після операції може виникнути надлишок шкіри',
    ],
    images: [
      '/images/AbdominoplastyIndications/abdomino125-19.jpg',
      '/images/AbdominoplastyIndications/abdomino125-20-removebg-preview (1).png',
      '/images/AbdominoplastyIndications/abdomino125-22-removebg-preview (1).png',
    ],
  },
];

interface AbdominoplastyIndicationsProps {
  backgroundColor?: string;
}

const AbdominoplastyIndications: React.FC<AbdominoplastyIndicationsProps> = ({
  backgroundColor = '#f0f0f0',
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndication = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.fullWidthBackground} style={{ backgroundColor }}>
      <div className={styles.container}>
        <h2 className={styles.mainTitle}>
          Абдомінопластика: показання до операції
        </h2>
        {indications.map((indication, index) => (
          <div key={index} className={styles.indicationContainer}>
            <div
              className={`${styles.indicationTitle} ${openIndex === index ? styles.open : ''}`}
              onClick={() => toggleIndication(index)}
            >
              {indication.title}
              {openIndex === index ? <ChevronUp /> : <ChevronDown />}
            </div>
            {openIndex === index && (
              <div className={styles.indicationContent}>
                <div className={styles.textContent}>
                  <ul>
                    {indication.content.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className={styles.galleryContent}>
                  <PrimmaGallery
                    images={indication.images}
                    galleryId={`indication-${index}`}
                  />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AbdominoplastyIndications;
