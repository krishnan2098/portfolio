import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as MdIcons from 'react-icons/md'
import { NavbarMenuData } from './navbar-menu-data';
import './navbar.css'
import Logo from '../../logo-vector.png';

const Navbar = () => {
    const [navmenu, setNavmenu] = useState(false)

    const showNavmenu = () => setNavmenu(!navmenu)
    
    return (
        <>
            <div className='navbar'>
                <div className="navbar-wrapper">
                    <div className="menu">
                        <div className="menu-bars">
                            <FaIcons.FaBars onClick={showNavmenu}/>
                        </div>
                        <div className="logo">
                            <img src={Logo} alt="" />
                        </div>
                        <div className="dark-mode-icon">
                            <MdIcons.MdDarkMode className='icon' size={25}/>
                            {/* <MdIcons.MdOutlineWbSunny className='icon' size={25}/> */}
                        </div>
                    </div>
                </div>
            </div>
            <nav className={navmenu ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-list' onClick={showNavmenu}>
                    <li className="nav-menu-toggle">
                        <div className='menu-bars'>
                            <AiIcons.AiOutlineClose/>
                        </div>
                    </li>
                    { NavbarMenuData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </>
        
    )
}

export default Navbar;