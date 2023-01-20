import * as React from 'react';
import googleSymbols from '../utils/google-symbols';

const Search: React.FC = () => {
  const handleClick = () => {
    const searchElement = document.getElementById('search')! as HTMLDivElement;
    const searchInput = document.getElementById('input')! as HTMLInputElement;
    searchElement.classList.toggle('active');
    searchInput.focus();
  };

  return (
    <div id='search' className='search-container'>
      <input type='text' id='input' className='search-input' placeholder='Search...' />
      <button className='search-btn' onClick={handleClick.bind(this)}>
        <i className={googleSymbols}>search</i>
      </button>
    </div>
  );
};

export default Search;
