/* eslint-disable jsx-a11y/anchor-is-valid */
import '../output.css';
import media from '../imgs/media.png';
import expo from '../imgs/expo.jpg';
import Event from './subcomps/Event';
import gamenight from '../imgs/gamenight.jpg';
import picnic from '../imgs/picnic.jpg';
import chevron from '../imgs/icons/arrowright.png';

function Events() {
    const Events = [];

    const addEvents = (eventImg, eventTitle, isComingSoon, eventDate, link, eventLocation) => {
        Events.push({ eventImg, eventTitle, isComingSoon, eventDate, link, eventLocation });
    }

    addEvents(picnic, 'Picnic Collab', true, '15 October 2024', '', 'TBA');
    addEvents(gamenight, 'Cultural Games Night', true, '15 October 2024', '', 'TBA');
    addEvents(expo, 'Expo Day', false, '15 September 2024', '', 'Throughout UBCO Campus');

    return (
        <div >
            <div id="events" className='py-10'>

            </div>

            <div className=" h-auto relative overflow-hidden bg-sienna p-5 drop-shadow-2xl">
                <h1 className="title text-center text-white">
                    Events
                </h1>
                <div className='flex flex-row flex-wrap justify-around items-center'>
                    {Events.map((Events, index) => (
                        <Event
                            key={index}
                            eventImg={Events.eventImg}
                            eventTitle={Events.eventTitle}
                            isComingSoon={Events.isComingSoon}
                            eventDate={Events.eventDate}
                            eventLink={Events.link}
                            eventLocation={Events.eventLocation}
                        />
                    ))}
                </div>
                <div className='flex justify-center items-center my-5'>
                    <a href='/events' className='btn-dsb flex justify-center items-center'>
                        <p>
                            Learn More
                        </p>
                        <img className='w-7 h-auto ' src={chevron} alt='right arrow' />
                    </a>
                </div>
            </div>
        </div>

    );
}

export default Events;