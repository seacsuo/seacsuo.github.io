/* eslint-disable jsx-a11y/anchor-is-valid */
import '../output.css';
import media from '../imgs/media.png';
import expo from '../imgs/expo.jpg';
import Event from './subcomps/Event';
import gamenight from '../imgs/gamenight.jpg';
import picnic from '../imgs/picnic.jpg';
import chevron from '../imgs/icons/arrowright.png';
import { HashLink } from 'react-router-hash-link';

function Events() {

    const Events = [];


    const addEvents = (eventImg, eventTitle, eventDate, eventTime, eventLocation, isVertical, eventDescription, regLink) => {

        Events.push({ eventImg, eventTitle, eventDate, eventTime, eventLocation, isVertical, eventDescription, regLink });
    }

    // Add events using month names

    // Add events using month names
    addEvents(
        media,
        'New Event',
        '20 Oct 2024',
        '12:00 PM - 5:30 PM',
        'TBA',
        true,
        'Join us for a new event! More details coming soon.',
        'https://www.eventbrite.ca/e/new-event-tickets-1234567890'
    )

    addEvents(
        picnic,
        'Picnic Collab',
        '15 October 2024',
        '12:00 PM - 2:30 PM',
        'TBA',
        true,
        'Join us for a picnic with a cultural twist! We will be serving food from different cultures and playing games from around the world. This event is a great way to meet new people and learn about different cultures.',
        'https://www.eventbrite.ca/e/picnic-collab-tickets-1234567890'
    );
    addEvents(
        gamenight,
        'Cultural Games Night',
        '15 October 2024',
        '12:00 PM - 2:30 PM',
        'TBA',
        true,
        'Join us for a night of fun and games! We will be playing games from different cultures and learning about the history behind them. This event is a great way to meet new people and have a good time.',
        'https://www.eventbrite.ca/e/games-night-tickets-1234567891'
    );

    return (
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
    );
}

export default Events;
