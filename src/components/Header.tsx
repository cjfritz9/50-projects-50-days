import * as React from 'react';
import * as Chakra from '@chakra-ui/react';
import * as RI from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const [isBackDisabled, setIsBackDisabled] = React.useState<boolean>(false);
  const [isNextDisabled, setIsNextDisabled] = React.useState<boolean>(false);
  const navigate = useNavigate();

  const numOfComponents = 19;

  const navHandler = (button: string): void => {
    const url = window.location.href;
    let targetPage: string;
    let pageIsdoubleDigit = false;

    if (url.slice(-3).charAt(0) === '/') {
      pageIsdoubleDigit = true;
    }

    if (!pageIsdoubleDigit) {
      if (button == 'next') {
        targetPage = (+url.slice(-1) + 1).toString();
      } else {
        targetPage = (+url.slice(-1) - 1).toString();
      }
    } else {
      if (button == 'next') {
        targetPage = (+url.slice(-2) + 1).toString();
      } else {
        targetPage = (+url.slice(-2) - 1).toString();
      }
    }
    navigate(`components/${targetPage}`);
  };

  React.useEffect(() => {
    setIsBackDisabled(false);
    setIsNextDisabled(false);
    if (
      window.location.href.slice(-15).includes('components') &&
      window.location.href.slice(-2) == '/1'
    ) {
      return setIsBackDisabled(true);
    }
    if (
      window.location.href.slice(-2) == numOfComponents.toString() ||
      window.location.href.slice(-1) == numOfComponents.toString()
    ) {
      return setIsNextDisabled(true);
    }
  }, [navigate]);

  return (
    <Chakra.Flex
      id='testing-id'
      backgroundColor='#294053'
      justifyContent='space-between'
      alignItems='center'
      p='1rem 3rem'
      w='100vw'
      zIndex={1}
    >
      <Chakra.Button
        bgColor='transparent'
        cursor='pointer'
        _hover={{
          backgroundColor: 'transparent',
          transform: 'scale(1.25, 1.1) translateX(-0.25rem)',
          transition: 'transform 0.5s ease'
        }}
        p='0'
        w='3rem'
        h='2rem'
        color='white'
        as={RI.MdOutlineArrowBack}
        isDisabled={isBackDisabled}
        pointerEvents={isBackDisabled ? 'none' : 'auto'}
        onClick={() => navHandler('back')}
      />
      <Chakra.Heading fontFamily='Unbounded' letterSpacing='3px' color='white'>
        50/50
      </Chakra.Heading>
      <Chakra.Button
        bgColor='transparent'
        cursor='pointer'
        _hover={{
          backgroundColor: 'transparent',
          transform: 'scale(1.25, 1.1) translateX(0.25rem)',
          transition: 'transform 0.5s ease'
        }}
        p='0'
        w='3rem'
        h='2rem'
        color='white'
        as={RI.MdOutlineArrowForward}
        isDisabled={isNextDisabled}
        pointerEvents={isNextDisabled ? 'none' : 'auto'}
        onClick={() => navHandler('next')}
      />
    </Chakra.Flex>
  );
};

export default Header;
