import type React from 'react';
import Facelift from '../../../../components/Facelift/Facelift';
import ModifiablePlasticSurgeons from '../../../../components/ModifiablePlasticSurgeons/ModifiablePlasticSurgeons';
import FaceliftIndications from '../../../../components/FaceliftIndications/FaceliftIndications';
import FaceliftContraindications from '../../../../components/FaceliftContraindications/FaceliftContraindications';
import ModifiableClinicInfo from '../../../../components/ModifiableClinicInfo/ModifiableClinicInfo';
import styles from './page.module.css';

const FaceliftPage: React.FC = () => {
  const faceliftClinicImages = [
    '/images/faceliftClinic/surgical50.jpg',
    '/images/faceliftClinic/clinic2.jpg',
    '/images/faceliftClinic/clinic3.jpg',
    '/images/faceliftClinic/clinic4.jpg',
  ];

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
    </div>
  );
};

export default FaceliftPage;
