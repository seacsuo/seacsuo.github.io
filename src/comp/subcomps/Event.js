/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import '../../output.css';
import chevron from '../../imgs/icons/arrowright.png';
import calendarLogo from '../../imgs/icons/calendarlogo.png';
import locationLogo from '../../imgs/icons/locationlogo.png';
import timeLogo from '../../imgs/icons/timelogo.png';

function Event({ eventImg, eventTitle, eventDate, eventTime, eventLocation, isVertical, eventDescription, regLink }) {
    // Convert eventDate from string to Date object
    const eventDateObj = new Date(eventDate);

    // Get today's date and time
    const today = new Date();

    // Parse the eventTime to get the end time
    const [startTime, endTime] = eventTime.split(' - ');
    const [startHour, startMinute, startPeriod] = startTime.split(/[:\s]/);
    const [endHour, endMinute, endPeriod] = endTime.split(/[:\s]/);

    // Create a date object for the event's start and end time
    const eventStartTime = new Date(eventDateObj);
    eventStartTime.setHours((startPeriod === 'PM' && startHour !== '12') ? +startHour + 12 : +startHour);
    eventStartTime.setMinutes(+startMinute);

    const eventEndTime = new Date(eventDateObj);
    eventEndTime.setHours((endPeriod === 'PM' && endHour !== '12') ? +endHour + 12 : +endHour);
    eventEndTime.setMinutes(+endMinute);

    // Determine if the event end time has passed
    const hasPassed = eventEndTime < today;

    // Function to generate ICS content
    const generateICS = () => {
        const icsContent = `BEGIN:VCALENDAR
            VERSION:2.0
            BEGIN:VEVENT
            SUMMARY:${eventTitle}
            LOCATION:${eventLocation}
            DTSTART:${eventStartTime.toISOString().replace(/-|:|\..+/g, '')}Z
            DTEND:${eventEndTime.toISOString().replace(/-|:|\..+/g, '')}Z
            DESCRIPTION:
            END:VEVENT
            END:VCALENDAR`;

        // Create a Blob from the content
        const blob = new Blob([icsContent], { type: 'text/calendar' });
        const url = URL.createObjectURL(blob);

        // Create a link to download the file
        const a = document.createElement('a');
        a.href = url;
        a.download = `${eventTitle.replace(/\s+/g, '_')}.ics`;
        a.click();

        // Cleanup
        URL.revokeObjectURL(url);
    };

    return (
        <div className={`${isVertical ? 'w-2/6' : 'w-full'} flex justify-center t200e ${hasPassed ? 'fadein60' : ''}`}>
            <div className={`${isVertical ? 'flex' : 'hidden'} flex-col justify-center items-center m-5`}>
                <div className='w-72 h-96 overflow-hidden'>
                    <img className='w-full h-full object-cover object-center' src={eventImg} alt='icon' />
                </div>

                <h1 className='my-5 text-white text-5xl text-center'>{eventTitle}</h1>
                <div className={`${!hasPassed ? 'btn-yellow' : 'btn-dsb'} max-w-sm my-2 flex justify-center lg:justify-start items-center`}>
                    <img className='mx-2 w-8 h-auto' src={calendarLogo} alt='calendar icon' />
                    <p className='text-white text-xl text-center lg:text-left'>
                        {eventDate}
                    </p>
                </div>
                <div className={`${!hasPassed ? 'btn-yellow' : 'btn-dsb'} max-w-sm my-2 flex justify-center lg:justify-start items-center`}>
                    <img className='mx-2 w-8 h-auto' src={timeLogo} alt='time icon' />
                    <p className='text-white text-xl text-center lg:text-left'>
                        {eventTime}
                    </p>
                </div>
                <div className={`${!hasPassed ? 'btn-yellow' : 'btn-dsb'} max-w-sm my-2 flex justify-center lg:justify-start items-center`}>
                    <img className='mx-2 w-8 h-auto' src={locationLogo} alt='location icon' />
                    <p className='text-white text-xl text-center lg:text-left'>
                        {eventLocation}
                    </p>
                </div>
            </div>

            <div className={`${isVertical ? 'hidden' : 'flex'} 
                w-11/12 bg-rosybrown p-10 m-5 rounded-xl flex-col lg:flex-row justify-between items-start drop-shadow-2xl`}>
                <div className='w-full flex flex-col items-center lg:items-start lg:flex-row '>
                    <div className='w-full lg:w-72 h-96 overflow-hidden'>
                        <img className='w-full h-full object-cover object-center' src={eventImg} alt='icon' />
                    </div>
                    <div className='flex flex-col mx-10 w-full lg:w-8/12 text-center lg:text-left'>
                        <h1 className='my-5 text-white text-5xl'>{eventTitle}</h1>
                        <div className={`${!hasPassed ? 'btn-yellow' : 'btn-dsb'} max-w-sm my-2 flex justify-center lg:justify-start items-center`}>
                            <img className='mx-2 w-8 h-auto' src={calendarLogo} alt='calendar icon' />
                            <p className='text-white text-xl text-center lg:text-left'>
                                {eventDate}
                            </p>
                        </div>
                        <div className={`${!hasPassed ? 'btn-yellow' : 'btn-dsb'} max-w-sm my-2 flex justify-center lg:justify-start items-center`}>
                            <img className='mx-2 w-8 h-auto' src={timeLogo} alt='time icon' />
                            <p className='text-white text-xl text-center lg:text-left'>
                                {eventTime}
                            </p>
                        </div>
                        <div className={`${!hasPassed ? 'btn-yellow' : 'btn-dsb'} max-w-sm my-2 flex justify-center lg:justify-start items-center`}>
                            <img className='mx-2 w-8 h-auto' src={locationLogo} alt='location icon' />
                            <p className='text-white text-xl text-center lg:text-left'>
                                {eventLocation}
                            </p>
                        </div>

                        <p className='my-5'>
                            {eventDescription}
                        </p>
                    </div>
                </div>
                <div className='flex flex-col h-full justify-between text-center w-full lg:w-2/4 items-center '>
                    <button onClick={generateICS} className={`group flex justify-between items-center text-lg my-5 btn-rosy`}>
                        <p>
                            Add to calendar
                        </p>
                        <img className='w-7 h-auto t200e translate-x-0 group-hover:translate-x-2' src={chevron} alt='right arrow' />
                    </button>
                    <a href={regLink} className={`group flex justify-between items-center text-lg btn-rosy `}>
                        <p>
                            Register
                        </p>
                        <img className='w-7 h-auto t200e translate-x-0 group-hover:translate-x-2' src={chevron} alt='right arrow' />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Event;
