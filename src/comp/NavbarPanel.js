/* eslint-disable react/jsx-no-target-blank */
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



function NavbarPanel({ isPanelOpen, togglePanel }) {
    // Dynamically set z-index based on isVisible prop
    const panel = isPanelOpen ? 'opacity-100 z-30' : 'opacity-0 -z-10';

    return (
        <div>
            <div id='navbar-panel' className={`${panel} t200e glass-darkolivegreen fixed w-4/5 md:w-3/5 lg:w-3/6 xl:w-2/6 h-full top-0 right-0 rounded-l-xl text-floralwhite`}>
                <div className='flex items-center justify-between'>
                    <a className='m-10 point' onClick={togglePanel}>
                        <img className='w-8 md:w-12 h-auto  zoomin t200e fadein80 hover:rotate-180' src={cross} alt='cross icon' />
                    </a>

                    <Link to='/' className='mx-5 point'
                        onClick={(e) => {
                            e.preventDefault();
                            window.location.href = "/";
                        }}
                    >
                        <img className='h-12 md:h-20 w-auto ' src={logo} alt='seac logo' />
                    </Link>
                </div>

                <ul className='flex flex-col justify-center items-center font-semibold text-center'>
                    <li className='m-5 point'>
                        <Link to='/about' className='flex justify-center items-center point group mx-3'>
                            <img src={chevron} className='w-8 h-auto  opacity-0 group-hover:opacity-100 group-hover:-translate-x-3 t200e' alt='chevron icon' />
                            <p className='-translate-x-5 group-hover:-translate-x-1 fadein80 t200e text-3xl md:text-4xl '>
                                About Us
                            </p>
                        </Link>
                    </li>
                    <li className='m-5 point'>
                        <Link to='/events' className='flex justify-center items-center point group mx-3'>
                            <img src={chevron} className='w-8 h-auto  opacity-0 group-hover:opacity-100 group-hover:-translate-x-3 t200e' alt='chevron icon' />
                            <p className='-translate-x-5 group-hover:-translate-x-1 fadein80 t200e text-3xl md:text-4xl'>
                                SEAC Events
                            </p>
                        </Link>
                    </li>
                    <li className='m-5 point'>
                        <Link to='/ywl' className='flex justify-center items-center point group mx-3'>
                            <img src={chevron} className='w-8 h-auto  opacity-0 group-hover:opacity-100 group-hover:-translate-x-3 t200e' alt='chevron icon' />
                            <p className='-translate-x-5 group-hover:-translate-x-1 fadein80 t200e text-3xl md:text-4xl'>
                                SEA in YWL
                            </p>
                        </Link>
                    </li>
                    <li className='m-5 point'>
                        <Link to='/contact' className='flex justify-center items-center point group'>
                            <img src={chevron} className='w-8 h-auto mx-3 opacity-0 group-hover:opacity-100 group-hover:-translate-x-3 t200e' alt='chevron icon' />
                            <p className='-translate-x-8 group-hover:-translate-x-4 fadein80 t200e text-3xl md:text-4xl'>
                                Contact
                            </p>
                        </Link>
                    </li>
                </ul>

                <div className='absolute right-0 bottom-0 m-5'>
                    <ul className='flex'>
                        <li>
                            <a target='_blank' href='https://www.instagram.com/seac.suo/?theme=dark' className='point'>
                                <img className='w-12 md:w-16 h-auto mx-3 nudgeup t200e fadein80' src={instagramLogo} alt='instagram icon' />
                            </a>
                        </li>
                        <li>
                            <a target='_blank' href='mailto:seac.suo@gmail.com' className='point'>
                                <img className='w-12 md:w-16 h-auto mx-3 nudgeup t200e fadein80' src={mailLogo} alt='mail icon' />
                            </a>
                        </li>
                        <li>
                            <a target='_blank' href='https://www.linkedin.com/in/southeast-asian-club-seac-980a43331/' className='point' rel="noreferrer">
                                <img className='w-12 md:w-16 h-auto mx-3 nudgeup t200e fadein80' src={linkedinLogo} alt='linkedin icon' />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <nav>
                <div id="blur-panel" className={`fixed w-full h-full bg-black t500e  ${isPanelOpen ? 'opacity-75 z-20 ' : ' opacity-0 '}`}></div>

            </nav>
        </div>
    );
}

export default NavbarPanel;
