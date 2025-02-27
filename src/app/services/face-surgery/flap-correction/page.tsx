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
      <FlapCorrection backgroundColor="#FAE2BBAB" />
      <ModifiablePlasticSurgeons backgroundColor="#FCAD2F50" />
      <FlapIndications backgroundColor="#FAE2BBAB" />
      <FlapCotraindications backgroundColor="#FCBC56AB" />
      <FlapClinicInfo />
      <FlapOperation backgroundColor="#FCBC56AB" />
      <FlapFAQ backgroundColor="#e5f0f8" />
    </div>
  );
};

export default FlapCorrectionPage;
