import React from 'react';
import LegPlastic from '../../../../components/LegPlastic/LegPlastic';
import ModifiablePlasticSurgeons from '../../../../components/ModifiablePlasticSurgeons/ModifiablePlasticSurgeons';
import LegPlasticIndications from '../../../../components/LegPlasticIndications/LegPlasticIndications';
import LegPlasticCotraindications from '../../../../components/LegPlasticCotraindications/LegPlasticCotraindications';
import LedPlasticClinicInfo from '../../../../components/LedPlasticClinicInfo/LedPlasticClinicInfo';
import LegPlasticOperation from '../../../../components/LegPlasticOperation/LegPlasticOperation';
import LegPlasticFAQ from '../../../../components/LegPlasticFAQ/LegPlasticFAQ';

const LedPlasticPage: React.FC = () => {
  return (
    <div>
      <LegPlastic backgroundColor="#e5f0f8" />
      <ModifiablePlasticSurgeons backgroundColor="#B9F8EAFF" />
      <LegPlasticIndications backgroundColor="#e5f0f8" />
      <LegPlasticCotraindications backgroundColor="#e5f0f8" />
      <LedPlasticClinicInfo />
      <LegPlasticOperation backgroundColor="#e5f0f8" />
      <LegPlasticFAQ
        backgroundColor="#e5f0f8"
        collapsedColor="#ffffff"
        expandedColor="#f8f9fa"
        hoverColor="#f3f4f6"
      />
    </div>
  );
};

export default LedPlasticPage;
