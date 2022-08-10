import { Img, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';

const BlogCard = ({ img, name }) => {
  return (
    <>
      <Stack
        className="gridarrow"
        direction={'row'}
        borderRadius={'md'}
        bg={'black'}
        h={'24'}
        align={'center'}
      >
        <Img src={img} boxSize={'24'} borderLeftRadius={'md'} />
        <Stack
          direction={'row'}
          justify={'space-between'}
          w={'full'}
          align={'center'}
          pr={'4'}
          color={'#B1BAD3'}
          fontWeight={'bold'}
        >
          <Text color={'white'}>{name}</Text>
          <IoIosArrowForward size={'1.5rem'} className={'navigator'} />
        </Stack>
      </Stack>
    </>
  );
};

export default BlogCard;
