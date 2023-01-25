import * as React from 'react';
import './RotatingNavigation.css';

interface MenuProps {
  setShowNav: Function;
}

const Menu: React.FC<MenuProps> = ({ setShowNav }) => {
  const [menuOpen, setMenuOpen] = React.useState<boolean>(false);

  const menuHandler = () => {
    if (menuOpen) {
      setShowNav(false);
    } else {
      setShowNav(true);
    }

    setMenuOpen(!menuOpen);
  };

  return (
    <div className='navmenu-container'>
      <div onClick={menuHandler.bind(this)} className='navmenu'>
        <button id='close'>
          <i className='material-symbols-outlined'>close</i>
        </button>
        <button id='open'>
          <i className='material-symbols-outlined'>menu</i>
        </button>
      </div>
    </div>
  );
};

export default Menu;
