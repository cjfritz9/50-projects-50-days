import * as React from 'react';
import * as Chakra from '@chakra-ui/react';
import axios from 'axios';
import { ImSearch } from 'react-icons/im';
import { FMC_Component } from '../../../utils/animations';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import * as TMDB from './utils/api';
import Title from '../../Title';
import Movie from './models';
import MovieCard from './MovieCard';

const MovieApp: React.FC = () => {
  const [isHovered, setIsHovered] = React.useState({ hovered: false, id: 0 });
  const [movies, setMovies] = React.useState<Movie[]>();
  const [fetchError, setFetchError] = React.useState(false);

  const handleClick = () => {};

  const handleKeydown = (key: string) => {
    if (key === 'Enter') {
      console.log(key);
    }
  };

  const fetchMovies = async (url: string) => {
    try {
      const response = await axios.get(url);
      if (response.data && response.status === 200 && response.data.results)
        console.log(response.data.results);
      setMovies(response.data.results);
    } catch (error) {
      console.error(error);
      setFetchError(true);
    }
  };

  // apply animation to only the hover target

  console.log(isHovered.id);

  React.useEffect(() => {
    fetchMovies(TMDB.POPULAR_MOVIES_ALLTIME);
  }, []);

  if (fetchError) {
    return <Chakra.Spinner />;
  }

  return (
    <Chakra.Box bgColor='#778DA9' minH='92vh'>
      <Title title='Movie App' />

      <Chakra.Flex m='2px 9px' justifyContent='center'>
        <Chakra.InputGroup w='20%'>
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
      <Chakra.Flex as='main' flexWrap='wrap'>
        {(movies &&
          movies.map((movie: Movie) => {
            return <MovieCard movie={movie} />;
          })) || <Chakra.Spinner></Chakra.Spinner>}
      </Chakra.Flex>
    </Chakra.Box>
  );
};

export default MovieApp;
