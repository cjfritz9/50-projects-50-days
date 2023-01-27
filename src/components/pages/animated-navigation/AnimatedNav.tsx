import * as React from 'react';
import * as Chakra from '@chakra-ui/react';
import * as Animations from '../../../utils/animations';
import Title from '../../Title';

const AnimatedNav: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(true);

  return (
    <Chakra.Box
      bgColor='lightblue'
      display='flex'
      flexDir='column'
      alignItems='center'
      minH='92vh'
      overflow='hidden'
    >
      <Title title='Animated Nav' />
      <Animations.FMC_Component
        animate={
          isOpen ? Animations.NavContainer.open : Animations.NavContainer.closed
        }
        //@ts-ignore
        transition={Animations.ContainerTransition}
        display='flex'
        alignItems='center'
        justifyContent='center'
        bgColor='white'
        p='10px'
        w='60px'
        borderRadius='3px'
        boxShadow='0 2px 4px rgba(0, 0, 0, 0.3)'
      >
        <Chakra.List
          as={Animations.FMC_Component}
          animate={isOpen ? Animations.NavList.open : Animations.NavList.closed}
          //@ts-ignore
          transition={Animations.ChildrenTransition}
          display='flex'
          listStyleType='none'
          pos='relative'
          p='0'
          m='0'
        >
          <Chakra.ListItem
            as={Animations.FMC_Component}
            pos='absolute'
            top='-12px'
            left='0px'
            display={isOpen ? 'block' : 'none'}
            animate={
              isOpen ? Animations.NavItem.open : Animations.NavItem.closed
            }
            //@ts-ignore
            transition={Animations.ChildrenTransition}
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
            as={Animations.FMC_Component}
            pos='absolute'
            top='-12px'
            left='4rem'
            display={isOpen ? 'block' : 'none'}
            animate={
              isOpen ? Animations.NavItem.open : Animations.NavItem.closed
            }
            //@ts-ignore
            transition={Animations.ChildrenTransition}
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
            as={Animations.FMC_Component}
            pos='absolute'
            top='-12px'
            left='9rem'
            display={isOpen ? 'block' : 'none'}
            animate={
              isOpen ? Animations.NavItem.open : Animations.NavItem.closed
            }
            //@ts-ignore
            transition={Animations.ChildrenTransition}
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
            as={Animations.FMC_Component}
            pos='absolute'
            top='-12px'
            left='13rem'
            display={isOpen ? 'block' : 'none'}
            animate={
              isOpen ? Animations.NavItem.open : Animations.NavItem.closed
            }
            //@ts-ignore
            transition={Animations.ChildrenTransition}
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
            as={Animations.FMC_Component}
            animate={
              isOpen
                ? Animations.NavIcon.top.open
                : Animations.NavIcon.top.closed
            }
            //@ts-ignore
            transition={Animations.ChildrenTransition}
            bgColor='#5290F9'
            h='2px'
            w='25px'
            pos='absolute'
            top='8px'
            p='0'
            m='0'
          ></Chakra.Box>
          <Chakra.Box
            as={Animations.FMC_Component}
            animate={
              isOpen
                ? Animations.NavIcon.bottom.open
                : Animations.NavIcon.bottom.closed
            }
            //@ts-ignore
            transition={Animations.ChildrenTransition}
            bgColor='#5290F9'
            h='2px'
            w='25px'
            pos='absolute'
            top='18px'
            p='0'
            m='0'
          ></Chakra.Box>
        </Chakra.Button>
      </Animations.FMC_Component>
    </Chakra.Box>
  );
};
export default AnimatedNav;
