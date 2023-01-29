import * as React from 'react';
import * as Chakra from '@chakra-ui/react';
import * as RI from 'react-icons/md';
import { FMC_Component } from '../../../utils/animations';
import Title from '../../Title';
import { AnimatePresence } from 'framer-motion';
import ImageSlide from './ImageSlide';

const BackgroundSlider: React.FC = () => {
  const [activeSlide, setActiveSlide] = React.useState(1);
  const [backgroundImg, setBackgroundImg] = React.useState(
    'https://images.unsplash.com/photo-1666705040497-1890be6e357c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  );

  const handleChangeSlide = (buttonType: string) => {
    if (buttonType === 'next') {
      setActiveSlide(activeSlide + 1);
    } else {
      setActiveSlide(activeSlide - 1);
    }
  };

  return (
    <AnimatePresence>
      <Chakra.Flex
        alignItems='center'
        flexDir='column'
        _before={{
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          bgColor: 'rgba(0,0,0,0.5)'
        }}
        w='100%'
        minH='92vh'
        as={FMC_Component}
        bgPos='center center'
        bgSize='cover'
        // @ts-ignore
        bgImage={backgroundImg}
        transition='background-image .4s ease'
      >
        <Title
          title='Gallery Slides'
          font='Mulish'
          color='white'
          shadow='0px 0px 3px black'
        />
        <Chakra.Flex alignItems='center'>
          <Chakra.Button
            _hover={{ bgColor: 'transparent' }}
            bgColor='transparent'
            h='70vh'
            w='5rem'
            px='0'
            isDisabled={activeSlide <= 1}
            pointerEvents={activeSlide <= 1 ? 'none' : 'auto'}
            onClick={() => handleChangeSlide('back')}
          >
            <Chakra.Icon
              as={RI.MdArrowLeft}
              _hover={{ color: 'gray' }}
              h='100%'
              w='100%'
              fontSize='5rem'
              color='rgba(200,200,200,0.3)'
            />
          </Chakra.Button>
          <Chakra.Flex
            boxShadow='0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)'
            h='70vh'
            w='70vw'
            pos='relative'
            overflow='hidden'
          >
            <ImageSlide
              slideNumber={1}
              activeSlide={activeSlide}
              imgUrl='url("https://images.unsplash.com/photo-1674318012388-141651b08a51?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80")'
              setBackgroundImg={setBackgroundImg}
            />
            <ImageSlide
              slideNumber={2}
              activeSlide={activeSlide}
              imgUrl='url("https://images.unsplash.com/photo-1666705040497-1890be6e357c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")'
              setBackgroundImg={setBackgroundImg}
            />
            <ImageSlide
              slideNumber={3}
              activeSlide={activeSlide}
              imgUrl='url("https://images.unsplash.com/photo-1673991870100-b8b2fe7d1236?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")'
              setBackgroundImg={setBackgroundImg}
            />
            <ImageSlide
              slideNumber={4}
              activeSlide={activeSlide}
              imgUrl='url("https://images.unsplash.com/photo-1673964513277-360fcf5fb6ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80")'
              setBackgroundImg={setBackgroundImg}
            />
            <ImageSlide
              slideNumber={5}
              activeSlide={activeSlide}
              imgUrl='url("https://images.unsplash.com/photo-1526776421092-e9f040410d89?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")'
              setBackgroundImg={setBackgroundImg}
            />
          </Chakra.Flex>
          <Chakra.Button
            _hover={{ bgColor: 'transparent' }}
            bgColor='transparent'
            h='70vh'
            w='5rem'
            px='0'
            isDisabled={activeSlide >= 5}
            pointerEvents={activeSlide >= 5 ? 'none' : 'auto'}
            onClick={() => handleChangeSlide('next')}
            textShadow='0 0 5px white'
          >
            <Chakra.Icon
              as={RI.MdArrowRight}
              _hover={{ color: 'gray' }}
              h='100%'
              w='100%'
              fontSize='5rem'
              color='rgba(200,200,200,0.3)'
            />
          </Chakra.Button>
        </Chakra.Flex>
      </Chakra.Flex>
    </AnimatePresence>
  );
};

export default BackgroundSlider;
