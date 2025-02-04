import React from 'react';
import Blepharoplasty from '../../../../components/Blepharoplasty/Blepharoplasty';
import ModifiablePlasticSurgeons from '../../../../components/ModifiablePlasticSurgeons/ModifiablePlasticSurgeons';
import BlefaroIndications from '../../../../components/BlefaroIndications/BlefaroIndications';
import BlefaroContraindications from '../../../../components/BlefaroContraindications/BlefaroContraindications';
import ModifiableClinicInfo from '../../../../components/ModifiableClinicInfo/ModifiableClinicInfo';
import { blefaroClinicImages } from '../../../../data/blefaroData';
import BlefaroPreparation from '../../../../components/BlefaroPreparation/BlefaroPreparation';
import BlefaroFAQ from '../../../../components/BlefaroFAQ/BlefaroFAQ';

const BlefaroPlasticPage: React.FC = () => {
  return (
    <div>
      <Blepharoplasty backgroundColor="#f0f0f0" />
      <ModifiablePlasticSurgeons backgroundColor="#B9F8EAFF" />
      <BlefaroIndications backgroundColor="#E5F7A3FF" />
      <BlefaroContraindications backgroundColor="#f0f0f0" />
      <ModifiableClinicInfo
        backgroundColor="#e0e0e0"
        images={blefaroClinicImages}
      />
      <BlefaroPreparation backgroundColor="#f0f0f0" />
      <BlefaroFAQ backgroundColor="#f0f0f0" />
    </div>
  );
};

export default BlefaroPlasticPage;
