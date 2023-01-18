import React from 'react';
import PortLogo from './img/logo.png'
import ReplitLogo from './img/replit.svg'
import Social from './json/Socials.json'

class Menu extends React.Component {

    render() {
        return (
            <div id="menu" >
                <div className="max-wrap">
                    <div id="logo"><img id="port-logo" src={PortLogo} alt="Logo" /></div>
               
                    <div id="menu-links">                      
                        <a href="#about"><i className="fa-solid fa-chevron-left menu-icon" ></i>About<i className="fa-solid fa-chevron-right menu-icon"></i></a>
                        <a href="#projects"><i className="fa-solid fa-chevron-left menu-icon" ></i>Projects<i className="fa-solid fa-chevron-right menu-icon"></i></a>
                        <a href="#contact"><i className="fa-solid fa-chevron-left menu-icon" ></i>Contact<i className="fa-solid fa-chevron-right menu-icon"></i></a>
                     </div>
                    
                     <div id="menu-socials">
                        <div title="Linkedin">
                            <a href={Social.linkedin} target="_blank" rel="noreferrer" className="socials-link"><i className="fa-brands fa-linkedin-in" id="socials-linkedin"></i></a>
                        </div>
                        <div title="Twitter">
                            <a href={Social.twitter} target="_blank" rel="noreferrer" className="socials-link"><i className="fa-brands fa-twitter" id="socials-twitter"></i></a>
                        </div>
                        <div title="Github">
                            <a href={Social.github} target="_blank" rel="noreferrer" className="socials-link"><i className="fa-brands fa-github"></i></a>
                        </div>
                        <div title="Codepen">
                            <a href={Social.codepen} target="_blank" rel="noreferrer" className="socials-link"><i className="fa-brands fa-codepen"></i></a>
                        </div>
                        <div title="Replit" id="replit-cell">
                            <a href={Social.replit} target="_blank" rel="noreferrer" className="socials-link"><img src={ReplitLogo} alt="" id="socials-replit" /></a>
                        </div>
                     </div>
                 </div>   
                
            </div>    
        )
    }
}

export default Menu