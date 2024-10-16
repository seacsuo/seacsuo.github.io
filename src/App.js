import './App.css';
import { useNavbar } from './Main';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage';
import AboutTab from './tabs/AboutTab';
import EventsTab from './tabs/EventsTab';
import YWLTab from './tabs/YWLTab';
import ContactTab from './tabs/ContactTab';
import Navbar from './comp/Navbar';
import NavbarPanel from './comp/NavbarPanel';
import Footer from './comp/Footer';

function App() {
  const { isPanelOpen, togglePanel } = useNavbar();
  return (
    <div>
      <Router>

        <Navbar togglePanel={togglePanel} isPanelOpen={isPanelOpen} />
        <NavbarPanel isPanelOpen={isPanelOpen} togglePanel={togglePanel} />

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/events" element={<EventsTab />} />
          <Route path="/about" element={<AboutTab />} />
          <Route path="/ywl" element={<YWLTab />} />
          <Route path="/contact" element={<ContactTab />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
