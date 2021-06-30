import React from 'react';
import {Link} from 'react-router-dom';
import {navbarData} from '../data/navbarData'
const Footer = () => {
    return (
        <footer className="footer_section">
            <ul>
                   {navbarData.map((item, index) => (
                       <li key={index}><Link to={item.url}>{item.name}</Link></li>
                   ))}
                    
                    
                </ul>
        </footer>
    )
}

export default Footer
