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
      <SurgeryRehabilitation backgroundColor="#5CAEE9FF" />
      <RehabilitationLimits backgroundColor="#3FE2D2FF" />
      <BreastSurgeryRecovery backgroundColor="#DB9DEEFF" />
      <AbdominoplastyRecovery backgroundColor="#EAF096FF" />
      <FacialSurgeryRecovery backgroundColor="#C4F552FF" />
      <ReturnToNormalLife backgroundColor="#64C4F0FF" />
    </div>
  );
};

export default RehabilitationPage;
