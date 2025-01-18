'use client';

import React from 'react';
import Link from 'next/link';
// import PlasticCard from '../../../components/PlasticCard/PlasticCard';
import PlasticCard from '../../components/PlasticCard/PlasticCard';
// import plasticData from '../../../data/plasticData';
import plasticData from '../../data/plasticData';
import styles from './FacePlasticPage.module.css';

const FacePlasticPage: React.FC = () => {
  const faceData = plasticData.face;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Приклади робіт пластики обличчя до та після
      </h1>
      <div className={styles.cardGrid}>
        {faceData.map((item) => (
          <div key={item.id} className={styles.cardWrapper}>
            <PlasticCard
              imageUrl={item.imageUrl}
              initialLikes={item.likes}
              id={item.id}
              category="face"
            />
            <h3 className={styles.cardTitle}>{item.title}</h3>
            <Link href={item.albumLink} className={styles.albumButton}>
              Переглянути альбом
            </Link>
          </div>
        ))}
      </div>
      <p className={styles.description}>
        Наша клініка спеціалізується на різних видах пластики обличчя, включаючи
        підтяжку обличчя, ринопластику та блефаропластику. Кожна процедура
        виконується з урахуванням індивідуальних особливостей та побажань
        пацієнта. Наші хірурги використовують найсучасніші методики та
        технології, щоб забезпечити найкращі результати та мінімальний період
        відновлення. Перегляньте наші альбоми, щоб побачити реальні результати
        та переконатися в професіоналізмі наших фахівців.
      </p>
    </div>
  );
};

export default FacePlasticPage;
