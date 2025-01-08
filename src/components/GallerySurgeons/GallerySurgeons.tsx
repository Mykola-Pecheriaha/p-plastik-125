'use client';

import React from 'react';
import Gallery from '../Gallery/Gallery';
import plasticSurgeons from '../../data/plasticSurgeons';

const GallerySurgeons: React.FC = () => {
  return (
    <div>
      {/* <h2>Печеряга Микола Миколайович</h2> */}
      <Gallery images={plasticSurgeons} />
    </div>
  );
};

export default GallerySurgeons;
