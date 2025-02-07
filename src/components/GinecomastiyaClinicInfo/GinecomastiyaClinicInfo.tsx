'use client';

import type React from 'react';
import ModifiableClinicInfo from '../ModifiableClinicInfo/ModifiableClinicInfo';
import { ginecomastiyaClinicInfo } from '../../data/ginecomastiyaClinicInfo';

const GinecomastiyaClinicInfo: React.FC = () => {
  return (
    <ModifiableClinicInfo
      backgroundColor="#F5F4C3FF"
      images={ginecomastiyaClinicInfo}
    />
  );
};

export default GinecomastiyaClinicInfo;
