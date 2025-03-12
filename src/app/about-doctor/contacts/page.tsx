import type React from 'react';
import AdresContacts from '@/components/AdresContacts/AdresContacts';
import OperatingRoom from '@/components/OperatingRoom/OperatingRoom';
import PostoperativeRooms from '@/components/PostoperativeRooms/PostoperativeRooms';
import MapComponent from '@/components/MapComponent';

const ContactsPage: React.FC = () => {
  return (
    <>
      <AdresContacts backgroundColor="#FCBC56AB" />
      <OperatingRoom backgroundColor="#F7EFCDFF" />
      <PostoperativeRooms backgroundColor="#F0F4F8" />
      <MapComponent />
    </>
  );
};

export default ContactsPage;
