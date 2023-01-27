import * as React from 'react';
import * as Chakra from '@chakra-ui/react';
import { ImSearch } from 'react-icons/im';
import { FMC_Component } from '../../../utils/animations';
import { motion, AnimatePresence } from 'framer-motion';
import Title from '../../Title';

const MovieApp: React.FC = () => {
  const [isHovered, setIsHovered] = React.useState(false);

  const handleClick = () => {};

  const handleKeydown = (key: string) => {
    if (key === 'Enter') {
      console.log(key);
    }
  };

  return (
    <Chakra.Box bgColor='#778DA9' minH='92vh'>
      <Chakra.Flex m='2px 9px'>
        <Chakra.Box w='85%'></Chakra.Box>
        <Chakra.InputGroup w='15%'>
          <Chakra.Input
            placeholder='Search'
            _focus={{ border: '1.5px solid', borderColor: 'inherit' }}
            bgColor='white'
            onKeyDown={(e: React.KeyboardEvent) => handleKeydown(e.code)}
          ></Chakra.Input>
          <Chakra.InputRightElement width='4.5rem'>
            <Chakra.Icon
              cursor='pointer'
              as={ImSearch}
              h='1.75rem'
              size='sm'
              onClick={() => handleClick()}
            ></Chakra.Icon>
          </Chakra.InputRightElement>
        </Chakra.InputGroup>
      </Chakra.Flex>
      <Title title='Movie App' />
      <Chakra.Flex as='main'>
        <Chakra.Card
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          fontFamily='Poppins'
          variant='elevated'
          bgColor='#E0E1DD'
          mx='2rem'
          w='sm'
        >
          <Chakra.CardBody>
            <Chakra.Box pos='relative'>
              <Chakra.Heading
                color='white'
                pos='absolute'
                bottom='2%'
                left='25%'
                fontFamily='inherit'
                size='md'
                pb='5px'
              >
                Living room Sofa
              </Chakra.Heading>
              <Chakra.Box
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(0,0,0,0) 75%, rgba(0,0,0,1)), url('https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=384&q=80')",
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
                h='200px'
                borderRadius='lg'
              />
            </Chakra.Box>
            <Chakra.Stack mt='6' spacing='3' px='10px'>
              <Chakra.Flex justifyContent='space-between' alignItems='baseline'>
                <Chakra.Text
                  color='#0D1B2A'
                  fontSize='2xl'
                  fontWeight='bold'
                  cursor='default'
                >
                  8.8
                </Chakra.Text>
                <Chakra.Text cursor='default' fontWeight='bold'>
                  Details
                </Chakra.Text>
              </Chakra.Flex>
              <AnimatePresence>
                {isHovered && (
                  <Chakra.Text
                    as={motion.div}
                    initial={{
                      opacity: 0,
                      maxHeight: '0px',
                      minHeight: '0%'
                    }}
                    animate={{
                      opacity: [0, 0.5, 1],
                      minHeight: ['0%', '100%', '100%'],
                      maxHeight: ['0px', '150px', '150px']
                    }}
                    exit={{
                      opacity: [1, 0.1, 0],
                      minHeight: ['100%', '100%', '0%'],
                      maxHeight: ['150px', '150px', '0px']
                    }}
                    cursor='default'
                  >
                    This sofa is perfect for modern tropical spaces, baroque
                    inspired spaces, earthy toned spaces and for people who love
                    a chic design with a sprinkle of vintage design.
                  </Chakra.Text>
                )}
              </AnimatePresence>
            </Chakra.Stack>
          </Chakra.CardBody>

          <Chakra.CardFooter as={FMC_Component}>
            <Chakra.ButtonGroup
              w='100%'
              display='flex'
              justifyContent='center'
              spacing='2'
            >
              <AnimatePresence>
                {isHovered && (
                  <Chakra.Button
                    as={motion.div}
                    initial={{
                      display: 'none'
                    }}
                    animate={{
                      opacity: [0, 1, 1],
                      display: ['none', 'block', 'block']
                    }}
                    exit={{
                      opacity: [1, 1, 0],
                      maxHeight: ['100px', '100px', '0px']
                    }}
                    cursor='default'
                    variant='ghost'
                    colorScheme='blue'
                  >
                    More
                  </Chakra.Button>
                )}
              </AnimatePresence>
            </Chakra.ButtonGroup>
          </Chakra.CardFooter>
        </Chakra.Card>
      </Chakra.Flex>
    </Chakra.Box>
  );
};

export default MovieApp;
