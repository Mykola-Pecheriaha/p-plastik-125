import type React from 'react';
import Abdominoplastic from '../../../../components/Abdominoplastic/Abdominoplastic';
import AbdominoplastyIndications from '../../../../components/AbdominoplastyIndications/AbdominoplastyIndications';
import AbdominoplastyContraindications from '../../../../components/AbdominoplastyContraindications/AbdominoplastyContraindications';
import ClinicInfo from '../../../../components/ClinicInfo/ClinicInfo';
import AbdominoplastyPreparation from '../../../../components/AbdominoplastyPreparation/AbdominoplastyPreparation';
import AbdominoplastyQuestions from '../../../../components/AbdominoplastyQuestions/AbdominoplastyQuestions';
import styles from './page.module.css';

const AbdominoplastyPage: React.FC = () => {
  return (
    <div className={styles.abdominoplastyPage}>
      <Abdominoplastic backgroundColor="#f5f5f5" />
      <AbdominoplastyIndications backgroundColor="#E7F1FAFF" />
      <AbdominoplastyContraindications backgroundColor="#C8F5F5FF" />
      <ClinicInfo />
      <AbdominoplastyPreparation backgroundColor="#94D4F8FF" />
      <AbdominoplastyQuestions backgroundColor="#E3EBF0FF" />
    </div>
  );
};

export default AbdominoplastyPage;
