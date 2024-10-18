/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import '../../output.css';
import calendarLogo from '../../imgs/icons/calendarlogo.png';
import locationLogo from '../../imgs/icons/locationlogo.png';

function Event({ eventImg, eventTitle, isComingSoon, eventDate, eventLink, eventLocation }) {
    return (

        <div className=' flex flex-col justify-center items-center m-5'>
            <div className='w-72 h-96 overflow-hidden'>
                <img className='w-full h-full object-cover object-center' src={eventImg} alt='icon' />
            </div>
            <h1 className='my-5 text-white text-5xl text-center'>{eventTitle}</h1>
            <a href={eventLink} className='point'>
                <p className={`text-white text-xl  ${isComingSoon ? 'btn-yellow' : 'btn-dsb'}`}>
                    {isComingSoon ? 'Coming Soon!' : 'Get Info'}
                </p>
            </a>
            <div className='flex justify-between items-center'>
                <img className='mx-2 w-8 h-auto' src={calendarLogo} alt='time icon' />
                <p className='my-5 text-white text-xl'>
                    {eventDate}
                </p>
            </div>
            <div className='flex justify-between items-center'>
                <img className='mx-2 w-8 h-auto' src
                    ={locationLogo} alt='location icon' />
                <p className=' text-white text-xl'>
                    {eventLocation}
                </p>
            </div>
        </div>
    );
}

export default Event;

