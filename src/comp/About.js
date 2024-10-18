/* eslint-disable jsx-a11y/anchor-is-valid */
import '../output.css';
import seacLogo from '../imgs/seaclogo.png';
import historyLogo from '../imgs/icons/historylogo.png';
import ticketLogo from '../imgs/icons/ticketlogo.png';
import chevron from '../imgs/icons/arrowright.png';
import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

function About() {
    return (
        <div>
            <div id="about" className='py-16'>
            </div>


            <div className='bg-floralwhite text-sienna drop-shadow-2xl mp5 '>
                <h1 className="title text-center">About Us</h1>

                <div className='flex flex-col xl:flex-row justify-center items-center'>
                    <img className='w-3/5  md:w-1/5 h-auto m-5' src={seacLogo} alt='seac logo' />

                    <p className='text-black para m-5 max-w-screen-md tracking-wider leading-relaxed'>
                        South East Asian Club (SEAC) is a part of  Student Union Okanagan (SUO) at UBC Okanagan.
                        Our mission is to create a vibrant and inclusive community that celebrates,
                        shares, and promotes the rich cultural heritage of Southeast Asia,
                        while fostering an immersive and enriching Southeast Asian experience for all students to enjoy!
                    </p>
                </div>


                {/* history and events icons */}
                <div className='flex justify-around items-center w-full md:w-3/5 mx-auto'>
                    <HashLink to='/about#a' className='fadein80 t200e zoomin-sm flex flex-col justify-center items-center'>
                        <img src={historyLogo} alt='history icon' />
                        <h1 className='text-xl md:text-4xl'>
                            History
                        </h1>
                    </HashLink>
                    <HashLink to='/about#m' className='fadein80 t200e zoomin-sm flex flex-col justify-center items-center'>
                        <img src={ticketLogo} alt='ticket icon' />
                        <h1 className='text-xl md:text-4xl'>
                            Merch
                        </h1>
                    </HashLink>
                </div>

                {/* learn more button */}
                <div className='flex justify-center items-center my-5'>
                    <HashLink to='/about#a' className='btn-dsb flex justify-center items-center'>
                        <p>
                            Learn More
                        </p>
                        <img className='w-7 h-auto ' src={chevron} alt='right arrow' />
                    </HashLink>
                </div>


            </div>


        </div>

    );
}


export default About;