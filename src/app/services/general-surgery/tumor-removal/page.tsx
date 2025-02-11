import React from 'react';
import BenignSkinSurgery from '../../../../components/BenignSkinSurgery/BenignSkinSurgery';
import ModifiablePlasticSurgeons from '../../../../components/ModifiablePlasticSurgeons/ModifiablePlasticSurgeons';
import BenignSkinIndications from '../../../../components/BenignSkinIndications/BenignSkinIndications';
import BenignSkinClinicInfo from '../../../../components/BenignSkinClinicInfo/BenignSkinClinicInfo';
import TumorIndications from '../../../../components/TumorIndications/TumorIndications';
import TumorContraIndications from '../../../../components/TumorContraIndications/TumorContraIndications';
import TumorOperations from '../../../../components/TumorOperations/TumorOperations';
import TumorFAQ from '../../../../components/TumorFAQ/TumorFAQ';

const TumorRemovalPage: React.FC = () => {
  return (
    <div>
      <BenignSkinSurgery backgroundColor="#e5f0f8" />
      <ModifiablePlasticSurgeons backgroundColor="#B9F8EAFF" />
      <BenignSkinIndications backgroundColor="#e5f0f8" />
      <BenignSkinClinicInfo />
      <TumorIndications backgroundColor="#e5f0f8" />
      <TumorContraIndications backgroundColor="#e5f0f8" />
      <TumorOperations backgroundColor="#e5f0f8" />
      <TumorFAQ backgroundColor="#e5f0f8" />
    </div>
  );
};

export default TumorRemovalPage;
