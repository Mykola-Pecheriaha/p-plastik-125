import type React from 'react';
import Abdominoplastic from '../../../../components/Abdominoplastic/Abdominoplastic';
import AbdominoplastyIndications from '../../../../components/AbdominoplastyIndications/AbdominoplastyIndications';
import AbdominoplastyContraindications from '../../../../components/AbdominoplastyContraindications/AbdominoplastyContraindications';
import ClinicInfo from '../../../../components/ClinicInfo/ClinicInfo';
import AbdominoplastyPreparation from '../../../../components/AbdominoplastyPreparation/AbdominoplastyPreparation';
import AbdominoplastyQuestions from '../../../../components/AbdominoplastyQuestions/AbdominoplastyQuestions';
import PlasticSurgeons from '../../../../components/PlasticSurgeons/PlasticSurgeons';
import styles from './page.module.css';

const AbdominoplastyPage: React.FC = () => {
  return (
    <div className={styles.abdominoplastyPage}>
      <Abdominoplastic backgroundColor="#d3e29d" />
      <PlasticSurgeons />
      <AbdominoplastyIndications backgroundColor="#d3e29d" />
      <AbdominoplastyContraindications backgroundColor="#acc864" />
      <ClinicInfo />
      <AbdominoplastyPreparation backgroundColor="#acc864" />
      <AbdominoplastyQuestions backgroundColor="#d3e29d" />
    </div>
  );
};

export default AbdominoplastyPage;
