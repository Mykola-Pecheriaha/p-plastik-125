import React from 'react';
import CarpalSyndrome from '../../../../components/CarpalSyndrome/CarpalSyndrome';
import ModifiablePlasticSurgeons from '../../../../components/ModifiablePlasticSurgeons/ModifiablePlasticSurgeons';
import CarpalIndications from '../../../../components/CarpalIndications/CarpalIndications';
import CarpalCntraindications from '../../../../components/CarpalCntraindications/CarpalCntraindications';
import CarpalClinicInfo from '../../../../components/CarpalClinicInfo/CarpalClinicInfo';
import CarpalOperation from '../../../../components/CarpalOperation/CarpalOperation';
import CarpalFAQ from '../../../../components/CarpalFAQ/CarpalFAQ';

const CarpalSyndromePage: React.FC = () => {
  return (
    <div>
      <CarpalSyndrome backgroundColor="#e5f0f8" />
      <ModifiablePlasticSurgeons backgroundColor="#B9F8EAFF" />
      <CarpalIndications backgroundColor="#e5f0f8" />
      <CarpalCntraindications backgroundColor="#e5f0f8" />
      <CarpalClinicInfo />
      <CarpalOperation backgroundColor="#e5f0f8" />
      <CarpalFAQ backgroundColor="#e5f0f8" />
    </div>
  );
};

export default CarpalSyndromePage;
