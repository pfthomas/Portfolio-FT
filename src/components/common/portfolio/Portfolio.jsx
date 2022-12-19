import React from 'react'
import Project from './Project';
import Nott from '../../../assets/images/NOTT.jpg'
import Cag from '../../../assets/images/CAG.jpg';
import Gb from '../../../assets/images/Giveback.jpg';
const project1 = {
    image: Nott,
    title: 'Night on the Town',
    link: 'https://cwheelsrun.github.io/Night-On-The-Town/',
    github: 'https://github.com/CWheelsRun/Night-On-The-Town',
}
const project2 = {
    image: Cag,
    title: 'Combat Arena Game',
    link: 'https://combat-arena-game.herokuapp.com/',
    github: 'https://github.com/leothoma88/CombatArena_Game',
}
const project3 = {
    image: Gb,
    title: 'GiveBack',
    link: 'https://giveback-app2.herokuapp.com/',
    github: 'https://github.com/leothoma88/GiveBackApp'
}

function Portfolio ()  {
  return (
    <div>
        <h1 className="title text-white font-[Roboto]"> Projects I've worked on </h1>

        <div className="grid flex-wrap grid-cols-1 md:grid-cols-2 lg:grid-cols-4 self-center">
        <div className=""> 
            <Project image={project1.image} title={project1.title} link={project1.link} github={project1.github}/>
        </div>
        <div> 
            <Project image={project2.image} title={project2.title} link={project2.link} github={project2.github}/>
        </div>
        <div> 
            <Project image={project3.image} title={project3.title} link={project3.link} github={project3.github}/>
        </div>
        </div>
    </div>
    

  )
}

export default Portfolio