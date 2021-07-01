import React, {useState} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Backdrop from './components/Backdrop'

import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import SkillsPage from './pages/SkillsPage'
import ProjectsPage from './pages/ProjectsPage'
import ContactPage from './pages/ContactPage'
import Footer from './components/Footer'
const App = () => {
  const [showSidebar, setShowSidebar]= useState(false);
  const toggleSidebar = () => {
   setShowSidebar(!showSidebar)
  }
  
  
 
  return (
    <Router>
      <Navbar  toggleSidebar={ toggleSidebar}  />
      <Sidebar showSidebar={showSidebar} toggleSidebar={toggleSidebar} />
      <Backdrop showSidebar={showSidebar} toggleSidebar={toggleSidebar} />
      
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/skills" component={SkillsPage} />
        <Route exact path="/projects" component={ProjectsPage} />
        <Route exact path="/contact" component={ContactPage} />
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
