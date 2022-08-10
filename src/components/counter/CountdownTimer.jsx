import { Button, HStack, Stack, Text, chakra } from '@chakra-ui/react';
import React from 'react';
import { IoIosExit } from 'react-icons/io';
import { AiFillGift } from 'react-icons/ai';
import Timer from './Timer';
const CountdownTimer = () => {
  const THREE_DAYS_IN_MS = 5 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;
  return (
    <>
      {' '}
      {/* Compitition Timer Wrapper */}
      <Stack
        spacing={'3'}
        w={'100%'}
        py={'4'}
        px={{ base: '4', md: '8', lg: '16' }}
        m={'0 !important'}
      >
        {/* Timer Wrapper */}
        <Stack
          border={'1px solid #128F8E'}
          boxShadow="#148288 2px 2px 4px 0px, #148288 1px 2px 21px 8px"
          borderRadius={'2xl'}
          bgColor="#1A1F26"
          w={'100%'}
          px={{ base: '4', md: '6', lg: '10' }}
          py={{ base: '6', lg: '0' }}
        >
          <Stack
            spacing={{ base: '12', lg: 'unset' }}
            alignItems={'center'}
            justifyContent={'space-between'}
            w={'full'}
            direction={{ base: 'column', lg: 'row' }}
          >
            {/* Exit Game Button */}
            <Button
              _hover={{}}
              borderColor="#128F8E"
              boxShadow="#148288 0px 2px 4px 0px, #148288 0px 2px 16px 0px"
              variant={'outline'}
              color="white"
              size={'lg'}
            >
              <HStack>
                <IoIosExit fontSize={'2rem'} color="aqua" />
                <Text fontSize={'sm'}>Exit Game</Text>
              </HStack>
            </Button>
            <Timer targetDate={dateTimeAfterThreeDays} />
            <Button
              _hover={{}}
              borderColor="#128F8E"
              boxShadow="#148288 0px 2px 4px 0px, #148288 0px 2px 16px 0px"
              variant={'outline'}
              color="white"
              size={'lg'}
            >
              <HStack>
                <AiFillGift fontSize={'2rem'} color="aqua" />
                <Text fontSize={'sm'}>See Prizes</Text>
              </HStack>
            </Button>
          </Stack>
        </Stack>
        <Stack
          border={'1px solid #FF9100'}
          boxShadow="#82692F 2px 2px 4px 0px, #82692F 1px 2px 21px 8px"
          borderRadius={'2xl'}
          bgColor="#1A1F26"
          w={'100%'}
          px={'3'}
          py={{ base: '6', lg: '1' }}
          textAlign="center"
          spacing={'1'}
        >
          <Text color={'#FF9100'} fontSize={'xs'}>You are <chakra.span color={'white'} fontWeight='600' fontSize={'sm'}>28th</chakra.span> out of 30,208 players</Text>
          <Text color={'#FF9100'} fontSize={'xs'}>Round <chakra.span color={'white'} fontWeight='600' fontSize={'sm'}>3</chakra.span></Text>
        </Stack>
      </Stack>
    </>
  );
};

export default CountdownTimer;
