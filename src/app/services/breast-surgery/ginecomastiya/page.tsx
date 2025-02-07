import type React from 'react';
import Ginecomastiya from '../../../../components/Ginecomastiya/Ginecomastiya';
import ModifiablePlasticSurgeons from '../../../../components/ModifiablePlasticSurgeons/ModifiablePlasticSurgeons';
import GinecomastiyaClinicInfo from '../../../../components/GinecomastiyaClinicInfo/GinecomastiyaClinicInfo';
import GinecomastiyaIndications from '../../../../components/GinecomastiyaIndications/GinecomastiyaIndications';
import GinecomastiyaContraindications from '../../../../components/GinecomastiyaContraindications/GinecomastiyaContraindications';
import GinecomastiyaPreparation from '../../../../components/GinecomastiyaPreparation/GinecomastiyaPreparation';
import GinecomastiyaFAQ from '../../../../components/GinecomastiyaFAQ/GinecomastiyaFAQ';

const GinecomastiyaPage: React.FC = () => {
  return (
    <div>
      <Ginecomastiya backgroundColor="#D3E6F7FF" />;
      <ModifiablePlasticSurgeons backgroundColor="#B9F8EAFF" />
      <GinecomastiyaIndications backgroundColor="#C5F7C9FF" />
      <GinecomastiyaContraindications backgroundColor="#f0f0f0" />
      <GinecomastiyaClinicInfo />
      <GinecomastiyaPreparation backgroundColor="#F5CEECFF" />
      <GinecomastiyaFAQ backgroundColor="#f0f0f0" />
    </div>
  );
};

export default GinecomastiyaPage;
