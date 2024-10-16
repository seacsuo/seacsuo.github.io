

import HomeScreen from './comp/HomeScreen';
import About from './comp/About';
import YWL from './comp/YWL';
import Events from './comp/Events';

function LandingPage() {
    return (
        <div>
            <HomeScreen />
            <About />
            <Events />
            <YWL />
        </div>
    );
}

export default LandingPage;
