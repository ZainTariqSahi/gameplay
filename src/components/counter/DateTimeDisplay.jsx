import { Stack, Text } from '@chakra-ui/react';
import React from 'react';

const DateTimeDisplay = ({ value, type, isDanger, color, textShadow }) => {
  return (

    <Stack className={isDanger ? 'countdown danger' : 'countdown'} align={'center'}>
      <Text style={{ color: color, textShadow: textShadow }} fontSize={{ base: '3xl', lg: '4xl' }} pb={{ base: '4', md: '4', lg: '2' }}>{value}</Text>
      <span style={{ color: '#FCFCFC', textTransform: 'capitalize' }}>{type}</span>
    </Stack>
  );
};

export default DateTimeDisplay;
