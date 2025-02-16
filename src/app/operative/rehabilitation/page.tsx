import React from 'react';
import SurgeryRehabilitation from '../../../components/SurgeryRehabilitation/SurgeryRehabilitation';
import RehabilitationLimits from '../../../components/RehabilitationLimits/RehabilitationLimits';
import BreastSurgeryRecovery from '../../../components/BreastSurgeryRecovery/BreastSurgeryRecovery';
import AbdominoplastyRecovery from '../../../components/AbdominoplastyRecovery/AbdominoplastyRecovery';
import FacialSurgeryRecovery from '../../../components/FacialSurgeryRecovery/FacialSurgeryRecovery';
import ReturnToNormalLife from '../../../components/ReturnToNormalLife/ReturnToNormalLife';

const RehabilitationPage: React.FC = () => {
  return (
    <div>
      <SurgeryRehabilitation backgroundColor="#e5f0f8" />
      <RehabilitationLimits backgroundColor="#e5f0f8" />
      <BreastSurgeryRecovery backgroundColor="#e5f0f8" />
      <AbdominoplastyRecovery backgroundColor="#e5f0f8" />
      <FacialSurgeryRecovery backgroundColor="#e5f0f8" />
      <ReturnToNormalLife backgroundColor="#e5f0f8" />
    </div>
  );
};

export default RehabilitationPage;
