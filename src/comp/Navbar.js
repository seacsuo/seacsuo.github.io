/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import '../output.css'
import hamburger from '../imgs/icons/navbaricon.png'
import logo from '../imgs/seaclogo.png'
import logoText from '../imgs/seaclogotext.png'
import instagramLogo from '../imgs/icons/instagramlogo.png'
import mailLogo from '../imgs/icons/maillogo.png'
import linkedinLogo from '../imgs/icons/linkedinlogo.png'
import React from 'react';
import { Link } from 'react-router-dom';


function Navbar({ isPanelOpen, togglePanel }) {
    return (
        <div className='fixed w-full z-10 border-zinc-100 bg-sienna text-floralwhite flex justify-between items-center'>
            <div>
                <Link to="/" className='flex m-5 point'>
                    <img className='h-12 md:h-20 w-auto md:mr-5' src={logo} alt='seac logo' />
                    <img className='h-12 md:h-20 w-auto ml-3 md:ml-5' src={logoText} alt='seac text logo' />
                </Link>
            </div>
            <div className='hidden xl:block'>
                <ul className="flex text-3xl font-semibold ">
                    <li className="mx-8 nudgeup t200e fadein80">
                        <Link to="/about" className='point py-3'>About</Link></li>
                    <li className="mx-8 nudgeup t200e fadein80">
                        <Link to="/events" className='point py-3'>Events</Link></li>
                    <li className="mx-8 nudgeup t200e fadein80">
                        <Link to="/contact" className='point py-3'>Contact</Link></li>
                </ul>
            </div>
            <div className='flex items-center'>
                <ul className='hidden xl:flex'>
                    <li>
                        <a target='_blank' href='https://www.instagram.com/seac.suo/?theme=dark' className=' point '>
                            <img className='w-16 h-auto mx-3 nudgeup t200e fadein80' src={instagramLogo} alt='instagram icon' />
                        </a>
                    </li>
                    <li>
                        <a target='_blank' href='mailto:seac.suo@gmail.com' className='point'>
                            <img className='w-16 h-auto mx-3 nudgeup t200e fadein80' src={mailLogo} alt='mail icon' />
                        </a>
                    </li>
                    <li>
                        <a target='_blank' href='https://www.linkedin.com/in/southeast-asian-club-seac-980a43331/' className='point'>
                            <img className='w-16 h-auto mx-3 nudgeup t200e fadein80' src={linkedinLogo} alt='linkedin icon' />
                        </a>
                    </li>
                </ul>
                <a className='point m-5 zoomin t200e fadein80' onClick={togglePanel}>
                    <img id='hamburger' className='w-12 md:w-16 h-auto mx-5 md:mx-8' src={hamburger} alt='hamburger icon' />
                </a>
            </div>
        </div >
    );
}

export default Navbar;
