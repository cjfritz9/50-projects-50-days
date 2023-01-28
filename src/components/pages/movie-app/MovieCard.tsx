import * as React from 'react';
import * as Chakra from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
import * as TMDB from './utils/api';
import Movie from './models';

interface MovieProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieProps> = ({ movie }) => {
  const [isHovered, setIsHovered] = React.useState(false);

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
          w='sm'
          h='20rem'
          overflow='hidden'
        >
          <Chakra.Box
            as={motion.div}
            initial={{
              transform: 'translateY(0px)'
            }}
            animate={
              isHovered
                ? {
                    transform: [
                      'translateY(-0px)',
                      'translateY(-70px)',
                      'translateY(-280px)'
                    ]
                  }
                : {
                    transform: [
                      'translateY(-280px)',
                      'translateY(-70px)',
                      'translateY(0px)'
                    ]
                  }
            }
            exit={{
              transform: 'translateY(0px)'
            }}
            cursor='default'
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
                  minH='200px'
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
              <Chakra.Stack mt='6' spacing='3' px='10px'>
                <Chakra.Flex
                  justifyContent='space-between'
                  alignItems='baseline'
                >
                  <Chakra.Text cursor='default' fontWeight='bold'>
                    Hover For Details
                  </Chakra.Text>
                  <Chakra.Text
                    color='#0D1B2A'
                    fontSize='2xl'
                    fontWeight='bold'
                    cursor='default'
                  >
                    {movie.vote_average}
                  </Chakra.Text>
                </Chakra.Flex>
                <AnimatePresence>
                  {/* {isHovered && ( */}
                  <Chakra.Text
                    as={motion.div}
                    layout
                    // initial={{
                    //   opacity: 0,
                    //   maxHeight: '0px',
                    //   minHeight: '0%'
                    // }}
                    // animate={{
                    //   opacity: [0, 0.5, 1],
                    //   minHeight: ['0%', '100%', '100%'],
                    //   maxHeight: ['0px', '150px', '150px']
                    // }}
                    // exit={{
                    //   opacity: [1, 0.1, 0],
                    //   minHeight: ['100%', '100%', '0%'],
                    //   maxHeight: ['150px', '150px', '0px']
                    // }}
                    cursor='default'
                  >
                    {movie.overview.length >= 288
                      ? trimOverview(movie.overview)
                      : movie.overview}
                  </Chakra.Text>
                  {/* )} */}
                </AnimatePresence>
              </Chakra.Stack>
            </Chakra.CardBody>

            <Chakra.CardFooter>
              <Chakra.ButtonGroup
                w='100%'
                display='flex'
                justifyContent='center'
                spacing='2'
                pt='10px'
              >
                <AnimatePresence>
                  {/* {isHovered && ( */}
                  <Chakra.Button
                    _hover={{ backgroundColor: 'transparent' }}
                    // as={motion.div}
                    // initial={{
                    //   display: 'none'
                    // }}
                    // animate={{
                    //   opacity: [0, 1, 1],
                    //   display: ['none', 'block', 'block']
                    // }}
                    // exit={{
                    //   opacity: [1, 1, 0],
                    //   maxHeight: ['100px', '100px', '0px']
                    // }}
                    cursor='pointer'
                    variant='ghost'
                    colorScheme='blue'
                  >
                    More
                  </Chakra.Button>
                  {/* )} */}
                </AnimatePresence>
              </Chakra.ButtonGroup>
            </Chakra.CardFooter>
          </Chakra.Box>
        </Chakra.Card>
      </AnimatePresence>
    </Chakra.Box>
  );
};

export default MovieCard;
