import React from 'react'
import ContactForm from '../components/ContactForm'
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';

const ContactPage = () => {
    return (
        <div className="contact_page">
            <div className="contact_container">
                <div className="contact-info">
                    <div className="infoItem">
                        <button><HomeIcon /></button>
                        <div>
                            <span>555 first st</span>
                            <span>Montreal,Quebec</span>
                            <span>Postal code</span>
                        </div>
                    </div>
                    <div className="infoItem">
                        <button><PhoneIcon /></button>
                        <span>514-555-5555</span>
                    </div>
                    <div className="infoItem">
                        <button><EmailIcon /></button>
                        <span>realestate@gmail.com</span>
                    </div>
                </div>
                <ContactForm />
           </div>
        </div>
    )
}

export default ContactPage
