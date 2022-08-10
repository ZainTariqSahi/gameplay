import { Stack } from '@chakra-ui/react';
import React from 'react';
import MyBets from '../../components/sports/home/MyBets';
import SportsStats from '../../components/sports/home/SportsStats';
import LayoutComp from '../../layout/LayoutComp';
import useDocumentTitle from '../../utils/useDocumentTitle';

const MyBetsScreen = () => {
  useDocumentTitle('My Settled Bets -  Stake.com');

  return (
    <LayoutComp>
      <Stack>
        <Stack  margin={'0px !important'}  bg={'#000000ed'}>
        <MyBets />
        </Stack>
        <Stack margin={'0px !important'} bg={'#000000ed'} px={{ base: '2', md: '8', lg: '12', xl: '16' }}>
          <SportsStats />
        </Stack>
      </Stack>
    </LayoutComp>
  );
};

export default MyBetsScreen;
