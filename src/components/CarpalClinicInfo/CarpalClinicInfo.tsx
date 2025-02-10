'use client';

import type React from 'react';
import ModifiableClinicInfo from '../ModifiableClinicInfo/ModifiableClinicInfo';
import { carpalClinicInfo } from '../../data/carpalClinicInfo';

const CarpalClinicInfo: React.FC = () => {
  return (
    <ModifiableClinicInfo
      backgroundColor="#F5F4C3FF"
      images={carpalClinicInfo}
    />
  );
};

export default CarpalClinicInfo;
