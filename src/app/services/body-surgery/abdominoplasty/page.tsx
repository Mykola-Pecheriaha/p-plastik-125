import type React from 'react';
import Abdominoplastic from '../../../../components/Abdominoplastic/Abdominoplastic';
import styles from './page.module.css';

const AbdominoplastyPage: React.FC = () => {
  return (
    <div className={styles.abdominoplastyPage}>
      <Abdominoplastic backgroundColor="#F0EBF3FF" />
    </div>
  );
};

export default AbdominoplastyPage;
