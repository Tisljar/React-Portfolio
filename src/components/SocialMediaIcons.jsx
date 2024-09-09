const SocialMediaIcons = () => {
    return (
        <div className="flex justify-center md:justify-start my-6 gap-7">
            <a
                href="www.linkedin.com/in/denis-tišljar-2b9710263"
                target="_blank"
                rel="noreferrer"
                className="hover:opacity-50 transition duration-500"
            >
                <img src="../assets/linkedin.png" alt="linkedin-link" className="h-7 w-7" />
            </a>
            <a
                href="https://github.com/Tisljar"
                target="_blank"
                rel="noreferrer"
                className="hover:opacity-50 transition duration-500"
            >
                <img src="../assets/github.png" alt="github-link" className="h-7 w-7" />
            </a>
            {/* <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="hover:opacity-50 transition duration-500"
            >
                <img src="../assets/linkedin.png" alt="linkedin-link" />
            </a> */}
        </div>
    );
};

export default SocialMediaIcons;
