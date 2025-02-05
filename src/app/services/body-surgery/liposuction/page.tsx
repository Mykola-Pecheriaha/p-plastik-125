import React from 'react';
import Liposuction from '../../../../components/Liposuctio/Liposuctio';
import ModifiablePlasticSurgeons from '../../../../components/ModifiablePlasticSurgeons/ModifiablePlasticSurgeons';
import LiposuctionIndications from '../../../../components/LiposuctionIndications/LiposuctionIndications';
import LiposuctionContraindications from '../../../../components/LiposuctionContraindications/LiposuctionContraindications';
import LiposuctionClinicInfo from '../../../../components/LiposuctionClinicInfo/LiposuctionClinicInfo';
import LiposuctionPreparation from '../../../../components/LiposuctionPreparation/LiposuctionPreparation';
import LiposuctionFAQ from '../../../../components/LiposuctionFAQ/LiposuctionFAQ';

const LiposuctionPage: React.FC = () => {
  return (
    <div>
      <Liposuction backgroundColor="#f0f0f0" />
      <ModifiablePlasticSurgeons backgroundColor="#B9F8EAFF" />
      <LiposuctionIndications backgroundColor="#f0f0f0" />
      <LiposuctionContraindications backgroundColor="#f0f0f0" />
      <LiposuctionClinicInfo />
      <LiposuctionPreparation backgroundColor="#e6f3ff" />
      <LiposuctionFAQ backgroundColor="#f0f0f0" />
    </div>
  );
};

export default LiposuctionPage;
