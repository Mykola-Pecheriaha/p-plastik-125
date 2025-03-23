import React from 'react';
import BreastSurgeriCombin from '../../../components/BreastSurgeriCombin/BreastSurgeriCombin';
import BreastCombinIndications from '../../../components/BreastCombinIndications/BreastCombinIndications';
import BreastBeforeAfte from '../../../components/BreastBeforeAfte/BreastBeforeAfte';
import BreastSurgeryPreparation from '../../../components/BreastSurgeryPreparation/BreastSurgeryPreparation';
import BreastIncisions from '../../../components/BreastIncisions/BreastIncisions';
import BreastSurgeryIndications from '../../../components/BreastSurgeryIndications/BreastSurgeryIndications';
import BreastSurgeryCotraindications from '../../../components/BreastSurgeryCotraindications/BreastSurgeryCotraindications';
import BreastSurgerySteps from '../../../components/BreastSurgerySteps/BreastSurgerySteps';

const BreastSurgeryPage: React.FC = () => {
  return (
    <div>
      <BreastSurgeriCombin backgroundColor="#e5f0f8" />
      <BreastCombinIndications backgroundColor="#C1F7DDFF" />
      <BreastBeforeAfte backgroundColor="#B9DDF7FF" />
      <BreastSurgeryPreparation backgroundColor="#e5f0f8" />
      <BreastIncisions backgroundColor="#EADEF8FF" />
      <BreastSurgeryIndications backgroundColor="#e5f0f8" />
      <BreastSurgeryCotraindications backgroundColor="#9ED7FFFF" />
      <BreastSurgerySteps
        backgroundColor="#C6F5E5FF"
        collapsedColor="#ffffff"
        expandedColor="#f8f9fa"
        hoverColor="#f3f4f6"
      />
    </div>
  );
};

export default BreastSurgeryPage;
