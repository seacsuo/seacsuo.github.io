/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import '../../output.css';
import locationLogo from '../../imgs/icons/locationlogo.png';

function YWLList({ img, name, location, desc }) {
    return (
        <div className="flex flex-col lg:flex-row justify-center items-center md:mp5">
            <img className='w-5/6 lg:w-5/12 h-auto md:m-5' src={img} alt='' />
            <div className='m-5'>
                <h1 className="text-4xl md:text-5xl font-bold text-darkslateblue">
                    {name}
                </h1>
                <a href='https://maps.google.ca' target='_blank'>
                    <div className='inline-flex btn-dsb my-5 items-center'> {/* Changed to inline-flex */}
                        <img className='w-5 h-5' src={locationLogo} alt='location icon' />
                        <p className='mx-5 text-white text-xl md:text-2xl'>{location}</p>
                    </div>
                </a>

                <p className='text-xl md:text-2xl'>
                    {desc}
                </p>
            </div>

        </div>
    );
}

export default YWLList;
