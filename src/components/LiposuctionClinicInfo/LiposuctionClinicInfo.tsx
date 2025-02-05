'use client';

import type React from 'react';
import ModifiableClinicInfo from '../ModifiableClinicInfo/ModifiableClinicInfo';
import { liposuctionClinicImages } from '../../data/liposuctionData';

const LiposuctionClinicInfo: React.FC = () => {
  return (
    <ModifiableClinicInfo
      backgroundColor="#e0e0e0"
      images={liposuctionClinicImages}
    />
  );
};

export default LiposuctionClinicInfo;
