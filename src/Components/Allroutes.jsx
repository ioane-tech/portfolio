import React from 'react'
import { Routes,Route, useLocation } from 'react-router-dom'
import {AnimatePresence} from "framer-motion"
import Home from './Home'
import AboutMe from './AboutMe'
import Projects from "./Projects"
import Footer from './Footer'
function Allroutes() {
    const location=useLocation()
  return (
        <AnimatePresence>
            <Home/>
            <AboutMe/>
            <Projects/>
            <Footer/>
        </AnimatePresence>
  )
}

export default Allroutes