import * as React from 'react';
import * as Chakra from '@chakra-ui/react';
import googleSymbols from '../../../utils/google-symbols';
import './Search.css';
import Title from '../../Title';

const Search: React.FC = () => {
  
  const handleClick = (e: React.MouseEvent) => {
    const searchElement = document.getElementById('search')! as HTMLDivElement;
    const searchInput = document.getElementById(
      'search-input'
    )! as HTMLInputElement;
    const searchIcon = document.getElementById('search-icon')! as HTMLElement;
    const searchBtn = document.getElementById(
      'search-btn'
    )! as HTMLButtonElement;
    console.log(e.target, searchElement);
    if (
      e.target == searchIcon ||
      e.target == searchBtn ||
      e.target == searchElement ||
      e.target == searchInput
    ) {
      searchElement.classList.add('active');
      searchInput.focus();
    } else {
      searchElement.classList.remove('active');
    }
  };

  return (
    <Chakra.Flex
      bgColor='blue.200'
      className='component-container'
      onClick={(e: React.MouseEvent) => handleClick(e)}
    >
      <Title title='Hidden Search Widget' color='white' font='Poppins' />

      <div id='search' className='search-container'>
        <input
          type='text'
          id='search-input'
          className='search-input'
          placeholder='Search...'
        />
        <button id='search-btn' className='search-btn'>
          <i id='search-icon' className={googleSymbols}>
            search
          </i>
        </button>
      </div>
    </Chakra.Flex>
  );
};

export default Search;
