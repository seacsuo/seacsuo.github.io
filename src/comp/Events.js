/* eslint-disable jsx-a11y/anchor-is-valid */
import '../output.css';
import media from '../imgs/media.png';
import expo from '../imgs/expo.jpg';
import Event from './subcomps/Event';
import gamenight from '../imgs/gamenight.jpg';
import picnic from '../imgs/picnic.jpg';
import chevron from '../imgs/icons/arrowright.png';
import { HashLink } from 'react-router-hash-link';

function Events({ isOnLanding }) {

    const Events = [];

    const addEvents = (eventImg, eventTitle, eventDate, eventTime, eventLocation, isVertical, eventDescription, regLink) => {
        Events.push({ eventImg, eventTitle, eventDate, eventTime, eventLocation, isVertical, eventDescription, regLink });
    }

    // Time must be in 12-hour format, using this format: 'AA:AA PM - BB:BB PM'
    // we can only accept google forms link
    // then it will convert to 
    // https://docs.google.com/forms/d/e/1FAIpQLSd9KlGaTK7IgVPkEcc9g_EnaOvSxQAbjXaUxoXtEIQfbcC-kA/viewform?embedded=true

    addEvents(
        media,
        'New Event',
        '10 December 2024',
        '12:00 PM - 2:30 PM',
        'TBA',
        isOnLanding,
        'New Event Description',
        'https://docs.google.com/forms/d/e/1FAIpQLSdgSIifYxshVrfugky9Ek7c-gDzubFDf_KyrWhwZMSs8iJvdg/viewform'
    );

    addEvents(
        picnic,
        'Picnic Collab',
        '15 October 2024',
        '12:00 PM - 2:30 PM',
        'TBA',
        isOnLanding,
        'Join us for a picnic with a cultural twist! We will be serving food from different cultures and playing games from around the world. This event is a great way to meet new people and learn about different cultures.',
        ''
    );

    addEvents(
        gamenight,
        'Cultural Games Night',
        '15 October 2024',
        '6:00 PM - 8:30 PM',
        'TBA',
        isOnLanding,
        'Join us for a night of fun and games! We will be playing games from different cultures and learning about the history behind them. This event is a great way to meet new people and have a good time.',
        ''
    );

    return (
        <div>
            {isOnLanding && (
                <div>
                    <div id="events" className='py-16'></div>

                    <div className="h-auto relative overflow-hidden bg-sienna p-5 drop-shadow-2xl">
                        <h1 className="title text-center text-white">Events</h1>

                        {/* Map through the Events array */}
                        <div className='flex flex-row flex-wrap justify-center items-center'>
                            {Events.map((event, index) => (
                                <Event
                                    key={index}
                                    eventImg={event.eventImg}
                                    eventTitle={event.eventTitle}
                                    isComingSoon={event.isComingSoon}
                                    eventDate={event.eventDate}
                                    eventTime={event.eventTime}
                                    eventLocation={event.eventLocation}
                                    isVertical={event.isVertical}
                                />
                            ))}
                        </div>

                        {/* Learn More button */}
                        <div className='flex justify-center items-center my-5'>
                            <HashLink to='/events#e' className='btn-dsb flex justify-center items-center'>
                                <p>Learn More</p>
                                <img className='w-7 h-auto' src={chevron} alt='right arrow' />
                            </HashLink>
                        </div>
                    </div>
                </div>
            )}

            {/* Conditionally render this second section */}
            {!isOnLanding && (
                <div id='e' className='py-10 w-screen relative animate-fadein overflow-hidden bg-sienna text-white drop-shadow-2xl'>
                    <div className='my-32'></div>
                    <div>
                        <h1 className='p-10 title text-center'>Events</h1>
                    </div>

                    <div className='flex flex-col justify-center items-center'>
                        {Events.map((event, index) => (
                            <Event
                                key={index}
                                eventImg={event.eventImg}
                                eventTitle={event.eventTitle}
                                eventDate={event.eventDate}
                                eventTime={event.eventTime}
                                eventLocation={event.eventLocation}
                                isVertical={event.isVertical}
                                eventDescription={event.eventDescription}
                                regLink={event.regLink}
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Events;
