import React, { useState } from 'react';
import '../../output.css';
import RegistrationForm from './RegistrationForm';
import chevron from '../../imgs/icons/arrowright.png';
import calendarLogo from '../../imgs/icons/calendarlogo.png';
import locationLogo from '../../imgs/icons/locationlogo.png';
import timeLogo from '../../imgs/icons/timelogo.png';

function Event({ eventImg, eventTitle, eventDate, eventTime, eventLocation, isVertical, eventDescription, regLink }) {
    // Convert eventDate from string to Date object
    const eventDateObj = new Date(eventDate);


    let eventStartTime, eventEndTime;
    let hasPassed = false;

    // Get today's date
    const today = new Date();

    // Get the start of the week (Sunday) and end of the week (Saturday)
    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() - today.getDay()); // Sets to the previous Sunday
    startOfWeek.setHours(0, 0, 0, 0); // Start of the day

    const endOfWeek = new Date(today);
    endOfWeek.setDate(today.getDate() + (6 - today.getDay())); // Sets to the next Saturday
    endOfWeek.setHours(23, 59, 59, 999); // End of the day

    let eventTip = "Coming up";

    try {
        // Parse the eventTime to get the start and end times
        const [startTime, endTime] = eventTime.split(' - ');
        const [startHour, startMinute, startPeriod] = startTime.split(/[:\s]/);
        const [endHour, endMinute, endPeriod] = endTime.split(/[:\s]/);

        // Create a date object for the event's start and end time
        eventStartTime = new Date(eventDateObj);
        eventStartTime.setHours((startPeriod === 'PM' && startHour !== '12') ? +startHour + 12 : +startHour);
        eventStartTime.setMinutes(+startMinute);

        eventEndTime = new Date(eventDateObj);
        eventEndTime.setHours((endPeriod === 'PM' && endHour !== '12') ? +endHour + 12 : +endHour);
        eventEndTime.setMinutes(+endMinute);

        // Determine if the event end time has passed
        hasPassed = eventEndTime < today;

        if (eventStartTime >= startOfWeek && eventStartTime <= endOfWeek) {
            eventTip = "This week";
        }
        if (hasPassed) {
            eventTip = "Passed";
        }
        if (eventStartTime.toDateString() === today.toDateString() && hasPassed === false) {
            eventTip = "Today";
        }
        if (eventStartTime > today) {
            eventTip = "Coming up";
        }

    } catch (error) {
        console.error('Unexpected eventTime format:', error);
        // Fallback to original eventTime string
        eventStartTime = eventEndTime = null;
        hasPassed = false;
    }



    // State to toggle the registration form
    const [isRegisterVisible, setIsRegisterVisible] = useState(false);

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

    // Toggle the registration form visibility
    const toggleRegisterForm = () => {
        setIsRegisterVisible(!isRegisterVisible);
    };

    return (
        // Event component
        <div className={`${isVertical ? 'w-2/6' : 'w-full'} flex flex-wrap justify-center t200e ${hasPassed ? 'fadein60' : ''}`}>
            <div className={`${isVertical ? 'flex' : 'hidden'} flex-col justify-center items-center m-5`}>
                <div className='relative w-72 h-96 overflow-hidden'>
                    <img className='w-full h-full object-cover object-center' src={eventImg} alt='icon' />
                    <div className={`${hasPassed ? "fact-grey" : "fact-yellow"} absolute top-2 right-2 px-3 py-1 text-white`}>
                        {eventTip}
                    </div>
                </div>

                <h1 className='my-5 text-white text-5xl text-center font-light'>{eventTitle}</h1>
                <div className={`${hasPassed ? "fact-grey" : "fact-dsb"} max-w-xs  flex justify-center lg:justify-start items-center`}>
                    <img className='mx-2 w-8 h-auto' src={calendarLogo} alt='calendar icon' />
                    <p className='mx-2  text-white text-xl text-center lg:text-left'>
                        {eventDate}
                    </p>
                </div>
                <div className={`${hasPassed ? "fact-grey" : "fact-dsb"} max-w-sm my-2 flex justify-center lg:justify-start items-center`}>
                    <img className='mx-2 w-8 h-auto' src={timeLogo} alt='time icon' />
                    <p className='mx-2 text-white text-xl text-center lg:text-left'>
                        {eventTime}
                    </p>
                </div>
                <div className={`${hasPassed ? "fact-grey" : "fact-dsb"} max-w-sm  flex justify-center lg:justify-start items-center`}>
                    <img className='mx-2 w-8 h-auto' src={locationLogo} alt='location icon' />
                    <p className='mx-2 text-white text-xl text-center lg:text-left'>
                        {eventLocation}
                    </p>
                </div>
            </div>

            {/* events tab */}

            <div className={`${isVertical ? 'hidden' : 'flex'} 
                w-11/12 bg-rosybrown p-10 m-5 rounded-xl flex-col lg:flex-row justify-between items-start drop-shadow-2xl`}>
                <div className='w-full flex flex-col items-center lg:items-start lg:flex-row '>

                    <div className='relative w-72 h-96 overflow-hidden'>
                        <img className='w-full h-full object-cover object-center' src={eventImg} alt='icon' />
                        <div className={`${hasPassed ? "fact-grey" : "fact-yellow"} absolute top-2 right-2 px-3 py-1 text-white`}>
                            {eventTip}
                        </div>
                    </div>

                    <div className='flex flex-col mx-10 w-full lg:w-8/12 text-center lg:text-left font-light'>
                        <h1 className='my-5 text-white text-5xl'>{eventTitle}</h1>
                        <div className={`${hasPassed ? "fact-grey" : "fact-dsb"} max-w-xs flex  m-auto w-full lg:m-1 justify-center lg:justify-start items-center`}>
                            <img className='w-6  h-auto' src={calendarLogo} alt='calendar icon' />
                            <p className='mx-3 text-white text-md text-center lg:text-left'>
                                {eventDate}
                            </p>
                        </div>
                        <div className={`${hasPassed ? "fact-grey" : "fact-dsb"} max-w-xs my-2 m-auto w-full lg:m-1 flex justify-center lg:justify-start items-center`}>
                            <img className='w-6 h-auto' src={timeLogo} alt='time icon' />
                            <p className='mx-3 text-white text-md text-center lg:text-left'>
                                {eventTime}
                            </p>
                        </div>
                        <div className={`${hasPassed ? "fact-grey" : "fact-dsb"} max-w-xs  m-auto w-full lg:m-1 flex justify-center lg:justify-start items-center`}>
                            <img className='w-6 h-auto' src={locationLogo} alt='location icon' />
                            <p className='mx-3 text-white text-md text-center lg:text-left'>
                                {eventLocation}
                            </p>
                        </div>

                        <p className='my-3 text-2xl'>
                            {eventDescription}
                        </p>
                    </div>
                </div>
                {!hasPassed &&
                    (<div className='flex flex-col h-full justify-between text-center w-full lg:w-2/4 items-center '>
                        <button onClick={generateICS} className={`group flex justify-between items-center text-lg my-5 btn-rosy`}>
                            <p>
                                Add to calendar
                            </p>
                            <img className='w-7 h-auto t200e translate-x-0 group-hover:translate-x-2' src={chevron} alt='right arrow' />
                        </button>

                        {/* Register button with click to toggle the form */}
                        <button onClick={toggleRegisterForm} className={`group flex justify-between items-center text-lg btn-rosy my-5`}>
                            <p>
                                Register
                            </p>
                            <img className={`${isRegisterVisible ? 'rotate-90' : 'rotate-0'} w-7 h-auto t200e translate-x-0 group-hover:translate-x-2`} src={chevron} alt='right arrow' />
                        </button>
                    </div>)}
            </div>

            <div className={`${isRegisterVisible ? 'block animate-fadein' : 'hidden'} w-full m-10 flex justify-center`}>
                <RegistrationForm regLink={regLink} />
            </div>

        </div>
    );
}

export default Event;
