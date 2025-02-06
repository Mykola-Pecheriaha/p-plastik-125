import type React from 'react';
import BreastImplantReplacement from '../../../../components/BreastImplantReplacement/BreastImplantReplacement';
import ModifiablePlasticSurgeons from '../../../../components/ModifiablePlasticSurgeons/ModifiablePlasticSurgeons';
import ReplacementIndications from '../../../../components/ReplacementIndications/ReplacementIndications';
import ReplacementContraindications from '../../../../components/ReplacementContraindications/ReplacementContraindications';
import ReplacementClinicInfo from '../../../../components/ReplacementClinicInfo/ReplacementClinicInfo';
import BreastImplantPreparation from '../../../../components/BreastImplantPreparation/BreastImplantPreparation';
import ImplantPreparationFAQ from '../../../../components/ImplantPreparationFAQ/ImplantPreparationFAQ';

const BreastImplantReplacementPage: React.FC = () => {
  return (
    <div>
      <BreastImplantReplacement backgroundColor="#e6f3ff" />
      <ModifiablePlasticSurgeons backgroundColor="#B9F8EAFF" />
      <ReplacementIndications backgroundColor="#f0f0f0" />
      <ReplacementContraindications backgroundColor="#ffffff" />
      <ReplacementClinicInfo />
      <BreastImplantPreparation backgroundColor="#f5f5f5" />
      <ImplantPreparationFAQ backgroundColor="#e6f3ff" />
    </div>
  );
};

export default BreastImplantReplacementPage;
