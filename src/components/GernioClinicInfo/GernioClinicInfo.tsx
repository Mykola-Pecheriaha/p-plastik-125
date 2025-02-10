'use client';

import type React from 'react';
import ModifiableClinicInfo from '../ModifiableClinicInfo/ModifiableClinicInfo';
import { gernioClinicInfo } from '../../data/gernioClinicInfo';

const GernioClinicInfo: React.FC = () => {
  return (
    <ModifiableClinicInfo
      backgroundColor="#F5F4C3FF"
      images={gernioClinicInfo}
    />
  );
};

export default GernioClinicInfo;
