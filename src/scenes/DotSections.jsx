import AnchorLink from 'react-anchor-link-smooth-scroll';

const DotSections = ({ selectedPage, setSelectedPage }) => {
    const dotSelectedStyles = [
        `relative bg-yellow before:absolute before:w-6 before:h-6 before:rounded-full before:border-2 before:border-yellow before:left-[-50%] before:top-[-50%]`,
        `relative bg-green before:absolute before:w-6 before:h-6 before:rounded-full before:border-2 before:border-green before:left-[-50%] before:top-[-50%]`,
        `relative bg-blue before:absolute before:w-6 before:h-6 before:rounded-full before:border-2 before:border-blue before:left-[-50%] before:top-[-50%]`,
    ];
    return (
        <div className="flex flex-col gap-6 fixed top-[40%] right-7">
            <AnchorLink
                className={`${selectedPage === 'home' ? dotSelectedStyles[0] : 'bg-dark-grey'}
                 w-3 h-3 rounded-full`}
                href="#home"
                onClick={() => setSelectedPage('home')}
            />
            <AnchorLink
                className={`${selectedPage === 'skills' ? dotSelectedStyles[1] : 'bg-dark-grey'}
                 w-3 h-3 rounded-full`}
                href="#skills"
                onClick={() => setSelectedPage('skills')}
            />
            <AnchorLink
                className={`${selectedPage === 'projects' ? dotSelectedStyles[2] : 'bg-dark-grey'}
                 w-3 h-3 rounded-full`}
                href="#projects"
                onClick={() => setSelectedPage('projects')}
            />
            <AnchorLink
                className={`${selectedPage === 'contact' ? dotSelectedStyles[0] : 'bg-dark-grey'}
                 w-3 h-3 rounded-full`}
                href="#contact"
                onClick={() => setSelectedPage('contact')}
            />
        </div>
    );
};

export default DotSections;
