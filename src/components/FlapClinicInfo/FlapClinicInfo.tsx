'use client';

import type React from 'react';
import ModifiableClinicInfo from '../ModifiableClinicInfo/ModifiableClinicInfo';
import { flapClinicInfo } from '../../data/flapClinicInfo';

const FlapClinicInfo: React.FC = () => {
  return (
    <ModifiableClinicInfo backgroundColor="#FAE2BBAB" images={flapClinicInfo} />
  );
};

export default FlapClinicInfo;
