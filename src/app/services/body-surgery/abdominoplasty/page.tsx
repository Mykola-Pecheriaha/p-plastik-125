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
      <PlasticSurgeons backgroundColor="#D9F086FF" />
      <AbdominoplastyIndications backgroundColor="#d3e29d" />
      <AbdominoplastyContraindications backgroundColor="#acc864" />
      <ClinicInfo backgroundColor="#88A5F3FF" />
      <AbdominoplastyPreparation backgroundColor="#acc864" />
      <AbdominoplastyQuestions backgroundColor="#d3e29d" />
    </div>
  );
};

export default AbdominoplastyPage;
