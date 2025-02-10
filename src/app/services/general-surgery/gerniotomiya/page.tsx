import React from 'react';
import Gerniotomiya from '../../../../components/Gerniotomiya/Gerniotomiya';
import ModifiablePlasticSurgeons from '../../../../components/ModifiablePlasticSurgeons/ModifiablePlasticSurgeons';
import GerniontomiyaIndications from '../../../../components/GerniontomiyaIndications/GerniontomiyaIndications';
import GerniontomiyaContraIndications from '../../../../components/GerniontomiyaContraIndications/GerniontomiyaContraIndications';
import GernioClinicInfo from '../../../../components/GernioClinicInfo/GernioClinicInfo';
import GernioOperation from '../../../../components/GernioOperation/GernioOperation';
import GernioFAQ from '../../../../components/GernioFAQ/GernioFAQ';

const GerniotomiyaPage: React.FC = () => {
  return (
    <div>
      <Gerniotomiya backgroundColor="#e5f0f8" />
      <ModifiablePlasticSurgeons backgroundColor="#B9F8EAFF" />
      <GerniontomiyaIndications backgroundColor="#e5f0f8" />
      <GerniontomiyaContraIndications backgroundColor="#e5f0f8" />
      <GernioClinicInfo />
      <GernioOperation backgroundColor="#e5f0f8" />
      <GernioFAQ backgroundColor="#e5f0f8" />
    </div>
  );
};

export default GerniotomiyaPage;
