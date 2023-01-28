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
  const [movies, setMovies] = React.useState<Movie[]>();
  const [searchInput, setSearchInput] = React.useState<string>();
  const [fetchError, setFetchError] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const handleKeydown = (key: string) => {
    if (key === 'Enter' && searchInput) {
      handleSearch(TMDB.SEARCH_URL);
    } else if (key === 'Enter' && !searchInput) {
      fetchMovies(TMDB.POPULAR_MOVIES_ALLTIME);
    }
  };

  const handleSearch = async (url: string) => {
    setLoading(true);
    try {
      const response = await axios.get(url + searchInput);
      if (response.data && response.status === 200 && response.data.results) {
        console.log(response.data);
        setMovies(response.data.results);
        setLoading(false);
      }
    } catch (error) {
      console.error(error);
      setLoading(false);
      setFetchError(true);
    } finally {
      setSearchInput('');
    }
  };

  const fetchMovies = async (url: string) => {
    try {
      const response = await axios.get(url);
      if (response.data && response.status === 200 && response.data.results)
        setMovies(response.data.results);
    } catch (error) {
      console.error(error);
      setFetchError(true);
    }
  };

  React.useEffect(() => {
    fetchMovies(TMDB.POPULAR_MOVIES_ALLTIME);
  }, []);

  if (fetchError) {
    return (
      <Chakra.Flex
        bgColor='#778DA9'
        minH='92vh'
        flexDir='column'
        alignItems='center'
      >
        <Chakra.Heading size='2xl' my='2rem'>
          Internal Server Error
        </Chakra.Heading>
        <Chakra.Button
          _active={{ transform: 'scale(0.98)' }}
          cursor='pointer'
          w='10rem'
          colorScheme='linkedin'
          onClick={() => window.location.reload()}
        >
          Go Back
        </Chakra.Button>
      </Chakra.Flex>
    );
  }

  console.log(movies, movies?.length);

  if (movies && !movies.length) {
    return (
      <Chakra.Flex
        bgColor='#778DA9'
        minH='92vh'
        flexDir='column'
        alignItems='center'
      >
        <Chakra.Heading size='2xl' my='2rem'>
          No Results
        </Chakra.Heading>
        <Chakra.Button
          _active={{ transform: 'scale(0.98)' }}
          cursor='pointer'
          w='10rem'
          colorScheme='linkedin'
          onClick={() => fetchMovies(TMDB.POPULAR_MOVIES_ALLTIME)}
        >
          Go Back
        </Chakra.Button>
      </Chakra.Flex>
    );
  }

  return (
    <Chakra.Box bgColor='#778DA9' minH='92vh'>
      <Title title='Movie App' font='Unbounded' color='white' />
      <Chakra.Flex m='2px 9px' justifyContent='center'>
        <Chakra.InputGroup w='20%'>
          <Chakra.Input
            placeholder='Search'
            value={searchInput}
            _focus={{ border: '1.5px solid', borderColor: 'inherit' }}
            bgColor='white'
            onKeyDown={(e: React.KeyboardEvent) => handleKeydown(e.code)}
            onChange={(e: React.ChangeEvent) =>
              setSearchInput((e.target as HTMLInputElement).value)
            }
          ></Chakra.Input>
          <Chakra.InputRightElement width='4.5rem'>
            <Chakra.Icon
              cursor='pointer'
              as={ImSearch}
              h='1.75rem'
              size='sm'
              onClick={() => handleSearch(TMDB.SEARCH_URL)}
            ></Chakra.Icon>
          </Chakra.InputRightElement>
        </Chakra.InputGroup>
      </Chakra.Flex>
      <Chakra.Flex flexWrap='wrap'>
        {movies && !loading ? (
          movies.map((movie: Movie, idx) => {
            return <MovieCard movie={movie} idx={idx} />;
          })
        ) : (
          <Chakra.Flex justifyContent='center' mt='10rem' w='100%'>
            <Chakra.Spinner thickness='5px' speed='.6s' size='xl' />
          </Chakra.Flex>
        )}
      </Chakra.Flex>
    </Chakra.Box>
  );
};

export default MovieApp;
