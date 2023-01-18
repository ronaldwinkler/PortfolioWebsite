import React from 'react';
import ProjectCell from './ProjectCell'

const projectsBank = [
    {
        title: 'Portfolio Website',
        desc: 'Checkout my code for this website! Built using Node.js & React.',
        img: 'https://i.imgur.com/rymUTZK.jpg',
        codeLink: 'https://github.com/ronaldwinkler/PortfolioWebsite',
        viewLink: 'none'
    },
    {
        title: 'Drum Machine',
        desc: 'FreeCodeCamp Certification Project. Built with HTML, CSS, & React.js',
        img: 'https://i.imgur.com/Mnw7yXQ.jpg',
        codeLink: 'https://codepen.io/moreron/pen/qBoWGGJ',
        viewLink: 'https://codepen.io/moreron/full/qBoWGGJ'
    },
    {
        title: 'JavaScript Calculator',
        desc: 'FreeCodeCamp Certification Project. Built with React.js',
        img: 'https://i.imgur.com/Jd6vDqg.jpg',
        codeLink: 'https://codepen.io/moreron/pen/ZExpBjx?editors=1111',
        viewLink: 'https://codepen.io/moreron/full/ZExpBjx'
    },
    {
        title:'Coming Soon',
        desc:'',
        img: 'https://i.imgur.com/dahUSkE.jpg',
        codeLink: 'none',
        viewLink:'none'
    }
]


class Projects extends React.Component {

    render() {
        return (
            <div id="projects" className="max-wrap">
                <div id="projects-title" className="page-title">
                    Projects
                </div>
                <div id="spacers">
                    <div className="spacer" /><div id="spacer-right" className="spacer" />
                </div>

                <div id="projects-content-blocks">
                    <div className="projects-content-block">
                        <ProjectCell {...projectsBank[0]} />
                    </div>
                    <div className="projects-content-block">
                        <ProjectCell {...projectsBank[1]} />
                    </div>
                    <div className="projects-content-block">
                        <ProjectCell {...projectsBank[2]} />
                    </div>


                    
                    <div className="projects-content-block">
                        <ProjectCell {...projectsBank[3]} />
                    </div>
                    <div className="projects-content-block"><ProjectCell {...projectsBank[3]} /></div>
                    <div className="projects-content-block"><ProjectCell {...projectsBank[3]} /></div>
                    
                </div>
            </div>    
        )
    }
}

export default Projects;