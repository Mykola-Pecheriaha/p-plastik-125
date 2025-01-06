import React from 'react';
import styles from './page.module.css';

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Ласкаво просимо до нашої клініки пластичної хірургії
      </h1>
      <p className={styles.description}>
        Ми пропонуємо широкий спектр послуг з пластичної хірургії, включаючи
        збільшення грудей, ліпосакцію та багато іншого.
      </p>
    </div>
  );
};

export default Home;
