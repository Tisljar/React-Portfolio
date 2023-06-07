import { useEffect, useState } from 'react';
import useMediaQuery from './hooks/useMediaQuery';
import Navbar from './scenes/Navbar';
import DotSections from './scenes/DotSections';
import Home from './scenes/Home';
import Skills from './scenes/Skills';
import Projects from './scenes/Projects';
import ContactMe from './scenes/ContactMe';
import Footer from './scenes/Footer';

function App() {
    const [selectedPage, setSelectedPage] = useState('home');
    const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)');
    const [isTopOfPage, setIsTopOfPage] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY === 0) setIsTopOfPage(true);
            if (window.scrollY !== 0) setIsTopOfPage(false);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <div className="app bg-deep-blue">
            <Navbar isTopOfPage={isTopOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
            <div className="w-5/6 mx-auto md:h-full">
                {isAboveMediumScreens && <DotSections selectedPage={selectedPage} setSelectedPage={setSelectedPage} />}
                <Home setSelectedPage={setSelectedPage} />
            </div>
            <div className="w-5/6 mx-auto md:h-full">
                <Skills />
            </div>
            <div className="w-5/6 mx-auto md:min-h-full">
                <Projects />
            </div>
            <div className="w-5/6 mx-auto md:min-h-full">
                <ContactMe />
            </div>
            <Footer />
        </div>
    );
}

export default App;

