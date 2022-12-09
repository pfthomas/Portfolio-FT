import React from 'react';
import './About.css';
import Funnypic from '../../../assets/images/unknown.png'
function About () {
    return (
        <section className="min-h-screen p-10">
            <div className="space-y-10 md:grid md:grin-cols-2">
                <div className="md:flex md:flex-col md:justify-center">
                <h2 className="title-font text-2xl md:text-4xl lg:text-6xl text-lg font-bold text-white mb-4"> About Me </h2>
                <h5 className="text-white flex justify-center">Full-Stack Developer</h5>
                    <p className="text-white">
                    Foster Thomas, 25 year old web developer.
                    I will put information here after we finish the final project
                    </p>  
                    <img classname="w-full h-64 rounded-lg shadow-2xl" src={Funnypic}></img>
                </div>
            </div> 
        </section>
    )
}

export default About;
{/* <section className="about">
            <div className="main">
                <img classname="lg:h-48 md:h-36 w-full object-cover object-center" src={Funnypic}></img>
                <div className="about-text">
                <h1 className="title-font text-lg font-medium text-white mb-3"> About Me </h1>
                <h5 className="flex justify-center">Full-Stack Developer</h5>
                    <p>
                    Foster Thomas, 25 year old web developer.
                    
                    </p> 
                </div>
            </div> 
        </section> */}