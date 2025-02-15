import React from 'react';
import OperatingRoom from '../../../components/OperatingRoom/OperatingRoom';
import SurgicalRoomStandards from '../../../components/SurgicalRoomStandards/SurgicalRoomStandards';
import OperatingRoomEquipment from '../../../components/OperatingRoomEquipment/OperatingRoomEquipment';

const OperativeRoomPage: React.FC = () => {
  return (
    <div>
      <OperatingRoom backgroundColor="#98C9ECFF" />
      <SurgicalRoomStandards backgroundColor="#e5f0f8" />
      <OperatingRoomEquipment backgroundColor="#e5f0f8" />
    </div>
  );
};

export default OperativeRoomPage;
