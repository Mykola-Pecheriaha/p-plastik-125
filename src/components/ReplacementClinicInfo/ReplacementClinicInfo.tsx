'use client';

import type React from 'react';
import ModifiableClinicInfo from '../ModifiableClinicInfo/ModifiableClinicInfo';
import { replacementClinicInfo } from '../../data/replacementClinicInfo';

const ReplacementClinicInfo: React.FC = () => {
  return (
    <ModifiableClinicInfo
      backgroundColor="#e0e0e0"
      images={replacementClinicInfo}
    />
  );
};

export default ReplacementClinicInfo;
