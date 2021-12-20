import React from 'react';
import { NavLink } from 'react-router-dom';
import './footer.css';
import * as AiIcons from 'react-icons/ai';

const Footer = () => {
    return (
        <footer>
            <div className="f-wrapper">
                <div className="f-row">
                    <div className="f-col"><span>Designed and Developed by Shankar</span></div>
                </div>
                <div className="f-row list map">
                    <div className="f-col"><NavLink className='link' activeClassName='link active' to='/'>Hello</NavLink></div>
                    <div className="f-col"><NavLink className='link' activeClassName='link active' to='/projects'>Projects</NavLink></div>
                    <div className="f-col"><NavLink className='link' activeClassName='link active' to='/blog'>Blog </NavLink></div>
                </div>
                <div className="f-row list socials">
                    <div className='social-icon f-col'><a href='https://www.linkedin.com/in/sankararaman-k/'><AiIcons.AiFillLinkedin className='link' size={25} /></a></div>
                    <div className='social-icon f-col'><a href='https://github.com/'><AiIcons.AiFillGithub className='link' size={25} /></a></div>
                    <div className='social-icon f-col'><a href='https://twitter.com/krishnan2098'><AiIcons.AiFillTwitterCircle className='link' size={25} /></a></div>
                </div>
            </div>
        </footer>
    )
}

export default Footer