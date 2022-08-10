import { Stack } from '@chakra-ui/react';
import React from 'react';
import SportsStats from '../../components/sports/home/SportsStats';
import StartingSoon from '../../components/sports/home/StartingSoon';
import LayoutComp from '../../layout/LayoutComp';
import useDocumentTitle from '../../utils/useDocumentTitle';

const StartingSoonScreen = () => {
  useDocumentTitle('Bet Upcoming Sports,Events & TimeTable');

  return (
    <LayoutComp>
      <Stack
        px={{ base: '2', md: '8', lg: '12', xl: '16' }}
        py={'4'}
        bgColor={'#000000ed'}
      >
        <StartingSoon />
        <SportsStats />
      </Stack>
    </LayoutComp>
  );
};

export default StartingSoonScreen;
