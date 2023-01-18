import React from 'react';

class Splash extends React.Component {
    render() {
        return (
            <div id="splash-cell" className="max-wrap">
                <div id="splash-title">
                    <div id="splash-title-top" className="text-shadow">Hello, I'm Ronald.</div>
                    <div id="splash-title-mid" className="text-shadow">Developer & QA Engineer</div>
                    <div id="splash-title-bot">
                        <a id="learn-more" className="splash-a" href="#about">Learn More</a>
                        <a id="resume" className="splash-a" href="/docs/Winkler_Ronald_Resume.pdf" target="_blank" rel="noreferrer">Resume</a>
                    </div>
                </div>
                <div id="splash-graphic">
                    <iframe src='https://my.spline.design/untitled-34c184a21c0e02f9a3c57f48941c74df/' title="splash-iframe"></iframe>
                </div>
            </div>    
        )
    }
}

export default Splash;