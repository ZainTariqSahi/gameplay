import React from 'react';
import SportsHomeComp from '../../../components/sports/home/SportsHomeComp';
import LayoutComp from '../../../layout/LayoutComp';
import useDocumentTitle from '../../../utils/useDocumentTitle';

const SportsHomeScreen = () => {

  useDocumentTitle('Crypto & Bitcoin Online Sportsbook')
  return (
    <LayoutComp>
      <SportsHomeComp />
    </LayoutComp>
  );
};

export default SportsHomeScreen;
