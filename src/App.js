import React from 'react';
import {
  ChakraProvider,
  Stack,
  theme,
} from '@chakra-ui/react';
import GamePage from './components/gamePage/GamePage'
import CountdownTimer from './components/counter/CountdownTimer';
import Header from './components/header/Header';
import './App.css'
function App() {
  return (
    <ChakraProvider theme={theme}>
      <Stack minH={'100vh'} bgColor={'#1D1D30'}> {/*Home Page Container */}
        {/* <Header /> */}
        <CountdownTimer />
        <GamePage />
      </Stack>
    </ChakraProvider>
  );
}

export default App;
