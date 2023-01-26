import * as React from 'react';
import * as Chakra from '@chakra-ui/react';
import * as FM from 'framer-motion';
import Title from '../../Title';

const ChakraNav = Chakra.chakra(FM.motion.div, {
  shouldForwardProp: (prop) =>
    FM.isValidMotionProp(prop) || Chakra.shouldForwardProp(prop)
});

const AnimatedNav: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  return (
    <Chakra.Box
      bgColor='lightblue'
      display='flex'
      flexDir='column'
      alignItems='center'
      minH='100vh'
      overflow='hidden'
    >
      <Title title='Animated Nav' />
      <ChakraNav
        animate={
          isOpen ? { width: ['80px', '350px'] } : { width: ['350px', '80px'] }
        }
        //@ts-ignore
        transition={{
          duration: 1,
          ease: 'easeInOut'
        }}
        display='flex'
        alignItems='center'
        justifyContent='center'
        bgColor='white'
        p='10px'
        w='80px'
        borderRadius='3px'
        boxShadow='0 2px 4px rgba(0, 0, 0, 0.3)'
      >
        <Chakra.List
          as={ChakraNav}
          animate={
            isOpen ? { width: ['0%', '100%'] } : { width: ['100%', '0%'] }
          }
          //@ts-ignore

          transition={{
            duration: 0.6,
            ease: 'easeInOut'
          }}
          display='flex'
          listStyleType='none'
          pos='relative'
          p='0'
          m='0'
        >
          <Chakra.ListItem
            as={ChakraNav}
            pos='absolute'
            top='-12px'
            left='0px'
            display={isOpen ? 'block' : 'none'}
            animate={
              isOpen ? { opacity: ['0%', '100%'] } : { opacity: ['100%', '0%'] }
            }
            //@ts-ignore

            transition={{
              duration: 0.6,
              ease: 'easeInOut'
            }}
          >
            <Chakra.Link
              pos='relative'
              color='black'
              textDecor='none'
              mx='10px'
              pointerEvents={isOpen ? 'fill' : 'none'}
            >
              Home
            </Chakra.Link>
          </Chakra.ListItem>
          <Chakra.ListItem
            as={ChakraNav}
            pos='absolute'
            top='-12px'
            left='4rem'
            display={isOpen ? 'block' : 'none'}
            animate={isOpen ? { opacity: '100%' } : { opacity: '0%' }}
            //@ts-ignore

            transition={{
              duration: 0.6,
              ease: 'easeInOut'
            }}
          >
            <Chakra.Link
              pos='relative'
              color='black'
              textDecor='none'
              mx='10px'
              pointerEvents={isOpen ? 'fill' : 'none'}
            >
              Products
            </Chakra.Link>
          </Chakra.ListItem>
          <Chakra.ListItem
            as={ChakraNav}
            pos='absolute'
            top='-12px'
            left='9rem'
            display={isOpen ? 'block' : 'none'}
            animate={isOpen ? { opacity: '100%' } : { opacity: '0%' }}
            //@ts-ignore

            transition={{
              duration: 0.6,
              ease: 'easeInOut'
            }}
          >
            <Chakra.Link
              pos='relative'
              color='black'
              textDecor='none'
              mx='10px'
              pointerEvents={isOpen ? 'fill' : 'none'}
            >
              About
            </Chakra.Link>
          </Chakra.ListItem>
          <Chakra.ListItem
            as={ChakraNav}
            pos='absolute'
            top='-12px'
            left='13rem'
            display={isOpen ? 'block' : 'none'}
            animate={isOpen ? { opacity: '100%' } : { opacity: '0%' }}
            //@ts-ignore
            transition={{
              duration: 0.6,
              ease: 'easeInOut'
            }}
          >
            <Chakra.Link
              pos='relative'
              color='black'
              textDecor='none'
              mx='10px'
              pointerEvents={isOpen ? 'fill' : 'none'}
            >
              Contact
            </Chakra.Link>
          </Chakra.ListItem>
        </Chakra.List>
        <Chakra.Button
          id='toggle'
          bgColor='transparent'
          border={0}
          cursor='pointer'
          p='0'
          m='0'
          h='30px'
          w='30px'
          _hover={{ bgColor: 'transparent' }}
          onClick={() => setIsOpen(!isOpen)}
        >
          <Chakra.Box
            as={ChakraNav}
            animate={
              isOpen
                ? { rotate: ['0deg', '-45deg'], translateY: '5.05px' }
                : { rotate: ['-45deg', '0deg'], translateY: '0px' }
            }
            //@ts-ignore

            transition={{
              duration: 0.6,
              ease: 'easeInOut'
            }}
            bgColor='#5290F9'
            h='2px'
            w='25px'
            pos='absolute'
            top='8px'
            p='0'
            m='0'
          ></Chakra.Box>
          <Chakra.Box
            as={ChakraNav}
            animate={
              isOpen
                ? { rotate: ['0deg', '45deg'], translateY: '-5.05px' }
                : { rotate: ['45deg', '0deg'], translateY: '0px' }
            }
            //@ts-ignore

            transition={{
              duration: 0.6,
              ease: 'easeInOut'
            }}
            bgColor='#5290F9'
            h='2px'
            w='25px'
            pos='absolute'
            top='18px'
            p='0'
            m='0'
          ></Chakra.Box>
        </Chakra.Button>
      </ChakraNav>
    </Chakra.Box>
  );
};
export default AnimatedNav;
