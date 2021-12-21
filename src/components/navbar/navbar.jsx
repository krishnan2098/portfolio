import React, { useState } from "react";
import * as MdIcons from "react-icons/md";
import "./navbar.css";
import Logo from "../../logo-vector.png";

const Navbar = (props) => {
  //   const [navmenu, setNavmenu] = useState(false);
  //   const showNavmenu = () => setNavmenu(!navmenu);

  const changeTheme = () => {
    if (props.theme === "light") {
      props.setTheme("dark");
      props.updateTheme(props.themes["dark"]);
    } else {
      props.setTheme("light");
      props.updateTheme(props.themes["light"]);
    }
  };

  const icon =
    props.theme === "light" ? (
      <MdIcons.MdDarkMode className="icon" size={25} />
    ) : (
      <MdIcons.MdOutlineWbSunny className="icon" size={25} />
    );

  return (
    <>
      <div className="navbar">
        <div className="navbar-wrapper">
          <div className="menu">
            {/* <div className="menu-bars">
                            <FaIcons.FaBars onClick={ showNavmenu }/>
                        </div> */}
            <div className="logo">
              <img src={Logo} alt="" />
            </div>
            <div className="dark-mode-icon">
              <div onClick={changeTheme} className="dark-mode-button">
                {icon}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <nav className={navmenu ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-list' onClick={ showNavmenu }>
                    <li className="nav-menu-toggle">
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

export default Navbar;
