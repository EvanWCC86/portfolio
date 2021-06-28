import React from 'react'
import emailjs from 'emailjs-com';
const ContactForm = () => {

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm(process.env.REACT_APP_YOUR_SERVICE_ID, process.env.REACT_APP_YOUR_TEMPLATE_ID , e.target, process.env.REACT_APP_YOUR_USER_ID)
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      }

    return (
        <div className="contact_section">
            <div className="contactForm_container">
                <header>
                    <h1>Write me a message</h1>
                </header>
                <form className="contactForm" onSubmit={sendEmail}>
                    <div>
                        <input required type="text" placeholder="Name" name="name" />
                    </div>
                    
                    
                    <div>
                        <input required type="email" placeholder="Email" name="email" />
                    </div>
                    <div>
                        <textarea required name="message" cols="30" rows="8" placeholder="Your message">
                           
                        </textarea>
                    </div>
                    <button>send a message</button>
                </form>
            </div>
        </div>
    )
}

export default ContactForm
