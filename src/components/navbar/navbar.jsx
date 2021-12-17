import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as MdIcons from 'react-icons/md'
import './navbar.css'
import { NavbarMenuData } from './navbar-menu-data';

const Navbar = () => {
    const [navmenu, setNavmenu] = useState(false)

    const showNavmenu = () => setNavmenu(!navmenu)
    
    return (
        <>
            <div className='navbar'>
                <div className="navbar-wrapper">
                    <div className="menu">
                        <Link to="#" className="menu-bars">
                            <FaIcons.FaBars onClick={showNavmenu}/>
                        </Link>
                        <Link to="#" className="dark-mode-icon">
                            <MdIcons.MdDarkMode className='icon' size={25}/>
                            {/* <MdIcons.MdOutlineWbSunny className='icon' size={25}/> */}
                        </Link>
                    </div>
                </div>
            </div>
            <nav className={navmenu ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-list' onClick={showNavmenu}>
                    <li className="nav-menu-toggle">
                        <Link to='#' className='menu-bars'>
                            <AiIcons.AiOutlineClose/>
                        </Link>
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