/* eslint-disable jsx-a11y/anchor-is-valid */
import '../output.css';
import seacLogo from '../imgs/seaclogo.png';
import historyLogo from '../imgs/icons/historylogo.png';
import ticketLogo from '../imgs/icons/ticketlogo.png';
import chevron from '../imgs/icons/arrowright.png';
import React from 'react';
import { Link } from 'react-router-dom';

function About() {
    return (
        <div>
            <div id="about" className='py-20'>

            </div>

            <div className='bg-floralwhite text-sienna drop-shadow-2xl mp5'>
                <h1 className="title">About Us</h1>

                <div className='flex flex-col xl:flex-row justify-center items-center'>
                    <img className='w-3/5  md:w-1/5 h-auto m-5' src={seacLogo} alt='seac logo' />

                    <p className='text-black text-md md:text-3xl m-5 max-w-screen-md tracking-wider leading-relaxed'>
                        South East Asian Club (SEAC) is a part of  Student Union Okanagan (SUO) at UBC Okanagan.
                        Our mission is to create a vibrant and inclusive community that celebrates,
                        shares, and promotes the rich cultural heritage of Southeast Asia,
                        while fostering an immersive and enriching Southeast Asian experience for all students to enjoy!
                    </p>
                </div>

                <div className='flex justify-around items-center w-full md:w-3/5 mx-auto'>
                    <a className='flex flex-col justify-center items-center'>
                        <img src={historyLogo} alt='history icon' />
                        <h1 className='text-xl md:text-4xl'>
                            History
                        </h1>
                    </a>
                    <a className='flex flex-col justify-center items-center'>
                        <img src={ticketLogo} alt='ticket icon' />
                        <h1 className='text-xl md:text-4xl'>
                            Events
                        </h1>
                    </a>
                </div>
                <div className='flex justify-center items-center my-5'>
                    <Link to='/about' className='btn-dsb flex justify-center items-center'>
                        <p>
                            Learn More
                        </p>
                        <img className='w-7 h-auto ' src={chevron} alt='right arrow' />
                    </Link>
                </div>


            </div>


        </div>

    );
}


export default About;