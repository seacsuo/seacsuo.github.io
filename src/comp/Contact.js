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

const Contact = () => {
    return (
        <div id="contact" className="w-screen relative overflow-hidden bg-peru drop-shadow-2xl">
            <h1 className="title text-white mp5">Contact us!</h1>
            <div className="flex flex-wrap justify-start lg:justify-around items-center m-5 text-2xl lg:text-3xl text-white font-thin">
                {contactItems.map(addContactItem)}
            </div>
        </div>
    );
};

export default Contact;
