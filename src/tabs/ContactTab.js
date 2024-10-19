/* eslint-disable jsx-a11y/iframe-has-title */
import '../output.css';
// https://docs.google.com/forms/d/e/1FAIpQLSfx-8wQ815Jd9lQ2_Jh4epj2dqGC5FqKKqzvrwI_7PJ-i-ZLA/viewform
import RegistrationForm from '../comp/subcomps/RegistrationForm';

import instagramLogo from '../imgs/icons/instagramlogo.png';
import mailLogo from '../imgs/icons/maillogo.png';
import linkedinLogo from '../imgs/icons/linkedinlogo.png';

// Define the contact items array with your data
const contactItems = [
    {
        logo: instagramLogo,
        alt: 'Instagram logo',
        link: 'https://www.instagram.com/seac.suo/?theme=dark',
        label: '@seac.suo',
    },
    {
        logo: mailLogo,
        alt: 'Mail logo',
        link: 'mailto:seac.suo@gmail.com',
        label: 'seac.suo@gmail.com',
    },
    {
        logo: linkedinLogo,
        alt: 'LinkedIn logo',
        link: 'https://www.linkedin.com/in/southeast-asian-club-seac-980a43331/',
        label: 'Southeast Asian Club (SEAC)',
    },
];

const addContactItem = ({ logo, alt, link, label }) => (
    <a
        key={label}
        target="_blank"
        rel="noopener noreferrer"
        href={link}
        className="fadein80 t200e flex justify-center items-center my-5"
    >
        <img className="w-12 h-auto" src={logo} alt={alt} />
        <h1 className="mx-5">{label}</h1>
    </a>
);



function ContactTab() {

    const contactLink = "https://docs.google.com/forms/d/e/1FAIpQLSfx-8wQ815Jd9lQ2_Jh4epj2dqGC5FqKKqzvrwI_7PJ-i-ZLA/viewform?embedded=true";
    return (
        <div id='c' className="animate-fadein w-screen relative overflow-hidden bg-rosybrown text-floralwhite mb-10">
            <div id="events" className='py-16'></div>
            <div className="">


                <div className='flex items-center flex-col justify-center '>
                    <h1 className="title text-center py-10">
                        Contact Us
                    </h1>
                    <div className="rounded-xl  flex flex-col w-screen px-5 items-start lg:items-center text-2xl lg:text-3xl  font-thin bg-transparent">

                        {contactItems.map(addContactItem)}
                    </div>

                    <h1 className='title m-10 mb-16 text-center'>
                        or
                    </h1>

                    <div className="flex flex-col bg-sienna text-floralwhite py-5 w-screen justify-center items-center">
                        <h1 className='title text-center py-10'> Fill in a form </h1>
                        <iframe
                            src={contactLink}
                            className='w-full pb-10 lg:w-3/4'
                            height="1150"
                        >

                            Loading…
                        </iframe>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default ContactTab;