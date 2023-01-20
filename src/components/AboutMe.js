import React from 'react';
import about_pic from './img/3dme.jpg';

let firstSummary = "Nice to meet you! My name is Ronald(or Ron for short), and I'm a self-taught Developer and Quality Assurance Engineer based in San Antonio, TX."
let secondSummary = `I have a strong passion for technology and a dedication to delivering high-quality products. 
                    With over a decade of experience in coding and web design, as well as expertise in manual testing for mobile applications, I am a problem-solver at heart.`
let thirdSummary = `Currently, I'm working to further my education by completing online certifications and
                    seeking new development or automation opportunities to continue growing and learning.`

class AboutMe extends React.Component {

    render() {
        return (
            <div id="about" className="max-wrap">
                <div id="about-pic">
                    <iframe src='https://my.spline.design/untitled-2ca8c306be42ae8de298cfec22b01ac1/' title="3D Ronald" />
                    <img id="about-headshot" src={about_pic} title="" alt="3D Ronald" />
                </div>
                <div id="about-text-block">
                    <div id="about-title" className="page-title">About Me</div>
                    <div id="about-text">
                        <div id="about-summary">
                            <div id="summary1" className="text-indent">{firstSummary}</div>
                            <div id="summary2" className="text-indent">{secondSummary}</div>
                            <div id="summary3" className="text-indent">{thirdSummary}</div>
                        </div>
                    </div>
                </div>
                <div id="skills">
                    <div id="skills-title">Technologies I've Used:</div>
                    <div id="skills-blocks">
                        <div className="skills-block" id="skill-block-left">
                            <div><i className="fa-solid fa-caret-right"></i> HTML(5) + CSS</div>
                            <div><i className="fa-solid fa-caret-right"></i> JavaScript</div>
                            <div><i className="fa-solid fa-caret-right"></i> React.js</div>
                            <div><i className="fa-solid fa-caret-right"></i> React-Native(Expo CLI)</div>
                        </div>
                        <div className="skills-block">
                            <div><i className="fa-solid fa-caret-right"></i> Node.js</div>
                            <div><i className="fa-solid fa-caret-right"></i> Express</div>
                            <div><i className="fa-solid fa-caret-right"></i> MongoDB + Mongoose</div>
                            <div><i className="fa-solid fa-caret-right"></i> SQL + MySQL</div>
                        </div>
                        <div className="skills-block">
                            <div><i className="fa-solid fa-caret-right"></i> Selenium WebDriver(Java)</div>
                            <div><i className="fa-solid fa-caret-right"></i> Appium(Java)</div>
                            <div><i className="fa-solid fa-caret-right"></i> TestNG</div>
                            <div><i className="fa-solid fa-caret-right"></i> TestRail</div>
                        </div>
                    </div>
                </div>
            </div>    
        )
    }
}

export default AboutMe;