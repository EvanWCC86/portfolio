import React from 'react'
import About from '../components/About'
import AllProjects from '../components/AllProjects'
import Hero from '../components/Hero'
import Skills from '../components/Skills'
import ContactForm from '../components/ContactForm'
import SmallCircle from '../components/SmallCircle'
const HomePage = () => {
    return (
        <div className="homePage">
           <Hero />
           {/* <About />
           <Skills />
           <AllProjects />
           <ContactForm /> */}
           <SmallCircle />
        </div>
    )
}

export default HomePage
