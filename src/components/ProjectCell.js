import React from 'react';

// Used by 'Projects.js' to generate cells for each project.
class ProjectCell extends React.Component {

    codeIcon() {
        const githubRegex = /github/i;
        const codepenRegex = /codepen/i;

        if (githubRegex.test(this.props.codeLink)) {
            return (<i className="fa-brands fa-github" />);
        } else if (codepenRegex.test(this.props.codeLink)) {
            return (<i className="fa-brands fa-codepen" />);
        } else {
            return;
        }
    }

    createViewLink() {
        if (this.props.viewLink !== "none") {
            return (
                <a className="p-button-view" href={this.props.viewLink} target="_blank" rel="noreferrer" >
                    <i className="fa-solid fa-up-right-from-square" />View
                </a>    
            )
        } else {
            return (
                <div className="p-button-disabled pb-view-disabled">
                    View
                </div>    
            )
        }
    }


    createCodeLink() {
        if (this.props.codeLink !== "none") {
            return (
                <a className="p-button-code" href={this.props.codeLink} target="_blank" rel="noreferrer" >
                    {this.codeIcon()}Code
                </a>
            )
        } else {
            return (
                <div className="p-button-disabled pb-code-disabled">
                    Code
                </div>
            )
        }
    }


    render() {
        
        return (
            <div className="project-cell" style={{ backgroundImage: "url(" + this.props.img + ")" }} >
                <div className="p-info" >
                    <div className="p-info-title"> { this.props.title } </div>
                    <div className="p-info-desc"> { this.props.desc } </div>
                    <div className="p-info-buttons">
                        <div>
                            {this.createCodeLink()}
                        </div>
                        <div>
                            {this.createViewLink()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProjectCell