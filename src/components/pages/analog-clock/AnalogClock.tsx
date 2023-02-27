import React, { useState } from 'react';
import { Box, Button, Container, Icon, Stack, Text } from '@chakra-ui/react';
import { BiMoon, BiSun } from 'react-icons/bi';
import Title from '../../Title';
import theme from './theme';

const AnalogClock: React.FC = () => {
  const [isLightTheme, setIsLightTheme] = useState(true);

  const toggleTheme = () => {
    setIsLightTheme((prev) => !prev);
  };

  return (
    <Container
      minW='100vw'
      minH='100vh'
      fontFamily='Poppins'
      bgColor={isLightTheme ? theme.light.bg : theme.dark.bg}
      color={isLightTheme ? theme.light.font : theme.dark.font}
      transition='all .5s ease'
    >
      <Title
        title='Analog Clock'
        color={isLightTheme ? theme.light.font : theme.dark.font}
      />
      <Icon
        _hover={{ transform: 'scale(1.2)' }}
        transition='transform .3s ease'
        cursor='pointer'
        pos='absolute'
        top='87px'
        right='48px'
        fontSize='24px'
        as={isLightTheme ? BiMoon : BiSun}
        color={isLightTheme ? theme.light.font : theme.dark.font}
        onClick={toggleTheme}
      />
      <Stack w='100%' justify='center' align='center'>
        <Box textAlign='center'>
          <Box>
            <Box></Box>
            <Box></Box>
            <Box></Box>
            <Box></Box>
          </Box>
          <Text>12:00</Text>
          <Text>{`Sunday, Feb. 26`}</Text>
        </Box>
      </Stack>
    </Container>
  );
};

export default AnalogClock;
