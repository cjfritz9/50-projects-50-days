import * as React from 'react';
import './RotatingNavigation.css';

const Nav: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <i className='material-symbols-outlined'>home</i> Home
        </li>
        <li>
          <i className='material-symbols-outlined'>info</i> About
        </li>
        <li>
          <i className='material-symbols-outlined'>mail</i> Contact
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
