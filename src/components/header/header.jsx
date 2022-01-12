// import { useState } from 'react';
import React from 'react';
import {motion} from 'framer-motion';
import * as MdIcons from 'react-icons/md';
import './header.css';
import Logo from '../../logo-vector-2.png';

const Header = (props) => {
  //   const [navmenu, setNavmenu] = useState(false);
  //   const showNavmenu = () => setNavmenu(!navmenu);

  const changeTheme = () => {
    if (props.theme === 'light') {
      props.setTheme('dark');
      props.updateTheme(props.themes['dark']);
    } else {
      props.setTheme('light');
      props.updateTheme(props.themes['light']);
    }
  };

  const icon =
    props.theme === 'light' ? (
      <MdIcons.MdDarkMode size={25} />
    ) : (
      <MdIcons.MdOutlineWbSunny size={25} />
    );

  return (
    <>
      <div className='navbar'>
        <div className='navbar-wrapper'>
          <div className='menu'>
            {/* <div className='menu-bars'>
                            <FaIcons.FaBars onClick={ showNavmenu }/>
                        </div> */}
            <div className='logo'>
              <img src={Logo} alt='' />
            </div>
            <div className='dark-mode-icon'>
              <motion.div 
              whileHover={{scale: 1.2, color: "#FC6D6D", backgroundColor: "#efefef", rotateZ: 22.5}}
              onClick={changeTheme} className='dark-mode-button'>
                {icon}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      {/* <nav className={navmenu ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-list' onClick={ showNavmenu }>
                    <li className='nav-menu-toggle'>
                        <div className='menu-bars'>
                            <AiIcons.AiOutlineClose/>
                        </div>
                    </li>
                    { NavbarMenuData.map((item, index) => {
                        return (
                            <li key={ index } className={ item.cName }>
                                <Link to={ item.path }>
                                    { item.icon }
                                    <span>{ item.title }</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav> */}
    </>
  );
};

export default Header;
