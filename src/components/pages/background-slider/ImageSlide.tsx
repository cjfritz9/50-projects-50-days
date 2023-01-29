import * as React from 'react';
import * as Chakra from '@chakra-ui/react';
import { FMC_Component } from '../../../utils/animations';
import { AnimatePresence } from 'framer-motion';

interface ImageSlideProps {
  slideNumber: number;
  activeSlide: number;
  imgUrl: string;
  setBackgroundImg: Function;
}

const ImageSlide: React.FC<ImageSlideProps> = ({
  slideNumber,
  activeSlide,
  imgUrl,
  setBackgroundImg
}) => {
  const [isActive, setIsActive] = React.useState(false);

  React.useEffect(() => {
    if (slideNumber === activeSlide) {
      setBackgroundImg(imgUrl);
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [activeSlide]);

  return (
    <AnimatePresence>
      <Chakra.Box
        as={FMC_Component}
        opacity={isActive ? 1 : 0}
        // @ts-ignore
        transition='opacity .4s ease'
        h='80vh'
        w='100vw'
        bgPos='center center'
        bgSize='cover'
        pos='absolute'
        bgImage={imgUrl}
      ></Chakra.Box>
    </AnimatePresence>
  );
};

export default ImageSlide;
