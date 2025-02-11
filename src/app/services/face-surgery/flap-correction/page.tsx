import React from 'react';
import FlapCorrection from '../../../../components/FlapCorrection/FlapCorrection';
import ModifiablePlasticSurgeons from '../../../../components/ModifiablePlasticSurgeons/ModifiablePlasticSurgeons';
import FlapIndications from '../../../../components/FlapIndications/FlapIndications';
import FlapCotraindications from '../../../../components/FlapCotraindications/FlapCotraindications';
import FlapClinicInfo from '../../../../components/FlapClinicInfo/FlapClinicInfo';
import FlapOperation from '../../../../components/FlapOperation/FlapOperation';
import FlapFAQ from '../../../../components/FlapFAQ/FlapFAQ';

const FlapCorrectionPage: React.FC = () => {
  return (
    <div>
      <FlapCorrection backgroundColor="#e5f0f8" />
      <ModifiablePlasticSurgeons backgroundColor="#e0e0e0" />
      <FlapIndications backgroundColor="#e5f0f8" />
      <FlapCotraindications backgroundColor="#e5f0f8" />
      <FlapClinicInfo />
      <FlapOperation backgroundColor="#e5f0f8" />
      <FlapFAQ backgroundColor="#e5f0f8" />
    </div>
  );
};

export default FlapCorrectionPage;
