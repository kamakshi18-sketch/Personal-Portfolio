import React from 'react'
// import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

function Navbar(){
    return(
      <div className="navbar">
        <span>Portfolio</span>
        <NavLink to="/">Introduction</NavLink>
        <NavLink to="/about">About </NavLink>
        <NavLink to="/skills">Skills</NavLink>
        <NavLink to="/experienceeducation">Experience & Education</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        </div>
    ) 
}

export default Navbar