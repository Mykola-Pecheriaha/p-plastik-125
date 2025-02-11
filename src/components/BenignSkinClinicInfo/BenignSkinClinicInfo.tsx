'use client';

import type React from 'react';
import ModifiableClinicInfo from '../ModifiableClinicInfo/ModifiableClinicInfo';
import { benignSkinClinicInfo } from '../../data/benignSkinClinicInfo';

const BenignSkinClinicInfo: React.FC = () => {
  return (
    <ModifiableClinicInfo
      backgroundColor="#F5F4C3FF"
      images={benignSkinClinicInfo}
    />
  );
};

export default BenignSkinClinicInfo;
