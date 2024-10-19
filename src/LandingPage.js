import HomeScreen from './comp/HomeScreen';
import About from './comp/About';
import YWL from './comp/YWL';
import Events from './comp/Events';
import Contact from './comp/Contact';

function LandingPage() {
    return (
        <div className='animate-fadein'>
            <HomeScreen />
            <About />
            <Events isOnLanding={true} />
            <YWL />
            <Contact />
        </div>
    );
}

export default LandingPage;
