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
      <Blepharoplasty backgroundColor="#DCF8BDFF" />
      <ModifiablePlasticSurgeons backgroundColor="#C3F789FF" />
      <BlefaroIndications backgroundColor="#DCF8BDFF" />
      <BlefaroContraindications backgroundColor="#C3F789FF" />
      <ModifiableClinicInfo
        backgroundColor="#DCF8BDFF"
        images={blefaroClinicImages}
      />
      <BlefaroPreparation backgroundColor="#C3F789FF" />
      <BlefaroFAQ backgroundColor="#DCF8BDFF" />
    </div>
  );
};

export default BlefaroPlasticPage;
