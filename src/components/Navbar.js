import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = ({toggleSidebar}) => {
    return (
        <nav>
            <div className="nav__container container">
                <h1><span>E</span>van<span>W</span>eb</h1>
                <ul className="nav_links">
                    <li><Link to="/"><span>H</span>ome</Link></li>
                    <li><Link to="/about"><span>A</span>bout</Link></li>
                    <li><Link to="/projects"><span>P</span>rojects</Link></li>
                    <li><Link to="/skills"><span>S</span>kills</Link></li>
                    <li><Link to="/contact"><span>C</span>ontact</Link></li>
                    <button><a href="https://drive.google.com/file/d/1ubbrB_c6GhheOPE5qnPKyOAi5bOAjRnD/view?usp=sharing">Download CV</a></button>
                                    
                </ul>
                <button onClick={toggleSidebar} className="menuIcon">
                    <i className="fas fa-bars"></i>
                </button>
            </div>
        </nav>
    )
}

export default Navbar
