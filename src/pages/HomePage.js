import React from 'react'

import Hero from '../components/Hero'

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
