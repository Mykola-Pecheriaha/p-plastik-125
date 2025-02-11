'use client';

import type React from 'react';
import ModifiableClinicInfo from '../ModifiableClinicInfo/ModifiableClinicInfo';
import { ledPlasticClinicInfo } from '../../data/ledPlasticClinicInfo';

const LedPlasticClinicInfo: React.FC = () => {
  return (
    <ModifiableClinicInfo
      backgroundColor="#F5F4C3FF"
      images={ledPlasticClinicInfo}
    />
  );
};

export default LedPlasticClinicInfo;
