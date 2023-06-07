import SocialMediaIcons from '../components/SocialMediaIcons';

const Footer = () => {
    return (
        <footer className="h-48 bg-form-grey pt-10">
            <div className="w-5/6 mx-auto">
                <div className="flex justify-between items-center">
                    <SocialMediaIcons />

                    <p className="font-playfair font-semibold text-2xl">Denis Tišljar</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
