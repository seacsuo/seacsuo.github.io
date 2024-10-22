
import { HashLink } from 'react-router-hash-link';
import chevron from '../imgs/icons/arrowright.png';
import media from '../imgs/eventimgs/media.png';
import expo from '../imgs/eventimgs/expo.jpg';
import Event from './subcomps/Event';
import gamenight from '../imgs/eventimgs/gamenight.jpg';
import picnic from '../imgs/eventimgs/picnic.jpg';
import batik from '../imgs/eventimgs/batik.jpg';



function Events({ isOnLanding }) {

    const Events = [];

    const addEvents = (eventImg, eventTitle, eventDate, eventTime, eventLocation, isVertical, eventDescription, regLink) => {
        Events.push({ eventImg, eventTitle, eventDate, eventTime, eventLocation, isVertical, eventDescription, regLink });
    }



    addEvents(
        batik,
        'DIY Batik-inspired',
        '25 November 2024',
        'TBA',
        'TBA',
        isOnLanding,
        'Create your own batik-inspired tote bag! Learn the art of batik while designing a personalized tote just for you!',
        ''
    );

    addEvents(
        gamenight,
        'Cultural Games Night',
        '25 October 2024',
        '5:30 PM - 8:30 PM',
        'EME 0252',
        isOnLanding,
        'Come play, snack, and have fun! Enjoy a variety of Asian games with your friends, meet new people, and snack your way through the night!',
        'https://docs.google.com/forms/d/e/1FAIpQLSd9KlGaTK7IgVPkEcc9g_EnaOvSxQAbjXaUxoXtEIQfbcC-kA/viewform'
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
        expo,
        'Cultural Expo',
        '15 October 2024',
        '12:00 PM - 2:30 PM',
        'TBA',
        isOnLanding,
        'Join us for a cultural expo featuring food, music, and dance from different cultures around the world. This event is a great way to learn about different cultures and meet new people.',
        ''
    );

    return (
        <div>
            {isOnLanding && (
                <div>
                    <div id="events" className='py-16'></div>

                    <div className="h-auto relative overflow-hidden bg-sienna p-5 drop-shadow-2xl">
                        <h1 className="title text-center text-white">Events</h1>

                        {/* Map through the Events array and slice to limit to first 3 */}
                        <div className='flex flex-col lg:flex-row flex-wrap justify-center items-center'>
                            {Events.slice(0, 3).map((event, index) => (
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
                <div id='e' className='py-10 pb-20 w-screen relative animate-fadein overflow-hidden bg-sienna text-white drop-shadow-2xl'>
                    <div className='my-20'></div>
                    <div>
                        <h1 className='p-10 title text-center'>Events</h1>
                    </div>

                    {/* Map through the entire Events array */}
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
