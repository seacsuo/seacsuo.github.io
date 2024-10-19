/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import '../output.css';
import hamburger from '../imgs/icons/navbaricon.png';
import logo from '../imgs/seaclogo.png';
import logoText from '../imgs/seaclogotext.png';
import instagramLogo from '../imgs/icons/instagramlogo.png';
import mailLogo from '../imgs/icons/maillogo.png';
import linkedinLogo from '../imgs/icons/linkedinlogo.png';
import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

function Navbar({ isPanelOpen, togglePanel }) {
    // Navigation Links Array
    const navLinks = [
        { to: "/about#a", label: "About" },
        { to: "/events#e", label: "Events" },
        { to: "/contact#c", label: "Contact" },
    ];

    // Social Media Icons Array
    const socialLinks = [
        { href: 'https://www.instagram.com/seac.suo/?theme=dark', imgSrc: instagramLogo, alt: 'instagram icon' },
        { href: 'mailto:seac.suo@gmail.com', imgSrc: mailLogo, alt: 'mail icon' },
        { href: 'https://www.linkedin.com/in/southeast-asian-club-seac-980a43331/', imgSrc: linkedinLogo, alt: 'linkedin icon' },
    ];

    return (
        <div className={`${isPanelOpen ? 'opacity-0' : 'opacity-100'} t200e fixed w-full z-10 border-zinc-100 bg-sienna text-floralwhite flex justify-between items-center drop-shadow-2xl`}>
            <div>
                {/* make the logo clicked implies refresh page */}
                <Link to="/" className='flex m-5 point'
                    onClick={(e) => {
                        e.preventDefault();
                        window.location.href = "/";
                    }}
                >
                    <img className='h-12 md:h-20 w-auto md:mr-5' src={logo} alt='seac logo' />
                    <img className='h-12 md:h-20 w-auto ml-3 md:ml-5' src={logoText} alt='seac text logo' />
                </Link>
            </div>

            {/* navbar links */}
            <div className='hidden xl:block'>
                <ul className="flex text-3xl font-semibold ">
                    {navLinks.map((link, index) => (
                        <li key={index} className="mx-8 nudgeup t200e fadein80">
                            <HashLink to={link.to} className='point py-3'>{link.label}</HashLink>
                        </li>
                    ))}
                </ul>
            </div>

            {/* social media icons */}
            <div className='flex items-center'>
                <ul className='hidden xl:flex'>
                    {socialLinks.map((social, index) => (
                        <li key={index}>
                            <a target='_blank' href={social.href} className='point'>
                                <img className='w-16 h-auto mx-3 nudgeup t200e fadein80' src={social.imgSrc} alt={social.alt} />
                            </a>
                        </li>
                    ))}
                </ul>

                {/* hamburger icon */}
                <a className='point m-5 zoomin t200e fadein80' onClick={togglePanel}>
                    <img id='hamburger' className='w-12 md:w-16 h-auto mx-5 md:mx-8' src={hamburger} alt='hamburger icon' />
                </a>
            </div>
        </div>
    );
}

export default Navbar;
