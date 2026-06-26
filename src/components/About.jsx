import React from 'react'
import { NavLink } from 'react-router-dom'

const About = () => {
  return (
    <div>
    <h1>About Me</h1>
    <p>Passionate BCA student specializing in Artificial Intelligence and Machine Learning, with growing hands on experience across web development, AI tooling, and full stack architecture. Currently building real world projects in React.js from dynamic shopping cart applications to form driven interfaces while simultaneously exploring the rapidly evolving space of agentic AI development.</p>
        <div style={{border:"2px solid black", height:"80px", width:"100px", display:"grid", justifyContent:"center"}}>
            ChatBots
        </div>
        <div style={{border:"2px solid black", height:"80px", width:"100px", display:"grid", justifyContent:"center"}}>
            LLMS
        </div>
        <div style={{border:"2px solid black", height:"80px", width:"100px", display:"grid", justifyContent:"center"}}>
            Full Stack
        </div>
        <div style={{border:"2px solid black", height:"80px", width:"100px", display:"grid", justifyContent:"center"}}>
            Game Developement
        </div>
    </div>
  )
}

export default About