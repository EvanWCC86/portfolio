import React from 'react';
import {Link} from 'react-router-dom';
import { TiSocialFacebookCircular,TiSocialLinkedinCircular,TiSocialSkypeOutline,TiSocialTwitterCircular,TiSocialTumblerCircular} from 'react-icons/ti';
import {AiOutlineClose} from 'react-icons/ai'
import {navbarData} from '../data/navbarData'
const Sidebar = ({showSidebar, toggleSidebar}) => {
    return (
        <aside className={`sidebar ${showSidebar ? "showSidebar" : ""}`}>
          <div className="sidebar_container">
               <div className="sidebar_header">
                   
                   <h3>EvanWeb</h3>
                   <AiOutlineClose onClick={toggleSidebar} />
               </div>
               <ul className="sidebar_links">
                   {navbarData.map((item, index) => (
                       <li key={index}>
                           <button>{item.icon}</button>
                           <Link onClick={toggleSidebar} to={item.url}>{item.name}</Link>
                        </li>
                   ))}
                    
                    
                </ul>
                <footer>
                    <span><TiSocialFacebookCircular /></span>
                    <span><TiSocialLinkedinCircular /></span>
                    <span><TiSocialSkypeOutline /></span>
                    <span><TiSocialTumblerCircular /></span>
                    <span><TiSocialTwitterCircular /></span>
                </footer>
           </div>
        </aside>
    )
}

export default Sidebar
