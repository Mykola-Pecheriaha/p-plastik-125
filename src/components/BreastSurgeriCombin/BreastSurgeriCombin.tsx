'use client';

import { ChevronRight } from 'lucide-react';
import Image from 'next/image';

import styles from './BreastSurgeriCombin.module.css';
import type React from 'react';

interface BreastSurgeriCombinProps {
  backgroundColor?: string;
}

const BreastSurgeriCombin: React.FC<BreastSurgeriCombinProps> = ({
  backgroundColor = '#f0f4f8',
}) => {
  const features = [
    "Бажаний об'єм та форма",
    'Довічна гарантія на імпланти',
    'Реабілітація до 30 днів',
  ];

  return (
    <div className={styles.breastSurgeriCombin} style={{ backgroundColor }}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.leftContent}>
            <h1>Пластика грудей</h1>
            <h4>Від візуалізації результату до форм мрії – один крок.</h4>
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
                src="/images/BreastSurgeriCombin/LedPlastic-removebg-preview.png"
                alt="Breast surgery example"
                width={500}
                height={600}
                className={styles.mainImage}
              />
            </div>
          </div>
        </div>

        <div className={styles.bottomSection}>
          <div className={styles.videoContent}>
            <video controls className={styles.video}>
              <source src="/videos/3IMG_4527.MOV" type="video/quicktime" />
              <source src="/videos/2IMG_4528.MOV" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className={styles.textContent}>
            <p>
              Ідеальні груди – мрія кожної дівчини та обєкт захоплення для
              чоловіків. Проте не кожну природа обдарувала гарним та пишним
              бюстом. Створити гармонійні форми допоможе пластика грудей –
              мамопластика.
            </p>
            <p>
              Операція спрямована на покращення естетичного вигляду молочної
              залози (форми, обєму, контуру) та корекцію їх після вагітності та
              грудного вигодовування, внаслідок вікових змін. Пластика грудей –
              це як збільшення їх за допомогою імплантатів, так і зменшення,
              підтяжка, різні види корекції (підняття та зміна форми ареоли)
              молочних залоз.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreastSurgeriCombin;
