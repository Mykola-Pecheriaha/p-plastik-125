import React from 'react';
import OperatingRoom from '../../../components/OperatingRoom/OperatingRoom';
import SurgicalRoomStandards from '../../../components/SurgicalRoomStandards/SurgicalRoomStandards';
import OperatingRoomEquipment from '../../../components/OperatingRoomEquipment/OperatingRoomEquipment';

const OperativeRoomPage: React.FC = () => {
  return (
    <div>
      <OperatingRoom backgroundColor="#F7EFCDFF" />
      <SurgicalRoomStandards backgroundColor="#F4F5EEFF" />
      <OperatingRoomEquipment backgroundColor="#F7F5C2FF" />
    </div>
  );
};

export default OperativeRoomPage;
