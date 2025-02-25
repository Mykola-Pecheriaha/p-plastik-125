import type React from 'react';
import Facelift from '../../../../components/Facelift/Facelift';
import ModifiablePlasticSurgeons from '../../../../components/ModifiablePlasticSurgeons/ModifiablePlasticSurgeons';
import FaceliftIndications from '../../../../components/FaceliftIndications/FaceliftIndications';
import FaceliftContraindications from '../../../../components/FaceliftContraindications/FaceliftContraindications';
import ModifiableClinicInfo from '../../../../components/ModifiableClinicInfo/ModifiableClinicInfo';
import { faceliftClinicImages } from '../../../../data/faceliftData';
import FaceliftPreparation from '../../../../components/FaceliftPreparation/FaceliftPreparation';
import FaceliftFAQ from '../../../../components/FaceliftFAQ/FaceliftFAQ';
import styles from './page.module.css';

const FaceliftPage: React.FC = () => {
  return (
    <div className={styles.faceliftPage}>
      <Facelift backgroundColor="#EBEEF7FF" />
      <ModifiablePlasticSurgeons backgroundColor="#C6C8DFFF" />
      <FaceliftIndications
        backgroundColor="#EBEEF7FF"
        cardsBackgroundColor="#D8D9E6FF"
      />
      <FaceliftContraindications backgroundColor="#C6C8DFFF" />
      <ModifiableClinicInfo
        backgroundColor="#EBEEF7FF"
        images={faceliftClinicImages}
      />
      <FaceliftPreparation backgroundColor="#C6C8DFFF" />
      <FaceliftFAQ backgroundColor="#f0f0f0" />
    </div>
  );
};

export default FaceliftPage;
