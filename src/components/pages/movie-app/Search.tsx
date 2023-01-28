import * as React from 'react';
import * as Chakra from '@chakra-ui/react';
import * as TMDB from './utils/api';
import { ImSearch } from 'react-icons/im';
import axios from 'axios';

interface SearchProps {
  setLoading: Function;
  fetchMovies: Function;
  setMovies: Function;
  setFetchError: Function;
}

const Search: React.FC<SearchProps> = ({
  setLoading,
  fetchMovies,
  setMovies,
  setFetchError
}) => {
  const [searchInput, setSearchInput] = React.useState<string>();

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

  return (
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
  );
};

export default Search;
