import * as React from 'react';
import * as Chakra from '@chakra-ui/react';
import googleSymbols from '../../../utils/google-symbols';
import './Search.css';
import Title from '../../Title';

const Search: React.FC = () => {
  const handleClick = () => {
    const searchElement = document.getElementById('search')! as HTMLDivElement;
    const searchInput = document.getElementById('input')! as HTMLInputElement;
    searchElement.classList.toggle('active');
    searchInput.focus();
  };

  return (
    <Chakra.Flex bgColor='blue.200' className='component-container'>
      <Title title='Hidden Search Widget' color='white' font='Poppins' />

      <div id='search' className='search-container'>
        <input
          type='text'
          id='input'
          className='search-input'
          placeholder='Search...'
        />
        <button className='search-btn' onClick={handleClick.bind(this)}>
          <i className={googleSymbols}>search</i>
        </button>
      </div>
    </Chakra.Flex>
  );
};

export default Search;
