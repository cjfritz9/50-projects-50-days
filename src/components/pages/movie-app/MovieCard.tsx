import * as React from 'react';
import * as Chakra from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaStar } from 'react-icons/fa';
import * as TMDB from './utils/api';
import Movie from './models';

interface MovieProps {
  movie: Movie;
  idx: number;
}

const MovieCard: React.FC<MovieProps> = ({ movie, idx }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const firstRenderRef = React.useRef(true);

  if (isHovered) {
    firstRenderRef.current = false;
  }
  console.log(idx);
  const trimOverview = (text: string) => {
    return text.slice(0, 285) + '...';
  };

  return (
    <Chakra.Box pos='relative'>
      <AnimatePresence>
        <Chakra.Card
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          fontFamily='Poppins'
          variant='elevated'
          bgColor='#E0E1DD'
          m='2rem'
          w='22rem'
          h='19rem'
          overflow='hidden'
        >
          {movie && (
            <Chakra.Box
              as={motion.div}
              animate={
                !firstRenderRef.current
                  ? isHovered
                    ? {
                        transform: [
                          'translateY(-0px)',
                          'translateY(-300px)',
                          'translateY(-300px)'
                        ]
                      }
                    : {
                        transform: [
                          'translateY(-300px)',
                          'translateY(-0px)',
                          'translateY(-0px)'
                        ]
                      }
                  : { transform: 'translateY(0px)' }
              }
              exit={{
                transform: 'translateY(0px)'
              }}
              cursor='default'
              h='30rem'
            >
              <Chakra.CardBody>
                <Chakra.Box>
                  <Chakra.Box
                    style={{
                      background: `linear-gradient(to bottom, rgba(0,0,0,0) 70%, rgba(0,0,0,1)), url('${
                        TMDB.IMAGE_BASE_URL + movie.backdrop_path
                      }')`,
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat'
                    }}
                    display='flex'
                    alignItems='flex-end'
                    justifyContent='center'
                    minH='220px'
                    w='100%'
                    borderRadius='lg'
                    px='5px'
                  >
                    <Chakra.Heading
                      textAlign='center'
                      color='white'
                      fontFamily='inherit'
                      size='md'
                      pb='3px'
                    >
                      {movie.title}
                    </Chakra.Heading>
                  </Chakra.Box>
                </Chakra.Box>
                <Chakra.Stack mt='4' spacing='3' px='10px'>
                  <Chakra.Flex
                    mb='2rem'
                    justifyContent='space-between'
                    alignItems='baseline'
                  >
                    <Chakra.Text
                      color='gray.500'
                      fontSize='2xl'
                      fontWeight='bold'
                      cursor='default'
                      mr='2px'
                    >
                      {movie.release_date && movie.release_date.slice(0, 4)}
                    </Chakra.Text>
                    <Chakra.Flex alignItems='center'>
                      <Chakra.Text
                        color='#0D1B2A'
                        fontSize='2xl'
                        fontWeight='bold'
                        cursor='default'
                        ml='2px'
                        w='2.5rem'
                      >
                        {movie.vote_average}
                      </Chakra.Text>
                      <Chakra.Icon
                        as={FaStar}
                        color='#415A77'
                        fontSize='27px'
                        fontWeight='bold'
                        cursor='default'
                        ml='2px'
                        pb='3px'
                      />
                    </Chakra.Flex>
                  </Chakra.Flex>
                  <AnimatePresence>
                    <Chakra.Text
                      h='10rem'
                      as={motion.div}
                      layout
                      cursor='default'
                    >
                      {movie.overview.length >= 288 && movie.overview.length > 0
                        ? trimOverview(movie.overview)
                        : movie.overview}
                    </Chakra.Text>
                  </AnimatePresence>
                </Chakra.Stack>
              </Chakra.CardBody>

              <Chakra.CardFooter>
                <Chakra.ButtonGroup
                  w='100%'
                  display='flex'
                  alignItems='center'
                  justifyContent='center'
                  spacing='2'
                  pt='10px'
                >
                  <AnimatePresence>
                    <Chakra.Button
                      _hover={{
                        backgroundColor: 'transparent',
                        transform: 'scale(1.1)'
                      }}
                      cursor='pointer'
                      variant='ghost'
                      colorScheme='blue'
                    >
                      More
                    </Chakra.Button>
                  </AnimatePresence>
                </Chakra.ButtonGroup>
              </Chakra.CardFooter>
            </Chakra.Box>
          )}
        </Chakra.Card>
      </AnimatePresence>
    </Chakra.Box>
  );
};

export default MovieCard;
