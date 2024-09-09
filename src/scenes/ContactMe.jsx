import LineDivider from '../components/LineDivider';
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactMe = () => {
    const [successEmail, setSuccessEmail] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [formErrors, setFormErrors] = useState({});

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        const formData = new FormData(form.current);
        const user_name = formData.get('user_name');
        const user_email = formData.get('user_email');
        const message = formData.get('message');

        const errors = {};
        if (!user_name) {
            errors.name = 'This field is required!';
        } else if (user_name.length > 100) {
            errors.name = 'Maximum length is 100 characters';
        }

        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        if (!user_email) {
            errors.email = 'This field is required!';
        } else if (!emailRegex.test(user_email)) {
            errors.email = 'Invalid email address.';
        }

        if (!message) {
            errors.message = 'This field is required!';
        } else if (message.length > 2000) {
            errors.message = 'Maximum length is 2000 characters';
        }

        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            return;
        }

        const templateParams = {
            user_name: user_name,
            user_email: user_email,
            message: message,
        };

        setFormErrors({});

        emailjs
            .send(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                templateParams,
                process.env.REACT_APP_EMAILJS_USER_ID,
            )
            .then(
                (result) => {
                    console.log(result.text);
                    setSuccessEmail('Successfully sent email!');
                    setErrorEmail('');
                },
                (error) => {
                    console.log(error.text);
                    console.log(error);
                    setErrorEmail('There was a problem with sending an email.');
                    setSuccessEmail('');
                },
            );
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
                    <form ref={form} onSubmit={sendEmail}>
                        <input
                            type="text"
                            className="w-full bg-form-grey font-semibold placeholder-deep-blue-opaque p-3"
                            placeholder="NAME"
                            name="user_name"
                        />
                        {formErrors.name && <p className="text-yellow mt-1">{formErrors.name}</p>}

                        <input
                            type="email"
                            className="w-full bg-form-grey font-semibold placeholder-deep-blue-opaque mt-5 p-3"
                            placeholder="EMAIL"
                            name="user_email"
                        />
                        {formErrors.email && <p className="text-yellow mt-1">{formErrors.email}</p>}

                        <textarea
                            className="w-full bg-form-grey font-semibold placeholder-deep-blue-opaque p-3 mt-5"
                            placeholder="MESSAGE"
                            name="message"
                            rows="4"
                        />
                        {formErrors.message && <p className="text-yellow mt-1">{formErrors.message}</p>}
                        <div className="flex items-center mt-5">
                            <div>
                                <button
                                    type="submit"
                                    className="p-5 bg-green font-semibold hover:bg-blue transition duration-500"
                                >
                                    SEND ME AN EMAIL
                                </button>
                            </div>
                            <div>
                                {successEmail && <p className="text-green font-semibold ml-4">{successEmail}</p>}
                                {errorEmail && <p className="font-semibold ml-4 text-rose-600">{errorEmail}</p>}
                            </div>
                        </div>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactMe;
