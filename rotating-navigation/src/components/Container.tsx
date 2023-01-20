import * as React from 'react';
import Blog from './Blog';
import Menu from './Menu';

const Container: React.FC = () => {
  const [showNav, setShowNav] = React.useState<boolean>(false);

  return (
    <div id='menu' className={`container${showNav ? ' show-nav' : ''}`}>
      <Menu setShowNav={setShowNav} />
      <Blog />
    </div>
  );
};

export default Container;
