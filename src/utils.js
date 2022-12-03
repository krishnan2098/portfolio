import React from 'react';
import {GitHub, LinkedIn, Twitter} from '@mui/icons-material';
import {ImStackoverflow} from 'react-icons/im';

export const LOGO_IMG_PATH = `/images/logo-vector-2.png`;
export const SECTIONS = ["Home", "Projects", "Contact"];
export const SOCIALS = [
    {
        title: 'Linkedin',
        url: 'https://www.linkedin.com/in/sankararaman-k/',
        icon: <LinkedIn size={25} />,
    },
    {
        title: 'Github',
        url: 'https://github.com/krishnan2098',
        icon: <GitHub size={25} />,
    },
    {
        title: 'Stackoverflow',
        url: 'https://stackoverflow.com/users/11782763/shankar',
        icon: <ImStackoverflow  size={20} />,
    },
    {
        title: 'Twitter',
        url: 'https://twitter.com/krishnan2098',
        icon: <Twitter size={25} />,
    }
]
