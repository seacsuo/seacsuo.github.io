/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useState } from 'react'; // Import useState
import '../output.css';
import media from '../imgs/media.png';
import media90 from '../imgs/media90.png';
import chevron from '../imgs/icons/arrowright.png';

function AboutTab() {
    const merchImages = [
        media90, media90, media90, media90, media90,
        media90, media90, media90, media90, media90
    ];

    return (
        <div id='about' className="w-screen relative overflow-hidden ">
            <div id='a' className='py-16'></div>
            <div className="m-5 lg:m-10  bg-darkolivegreen drop-shadow-2xl text-white rounded-xl">
                <h1 className=' pt-10 title text-center'>History of SEAC</h1>
                <div className='flex flex-col xl:flex-row justify-center items-center p-5 '>
                    <p className='para pb-5 xl:mp5 font-extralight'>
                        SEAC was founded around a decade ago
                        (we’re digging through the old
                        &nbsp;
                        <a className='underline hover:text-peru t200e ' href='https://www.facebook.com/seacubco'>Facebook account</a>
                        &nbsp;
                        and it may actually be back in 2012!),
                        by students aiming to create a community that is inviting, inclusive,
                        and feels welcoming to all UBCO students!

                        <br /><br />This club has run lots of events in the
                        past ranging from lantern events, scavenger hunts, movie nights, and recently larger
                        social events like galas.

                        <br /><br />Despite the changes in the presence and efforts of SEAC at
                        UBCO, our club has always made it our goal to foster a fun, positive, and welcoming
                        community for all students through various events and initiatives!
                    </p>
                    <img className='w-full xl:w-1/2 h-auto' src={media} alt='seac' />
                </div>
            </div>

            <div className="my-10 bg-floralwhite text-black">
                <div className='drop-shadow-2xl bg-floralwhite m-5 lg:m-10 rounded-xl'>
                    <h1 className="py-5 title text-center">Our Goals</h1>
                    <div className='flex flex-col xl:flex-row justify-center items-center p-5'>
                        <img className='w-full xl:w-1/2 h-auto' src={media} alt='goals' />
                        <ul className='para mp3 xl:p-10 font-extralight list-disc'>
                            <li>Create a strong, connected, and inclusive community for all students.</li>
                            <br />
                            <li>Provide and facilitate a wide range of events/projects intertwined with SEA culture to share the SEA experience with all students at UBCO.</li>
                            <br />
                            <li>Educate students in our community about Southeast Asia and all that it has to offer; sharing and teaching about the aspects and perspectives beyond what is often portrayed in the Western world, if at all included.</li>
                        </ul>
                    </div>
                </div>

                <div className="border-darkolivegreen border-4 m-5 lg:m-10 drop-shadow-2xl rounded-xl bg-floralwhite text-black">
                    <h1 className="pt-10 title text-center">Merch</h1>
                    <div className='text-left flex flex-col xl:flex-row justify-around items-center mp3 lg:mp5'>
                        <div className='text-center lg:text-left lg:mp5'>
                            <h1 className='title'>SEAC Stickers</h1>
                            <p className='para my-5 lg:my-10'>
                                We just released our first merch this year!
                                <br /> Come grab your stickers!
                            </p>
                        </div>
                        <img className='w-full xl:w-1/3 h-auto' src={media} alt='goals' />
                    </div>

                    <div className='drop-shadow-2xl  bg-darkolivegreen text-white p-5 flex flex-col justify-center items-center'>
                        <div className='flex justify-center flex-wrap'>
                            {merchImages.map((imageSrc, index) => (
                                <img key={index} className='h-32 lg:h-52 w-auto m-5 lg:m-10' src={imageSrc} alt={`merch item ${index + 1}`} />
                            ))}
                        </div>

                        <a target='_blank' href='https://campus.hellorubric.com/?s=7807&merchid=8669' className='group flex justify-center items-center btn-yellow text-2xl m-5'>
                            Buy Merch
                            <img className='w-8 h-auto opacity-80 -translate-x-0 group-hover:translate-x-2 group-hover:opacity-100 t200e' src={chevron} alt='arrow'></img>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default AboutTab;
