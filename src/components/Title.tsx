import * as React from 'react';
import * as Chakra from '@chakra-ui/react';
import TitleProps from '../models/Props';

const Title: React.FC<TitleProps> = ({
  title,
  color,
  font,
  shadow = `0px 0px 0px ${color}`
}) => {
  return (
    <Chakra.Heading
      size={['xl', '3xl']}
      mt='2rem'
      mb='5rem'
      textShadow={shadow}
      color={color}
      fontFamily={font}
    >
      {title}
    </Chakra.Heading>
  );
};

export default Title;
