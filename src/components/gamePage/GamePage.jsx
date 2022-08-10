import React from 'react';
import {
  Stack,
} from '@chakra-ui/react';
import LeaderBoard from '../leaderboard/LeaderBoard';
import GameConsole from './GameConsole';

const GamePage = () => {


  return (
    <Stack
      bg={'#161940'}
      w={'100%'}
      justify={'center'}
      spacing={'4'}
      pl={{ base: '4', md: '8', lg: '16' }}
      pr='0.5'
      pb={'20'}
      direction={'row'}
      justifyContent={'space-between'}
      px={{ base: '4', md: '8', lg: '16' }}
    >
      <Stack w={{ base: '100%', md: '55%' }} >
        <GameConsole />
      </Stack>
      <Stack w={'40%'} display={{ base: 'none', sm: 'inherit' }}>
        <LeaderBoard />
      </Stack>
    </Stack>
  );
};

export default GamePage;
