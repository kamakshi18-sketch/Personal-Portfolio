import React from 'react'
import Introduction from './components/Introduction'
import Skills from './components/Skills'
import ExperienceEducation from './components/ExperienceEducation'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import { Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import './App.css'

const App = () => {
  return (
    <div>
      <Navbar/>
    <Routes>
          <Route path='/' element={<Introduction/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/skills' element={<Skills/>}/>
          <Route path='/experienceeducation' element={<ExperienceEducation/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/contact' element={<Contact/>}/>
    </Routes>
          {/* <About/>
          <Skills/>
          <ExperienceEducation/>
          <Projects/>
          <Contact/> */}
    </div>
  )
}

export default App