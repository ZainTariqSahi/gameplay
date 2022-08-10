import { Heading, Stack, Text, Input, Image } from '@chakra-ui/react';
import { RiSendPlaneFill } from 'react-icons/ri';
import { React, useState } from 'react';
import sendIcon from '../../assets/images/icon-material-send.svg'
import '../../App.css'
const LiveChat = () => {
  const [value, setValue] = useState('');
  const handleChange = event => setValue(event.target.value);

  return (
    <Stack
      w={'100%'}
      py={'8'}
      bg={'#1A1F26'}
      borderRadius={'3xl'}
      mt={'0 !important'}
      border={'1px solid #FF00FF'}
      boxShadow="#772138 2px 2px 4px 0px, #772138 1px 2px 10px 4px"
      h={'70vh'}
    >
      <Stack mb={'4 !important'} px={'10'} w={'full'} alignItems="baseline">
        <Heading
          color={'#FFFFFF'}
          fontSize={'xl'}
          borderBottom={'4px solid #FCA120'}
          pb={'1.5'}
        >
          Live Chat
        </Heading>
      </Stack>
      <Stack spacing={'3'} overflow={'scroll'} className='chat' overflowX={'hidden'}>
        <Stack p={'4'} mx="3 !important" bgColor={'#1D1D30'}>
          <Heading fontSize={'sm'} color={'#23C232'}>
            Jackpot Classic
          </Heading>
          <Text fontSize={'sm'} color={'#BCBCC2'}>
            Lorem ipsum is a placeholder text commonly used to demonstrate the
            visual form of a document or a typeface without relying on
            meaningful content.
          </Text>
        </Stack>
        <Stack p={'4'} mx="3 !important" bgColor={'#1D1D30'}>
          <Heading fontSize={'sm'} color={'#20DEFC'}>
            Jackpot Classic
          </Heading>
          <Text fontSize={'sm'} color={'#BCBCC2'}>
            Lorem ipsum is a placeholder text commonly used to demonstrate the
            visual form of a document or a typeface without relying on
            meaningful content.
          </Text>
        </Stack>
        <Stack
          direction={'row'}
          spacing="4"
          p={'4'}
          mx="3 !important"
          bgColor={'#1D1D30'}
        >
          <Heading fontSize={'sm'} color={'#F59D20'}>
            Roulette
          </Heading>
          <Text fontSize={'sm'} color={'#BCBCC2'}>
            Thank You!
          </Text>
        </Stack>
        <Stack p={'4'} mx="3 !important" bgColor={'#1D1D30'}>
          <Heading fontSize={'sm'} color={'#FC2020'}>
            Jackpot Classic
          </Heading>
          <Text fontSize={'sm'} color={'#BCBCC2'}>
            Lorem ipsum is a placeholder text commonly used to demonstrate the
            visual form of a document or a typeface without relying on
            meaningful content.
          </Text>
        </Stack>
      </Stack>

      {/* send message */}
      <Stack px='4'>
      <Stack
        border={'1px solid #FF9100'}
        boxShadow="#82692F 2px 2px 4px 0px, #82692F 1px 2px 7px 3px"
        direction={'row'}
        alignItems={'center'}
        justifyContent={'space-between'}
        p={'2'}
        w={'100%'}
      >
        <Stack w={'100%'} direction={'row'} alignItems={'center'}>
          <Heading fontSize={'sm'} color={'#E2A004'}>
            Me:
          </Heading>
          <Input
            _focusVisible={{}}
            border={'none'}
            value={value}
            onChange={handleChange}
            placeholder="Here is a sample placeholder"
            color={'#BCBCC2'}
            size="sm"
          />
        </Stack>
        <Stack _hover={{cursor:'pointer'}}  p='1.5' borderRadius={'md'}>
          <Image src={sendIcon}/>
        </Stack>
      </Stack>
      </Stack>
    </Stack>
  );
};

export default LiveChat;
