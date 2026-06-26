import React from 'react'
import { NavLink } from 'react-router-dom'

const About = () => {
  return (
    <div className="about-boxes">
    <h1>About Me</h1>
    <p>Passionate BCA student specializing in Artificial Intelligence and Machine Learning, with growing hands on experience across web development, AI tooling, and full stack architecture. Currently building real world projects in React.js from dynamic shopping cart applications to form driven interfaces while simultaneously exploring the rapidly evolving space of agentic AI development.</p>
        <div className="about-box">
            ChatBots
        </div>
        <div className="about-box">
            LLMS
        </div>
        <div className="about-box">
            Full Stack
        </div>
        <div className="about-box">
            Game Developement
        </div>
    </div>
  )
}

export default About