import LineDivider from '../components/LineDivider';
import useMediaQuery from '../hooks/useMediaQuery';
import { motion } from 'framer-motion';
import LineDividerVertical from '../components/LineDividerVertical';

const Skills = () => {
    const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)');
    return (
        <section id="skills" className="pt-10 pb-24">
            <div className="md:flex md:justify-between items-center md:gap-16 mt-32">
                <motion.div
                    className="md:w-1/3"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <p className="font-playfair font-semibold text-4xl mb-5">
                        MY <span className="text-yellow">SKILLS</span>
                    </p>
                    <LineDivider width="w-1/3" />
                    <p className="mt-10 mb-7">
                        These are the skills I am confident in and believe I would be a useful asset with. I am always
                        ready to learn more to be productive and I am not afraid of learning new processes and
                        technologies.
                    </p>
                </motion.div>
                <motion.div
                    className="md:w-1/2 relative"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    {isAboveMediumScreens && (
                        <div className="absolute z-0 w-full h-full max-h-[200px] bottom-8 right-8 border-green rounded-sm border-2"></div>
                    )}
                    <img
                        src="assets/skills.png"
                        alt="skills"
                        className="w-full max-h-[200px] object-cover rounded-sm relative z-10"
                    />
                </motion.div>
            </div>
            <div className="md:flex md:justify-between items-center md:gap-0 mt-14">
                <motion.div
                    className="md:basis-1/3 md:flex md:justify-between md:items-center  mt-8 text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <div className="flex flex-col justify-between items-center gap-8">
                        <p className="font-faiplay font font-semibold text-4xl ">HTML</p>
                        {!isAboveMediumScreens && (
                            <LineDivider color="bg-yellow" width="w-3/4" className="text-center" />
                        )}
                    </div>
                    {isAboveMediumScreens && <LineDividerVertical color="bg-yellow" height=" h-8" />}
                </motion.div>
                <motion.div
                    className="md:basis-1/3 md:flex md:justify-center md:items-center  mt-8 text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <div className="flex flex-col justify-between items-center gap-8">
                        <p className="font-faiplay font font-semibold text-4xl ">CSS</p>
                        {!isAboveMediumScreens && (
                            <LineDivider color="bg-green" width="w-3/4" className="text-center" />
                        )}
                    </div>
                </motion.div>
                <motion.div
                    className="md:basis-1/3 md:flex md:justify-between  md:items-center  mt-8 text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    {isAboveMediumScreens && <LineDividerVertical color="bg-green" height=" h-8" />}
                    <div className="flex flex-col justify-between items-center gap-8">
                        <p className="font-faiplay font font-semibold text-4xl ">Javascript</p>
                        {!isAboveMediumScreens && <LineDivider color="bg-blue" width="w-3/4" className="text-center" />}
                    </div>
                </motion.div>
            </div>
            <div className="md:flex md:justify-between items-center md:gap-0 md:mt-14">
                <motion.div
                    className="md:basis-1/3 md:flex md:justify-between md:items-center mt-8 text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <div className="flex flex-col justify-between items-center gap-8">
                        <p className="font-faiplay font font-semibold text-4xl ">ReactJS</p>
                        {!isAboveMediumScreens && (
                            <LineDivider color="bg-yellow" width="w-3/4" className="text-center" />
                        )}
                    </div>
                    {isAboveMediumScreens && <LineDividerVertical color="bg-yellow" height=" h-8" />}
                </motion.div>
                <motion.div
                    className="md:basis-1/3 md:flex md:justify-center  md:items-center  mt-8 text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <div className="flex flex-col justify-between items-center gap-8">
                        <p className="font-faiplay font font-semibold text-4xl ">Git</p>
                        {!isAboveMediumScreens && (
                            <LineDivider color="bg-green" width="w-3/4" className="text-center" />
                        )}
                    </div>
                </motion.div>
                <motion.div
                    className="md:basis-1/3 md:flex md:justify-between  md:items-center  mt-8 text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.9, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    {isAboveMediumScreens && <LineDividerVertical color="bg-green" height=" h-8" />}
                    <div className="flex flex-col justify-between items-center gap-8">
                        <p className="font-faiplay font font-semibold text-4xl ">Figma</p>
                        {!isAboveMediumScreens && <LineDivider color="bg-blue" width="w-3/4" className="text-center" />}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
