import { motion } from 'framer-motion';
import LineDivider from '../components/LineDivider';

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 },
    },
};

const projectAnimationVariant = {
    hidden: { opacity: 0, scale: 0.75 },
    visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, subtitle, refrence }) => {
    const handleOpenProject = () => {
        window.open(refrence);
    };
    const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-95 transition duration-500 bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-dark-grey cursor-pointer`;
    const projectTitle = title.split('').join('').toLowerCase();
    return (
        <motion.div variants={projectAnimationVariant} className="relative">
            <div className={overlayStyles} onClick={handleOpenProject}>
                <p className="text-2xl font-playfair">{title}</p>
                <p className="mt-8">{subtitle}</p>
            </div>
            <div className="max-h-[400px]">
                <img
                    src={`../assets/${projectTitle}.png`}
                    alt={projectTitle}
                    className="object-scale-down max-h-[400px] "
                ></img>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    return (
        <section id="projects" className="pt-48 pb-48">
            <motion.div
                className="md:w-2/4 mx-auto text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, y: -50 },
                    visible: { opacity: 1, y: 0 },
                }}
            >
                <div>
                    <p className="font-playfair font-semibold text-4xl mb-4">PROJECTS</p>
                    <div className="flex justify-center">
                        <LineDivider width="w-1/3" color="bg-green" />
                    </div>
                </div>
                <p className="mt-10 mb-10">
                    Here are few of my projects that showcase my drive and creativity to make content that is fun to
                    make and that is hopefully enjoyable to the users that use it.
                </p>
            </motion.div>
            <div className="flex justify-center">
                <motion.div
                    className="sm:grid sm:grid-cols-3"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    variants={container}
                >
                    <div className="flex justify-center text-center items-center p-10 bg-yellow max-2-[400] max-h-[400px] text-2xl font-playfair font-semibold">
                        VISUALLY APPEALING USER INTERFACES
                    </div>
                    <Project
                        title="CryptoPrices"
                        subtitle={
                            'A reactJS application that through an api gathers information on crypto currencies and displays them for the user to use.'
                        }
                        refrence="https://dtisljar-cryptoprices.netlify.app/"
                    />
                    <Project
                        title="PokemonSimulator"
                        subtitle={
                            'A reactJS application that uses the pokeapi to simulate a simple pokemon battle. Using animations and different ux aproaches the simulation is pleasing to the user.'
                        }
                        refrence="https://dtisljar-pokemonsimulator.netlify.app/"
                    />
                    <Project
                        title="ObiteljskeKonstelacije"
                        subtitle={
                            'A presentational site using reactJS that serves to provide further information to its users.'
                        }
                        refrence="https://obiteljskekonstelacije.eu"
                    />
                    <Project
                        title="ChatApp"
                        subtitle={
                            'A chat application built using reactJS that allows anyone connected to chat with each other. Open the app on multiple tabs and try it out yourself.'
                        }
                        refrence="https://dtisljar-reactchatapp.netlify.app/"
                    />
                    <div className="flex justify-center text-center items-center p-10 bg-blue max-2-[400] max-h-[400px] text-2xl font-playfair font-semibold">
                        INTUITIVE UX APROACH
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
