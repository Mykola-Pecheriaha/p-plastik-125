'use client';

import type React from 'react';
import ModifiableClinicInfo from '../ModifiableClinicInfo/ModifiableClinicInfo';
import { breastImplantRemovalClinicInfo } from '../../data/breastImplantRemovalClinicInfo';

const BreastImplantRemovalClinicInfo: React.FC = () => {
  return (
    <ModifiableClinicInfo
      backgroundColor="#F5F4C3FF"
      images={breastImplantRemovalClinicInfo}
    />
  );
};

export default BreastImplantRemovalClinicInfo;
