import React from 'react';
import ReplitLogo from './img/replit.svg'
import Social from './json/Socials.json'

class Footer extends React.Component {


    render() {
        return (
            <div id="footer-cell" className="max-wrap">
                <div id="fc-left">
                    <div id="footer-copyright">
                        <i className="fa-regular fa-copyright" />2022-2023 RWinkler.
                    </div>
                </div>
                <div id="fc-center">
                    <div id="fc-center-return">
                        <a href="#home" title="Return to top"><i className="fa-solid fa-circle-up" id="footer-return" /></a>
                    </div>
                    <div id="fc-center-links">
                        <a href="#about" title="About">About </a>
                        <a href="#projects" title="Projects">Projects </a>
                        <a href="#contact" title="Contact">Contact</a>
                    </div>
                </div>
                <div id="fc-right">
                    <div id="footer-socials">
                        <a href={Social.linkedin} title="Linkedin" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin-in f-social" /></a>
                        <a href={Social.twitter} title="Twitter" target="_blank" rel="noreferrer"><i className="fa-brands fa-twitter f-social" /></a>
                        <a href={Social.github} title="Github" target="_blank" rel="noreferrer"><i className="fa-brands fa-github f-social" /></a>
                        <a href={Social.codepen} title="Codepen" target="_blank" rel="noreferrer"><i className="fa-brands fa-codepen f-social" /></a>
                        <a href={Social.replit} title="Replit" target="_blank" rel="noreferrer"><img src={ReplitLogo} alt="" id="footer-replit" /></a>
                    </div>
                    <div id="fc-right-links">
                        <a href="/docs/Winkler_Ronald_Resume.pdf" title="Resume" target="_blank" rel="noreferrer">Resume</a>
                        |
                        <a href="https://paypal.me/rwtx" title="Paypal" target="_blank" rel="noreferrer">Donate</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;