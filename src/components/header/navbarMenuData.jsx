import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
// import * as IoIcons from 'react-icons/io';

export const NavbarMenuData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav-menu-text'
    },
    {
        title: 'Blog',
        path: '/blog',
        icon: <FaIcons.FaMicroblog/>,
        cName: 'nav-menu-text'
    },
    {
        title: 'Projects',
        path: '/projects',
        icon: <AiIcons.AiFillProject/>,
        cName: 'nav-menu-text'
    },
    {
        title: 'Contact',
        path: '/contact',
        icon: <AiIcons.AiTwotoneMail/>,
        cName: 'nav-menu-text'
    }
]