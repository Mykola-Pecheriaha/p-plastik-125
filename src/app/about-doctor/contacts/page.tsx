import type React from 'react';
import AdresContacts from '@/components/AdresContacts/AdresContacts';
import OperatingRoom from '@/components/OperatingRoom/OperatingRoom';
import PostoperativeRooms from '@/components/PostoperativeRooms/PostoperativeRooms';
import MapComponent from '@/components/MapComponent';
import ContactForm from '@/components/ContactForm';

const ContactsPage: React.FC = () => {
  return (
    <>
      <AdresContacts backgroundColor="#FCBC56AB" />
      <OperatingRoom backgroundColor="#F7EFCDFF" />
      <PostoperativeRooms backgroundColor="#F0F4F8" />
      <MapComponent />
      <ContactForm
        backgroundColor="#6FC1F8FF"
        borderColor="#0A56BBFF"
        shadowColor="rgba(24, 16, 128, 0.1)"
      />
    </>
  );
};

export default ContactsPage;
