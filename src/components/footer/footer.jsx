import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './footer.css';
import * as AiIcons from 'react-icons/ai';

const Footer = () => {
    const [lnactive, setLnActive] = useState(false);
    const [ghactive, setGhActive] = useState(false);
    const [heactive, setHeActive] = useState(false);
    return (
        <footer>
            <div className="f-wrapper">
                <div className="f-row">
                    <div className="f-col"><span>Designed and Developed by Shankar</span></div>
                </div>
                <div className="f-row list map">
                    <div className="f-col"><Link className='link' to='/'>Hello</Link></div>
                    <div className="f-col"><Link className='link' to='/projects'>Projects</Link></div>
                    <div className="f-col"><Link className='link' to='/blog'>Blog </Link></div>
                </div>
                <div className="f-row list socials">
                    <div onMouseOver={() => setLnActive(true)} onMouseLeave={() => setLnActive(false)} className='social-icon f-col'><a className={lnactive ? 'active' : ''} href='https://www.linkedin.com/in/sankararaman-k/'><AiIcons.AiFillLinkedin size={25} /></a></div>
                    <div onMouseOver={() => setGhActive(true)} onMouseLeave={() => setGhActive(false)} className='social-icon f-col'><a className={ghactive ? 'active' : ''} href='https://github.com/'><AiIcons.AiFillGithub size={25} /></a></div>
                    <div onMouseOver={() => setHeActive(true)} onMouseLeave={() => setHeActive(false)} className='social-icon f-col'><a className={heactive ? 'active' : ''} href='https://www.linkedin.com/in/sankararaman-k/'><AiIcons.AiFillHome size={25} /></a></div>
                </div>
            </div>
        </footer>
    )
}

export default Footer