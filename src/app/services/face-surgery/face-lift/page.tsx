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
      <Facelift backgroundColor="#f5f5f5" />
      <ModifiablePlasticSurgeons backgroundColor="#e0e0e0" />
      <FaceliftIndications
        backgroundColor="#C7EFF7FF"
        cardsBackgroundColor="#f5f5f5"
      />
      <FaceliftContraindications backgroundColor="#f5f5f5" />
      <ModifiableClinicInfo
        backgroundColor="#e0e0e0"
        images={faceliftClinicImages}
      />
      <FaceliftPreparation backgroundColor="#f0f0f0" />
      <FaceliftFAQ backgroundColor="#f0f0f0" />
    </div>
  );
};

export default FaceliftPage;
