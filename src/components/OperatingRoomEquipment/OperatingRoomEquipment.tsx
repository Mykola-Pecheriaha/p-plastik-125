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
        'Сертифікований наркозно-дихальний апарат експертного класу Leon plus з можливістю вентиляції з повторним використанням повітря, що видихається на рівні реанімаційного апарату ШВЛ. Це золотий стандарт апаратури для анестезії, який визнаний одним із найкращих у світі. Наркоз комфортний: пацієнт швидко занурюється в медикаментозний сон і легко виходить із нього (читати докладніше про наркоз – посилання);',
    },
    {
      id: 'sterilizer',
      content:
        'Бактерицидний опромінювач BactoSfera. Вбиває (інактивує) віруси, бактерії, плісняву, грибки, дріжджі, алергени та інші інфекційні мікроорганізми, у т.ч. віруси грипу всіх типів (гриппатипи A, B, C), віруси, що викликають ГРЗ та ГРВІ, коронавірус SARS-CoV-2 (2019-nCoV), що викликає захворювання COVID-19, штам коронавірусу «Омікрон»;',
    },
    {
      id: 'table',
      content:
        'Ергономічний операційний стіл з налаштуванням висоти та нахилів;',
    },
    {
      id: 'ventilation',
      content:
        'Система вентиляції, яка забезпечує в операційних та післяопераційних залах високий клас чистоти;',
    },
    {
      id: 'lamp',
      content:
        'Операційна галогенова лампа Maquet Hanaulux. Забезпечує чітку видимість операційного поля, без темних зон та спотворень кольору.',
    },
  ];

  const galleryImages = [
    '/placeholder.svg?height=300&width=300',
    '/placeholder.svg?height=300&width=300',
    '/placeholder.svg?height=300&width=300',
    '/placeholder.svg?height=300&width=300',
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
                images={galleryImages}
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
