import React from "react";
import { FiTwitter, FiGithub, FiLinkedin} from "react-icons/fi";

const Social = () => {
    return (
        <div className="home__social">
            <a href="https://twitter.com/cyphrsylph" className="home__social-icon" target="_blank">
                <FiTwitter />
            </a>
            <a href="https://github.com/sumitdethe27" className="home__social-icon" target="_blank">
                <FiGithub />
            </a>
            <a href="https://www.linkedin.com/in/sumit-dethe-378aa4213/" className="home__social-icon" target="_blank">
                <FiLinkedin />
            </a>
        </div> 
    ); 
}

export default Social;