import React from 'react'
import heroPhoto from '../svg/pic7.svg';
import Typewriter from 'typewriter-effect';
import {Link} from 'react-router-dom'
const Hero = () => {
    
// const text = "I am a full-stack Web Developer"
// const [newText, setNewText] = useState([])
// const textRef = useRef()
// let index = 0
// const [index, setIndex] = useState(0)

// console.log(newText)

// function writeText() {
//     textRef.current= text.slice(0, index);

//     setIndex(index + 1)

//     if(index > text.length) {
//         setIndex(0)
//     }
// const message =["WELCOME TO MY WORLD","THIS IS MY WEBSITE","I AM AT YOUR SERVICE"];
// let jsxArray = [];

// const content =()=>{
    
//     let i =0 ;
    
//     for(i=0; i<message.length;i++){
//       jsxArray.push(
//         message[i] 
//        );
//     }
//     return jsxArray;
//   }



// useEffect(() => {
   
   
//     setInterval(content, 100)
// }, [])

const text = <Typewriter
options={{
  strings: ['full-stack Web Developer', 'MERN stack Web Developer'],
  autoStart: true,
  loop: true,
}}
/>



    return (
    <section className="hero">
        
        <div className="hero__container container">
            <div className="heroContent">
                <p className="hello fadeInTop"><span>H</span>ello, <span>m</span>y name <span>i</span>s</p>
                <h5 className="name fadeInTop">Evan WCC</h5>
                <h1 className="title">
                I am a <span>{text}</span>
                </h1>
                <Link to="/projects">
                    <button className="fadeInTop1">My Projects</button>
                </Link>
            </div>
            <div className="img__container">
                <img src={heroPhoto} alt="svg pic" className="toRight" />
            </div>
        </div>
    </section>

    )
}

export default Hero
