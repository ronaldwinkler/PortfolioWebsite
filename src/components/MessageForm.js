import React from 'react';


// Used by 'Contact.js'
class MessageForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            form_submit:''
        }
    }

    messageSuccess() {


        // inputs disabled after success to prevent spam / multiple messages.
        document.getElementById('fname').disabled = true;
        document.getElementById('fmail').disabled = true;
        document.getElementById('fmessage').disabled = true;
        document.getElementById('fsubmit').disabled = true;
        document.getElementById('fname').classList.add('inputDisable');
        document.getElementById('fmail').classList.add('inputDisable');
        document.getElementById('fmessage').classList.add('inputDisable');
        document.getElementById('fsubmit').classList.add('fsubmitDisable');

        return (
            <div id="message-success">
                <i className="fa-solid fa-circle-check" />Message successfully sent.
            </div>
        )
    }

    messageFail() {

        // re-enables button if failed to send so user can re-send.
        document.getElementById('fsubmit').disabled = true;

        return (
            <div id="message-fail">
                <i className="fa-solid fa-circle-xmark" />Failed to send. Please try again.
            </div>    
        )
    }



    render() {

        const handleFormSubmit = event => {
            document.getElementById('fsubmit').disabled = true; // buton disabled onClick to prevent spamming it. Re-enabled on failure.
            event.preventDefault(); // prevents default form behavior (reloading / redirecting).
            
            // reset message incase re-submitting from error.
            if(this.state.form_submit !== ''){
                this.setState({form_submit:''});
            }


            fetch("https://formsubmit.co/ajax/ron+portfolio@ronaldwinkler.com", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    name: document.getElementById('fname').value,
                    email: document.getElementById('fmail').value,
                    message: document.getElementById('fmessage').value
                })
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    if (data.success === "false") {
                        this.setState({ form_submit: 'fail' }) // You can get a successful response but 'fail' to send the message.
                        
                    } else {
                        this.setState({ form_submit: 'success' })
                    }
                    
                })
                .catch(err => {
                    console.log(err) // hard failure for response to endpoint.
                    this.setState({ form_submit: 'fail' })
                });

        }





        return (
            <div id="message-form" className="c-block">
                <form onSubmit={handleFormSubmit} >
                    <input type="hidden" name="_captcha" value="false" />
                    <div id="f-name">
                        <label className="f-label">NAME:</label>
                        <br />
                        <input type="text" id="fname" name="fname" spellCheck="false" autoComplete="off" autoCapitalize="off" title="Please enter name." required />
                    </div>
                    <div id="f-mail">
                        <label className="f-label">EMAIL:</label>
                        <br />
                        <input type="email" id="fmail" name="fmail" spellCheck="false" autoComplete="off" autoCapitalize="off" title="Please enter email." required />
                    </div>
                    <div id="f-message">
                        <label className="f-label">MESSAGE:</label>
                        <br />
                        <textarea id="fmessage" name="fmessage" spellCheck="false" autoComplete="off" autoCapitalize="off" title="Please enter message." required />
                    </div>
                    <div id="f-submit">
                        {this.state.form_submit === 'success' ? this.messageSuccess() : <></>}
                        {this.state.form_submit === 'fail' ? this.messageFail() : <></>}
                        <div id="f-submit-button">
                            <input type="submit" id="fsubmit" />
                        </div>
                    </div>
                </form>
            </div>    
        )
    }
}

export default MessageForm;