/* eslint-disable jsx-a11y/anchor-is-valid */
import '../output.css';
import cross from '../imgs/icons/cross.png';
import instagramLogo from '../imgs/icons/instagramlogo.png';
import mailLogo from '../imgs/icons/maillogo.png';
import linkedinLogo from '../imgs/icons/linkedinlogo.png';
import chevron from '../imgs/icons/arrowright.png';
import logo from '../imgs/seaclogotext.png';
import React from 'react';
import { Link } from 'react-router-dom';

// navLinks array
const navLinks = [
    { to: '/about#a', text: 'About Us' },
    { to: '/events#e', text: 'SEAC Events' },
    { to: '/ywl', text: 'SEA in YWL' },
    { to: '/contact#c', text: 'Contact' },
];

// footerIcons array
const footerIcons = [
    { href: 'https://www.instagram.com/seac.suo/?theme=dark', src: instagramLogo, alt: 'instagram icon' },
    { href: 'mailto:seac.suo@gmail.com', src: mailLogo, alt: 'mail icon' },
    { href: 'https://www.linkedin.com/in/southeast-asian-club-seac-980a43331/', src: linkedinLogo, alt: 'linkedin icon' },
];

function NavbarPanel({ isPanelOpen, togglePanel }) {
    const panel = isPanelOpen ? 'z-30 opacity-100 ' : 'opacity-0 -z-10';

    return (
        <div>
            <div id='navbar-panel' className={`${panel} t200e glass-darkolivegreen fixed w-4/5 md:w-3/5 lg:w-3/6 xl:w-2/6 h-full top-0 right-0 rounded-l-xl text-floralwhite`}>
                <div className='flex items-center justify-between '>
                    <a className='m-10 point flex group  items-center justify-center' onClick={togglePanel}>
                        <img className='w-10 md:w-12 h-auto  group-hover:zoomin t200e fadein80 group-hover:rotate-180' src={cross} alt='cross icon' />
                        <img src={chevron} className='w-8 h-auto  opacity-0 group-hover:opacity-100 translate-x-3 rotate-180 group-hover:translate-x-0 t200e' alt='chevron icon' />
                    </a>

                    {/* make sure the page is refreshed when clicked */}
                    <Link to='/' className='m-5 point fadein80 t200e flex group items-center justify-center'
                        onClick={(e) => {
                            e.preventDefault();
                            window.location.href = "/";
                        }}
                    >
                        <img src={chevron} className='w-8 h-auto  opacity-0 group-hover:opacity-100 -translate-x-3  group-hover:translate-x-0 t200e' alt='chevron icon' />
                        <img className='h-12 md:h-20 w-auto ' src={logo} alt='seac logo' />
                    </Link>
                </div>

                {/* navLinks */}
                <ul className='flex flex-col justify-center items-center font-extralight text-center text-3xl md:text-4xl '>
                    {navLinks.map((link, index) => (
                        <li key={index} className='m-5 point' onClick={togglePanel} >
                            <Link to={link.to} className='flex justify-center items-center point group mx-3'>
                                <img src={chevron} className='w-8 h-auto  opacity-0 group-hover:opacity-100 group-hover:-translate-x-3 t200e' alt='chevron icon' />
                                <p className='-translate-x-5 group-hover:-translate-x-1 fadein80 t200e'>{link.text}</p>
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* social media icons */}
                <div className='absolute right-0 bottom-0 m-10'>
                    <ul className='flex'>
                        {footerIcons.map((icon, index) => (
                            <li key={index}>
                                <a target='_blank' href={icon.href} className='point' rel="noreferrer">
                                    <img className='w-12 md:w-16 h-auto mx-3 nudgeup t200e fadein80' src={icon.src} alt={icon.alt} />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* blur panel (when user open navbar panel, it pops up) */}
            <nav>
                <div id="blur-panel" className={`fixed w-full h-full bg-black t500e  ${isPanelOpen ? 'opacity-75 z-20 ' : ' opacity-0 '}`}></div>
            </nav>
        </div>
    );
}

export default NavbarPanel;
