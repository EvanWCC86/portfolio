import React from 'react'
import aboutPic from '../svg/pic2.svg'
const About = () => {
    return (
        <section className="about">
            <header className="about_header">
                <h1 className="toTop">About Me</h1>
                <div className="about_underline">
                    <span className="toLeft"></span>
                    <span className="toRight"></span>
                </div>
            </header>
            <div className="about__container container">
                <div className="aboutContent">
                    <div className="about_circleEffect toTop">
                        <h2>Hello, I am Evan WCC</h2>
                        <span className="circle"></span>
                    </div>
                    
                    <p className="toLeft">I am a full-stack web developer and focus more on MERN (MongoDB, Express, React, Node) stack, but I can also build a website with python/Django/flask</p>
                </div>
                <div className="about__imgBox">
                    <img src={aboutPic} alt="aboutImage" className="toRight" />
                </div>
            </div>
        </section>
    )
}

export default About
