import * as React from 'react';
import './RotatingNavigation.css';
import Blog from './Blog';
import Menu from './Menu';
import Nav from './Nav';

const RotatingNavigation: React.FC = () => {
  const [showNav, setShowNav] = React.useState<boolean>(false);

  return (
    <div className='component-container'>
      <div id='menu' className={`container${showNav ? ' show-nav' : ''}`}>
        <Menu setShowNav={setShowNav} />
        <Blog />
      </div>
      <Nav />
    </div>
  );
};

export default RotatingNavigation;
