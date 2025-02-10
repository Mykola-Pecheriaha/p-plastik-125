import React from 'react';
import MykolaSurgeon from '../../../components/MykolaSurgeon/MykolaSurgeon';
import Portfolio from '../../../components/Portfolio/Portfolio';
import ModifiablePlasticSurgeons from '../../../components/ModifiablePlasticSurgeons/ModifiablePlasticSurgeons';

const AboutUs: React.FC = () => {
  return (
    <div>
      <MykolaSurgeon />
      <Portfolio />
      <ModifiablePlasticSurgeons backgroundColor="#B9F8EAFF" />
    </div>
  );
};

export default AboutUs;
