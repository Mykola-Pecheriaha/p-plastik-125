import React from 'react';

import BigBord from '../components/BigBord/BigBord';
import PlasticSurgeons from '../components/PlasticSurgeons/PlasticSurgeons';
import CreateBeauty from '../components/CreateBeauty/CreateBeauty';

const Home: React.FC = () => {
  return (
    <div>
      <BigBord />

      <PlasticSurgeons />

      <CreateBeauty />
    </div>
  );
};

export default Home;
