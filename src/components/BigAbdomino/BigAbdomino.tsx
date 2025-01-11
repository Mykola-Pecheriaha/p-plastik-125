import React from 'react';
import Link from 'next/link';

import GalleryAbdomino from '../GalleryAbdomino/GalleryAbdomino';
import styles from './BigAbdomino.module.css';
import bigAbdominoImages from '../../data/bigAbdomino';

const BigAbdomino: React.FC = () => {
  return (
    <div className={styles.bigAbdomino}>
      <h2 className={styles.bigAbdominoTitle}>
        Блефаропластика – пластика повік
      </h2>
      <div className={styles.containerBigAbdomino}>
        <div className={styles.bigAbdominoText}>
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

        <div className={styles.bigAbdominoImage}>
          <GalleryAbdomino images={bigAbdominoImages} />
        </div>
      </div>
    </div>
  );
};

export default BigAbdomino;
