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

const Project = ({ title, subtitle }) => {
    const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500 bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
    const projectTitle = title.split('').join('').toLowerCase();
    return (
        <motion.div variants={projectAnimationVariant} className="relative">
            <div className={overlayStyles}>
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
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci ipsa autem deleniti tempore
                    maiores expedita, eaque, officiis nobis sapiente mollitia voluptates distinctio atque, cum possimus
                    esse quisquam explicabo aut ut!
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
                            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis consequatur maxime esse doloribu'
                        }
                    />
                    <Project
                        title="PokemonSimulator"
                        subtitle={
                            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis consequatur maxime esse doloribu'
                        }
                    />
                    <Project
                        title="ObiteljskeKonstelacije"
                        subtitle={
                            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis consequatur maxime esse doloribu'
                        }
                    />
                    <Project
                        title="ChatApp"
                        subtitle={
                            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis consequatur maxime esse doloribu'
                        }
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
