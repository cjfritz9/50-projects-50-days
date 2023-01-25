import * as React from 'react';
import * as Chakra from '@chakra-ui/react';
import * as RI from 'react-icons/bs';
import * as FM from 'framer-motion';
import './RotatingNavigation.css';

interface MenuProps {
  setShowNav: Function;
}

const ChakraIcon = Chakra.chakra(FM.motion.div, {
  shouldForwardProp: (prop) =>
    FM.isValidMotionProp(prop) || Chakra.shouldForwardProp(prop)
});

const Menu: React.FC<MenuProps> = ({ setShowNav }) => {
  const [menuOpen, setMenuOpen] = React.useState<boolean>(false);

  const menuHandler = () => {
    document.getElementById('arrow')?.remove();
    if (menuOpen) {
      setShowNav(false);
    } else {
      setShowNav(true);
    }

    setMenuOpen(!menuOpen);
  };

  return (
    <div className='navmenu-container'>
      <div onClick={menuHandler.bind(this)} className='navmenu'>
        <ChakraIcon
          animate={{
            scale: [1, 1.5, 1]
          }}
          //@ts-ignore
          transition={{
            duration: 5,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'loop'
          }}
          id='arrow'
          position='absolute'
          left='7rem'
          top='4rem'
          fontSize='3rem'
          fontWeight='bold'
          color='white'
          //@ts-ignore
        >
          <Chakra.Icon as={RI.BsArrowUpLeft} transform='rotate(-20deg)' filter='drop-shadow(2px 5px 1px black)' />
        </ChakraIcon>
        <button id='close'>
          <i className='material-symbols-outlined'>close</i>
        </button>
        <button id='open'>
          <i className='material-symbols-outlined'>menu</i>
        </button>
      </div>
    </div>
  );
};

export default Menu;
