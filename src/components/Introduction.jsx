import React from 'react'
import { NavLink } from 'react-router-dom'

const Introduction = () => {
  return (
    <div>
    <h1>Kamakshi</h1>
    <h3>BCA Student Specializing in AI & ML</h3>
    <p>I am currently pursuing a Bachelor of Computer Applications (BCA) with a specialization in Artificial Intelligence and Machine Learning (AI & ML).</p>
    <button>
        <NavLink to="/contact">Contact</NavLink>
    </button>
    <button>
        <NavLink to="/projects">Projects</NavLink>
    </button>
    </div>
  )
}

export default Introduction