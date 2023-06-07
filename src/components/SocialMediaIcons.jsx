const SocialMediaIcons = () => {
    return (
        <div className="flex justify-center md:justify-start my-10 gap-7">
            <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="hover:opacity-50 transition duration-500"
            >
                <img src="../assets/linkedin.png" alt="linkedin-link" />
            </a>
            <a
                href="https://github.com/Tisljar"
                target="_blank"
                rel="noreferrer"
                className="hover:opacity-50 transition duration-500"
            >
                <img src="../assets/github.png" alt="github-link" />
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
