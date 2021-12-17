import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
// import * as IoIcons from "react-icons/io";

export const NavbarMenuData = [
    {
        title: "Home",
        path: "/portfolio/",
        icon: <AiIcons.AiFillHome/>,
        cName: "nav-menu-text"
    },
    {
        title: "Blog",
        path: "/portfolio/blog",
        icon: <FaIcons.FaMicroblog/>,
        cName: "nav-menu-text"
    },
    {
        title: "Projects",
        path: "/portfolio/projects",
        icon: <AiIcons.AiFillProject/>,
        cName: "nav-menu-text"
    },
    {
        title: "Contact",
        path: "/portfolio/contact",
        icon: <AiIcons.AiTwotoneMail/>,
        cName: "nav-menu-text"
    }
]