import Event from '../comp/subcomps/Event';
import media from '../imgs/media.png';
import expo from '../imgs/expo.jpg';
import gamenight from '../imgs/gamenight.jpg';
import picnic from '../imgs/picnic.jpg';
import chevron from '../imgs/icons/arrowright.png';

function EventsTab() {
    const Events = [];


    const addEvents = (eventImg, eventTitle, eventDate, eventTime, eventLocation, isVertical, eventDescription, regLink) => {

        Events.push({ eventImg, eventTitle, eventDate, eventTime, eventLocation, isVertical, eventDescription, regLink });
    }

    // Time must be in 12-hour format, using this format: 'AA:AA PM - BB:BB PM'
    // we can only accept google forms link
    // like this 
    // https://docs.google.com/forms/d/e/1FAIpQLSd9KlGaTK7IgVPkEcc9g_EnaOvSxQAbjXaUxoXtEIQfbcC-kA/viewform
    // then it will convert to 
    // https://docs.google.com/forms/d/e/1FAIpQLSd9KlGaTK7IgVPkEcc9g_EnaOvSxQAbjXaUxoXtEIQfbcC-kA/viewform?embedded=true

    addEvents(
        media,
        'New Event',
        '10 December 2024',
        '12:00 PM - 2:30 PM',
        'TBA',
        false,
        'New Event Description',
        ''
    );
    addEvents(
        gamenight,
        'Cultural Games Night',
        '18 January 2024',
        '6:00 PM - 8:30 PM',
        'TBA',
        false,
        'Join us for a night of fun and games! We will be playing games from different cultures and learning about the history behind them. This event is a great way to meet new people and have a good time.',
        'https://docs.google.com/forms/d/e/1FAIpQLSd9KlGaTK7IgVPkEcc9g_EnaOvSxQAbjXaUxoXtEIQfbcC-kA/viewform'
    );

    addEvents(
        picnic,
        'Picnic Collab',
        '15 October 2024',
        '12:00 PM - 2:30 PM',
        'TBA',
        false,
        'Join us for a picnic with a cultural twist! We will be serving food from different cultures and playing games from around the world. This event is a great way to meet new people and learn about different cultures.',
        ''
    );

    addEvents(
        expo,
        'Expo Day',
        '15 September 2024',
        '12:00 PM - 2:30 PM',
        'TBA',
        false,
        'Join us for a day of fun and learning! We will be showcasing different cultures from around the world and learning about their history and traditions. This event is a great way to meet new people and learn about different cultures.',
        ''
    );

    return (
        <div id='e' className='py-10 w-screen relative animate-fadein overflow-hidden bg-sienna text-white drop-shadow-2xl'>
            <div className='my-32'></div>
            <div>
                <h1 className='pt-10 title text-center'>Events</h1>
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
    );
}

export default EventsTab;
