import {
  Stack,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  HStack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  Select,
} from '@chakra-ui/react';
import React from 'react';
import { FaGripHorizontal } from 'react-icons/fa';
import { IoChevronBack } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import SportsDetailCard from '../../../components/sports/home/SportsDetailCard';
import SportsStats from '../../../components/sports/home/SportsStats';
import LayoutComp from '../../../layout/LayoutComp';

const Mlb = () => {
  const nav = useNavigate();
  return (
    <LayoutComp>
      <Stack
        px={{ base: '2', md: '8', lg: '12', xl: '16' }}
        py={'4'}
        bgColor={'#000000ed'}
      >
        <Stack direction={'row'}>
          <Stack
            _hover={{ cursor: 'pointer'}}
            direction={'row'}
            alignItems={'center'}
            borderRadius={'md'}
            maxW={'fit-content'}
            bgColor={'black'}
            py={'3'}
            px={'5'}
          >
            <IoChevronBack
              fontWeight={'700'}
              fontSize={'1.2rem'}
              color="white"
            />
          </Stack>
          <Stack
            maxW={'fit-content'}
            bgColor={'black'}
            borderRadius={'md'}
            px={'4'}
            py={'3'}
          >
            <Breadcrumb separator="/" color={'#5B6870'}>
              <BreadcrumbItem>
                <BreadcrumbLink
                  href="#"
                  color={'white'}
                  fontSize={'md'}
                  fontWeight={'500'}
                >
                  Baseball
                </BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem>
                <BreadcrumbLink
                  href="#"
                  color={'white'}
                  fontSize={'md'}
                  fontWeight={'500'}
                >
                  USA
                </BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink
                  color={'#5B6870'}
                  fontSize={'md'}
                  fontWeight={'500'}
                  href="#"
                >
                  MLB
                </BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
          </Stack>
        </Stack>
        <Tabs variant="soft-rounded">
          <Stack
            direction={'row'}
            pt={'6'}
            align={'center'}
            justify={'space-between'}
          >
            <TabList
              overflowX={'auto'}
              w={'fit-content'}
              borderRadius={'full'}
              bgColor={'black'}
            >
              <Stack direction={'row'} p={'2'}>
                <Tab
                  color={'white'}
                  _selected={{ color: 'white', bg: '#2F4553' }}
                  w={'max-content'}
                  fontSize={'sm'}
                >
                  <Text>Live & Upcoming</Text>
                </Tab>
                <Tab
                  w={'fit-content'}
                  color={'white'}
                  _selected={{ color: 'white', bg: '#2F4553' }}
                  // w={'max-content'}
                  fontSize={'sm'}
                >
                  <Text>Outrights</Text>
                </Tab>
                <Tab
                  color={'white'}
                  _selected={{ color: 'white', bg: '#2F4553' }}
                  w={'max-content'}
                  fontSize={'sm'}
                >
                  <Text>All Baseball</Text>
                </Tab>
              </Stack>
            </TabList>
            {/* Table rows listing */}
            <Stack
              maxWidth={'fit-content'}
              direction={'row'}
              spacing={{ base: '2', md: '4', lg: '6' }}
              color="white"
              alignItems={'center'}
            >
              <FaGripHorizontal color="#B1BAD3" fontSize={'1rem'} />
              <Select
                fontSize={'sm'}
                fontWeight={'500'}
                _hover={{cursor: 'pointer' }}
                _focusVisible={{}}
                bg={'black'}
                variant="filled"
                //   placeholder="Popular"
              >
                <option style={{ color: 'white' , backgroundColor:'black' }}>Winner</option>
                <option style={{ color: 'white' , backgroundColor:'black' }}>Total</option>
                <option style={{ color: 'white' , backgroundColor:'black' }}>Handicap</option>
              </Select>
            </Stack>
          </Stack>
          <TabPanels>
            {/* live & upcoming */}
            <TabPanel padding={'0'} py={'4'}>
              <SportsDetailCard />
            </TabPanel>
            {/* outrights */}
            <TabPanel padding={'0'} py={'4'}>
              <SportsDetailCard />
            </TabPanel>
            {/* All Badseball */}
            <TabPanel padding={'0'} py={'4'}>
              <SportsDetailCard />
            </TabPanel>
          </TabPanels>
        </Tabs>
        <SportsStats />
      </Stack>
    </LayoutComp>
  );
};

export default Mlb;
