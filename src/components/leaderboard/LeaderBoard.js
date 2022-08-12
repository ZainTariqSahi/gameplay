import {
  Heading,
  Stack,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react';

import LiveChat from '../livechat/LiveChat';
import AnimateTable from '../ui/AnimateTable';

const LeaderBoard = () => {
  return (
    <Stack w={'100%'} h={'100%'}>
      <Stack direction={'column'} bgColor={'#071836'}>
        <Heading
          border={'1px solid #FF9100'}
          boxShadow="0px 0px 8px #FDB620"
          backgroundColor={'#41240F'}
          p={'2'}
          size={'sm'}
          textAlign={'center'}
          color={'#EFB94A'}
        >
          LeaderBoard
        </Heading>
        {/* <TableContainer mt={'0 !important'} >
          <Table variant="unstyled" fontSize={'xs'}>
            <Tbody bgColor={'#071836'}  overflow={'scroll'} overflowX={'hidden'}>
              <Tr>
                <Td color={'#FF0066'} >1</Td>
                <Td color={'#25F933'}>Sohaib</Td>
                <Td isNumeric color={'#FF0066'}>
                  25.4
                </Td>
                <Td isNumeric color={'#FF0066'}>
                  25.4
                </Td>
              </Tr>
              <Tr>
                <Td color={'#00C3F6'}>2</Td>
                <Td color={'#20DEFC'}>Sufyan</Td>
                <Td isNumeric color={'#00C3F6'}>
                  30.48
                </Td>
                <Td isNumeric color={'#00C3F6'}>
                  25.4
                </Td>
              </Tr>
              <Tr
                border={'1px solid #128F8E'}
                boxShadow="0px 0px 6px #07E6FF"
              >
                <Td color={'#5AFFEE'}>3</Td>
                <Td color={'#FCA120'}>Asad (m)</Td>
                <Td isNumeric color={'#5AFFEE'}>
                  0.91444
                </Td>
                <Td isNumeric color={'#5AFFEE'}>
                  25.4
                </Td>
              </Tr>
              <Tr>
                <Td color={'#FFB300'}>4</Td>
                <Td color={'#EB0263'}>Mustafa</Td>
                <Td isNumeric color={'#DC9D07'}>
                  30.48
                </Td>
                <Td isNumeric color={'#E8A405'}>
                  25.4
                </Td>
              </Tr>
              <Tr>
                <Td color={'#EB0263'}>5</Td>
                <Td color={'#25F933'}>Gohar</Td>
                <Td isNumeric color={'#EB0263'}>
                  30.48
                </Td>
                <Td isNumeric color={'#EB0263'}>
                  25.4
                </Td>
              </Tr>
            </Tbody>
            <Tfoot></Tfoot>
          </Table>
        </TableContainer> */}
        <AnimateTable/>
        <Stack w={'100%'} mt={'0 !important'} >
          <LiveChat />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default LeaderBoard;
