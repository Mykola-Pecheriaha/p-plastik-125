import React from 'react';
import GallerySurgeons from '../GallerySurgeons/GallerySurgeons';
import styles from './PlasticSurgeons.module.css';

const PlasticSurgeons: React.FC = () => {
  return (
    <div className={styles.plasticSurgeons}>
      {/* Заголовок */}
      <div>
        <h2 className={styles.plasticSurgeonsTitle}>Пластичні хірурги</h2>
      </div>

      {/* Контейнер для галереї та тексту */}
      <div className={styles.containerplasticSurgeons}>
        {/* Галерея зліва */}
        <div className={styles.plasticSurgeonsImage}>
          <GallerySurgeons />
        </div>

        {/* Текстовий блок справа */}
        <div className={styles.plasticSurgeonsText}>
          <h1>Печеряга Микола Миколайович</h1>
          <div className={styles.subTitle}>
            <p>
              Я пластична хірургиня з досвідом 16 років. Навчалась у найкращих
              пластичних хірургів світу та виконую всі види пластичних операцій
              для жінок. Уже більше ніж 1600 пацієнток з різних країн довірили
              мені свою красу.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlasticSurgeons;
