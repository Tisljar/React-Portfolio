import LineDivider from '../components/LineDivider';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';

const ContactMe = () => {
    const {
        register,
        trigger,
        formState: { errors },
    } = useForm();
    const onSubmit = async (e) => {
        const isValid = await trigger();
        if (!isValid) {
            e.preventDefault();
        }
    };
    return (
        <section id="contact" className="py-48">
            <motion.div
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
                    <p className="font-playfair font-semibold text-4xl mb-4">
                        CONTACT <span className="text-yellow">ME</span>{' '}
                    </p>
                    <div className="flex md:justify-end my-5">
                        <LineDivider width="w-full" color="bg-green" />
                    </div>
                </div>
            </motion.div>

            <div className="md:flex md:justify-between gap-16 mt-5">
                <motion.div
                    className="basis-1/2 flex justify-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 },
                    }}
                >
                    <img src="../assets/contact.jpg" alt="contact" />
                </motion.div>
                <motion.div
                    className="basis-1/2 mt-10 md:mt-0"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 },
                    }}
                >
                    <form
                        target="_blank"
                        onSubmit={onSubmit}
                        action="https://formsubmit.co/denis.tisljar@gmail.com"
                        method="POST"
                    >
                        <input
                            type="text"
                            className="w-full bg-form-grey font-semibold placeholder-deep-blue-opaque p-3"
                            placeholder="NAME"
                            {...register('name', { required: true, maxLength: 100 })}
                        />
                        {errors.name && (
                            <p className="text-yellow mt-1">
                                {errors.name.type === 'required' && 'This field is required!'}
                                {errors.name.type === 'maxLength' && 'Maximum length is 100 characters'}
                            </p>
                        )}
                        <input
                            type="text"
                            className="w-full bg-form-grey font-semibold placeholder-deep-blue-opaque mt-5 p-3"
                            placeholder="EMAIL"
                            {...register('email', {
                                required: true,
                                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            })}
                        />
                        {errors.email && (
                            <p className="text-yellow mt-1">
                                {errors.name.type === 'required' && 'This field is required!'}
                                {errors.name.type === 'pattern' && 'Invaild email adress.'}
                            </p>
                        )}
                        <textarea
                            type="text"
                            className="w-full bg-form-grey font-semibold placeholder-deep-blue-opaque p-3 mt-5"
                            placeholder="MESSAGE"
                            rows="4"
                            cols="50"
                            {...register('message', {
                                required: true,
                                maxLength: 2000,
                            })}
                        />
                        {errors.message && (
                            <p className="text-yellow mt-1">
                                {errors.name.type === 'required' && 'This field is required!'}
                                {errors.name.type === 'maxLength' && 'The maximum length is 2000 characters!'}
                            </p>
                        )}
                        <button
                            type="submit"
                            className="p-5 bg-green font-semibold mt-5 hover:bg-blue transition duration-500"
                        >
                            SEND ME AN EMAIL
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactMe;
