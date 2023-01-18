import React from 'react';
import Menu from './components/Menu';
import Splash from './components/Splash';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

class App extends React.Component {
    

    componentDidMount() {
        
    }

    render() {

        return (
            <>
                <div id="home" />
                <Menu />
                
                <div className="content-container" id="splash-container">
                    <Splash />
                </div>
                
                <div className="content-container ">
                    <AboutMe />
                </div>

                <div className="content-container ">
                    <Projects />
                </div>

                <div className="content-container">
                    <Contact />
                </div>

                <div className="content-container" id="footer-container">
                    <Footer />
                </div>
            </>
        )
    }
}

export default App;
