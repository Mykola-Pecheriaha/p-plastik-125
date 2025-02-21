'use client';

import { ChevronRight } from 'lucide-react';
import PrimmaGallery from '../PrimmaGallery/PrimmaGallery';
import styles from './OperatingRoomEquipment.module.css';
import type React from 'react';

interface OperatingRoomEquipmentProps {
  backgroundColor?: string;
}

const OperatingRoomEquipment: React.FC<OperatingRoomEquipmentProps> = ({
  backgroundColor = '#f0f4f8',
}) => {
  const equipmentList = [
    {
      id: 'anesthesia',
      content:
        'Сертифікований наркозно-дихальний апарат  експертного класу Leon plus з можливістю вентиляції з повторним використанням повітря, що видихається на рівні реанімаційного апарату ШВЛ. Це золотий стандарт апаратури для анестезії, який визнаний одним із найкращих у світі. Наркоз комфортний: пацієнт швидко занурюється в медикаментозний сон і легко виходить із нього (читати докладніше про наркоз – посилання);',
    },
    {
      id: 'sterilizer',
      content:
        'Бактерицидний опромінювач BactoSfera. Вбиває (інактивує) віруси, бактерії, плісняву, грибки, дріжджі, алергени та інші інфекційні мікроорганізми, у т.ч. віруси грипу всіх типів (гриппатипи A, B, C), віруси, що викликають ГРЗ та ГРВІ, коронавірус SARS-CoV-2 (2019-nCoV), що викликає захворювання COVID-19, штам коронавірусу «Омікрон»;',
    },
    {
      id: 'table',
      content:
        'Ергономічний операційний стіл з налаштуванням висоти та нахилів дозволяє підлаштувати пацієнта для удобства хірургі виконувати чи другу операцію. Також в той же час полехшує пацієнту знаходитись в одному і томуже положенні. Кроме того не порушує фізіологічні процеси тіла (кровопостачання і шнервацію кінцівок ). Забезпечує хворому додержання температури тіла. Сучасні операційні столи багатофункціональні і мають безліч додаткових приспособлень для укладки хворого.;',
    },
    {
      id: 'ventilation',
      content:
        'Система вентиляції, яка забезпечує в операційних та післяопераційних залах високий клас чистоти. В нашому операційному блоці працює нещодавно змонтована нова система вінтіляції, яка правцює в різних режимах і система фільтрів відповідає всім гостам для потреби фільтрації повітря в операційній.;',
    },
    {
      id: 'lamp',
      content:
        'Операційна галогенова лампа Maquet Hanaulux. Забезпечує чітку видимість операційного поля, без темних зон та спотворень кольору.',
    },
  ];

  const anesthesiaImages = [
    '/images/Operative/Leon2.jpg',
    '/images/Operative/oprester19.jpg',
    '/images/Operative/operromm14.jpg',
  ];

  const sterilizerImages = [
    '/images/Operative/oprerster25.jpg',
    '/images/Operative/oprerster27.jpg',
  ];

  const tableImages = [
    '/images/Operative/oprerster29.jpg',
    '/images/Operative/oprerster28.jpg',
  ];

  const ventilationImages = [
    '/images/Operative/oprerster30.jpg',
    '/images/Operative/oprerster31.jpg',
  ];

  const lampImages = [
    '/images/Operative/lampa 3.jpg',
    '/images/Operative/lampa 2.jpg',
  ];

  return (
    <div className={styles.operatingRoomEquipment} style={{ backgroundColor }}>
      <div className={styles.container}>
        {equipmentList.map((item) => (
          <div key={item.id} className={styles.section}>
            <div className={styles.textContent}>
              <div className={styles.textWrapper}>
                <ChevronRight className={styles.arrow} size={24} />
                <p>{item.content}</p>
              </div>
            </div>
            <div className={styles.galleryContent}>
              <PrimmaGallery
                images={
                  item.id === 'anesthesia'
                    ? anesthesiaImages
                    : item.id === 'sterilizer'
                      ? sterilizerImages
                      : item.id === 'table'
                        ? tableImages
                        : item.id === 'ventilation'
                          ? ventilationImages
                          : lampImages
                }
                galleryId={`equipment-gallery-${item.id}`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OperatingRoomEquipment;
