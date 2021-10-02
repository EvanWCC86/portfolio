import React from 'react'
import ContactForm from '../components/ContactForm'
// import PhoneIcon from '@mui/icons-material/Phone';
// import EmailIcon from '@mui/icons-material/Email';
// import HomeIcon from '@mui/icons-material/Home';
import PhoneOutlinedIcon from '@material-ui/icons/PhoneOutlined';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';

const ContactPage = () => {
    return (
        <div className="contact_page">
            <div className="contact_container">
                <div className="contact-info">
                    <div className="infoItem">
                        <button><HomeOutlinedIcon /></button>
                        <div>
                            <span>555 first st</span>
                            <span>Montreal,Quebec</span>
                            <span>Postal code</span>
                        </div>
                    </div>
                    <div className="infoItem">
                        <button><PhoneOutlinedIcon /></button>
                        <span>514-555-5555</span>
                    </div>
                    <div className="infoItem">
                        <button><EmailOutlinedIcon /></button>
                        <span>realestate@gmail.com</span>
                    </div>
                </div>
                <ContactForm />
           </div>
        </div>
    )
}

export default ContactPage
