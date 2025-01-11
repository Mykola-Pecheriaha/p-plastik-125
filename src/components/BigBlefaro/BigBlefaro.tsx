import React from 'react';
import Link from 'next/link';

import GalleryBlefaro from '../GalleryBlefaro/GalleryBlefaro';
import styles from './BigBlefaro.module.css';
import bigBlefaroImages from '../../data/bigBlefaro';

const BigBlefaro: React.FC = () => {
  return (
    <div className={styles.bigBlefaro}>
      <h2 className={styles.bigBlefaroTitle}>
        Блефаропластика – пластика повік
      </h2>
      <div className={styles.containerBigBlefaro}>
        <div className={styles.bigBlefaroImage}>
          <GalleryBlefaro images={bigBlefaroImages} />
        </div>

        <div className={styles.bigBlefaroText}>
          <h4>Пластика грудей</h4>
          <div className={styles.subTitle}>
            <ul>
              <li>
                Без шрамів (можлива трансконʼюктивальна блефаропластика за
                показаннями)
              </li>
              <li>Мінімальний термін реабілітації до 30 днів</li>
              <li> Усунення «мішків» під очима </li>
              <li>Корекція зморшок та вікових змін</li>
              <li> Корекція жирових надлишків (псевдогриж) </li>
            </ul>
            <Link href="/services/blefaro-plastic">
              <button className={styles.contactButton}>
                Докладніше про послугу
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigBlefaro;
