import type React from 'react';
import PrimaMammariAugment from '../../../../components/PrimaMammariAugment/PrimaMammariAugment';

import styles from './page.module.css';

const BreastAugmentationPage: React.FC = () => {
  return (
    <div>
      <div className={styles.breastAugmentationPage}>
        {/* <h1>Збільшення грудей</h1> */}
        <PrimaMammariAugment backgroundColor="#B6DFF1FF" />
        {/* Додайте інші секції або контент тут */}
      </div>
    </div>
  );
};

export default BreastAugmentationPage;
