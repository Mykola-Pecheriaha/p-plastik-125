import React from 'react';
import BreastImplantRemoval from '../../../../components/BreastImplantRemoval/BreastImplantRemoval';
import ModifiablePlasticSurgeons from '../../../../components/ModifiablePlasticSurgeons/ModifiablePlasticSurgeons';
import BreastImplantRemovalIndications from '../../../../components/BreastImplantRemovalIndications/BreastImplantRemovalIndications';
import BreastImplantRemovalContraIndications from '../../../../components/BreastImplantRemovalContraIndications/BreastImplantRemovalContraIndications';
import BreastImplantRemovalClinicInfo from '../../../../components/BreastImplantRemovalClinicInfo/BreastImplantRemovalClinicInfo';
import BreastImplantRemovalOperation from '../../../../components/BreastImplantRemovalOperation/BreastImplantRemovalOperation';
import BreastImplantRemovallFAQ from '../../../../components/BreastImplantRemovallFAQ/BreastImplantRemovallFAQ';

const BreastImplantRemovalPage: React.FC = () => {
  return (
    <div>
      <BreastImplantRemoval backgroundColor="#e5f0f8" />
      <ModifiablePlasticSurgeons backgroundColor="#B9F8EAFF" />
      <BreastImplantRemovalIndications backgroundColor="#e5f0f8" />
      <BreastImplantRemovalContraIndications backgroundColor="#e5f0f8" />
      <BreastImplantRemovalClinicInfo />
      <BreastImplantRemovalOperation backgroundColor="#e5f0f8" />
      <BreastImplantRemovallFAQ backgroundColor="#e5f0f8" />
    </div>
  );
};

export default BreastImplantRemovalPage;
