import '../output.css';
import padthai from '../imgs/padthai.jpg';
import YWLList from './subcomps/YWLList';
import chevron from '../imgs/icons/arrowright.png';
import { Link } from 'react-router-dom';
import React from 'react';


function YWL() {

    const ywlList = [];

    // declare function to add YWL
    const addYWL = (img, name, location, desc) => {
        ywlList.push({ img, name, location, desc });
    }

    addYWL(padthai, "Padthai Restuarant", "1234 YWL St", "Padthai  is a Thai restaurant located in the heart of Kelowna. We offer a variety of Thai dishes that are sure to satisfy your cravings. Come visit us today!");
    return (
        <div>
            <div id="ywl" className='py-10'>

            </div>

            <div id="ywl" className="bg-floralwhite text-sienna drop-shadow-2xl mp5">
                <div className="">
                    <h1 className="title text-center text-sienna m-5">
                        SEA in Kelowna
                    </h1>
                </div>

                {/* YWLList */}
                <div className='flex justify-center items-center '>
                    {ywlList.map((ywl, index) => (
                        <YWLList
                            key={index}
                            img={ywl.img}
                            name={ywl.name}
                            location={ywl.location}
                            desc={ywl.desc}
                        />
                    ))}
                </div>

                {/* Learn More Button */}
                <div className='flex justify-center items-center my-5'>
                    <Link to='/ywl' className='btn-dsb flex justify-center items-center'>
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

export default YWL;