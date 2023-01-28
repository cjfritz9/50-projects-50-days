import * as React from 'react';
import * as Chakra from '@chakra-ui/react';
import * as TMDB from './utils/api';
import axios from 'axios';
import Title from '../../Title';
import Movie from './models';
import MovieCard from './MovieCard';
import Search from './Search';

const MovieApp: React.FC = () => {
  const [movies, setMovies] = React.useState<Movie[]>();
  const [fetchError, setFetchError] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

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
        <Title title='Internal Server Error' font='Unbounded' color='white' />
        <Search
          setLoading={setLoading}
          setFetchError={setFetchError}
          fetchMovies={fetchMovies}
          setMovies={setMovies}
        />
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
        <Title title='No Results' font='Unbounded' color='white' />
        <Search
          setLoading={setLoading}
          setFetchError={setFetchError}
          fetchMovies={fetchMovies}
          setMovies={setMovies}
        />
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
    <Chakra.Box bgColor='#778DA9' minH='92vh' w='100vw' p='0.5rem'>
      <Title title='Movie App' font='Unbounded' color='white' />
      <Search
        setLoading={setLoading}
        setFetchError={setFetchError}
        fetchMovies={fetchMovies}
        setMovies={setMovies}
      />
      <Chakra.Flex flexWrap='wrap' justifyContent='center'>
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
