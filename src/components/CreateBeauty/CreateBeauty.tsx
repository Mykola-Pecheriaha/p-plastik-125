import React from 'react';
import Link from 'next/link';

import GalleryBreast from '../GalleryBreast/GalleryBreast';
import styles from './CreateBeauty.module.css';
import createBeautyImages from '../../data/createBeauty';

const CreateBeauty: React.FC = () => {
  return (
    <div className={styles.createBeauty}>
      <h2 className={styles.createBeautyTitle}>
        Створюю красу з турботою про Вас
      </h2>
      <div className={styles.containerCreateBeauty}>
        <div className={styles.createBeautyText}>
          <h4>Пластика грудей</h4>
          <div className={styles.subTitle}>
            <ul>
              <li>Підхід з пахви без шрамів за італійським протоколом</li>
              <li>Корекція асиметрії</li>
              <li>
                Підтяжка грудей з імплантами або без них (тільки власні тканини)
              </li>
              <li>Індивідуальний підбір імплантів для бажаного обʼєму</li>
              <li>
                Сучасні імплантати від світових виробників, що не потребують
                заміни
              </li>
              <li>Комплект білизни для реабілітації у подарунок</li>
            </ul>
            <Link href="/about-doctor">
              <button className={styles.contactButton}>
                Докладніше про послугу
              </button>
            </Link>
          </div>
        </div>
        <div className={styles.createBeautyImage}>
          <GalleryBreast images={createBeautyImages} />
        </div>
      </div>
    </div>
  );
};

export default CreateBeauty;
