import React from 'react'
import { Routes,Route, useLocation } from 'react-router-dom'
import {AnimatePresence} from "framer-motion"
import Home from './Home'
import AboutMe from './AboutMe'
import Projects from "./Projects"
function Allroutes() {
    const location=useLocation()
  return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
              <Route path='/' element={<Home/>}/>
              <Route path='/aboutMe' element={<AboutMe/>}/>
              <Route path='/projects' element={<Projects/>}/>
            </Routes>
        </AnimatePresence>
  )
}

export default Allroutes