'use client';

import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import PrimmaGallery from '../PrimmaGallery/PrimmaGallery';
import styles from './OperatingRoom.module.css';
import type React from 'react';

interface OperatingRoomProps {
  backgroundColor?: string;
}

const OperatingRoom: React.FC<OperatingRoomProps> = ({
  backgroundColor = '#f0f4f8',
}) => {
  const features = [
    'Сучасний ремонт',
    'Сучасне обладнання',
    'Строгий інфікційний контроль',
  ];

  const galleryImages = [
    '/images/OperatingRoom/oheratingRoom.jpg',
    '/images/OperatingRoom/operromm10.jpg',
    '/images/OperatingRoom/oheratingRoom1.jpg',
    '/images/OperatingRoom/operromm13.jpg',
  ];

  return (
    <div className={styles.operatingRoom} style={{ backgroundColor }}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.leftContent}>
            <h1>Операційна ЦМКЛ</h1>
            <ul>
              {features.map((feature, index) => (
                <li key={index}>
                  <ChevronRight size={20} />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.rightContent}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/OperatingRoom/26і-removebg-preview.png"
                alt="Operating room"
                width={500}
                height={600}
                className={styles.mainImage}
              />
            </div>
          </div>
        </div>

        <div className={styles.bottomSection}>
          <div className={styles.textContent}>
            <p>
              Головна перевага клініки та доповнення рук пластичного хірурга –
              <b>сучасний якісний операційний блок.</b>
            </p>
            <p>
              Я оперую в операційні ЦМКЛ, яка відповідає всім медичним
              стандартам. Наша операційна обладнана за останнім словом техніки.
              Це запорука якісно виконаного оперативного втручання будь-якого
              рівня складності та мінімізація побічних ефектів.
            </p>
          </div>
          <div className={styles.galleryContent}>
            <PrimmaGallery
              images={galleryImages}
              galleryId="operating-room-gallery"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OperatingRoom;
