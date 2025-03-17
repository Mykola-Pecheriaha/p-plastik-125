import React from 'react';

import BigBord from '../components/BigBord/BigBord';
import PlasticSurgeons from '../components/PlasticSurgeons/PlasticSurgeons';
import CreateBeauty from '../components/CreateBeauty/CreateBeauty';
import BigBlefaro from '../components/BigBlefaro/BigBlefaro';
import BigAbdomino from '../components/BigAbdomino/BigAbdomino';
import BigClinic from '../components/BigClinic/BigClinic';
import BigQuestions from '../components/BigQuestions/BigQuestions';

const Home: React.FC = () => {
  return (
    <div>
      <BigBord />

      <PlasticSurgeons />

      <CreateBeauty />

      <BigBlefaro />

      <BigAbdomino backgroundColor="#EAD3F3FF" />

      <BigClinic />

      <BigQuestions />
    </div>
  );
};

export default Home;
