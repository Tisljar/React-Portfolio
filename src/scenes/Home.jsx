import useMediaQuery from '../hooks/useMediaQuery';
import { motion } from 'framer-motion';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import SocialMediaIcons from '../components/SocialMediaIcons';
import CV from '../assets/Denis-Tišljar-CV-EN.pdf';

const Home = ({ setSelectedPage }) => {
    const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)');

    return (
        <section id="home" className="md:flex md:justify-center md:items-center md:h-full gap-16 py-10">
            <div className="md:order-2 flex justify-center md:justify-center basis-3/5 z-10 mt-14 md:mt-26">
                {isAboveMediumScreens ? (
                    <div className="relative">
                        <img
                            src="assets/profile-image-centered.png"
                            alt="profile"
                            className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[600px] md:max-2-[800px] rounded-full relative"
                        />
                        <img
                            src="assets/blob-haikei-trimmed.svg"
                            className="z-5 absolute top-[-20px] left-0"
                            alt="blob"
                        />
                    </div>
                ) : (
                    <img
                        src="assets/profile-image-centered.png"
                        alt="profile"
                        className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[600px] md:max-2-[800px]"
                    />
                )}
            </div>
            <div className="z-30 basis-2/5 mt-16 md:mt-32">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <p className="text-6xl font-playfair z-10 text-center md:text-start">Denis Tišljar</p>
                    <p className="mt-10 mb-7 text-base text-center md:text-start leading-6">
                        A frontend developer based in Zagreb with experience in UI/UX design.
                    </p>
                </motion.div>
                <motion.div
                    className="flex mt-5 justify-center md:justify-start"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <AnchorLink
                        className="bg-green text-white rounded-sm py-3 px-7 font-semibold hover:bg-blue hover:text-white transition duration-500 me-8"
                        onClick={() => setSelectedPage('contact')}
                        href="#contact"
                    >
                        Contact Me
                    </AnchorLink>
                    <a
                        className="bg-yellow text-white rounded-sm py-3 px-7 font-semibold hover:bg-blue hover:text-white transition duration-500 flex items-center"
                        onClick={() => setSelectedPage('contact')}
                        href={CV}
                        download={true}
                    >
                        <img src="assets/download-minimalistic-svgrepo-com.svg" className="h-6 w-6 mr-2" alt="blob" />{' '}
                        Resume
                    </a>
                </motion.div>
                <motion.div
                    className="flex mt-5 justify-center md:justify-start"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <SocialMediaIcons />
                </motion.div>
            </div>
        </section>
    );
};

export default Home;

// className="relative z-0 ml-20 before:absoulte before:-top-20 before:-left-20 before:rounded-t-[400px] before:w-full before:max-w-[400px] before:h-full before:border-2 before:border-blue before:z-[-1]"
