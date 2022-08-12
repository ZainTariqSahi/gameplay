import {
  CircularProgress,
  CircularProgressLabel,
  Heading,
  IconButton,
  Stack,
  Text,
  chakra,
  Button,
  HStack,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { BsFillTriangleFill } from 'react-icons/bs';
import { GiShoppingCart } from 'react-icons/gi';
import classes from './Odometer.module.css';
import AnimatedNumber from 'react-animated-number';
import AnimatedNumbers from 'react-animated-numbers';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import '../../App.css';

const GameConsole = () => {
  const [counter, setCounter] = useState(100);
  const [number, setnumber] = useState(10);

  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const loadingDuration = 3000; // 3 seconds

  const renderTime = ({ remainingTime }) => {
    return (
      <div>
        <Stack
          backgroundClip={'text'}
          // style={{ WebkitTextStroke: '1px #20fc9d',color:'#A31EC7'}}
          style={{ WebkitTextStroke: '1px' }}
          fontSize={'130px'}
          direction={'column'}
          alignItems={'center'}
          fontWeight={'1000'}
          color={'#A81DC6'}
        >
          {' '}
          <AnimatedNumbers animateToNumber={number}></AnimatedNumbers>
        </Stack>
      </div>
    );
  };

  useEffect(() => {
    let loadingTimeout = setTimeout(() => {
      if (loading >= 100) return;
      setProgress(progress + 1);
    }, loadingDuration / 100);
    if (progress === 100) {
      setLoading(false);
    }
    return () => {
      clearTimeout(loadingTimeout);
    };
  }, [progress, loading]);

  useEffect(() => {
    const interval = setInterval(
      () => setnumber(Math.floor(Math.random() * 20 + 1)),
      11000
    );
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    if (counter < 0) {
      setCounter(100);
    }
    const timeOut = setInterval(() => setCounter(counter - 10), 1000);
    return () => {
      clearInterval(timeOut);
    };
  }, [counter]);
  return (
    <>
      <Stack
        border={'1px solid #FF00FF'}
        boxShadow="#772138 2px 2px 4px 0px, #772138 1px 2px 21px 8px"
        borderRadius={'lg'}
        bgColor="#1A1F26"
        w={{ base: '100%' }}
        px="4"
        py={'1'}
        textAlign="center"
        spacing={'7'}
        direction="row"
        alignItems={'baseline'}
      >
        <Text color={'#00F0FF'}>10</Text>
        <Text color={'#00F0FF'}>3</Text>
        <Text color={'#00F0FF'}>17</Text>
        <Text color={'#20FC9D'} fontSize="1.3em" fontWeight={'600'}>
          9
        </Text>
      </Stack>
      <Stack
        px={{ base: '2', md: '0', lg: '2', xl: '24' }}
        py={'6'}
        spacing={'6'}
      >
        {/* <CircularProgress
          trackColor="inherit"
          capIsRound
          thickness={'6px'}
          className="circlular progress"
          value={counter}
          size={'20rem'}
          color={'#20fc94'}
          alignItems={'center'}
          justifyContent={'center'}
          display={'flex'}
        >
          <CircularProgressLabel
            className="circlular progress lable"
            borderRadius={'full'}
            alignItems={'center'}
            justifyContent={'center'}
            display={'flex'}
          >
            <Stack
              border={'5px solid #20FC9D'}
              borderRadius={'full'}
              h={{ base: '14rem', sm: '15.5rem' }}
              w={{ base: '14rem', sm: '15.5rem' }}
              align={'center'}
              justify={'center'}
            >
              <Stack
                border={'5px solid #13cee6'}
                borderRadius={'full'}
                h={{ base: '12rem', sm: '14rem' }}
                w={{ base: '12rem', sm: '14rem' }}
                boxShadow={'0 0 25px #13cee6'}
                align={'center'}
                justify={'center'}
              >
                <Stack
                  className="text"
                  w={'75%'}
                  h={'85%'}
                  align={'center'}
                  justify={'center'}
                  spacing="-9"
                  display={'flex'}
                >
                  <Heading
                    as={'h1'}
                    flex={'2'}
                    fontSize={''}
                    background={
                      'radial-gradient(circle, rgba(201,18,191,1) 0%, rgba(134,40,206,1) 51%)'
                    }
                    backgroundClip={'text'}
                    style={{ WebkitTextStroke: '1px #20fc9d' }}
                    fontWeight="700"
                  > */}
        {/* {number} */}
        {/* <AnimatedNumber
          value={number}
          style={{
            fontSize: 100
          }}
          duration={1050}
          formatValue={(n) => n.toFixed(0)}
          frameStyle={(percentage) =>
            percentage > 20 && percentage < 80 ? { opacity: 0.5 } : {}
          }
        /> */}
        {/* <AnimatedNumbers animateToNumber={number}></AnimatedNumbers>
                  </Heading>
                  <Text
                    justifyItems={'end'}
                    color={'#FCA120'}
                    px={'4'}
                    fontSize={{ base: 'x-small', sm: 'xs' }}
                    flex={'1'}
                  >
                    Will the next number be Higher or Lower
                  </Text>
                </Stack>
              </Stack>
            </Stack>
          </CircularProgressLabel>
        </CircularProgress> */}

        <Stack alignSelf={'center'} className={'test'}>
          <CountdownCircleTimer
            isPlaying
            duration={10}
            colors={['#20fc94', '#20fc94', '#20fc94', '#20fc94']}
            colorsTime={[10, 6, 3, 0]}
            onComplete={() => ({ shouldRepeat: true, delay: 2 })}
            size={350}
            strokeWidth={30}
          >
            <Stack
              border={'5px solid #20FC9D'}
              borderRadius={'full'}
              h={{ base: '14rem', sm: '15.5rem' }}
              w={{ base: '14rem', sm: '15.5rem' }}
              align={'center'}
              justify={'center'}
            >
              {renderTime}
            </Stack>
          </CountdownCircleTimer>
        </Stack>
        <Stack direction={'row'} justify={'space-between'}>
          <Stack align={'center'}>
            <IconButton
              icon={
                <BsFillTriangleFill
                  style={{
                    stroke: '#5AFFEE',
                    strokeWidth: '1',
                    width: '100%',
                    filter: 'drop-shadow( 0px -6px 5px #5affee)',
                  }}
                  size={'1.5em'}
                />
              }
              w={'fit-content'}
              variant={'ghost'}
              color={'white'}
              _hover={{}}
              _focus={{}}
              _active={{}}
            />
            <Heading
              color={'white'}
              textShadow={'#5AFFEE 1px 1px 8px'}
              style={{ WebkitTextStroke: '1px #5AFFEE' }}
              size={'xs'}
            >
              HIGH
            </Heading>
          </Stack>
          <Text color={'#B6B7C3'} fontSize={'sm'}>
            Number range from{' '}
            <chakra.span fontWeight={'bold'} color={'white'}>
              1 to 21
            </chakra.span>
          </Text>
          <Stack align={'center'}>
            <IconButton
              icon={
                <BsFillTriangleFill
                  style={{
                    stroke: '#FF0066',
                    strokeWidth: '1',
                    width: '100%',
                    filter: 'drop-shadow( 0px -6px 5px #FF0066)',
                    transform: 'rotate(180deg)',
                  }}
                  size={'1.5em'}
                />
              }
              w={'fit-content'}
              variant={'ghost'}
              color={'white'}
              _hover={{}}
              _focus={{}}
              _active={{}}
              sx={{ filter: 'dropShadow(0 -6mm 4mm rgb(160, 0, 210))' }}
            />
            <Heading
              color={'white'}
              textShadow={'#FF0066 1px 1px 8px'}
              style={{ WebkitTextStroke: '1px #FF0066' }}
              size={'xs'}
            >
              LOW
            </Heading>
          </Stack>
        </Stack>
        <Stack
          direction={{ base: 'column', sm: 'row' }}
          justify={'space-between'}
          align={'center'}
          spacing={{ base: '6', sm: 'inherit' }}
        >
          <Text color={'white'} align={'center'} fontSize={'md'}>
            <chakra.span
              fontSize={'md'}
              color={'white'}
              textShadow={'#FFB300 1px 1px 8px'}
              style={{ WebkitTextStroke: '0.5px #FFB300' }}
            >
              05
            </chakra.span>
            more chances to improve your score
          </Text>
          <Button
            _hover={{}}
            border="2px solid #13cee6"
            borderColor={''}
            boxShadow="#13cee6 0px 0px 4px 0px, #13cee6 0px 0px 16px 0px"
            variant={'outline'}
            color="white"
            size={'md'}
            borderRadius={'lg'}
            leftIcon={<GiShoppingCart color="#13cee6" />}
          >
            <Text fontSize={'sm'}>Buy more</Text>
          </Button>
        </Stack>
      </Stack>
    </>
  );
};

export default GameConsole;
