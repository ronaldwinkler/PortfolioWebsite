import React from 'react';
import MessageForm from './MessageForm'

class Contact extends React.Component {

    copyEmail() {
        document.getElementById('email-link').style.pointerEvents = 'none'; // disable button to prevent spam.
        navigator.clipboard.writeText("rwinkler.dev@gmail.com");

        document.getElementById('copy-email-alert').style.display = 'block';
        document.getElementById('copy-email-alert').classList.add('show-alert');
            
        setTimeout(() => {
            document.getElementById('copy-email-alert').classList.remove('show-alert');
            document.getElementById('email-link').style.pointerEvents = 'all';
        }, 3000)

        // extra timeout + 'display' setting of code for hidden alert bug.
        setTimeout(() => {
            document.getElementById('copy-email-alert').style.display = 'none';
        }, 3500)
    }


    render() {
        return (
            <div id="contact" className="container-padding">
                
                <div id="contact-content-block" className="max-wrap">
                    <div id="contact-info" className="c-block">
                        <div id="contact-title" className="page-title">Contact</div>
                        <div id="info-title">
                            Let's Build Something Together!
                        </div>
                        <div id="info-blocks">
                            <div id="copy-email-alert" className="hide-alert">Email copied to clipboard!</div>
                            <div><i className="fa-solid fa-file-pdf" />: <a href="/docs/Winkler_Ronald_Resume.pdf" className="info-link" target="_blank" rel="noreferrer" title="Resume">Resume</a></div>
                            <div><i className="fa-regular fa-envelope" />: <span onClick={this.copyEmail} id="email-link"  className="info-link" title="Copy email to clipboard">Rwinkler.dev@gmail.com</span></div>
                            <div><i className="fa-brands fa-linkedin" />: <a href="https://linkedin.com/in/ronaldwinkler" className="info-link" target="_blank" rel="noreferrer" title="Linkedin">Https://linkedin.com/in/ronaldwinkler</a></div>
                            <div><i className="fa-brands fa-square-twitter" />: <a href="https://twitter.com/rwinklertx" className="info-link" target="_blank" rel="noreferrer" title="Twitter">Https://twitter.com/rwinklertx</a></div>
                            
                        </div>
                    </div>

                    <MessageForm />
                </div>
            </div>    
        )
    }
}

export default Contact;