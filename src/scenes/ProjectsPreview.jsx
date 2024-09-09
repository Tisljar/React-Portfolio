import { motion } from 'framer-motion';
import LineDivider from '../components/LineDivider';

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.4 },
    },
};

const projectAnimationVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, subtitle, refrence }) => {
    const handleOpenProject = () => {
        window.open(refrence);
    };

    const projectTitle = title.split('').join('').toLowerCase();
    return (
        <motion.div
            variants={projectAnimationVariant}
            className="border-form-grey rounded-2xl border-solid border-2 m-4"
        >
            <div className="border-white rounded border-solid">
                <div className="p-8 flex flex-col">
                    <img
                        src={`../assets/${projectTitle}.png`}
                        alt={projectTitle}
                        className="object-scale-down rounded"
                    ></img>
                    <h2 className="text-2xl mt-4 font-playfair">{title}</h2>
                    <p className="mt-2 text-base">{subtitle}</p>
                    <div className="flex items-center gap-4 mt-4 w-full justify-center">
                        {/* <button className="p-2 bg-yellow hover:bg-blue rounded-xl">Github</button> */}
                        <button onClick={handleOpenProject} className="py-3 px-6 bg-yellow hover:bg-blue rounded-xl">
                            Live Demo
                        </button>
                    </div>
                </div>
                {/* <p className="text-2xl font-playfair">{title}</p>
                <p className="mt-8">{subtitle}</p> */}
            </div>
        </motion.div>
    );
};

const ProjectsPreview = () => {
    return (
        <section id="projects" className="pt-12 pb-12 sm:pb-16 sm:pt-16 md:pt-24 md:pb-24">
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
                    className="md:grid md:grid-cols-2"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    variants={container}
                >
                    <Project
                        title="WeatherForecast"
                        subtitle={
                            'A reactJS application that through an api gathers information on todays weather forecast for a certain area.'
                        }
                        refrence="https://dtisljar-weather-forecast.netlify.app/"
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
                </motion.div>
            </div>
        </section>
    );
};

export default ProjectsPreview;
